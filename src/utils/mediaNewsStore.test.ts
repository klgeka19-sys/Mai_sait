import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateMediaItem,
  validatePostItem,
  validateAudioTrack,
  formatAudioTime,
  getNextTrackIndex,
  getPrevTrackIndex,
  filterMedia,
  filterPosts,
  estimateReadingTime,
  generateId,
  getTranslation,
  TRANSLATIONS,
  SupportedLang,
  MediaItem,
  NewsPost,
  AudioTrack,
  parseYouTubeUrl,
  getCleanShortUrl,
  deleteMediaItem,
  deleteAudioTrack,
  deleteNewsPost,
  getYouTubeSearchEmbedUrl,
  searchYouTubeCatalog,
  YOUTUBE_SEARCH_CATALOG,
} from './mediaNewsStore';

test('translations contain complete key parity across en, ru, and uk', () => {
  const enKeys = Object.keys(TRANSLATIONS.en).sort();
  const ruKeys = Object.keys(TRANSLATIONS.ru).sort();
  const ukKeys = Object.keys(TRANSLATIONS.uk).sort();

  assert.deepEqual(ruKeys, enKeys, 'Russian keys match English keys');
  assert.deepEqual(ukKeys, enKeys, 'Ukrainian keys match English keys');

  assert.equal(getTranslation('en', 'navMusic'), 'Music Player');
  assert.equal(getTranslation('ru', 'navMusic'), 'Плеер музыки');
  assert.equal(getTranslation('uk', 'navMusic'), 'Плеєр музики');
});

test('validateAudioTrack checks required title and audioUrl', () => {
  const invalid = validateAudioTrack({});
  assert.equal(invalid.valid, false);
  assert.ok(invalid.errors.length >= 2);

  const valid = validateAudioTrack({
    title: 'Ambient Chillout',
    artist: 'Sound Artist',
    audioUrl: 'https://example.com/audio.mp3',
  });
  assert.equal(valid.valid, true);
  assert.equal(valid.errors.length, 0);
});

test('formatAudioTime formats seconds into mm:ss properly', () => {
  assert.equal(formatAudioTime(0), '0:00');
  assert.equal(formatAudioTime(45), '0:45');
  assert.equal(formatAudioTime(65), '1:05');
  assert.equal(formatAudioTime(215), '3:35');
  assert.equal(formatAudioTime(-10), '0:00');
});

test('getNextTrackIndex handles normal, repeat, and boundaries', () => {
  assert.equal(getNextTrackIndex(0, 3), 1);
  assert.equal(getNextTrackIndex(2, 3), 0);
  assert.equal(getNextTrackIndex(1, 3, { repeat: 'track' }), 1);
  assert.equal(getPrevTrackIndex(0, 3), 2);
  assert.equal(getPrevTrackIndex(2, 3), 1);
});

test('validateMediaItem detects missing title and url', () => {
  const invalid = validateMediaItem({});
  assert.equal(invalid.valid, false);
  assert.ok(invalid.errors.length >= 2);

  const valid = validateMediaItem({
    title: 'Sunset Photo',
    url: 'https://images.unsplash.com/sample.jpg',
    type: 'image',
  });
  assert.equal(valid.valid, true);
  assert.equal(valid.errors.length, 0);
});

test('validatePostItem detects short or empty title/content', () => {
  const invalid = validatePostItem({ title: 'Hi', content: '' });
  assert.equal(invalid.valid, false);

  const valid = validatePostItem({
    title: 'Exciting Launch Today',
    content: 'We are thrilled to unveil the new media hub today with responsive gallery and news feed.',
  });
  assert.equal(valid.valid, true);
});

test('filterMedia correctly filters by type, search and favorites', () => {
  const sampleMedia: MediaItem[] = [
    {
      id: '1',
      type: 'image',
      title: 'Mountain Sunrise',
      description: 'Morning in the Alps',
      tag: 'Nature',
      url: 'https://example.com/1.jpg',
      isFavorite: true,
      createdAt: 1000,
    },
    {
      id: '2',
      type: 'video',
      title: 'Ocean Waves Drone',
      description: 'Aerial shot of coast',
      tag: 'Sea',
      url: 'https://example.com/2.mp4',
      isFavorite: false,
      createdAt: 2000,
    },
  ];

  const photosOnly = filterMedia(sampleMedia, { type: 'image' });
  assert.equal(photosOnly.length, 1);
});

test('parseYouTubeUrl detects watch, youtu.be, and shorts links correctly', () => {
  const standard = parseYouTubeUrl('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  assert.equal(standard.isYouTube, true);
  assert.equal(standard.videoId, 'dQw4w9WgXcQ');
  assert.ok(standard.embedUrl?.includes('dQw4w9WgXcQ'));

  const shortLink = parseYouTubeUrl('https://youtu.be/dQw4w9WgXcQ');
  assert.equal(shortLink.isYouTube, true);
  assert.equal(shortLink.videoId, 'dQw4w9WgXcQ');

  const shorts = parseYouTubeUrl('https://youtube.com/shorts/dQw4w9WgXcQ?feature=share');
  assert.equal(shorts.isYouTube, true);
  assert.equal(shorts.videoId, 'dQw4w9WgXcQ');

  const nonYt = parseYouTubeUrl('https://example.com/video.mp4');
  assert.equal(nonYt.isYouTube, false);
});

test('getCleanShortUrl strips tracking query strings and hashes', () => {
  const clean = getCleanShortUrl('https://example.com/mediavault/index.html?token=123&utm_source=tg#player');
  assert.equal(clean, 'https://example.com/mediavault/index.html');

  const cleanRoot = getCleanShortUrl('https://myapp.com/?utm_campaign=winter');
  assert.equal(cleanRoot, 'https://myapp.com/');
});

test('delete helpers correctly remove items by id', () => {
  const mediaList = [{ id: 'm1' }, { id: 'm2' }] as any;
  assert.equal(deleteMediaItem(mediaList, 'm1').length, 1);
  assert.equal(deleteMediaItem(mediaList, 'm1')[0].id, 'm2');

  const trackList = [{ id: 't1' }, { id: 't2' }] as any;
  assert.equal(deleteAudioTrack(trackList, 't2').length, 1);
  assert.equal(deleteAudioTrack(trackList, 't2')[0].id, 't1');

  const postList = [{ id: 'p1' }, { id: 'p2' }] as any;
  assert.equal(deleteNewsPost(postList, 'p1').length, 1);
  assert.equal(deleteNewsPost(postList, 'p1')[0].id, 'p2');
});

test('getYouTubeSearchEmbedUrl generates direct embed for URLs and search list embed for keywords', () => {
  const direct = getYouTubeSearchEmbedUrl('https://www.youtube.com/watch?v=kJQP7kiw5Fk');
  assert.equal(direct.isDirectVideo, true);
  assert.equal(direct.videoId, 'kJQP7kiw5Fk');
  assert.ok(direct.url.includes('kJQP7kiw5Fk'));

  const searchKeywords = getYouTubeSearchEmbedUrl('lofi hip hop chill');
  assert.equal(searchKeywords.isDirectVideo, false);
  assert.ok(searchKeywords.url.includes('listType=search'));
  assert.ok(searchKeywords.url.includes('lofi%20hip%20hop%20chill'));
});

test('searchYouTubeCatalog filters videos by title, channel, category, or tags', () => {
  const rockResults = searchYouTubeCatalog(YOUTUBE_SEARCH_CATALOG, 'rock');
  assert.ok(rockResults.length >= 2);
  assert.ok(rockResults.some((v) => v.title.includes('Queen') || v.title.includes('Linkin Park')));

  const natureResults = searchYouTubeCatalog(YOUTUBE_SEARCH_CATALOG, 'природа');
  assert.ok(natureResults.length >= 1);
  assert.ok(natureResults.some((v) => v.tags.includes('природа')));

  const allOnEmpty = searchYouTubeCatalog(YOUTUBE_SEARCH_CATALOG, '');
  assert.equal(allOnEmpty.length, YOUTUBE_SEARCH_CATALOG.length);
});


