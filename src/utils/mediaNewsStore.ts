export interface MediaItem {
  id: string;
  type: 'image' | 'video';
  title: string;
  url: string;
  poster?: string;
  description: string;
  tag: string;
  isFavorite: boolean;
  createdAt: number;
  isYouTube?: boolean;
  youtubeId?: string;
}

export interface NewsPost {
  id: string;
  title: string;
  author: string;
  category: string;
  imageUrl: string;
  content: string;
  likes: number;
  comments: Array<{
    id: string;
    author: string;
    text: string;
    createdAt: number;
  }>;
  createdAt: number;
}

export interface AudioTrack {
  id: string;
  title: string;
  artist: string;
  album?: string;
  coverUrl?: string;
  audioUrl: string;
  duration?: number;
  genre?: string;
  createdAt: number;
}

export type SupportedLang = 'en' | 'ru' | 'uk';

export const SUPPORTED_LANGS: { code: SupportedLang; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  { code: 'uk', label: 'Українська', flag: '🇺🇦' },
];

export const TRANSLATIONS: Record<SupportedLang, Record<string, string>> = {
  en: {
    navHome: 'Home',
    navGallery: 'Media Gallery',
    navMusic: 'Music Player',
    navNews: 'News Feed',
    navExport: 'Export Single File',
    navAddMedia: '+ Add Media',
    navUploadSong: '+ Upload Song',
    navNewPost: '+ New Post',
    downloadHtml: 'Download HTML File',
    heroPill: '100% Standalone Single File • Pure HTML • CSS • JavaScript',
    heroTitle: 'Media Storage, Gallery, Audio & News Hub',
    heroSubtitle: 'A lightning-fast, fully responsive application for storing and viewing photos, videos, and music with modern audio player standards, plus writing and publishing articles. Works seamlessly on smartphones and desktops.',
    heroAddMedia: 'Add Photo or Video',
    heroUploadSong: 'Upload Song / Audio',
    heroCreatePost: 'Publish News Article',
    heroDownloadHtml: 'Download HTML',
    statTotalMedia: 'Media Items',
    statPhotos: 'Photos',
    statVideos: 'Videos',
    statSongs: 'Audio Tracks',
    statNews: 'News Posts',
    galleryBadge: 'Visual Showcase',
    galleryTitle: 'Media Gallery & Storage',
    galleryDesc: 'Upload, store, filter, and view high-resolution photography and videos in full-screen modal mode.',
    uploadMediaBtn: 'Upload Media',
    filterAllMedia: 'All Media',
    filterPhotos: 'Photos',
    filterVideos: 'Videos',
    filterFavorites: '♥ Favorites',
    searchGalleryPlaceholder: 'Search gallery by title or tag...',
    noMediaTitle: 'No media found',
    noMediaDesc: 'Try clearing your search query or upload a new photo or video.',
    musicBadge: 'Modern Audio Experience',
    musicTitle: 'Music & Audio Player',
    musicDesc: 'Listen to curated tracks or upload your own songs. Features waveform animations, Media Session API for lockscreen controls, speed options, playlist queue, and repeat/shuffle.',
    uploadSongBtn: 'Upload Song',
    queueTitle: 'Playlist Queue',
    nowPlaying: 'Now Playing',
    searchMusicPlaceholder: 'Search tracks by title, artist, or genre...',
    noTracksTitle: 'No audio tracks found',
    noTracksDesc: 'Upload an audio file (MP3, WAV, AAC) to begin your music collection.',
    playTrack: 'Play',
    pauseTrack: 'Pause',
    nextTrack: 'Next Track',
    prevTrack: 'Previous Track',
    shuffle: 'Shuffle',
    repeat: 'Repeat',
    playbackSpeed: 'Speed',
    volume: 'Volume',
    trackCountSuffix: 'tracks',
    newsBadge: 'Publishing & Articles',
    newsTitle: 'News & Announcements Feed',
    newsDesc: 'Read fresh updates, publish your own stories with cover images, leave comments and like articles.',
    createPostBtn: 'Create Post',
    categoryAll: 'All Categories',
    searchNewsPlaceholder: 'Search news by title or content...',
    noPostsTitle: 'No articles match your criteria',
    noPostsDesc: 'Clear the filter or write a new post to get the news stream going.',
    likesSuffix: 'Likes',
    commentsSuffix: 'Comments',
    deleteBtn: 'Delete',
    commentsHeading: 'Comments',
    noCommentsYet: 'No comments yet. Be the first to share your thoughts!',
    yourNamePlaceholder: 'Your Name',
    addCommentPlaceholder: 'Add a comment...',
    postCommentBtn: 'Post',
    addMediaTitle: 'Add Photo or Video',
    mediaFormatLabel: 'Media Format',
    formatPhoto: 'Photo (Image)',
    formatVideo: 'Video (MP4 / WebM / Embed)',
    mediaTitleLabel: 'Title *',
    mediaUploadLabel: 'Upload File from Device or Enter URL',
    categoryTagLabel: 'Category / Tag',
    descriptionLabel: 'Description (Optional)',
    cancelBtn: 'Cancel',
    saveToGalleryBtn: 'Save to Gallery',
    uploadSongModalTitle: 'Upload Song / Audio Track',
    songTitleLabel: 'Song Title *',
    songArtistLabel: 'Artist Name *',
    songGenreLabel: 'Genre / Category',
    songAudioFileLabel: 'Audio File (MP3, WAV, OGG, M4A) or Audio URL *',
    songCoverLabel: 'Cover Artwork (Upload Image or URL)',
    saveSongBtn: 'Add to Playlist',
    publishModalTitle: 'Publish News Article',
    articleTitleLabel: 'Article Title *',
    categoryLabel: 'Category',
    authorNameLabel: 'Author Name',
    featuredImageLabel: 'Featured Image (Upload or URL)',
    articleContentLabel: 'Article Content *',
    publishPostBtn: 'Publish Post',
    exportModalTitle: 'Standalone Single HTML File',
    exportModalDesc: 'This web app is 100% self-contained in a single HTML file with pure CSS inside <style> and JavaScript inside <script>. You can download it directly or copy it to run on any phone or computer without installing any software!',
    exportFeature1: 'Fully Responsive: Works on desktop, tablet, and mobile.',
    exportFeature2: 'Offline Ready: Saves data locally in browser LocalStorage.',
    exportFeature3: 'Audio Player: Built with modern Web Standards and MediaSession API.',
    exportFeature4: 'Photo & Video Support: Upload your own media directly.',
    downloadFileBtn: 'Download index.html File',
    copyCodeBtn: 'Copy HTML to Clipboard',
    closeBtn: 'Close',
    resetDemoBtn: 'Reset Demo Data',
    downloadLightboxBtn: 'Download',
    minReadSuffix: 'min read',
    footerBrand: 'MediaVault & News App',
    footerDesc: 'Pure HTML5, CSS3 with Flexbox & Grid, Vanilla JavaScript in a single file.',
    exportHtmlBtn: 'Export HTML',
    uploadFromDevice: 'Upload from Phone / PC',
    dragDropSong: 'Drop audio file here or tap to select from device',
    dragDropMedia: 'Drop photo or video here or tap to select from device',
    choosePresetSource: 'Or choose an online stream / preset:',
    htmlDownloadedSuccess: 'index.html downloaded successfully! Works offline on phone or PC.',
    sourceUrl: 'Web / URL Link',
    sourcePresets: 'Online Presets',
    navYouTube: 'YouTube',
    navViewCode: 'View HTML Code',
    navShortUrl: 'Short Link',
    telegramBtn: 'Telegram',
    viberBtn: 'Viber',
    youtubeBtn: 'YouTube',
    viewHtmlCodeBtn: 'View HTML Code',
    copyShortUrlBtn: 'Short URL',
    youtubeModalTitle: 'YouTube Video Player',
    youtubeModalDesc: 'Watch any YouTube video directly on the site without leaving. Paste a link or select a preset.',
    youtubeInputPlaceholder: 'Paste YouTube link (watch?v=, youtu.be, shorts)...',
    youtubeWatchBtn: 'Watch on Site',
    youtubeSaveBtn: 'Save to Gallery',
    youtubePresetsTitle: 'Popular YouTube Streams & Videos:',
    codeModalTitle: 'Complete Standalone HTML Source Code',
    codeModalDesc: 'This entire app is 100% self-contained in this single file. You can inspect, copy, or download it.',
    codeModalCopyBtn: 'Copy Entire Code',
    codeModalStats: 'Source Stats',
    shortUrlCopiedToast: 'Short URL copied to clipboard!',
    deleteConfirmTitle: 'Confirm Deletion',
    deleteConfirmDesc: 'Are you sure you want to delete this file?',
    undoBtn: 'Undo',
    fileDeletedToast: 'File deleted successfully',
    filterYouTube: 'YouTube',
    youtubeSearchLabel: 'YouTube Search Engine',
    youtubeSearchPlaceholder: 'Search any video, song, channel or paste YouTube link...',
    youtubeSearchBtn: 'Search',
    youtubeSearchModeTitle: 'YouTube Search Results',
    youtubePlayNow: 'Watch Now',
    youtubeQuickTopics: 'Popular Search Categories',
    youtubeSearchResultsCount: 'found videos',
    youtubeSaveSearchBtn: 'Save to Gallery',
    youtubeClearSearch: 'Clear Search',
  },
  ru: {
    navHome: 'Главная',
    navGallery: 'Медиагалерея',
    navMusic: 'Плеер музыки',
    navNews: 'Лента новостей',
    navExport: 'Экспорт файла',
    navAddMedia: '+ Добавить медиа',
    navUploadSong: '+ Загрузить песню',
    navNewPost: '+ Новая статья',
    downloadHtml: 'Скачать HTML-файл',
    heroPill: '100% Автономный единый файл • Чистый HTML • CSS • JavaScript',
    heroTitle: 'Медиахранилище, галерея, плеер и лента новостей',
    heroSubtitle: 'Молниеносное адаптивное приложение для фото, видео и музыки по современным стандартам плеера, а также публикации статей. Идеально работает на смартфонах и ПК.',
    heroAddMedia: 'Добавить фото или видео',
    heroUploadSong: 'Загрузить песню',
    heroCreatePost: 'Опубликовать статью',
    heroDownloadHtml: 'Скачать HTML',
    statTotalMedia: 'Файлов медиа',
    statPhotos: 'Фотографий',
    statVideos: 'Видео',
    statSongs: 'Аудиотреков',
    statNews: 'Публикаций',
    galleryBadge: 'Визуальная витрина',
    galleryTitle: 'Медиагалерея и хранилище',
    galleryDesc: 'Загружайте, храните, фильтруйте и просматривайте фото и видео в высоком качестве на весь экран.',
    uploadMediaBtn: 'Загрузить медиа',
    filterAllMedia: 'Все медиа',
    filterPhotos: 'Фотографии',
    filterVideos: 'Видео',
    filterFavorites: '♥ Избранное',
    searchGalleryPlaceholder: 'Поиск по названию или тегу...',
    noMediaTitle: 'Медиафайлы не найдены',
    noMediaDesc: 'Попробуйте изменить запрос поиска или загрузите новое фото или видео.',
    musicBadge: 'Современный медиаплеер',
    musicTitle: 'Музыка и медиа проигрыватель',
    musicDesc: 'Слушайте треки или загружайте свои песни. Анимированный визуализатор, Media Session API для экрана блокировки, выбор скорости, очередь и повтор/перемешивание.',
    uploadSongBtn: 'Загрузить песню',
    queueTitle: 'Очередь воспроизведения',
    nowPlaying: 'Сейчас играет',
    searchMusicPlaceholder: 'Поиск песен по названию, автору или жанру...',
    noTracksTitle: 'Песни не найдены',
    noTracksDesc: 'Загрузите аудиофайл (MP3, WAV, AAC), чтобы пополнить свою аудиотеку.',
    playTrack: 'Воспроизвести',
    pauseTrack: 'Пауза',
    nextTrack: 'Следующий трек',
    prevTrack: 'Предыдущий трек',
    shuffle: 'Перемешать',
    repeat: 'Повтор',
    playbackSpeed: 'Скорость',
    volume: 'Громкость',
    trackCountSuffix: 'треков',
    newsBadge: 'Публикации и статьи',
    newsTitle: 'Лента новостей и публикаций',
    newsDesc: 'Читайте свежие обновления, публикуйте статьи с обложками, оставляйте комментарии и ставьте лайки.',
    createPostBtn: 'Создать пост',
    categoryAll: 'Все категории',
    searchNewsPlaceholder: 'Поиск новостей по названию или тексту...',
    noPostsTitle: 'Статьи не найдены',
    noPostsDesc: 'Сбросьте фильтр или напишите новый пост, чтобы наполнить ленту.',
    likesSuffix: 'Лайков',
    commentsSuffix: 'Комментариев',
    deleteBtn: 'Удалить',
    commentsHeading: 'Комментарии',
    noCommentsYet: 'Пока нет комментариев. Будьте первым!',
    yourNamePlaceholder: 'Ваше имя',
    addCommentPlaceholder: 'Написать комментарий...',
    postCommentBtn: 'Отправить',
    addMediaTitle: 'Добавить фото или видео',
    mediaFormatLabel: 'Формат медиа',
    formatPhoto: 'Фото (Изображение)',
    formatVideo: 'Видео (MP4 / WebM / Ссылка)',
    mediaTitleLabel: 'Название *',
    mediaUploadLabel: 'Загрузить файл с устройства или ввести URL',
    categoryTagLabel: 'Категория / Тег',
    descriptionLabel: 'Описание (необязательно)',
    cancelBtn: 'Отмена',
    saveToGalleryBtn: 'Сохранить в галерею',
    uploadSongModalTitle: 'Загрузка песни / аудиотрека',
    songTitleLabel: 'Название песни *',
    songArtistLabel: 'Исполнитель *',
    songGenreLabel: 'Жанр / Категория',
    songAudioFileLabel: 'Аудиофайл (MP3, WAV, OGG, M4A) или ссылка *',
    songCoverLabel: 'Обложка (Изображение или URL)',
    saveSongBtn: 'Добавить в плейлист',
    publishModalTitle: 'Опубликовать статью',
    articleTitleLabel: 'Заголовок статьи *',
    categoryLabel: 'Категория',
    authorNameLabel: 'Имя автора',
    featuredImageLabel: 'Обложка (Загрузить или URL)',
    articleContentLabel: 'Текст статьи *',
    publishPostBtn: 'Опубликовать',
    exportModalTitle: 'Автономный единый HTML-файл',
    exportModalDesc: 'Это веб-приложение на 100% автономно в одном HTML-файле со стилями в <style> и скриптом в <script>. Вы можете скачать его и запускать на телефоне или компьютере без установки сторонних программ!',
    exportFeature1: 'Полная адаптивность: работает на смартфонах, планшетах и ПК.',
    exportFeature2: 'Офлайн-режим: сохраняет данные локально в LocalStorage браузера.',
    exportFeature3: 'Медиаплеер: современные веб-стандарты и MediaSession API.',
    exportFeature4: 'Поддержка фото, видео и музыки: прямая загрузка ваших файлов.',
    downloadFileBtn: 'Скачать файл index.html',
    copyCodeBtn: 'Скопировать HTML в буфер',
    closeBtn: 'Закрыть',
    resetDemoBtn: 'Сбросить к демо-данным',
    downloadLightboxBtn: 'Скачать',
    minReadSuffix: 'мин чтения',
    footerBrand: 'MediaVault & News App',
    footerDesc: 'Чистый HTML5, CSS3 с Flexbox и Grid, Vanilla JavaScript в одном файле.',
    exportHtmlBtn: 'Экспорт HTML',
    uploadFromDevice: 'Загрузить с телефона или ПК',
    dragDropSong: 'Перетащите аудио сюда или нажмите для выбора с устройства',
    dragDropMedia: 'Перетащите фото или видео сюда или нажмите для выбора с устройства',
    choosePresetSource: 'Или выберите пример из сети / пресет:',
    htmlDownloadedSuccess: 'Файл index.html успешно скачан! Работает автономно на телефоне и ПК.',
    sourceUrl: 'Ссылка / URL',
    sourcePresets: 'Примеры из сети',
    navYouTube: 'YouTube',
    navViewCode: 'Просмотр HTML кода',
    navShortUrl: 'Короткая ссылка',
    telegramBtn: 'Telegram',
    viberBtn: 'Viber',
    youtubeBtn: 'YouTube',
    viewHtmlCodeBtn: 'Просмотр кода HTML',
    copyShortUrlBtn: 'Короткий URL',
    youtubeModalTitle: 'Просмотр видео с YouTube',
    youtubeModalDesc: 'Смотрите любые видео с YouTube прямо на сайте без перехода на сторонние сервисы. Вставьте ссылку или выберите пресет.',
    youtubeInputPlaceholder: 'Вставьте ссылку на YouTube (watch?v=, youtu.be, shorts)...',
    youtubeWatchBtn: 'Смотреть на сайте',
    youtubeSaveBtn: 'Сохранить в галерею',
    youtubePresetsTitle: 'Популярные видео и стримы YouTube:',
    codeModalTitle: 'Полный исходный код автономного HTML',
    codeModalDesc: 'Все приложение полностью автономно и собрано в этом единственном файле. Вы можете просмотреть, скопировать или скачать его.',
    codeModalCopyBtn: 'Скопировать весь код',
    codeModalStats: 'Статистика файла',
    shortUrlCopiedToast: 'Короткая ссылка скопирована в буфер обмена!',
    deleteConfirmTitle: 'Подтверждение удаления',
    deleteConfirmDesc: 'Вы действительно хотите удалить этот файл?',
    undoBtn: 'Отменить',
    fileDeletedToast: 'Файл успешно удален',
    filterYouTube: 'YouTube',
    youtubeSearchLabel: 'Поисковик видео YouTube',
    youtubeSearchPlaceholder: 'Введите название видео, песню, тему, канал или вставьте ссылку...',
    youtubeSearchBtn: 'Искать',
    youtubeSearchModeTitle: 'Результаты поиска YouTube',
    youtubePlayNow: 'Смотреть',
    youtubeQuickTopics: 'Быстрый поиск по категориям',
    youtubeSearchResultsCount: 'найдено видео',
    youtubeSaveSearchBtn: 'В галерею',
    youtubeClearSearch: 'Очистить',
  },
  uk: {
    navHome: 'Головна',
    navGallery: 'Медіагалерея',
    navMusic: 'Плеєр музики',
    navNews: 'Стрічка новин',
    navExport: 'Експорт файлу',
    navAddMedia: '+ Додати медіа',
    navUploadSong: '+ Завантажити пісню',
    navNewPost: '+ Новий пост',
    downloadHtml: 'Завантажити HTML-файл',
    heroPill: '100% Автономний єдиний файл • Чистий HTML • CSS • JavaScript',
    heroTitle: 'Медіасховище, галерея, плеєр та стрічка новин',
    heroSubtitle: 'Блискавичний адаптивний застосунок для фото, відео та музики за новітніми стандартами плеєра, а також публікації статей. Бездоганно працює на смартфонах і ПК.',
    heroAddMedia: 'Додати фото або відео',
    heroUploadSong: 'Завантажити пісню',
    heroCreatePost: 'Опублікувати статтю',
    heroDownloadHtml: 'Завантажити HTML',
    statTotalMedia: 'Файлів медіа',
    statPhotos: 'Фотографій',
    statVideos: 'Відео',
    statSongs: 'Аудіотреків',
    statNews: 'Публікацій',
    galleryBadge: 'Візуальна вітрина',
    galleryTitle: 'Медіагалерея та сховище',
    galleryDesc: 'Завантажуйте, зберігайте, фільтруйте та переглядайте фото й відео у високій якості на весь екран.',
    uploadMediaBtn: 'Завантажити медіа',
    filterAllMedia: 'Всі медіа',
    filterPhotos: 'Фотографії',
    filterVideos: 'Відео',
    filterFavorites: '♥ Обране',
    searchGalleryPlaceholder: 'Пошук за назвою або тегом...',
    noMediaTitle: 'Медіафайли не знайдено',
    noMediaDesc: 'Спробуйте змінити запит пошуку або завантажте нове фото чи відео.',
    musicBadge: 'Сучасний медіаплеєр',
    musicTitle: 'Музика та медіапрогравач',
    musicDesc: 'Слухайте треки або завантажуйте власні пісні. Анімований візуалізатор, Media Session API для екрана блокування, вибір швидкості, черга та повтор/перемішування.',
    uploadSongBtn: 'Завантажити пісню',
    queueTitle: 'Черга відтворення',
    nowPlaying: 'Зараз лунає',
    searchMusicPlaceholder: 'Пошук пісень за назвою, виконавцем чи жанром...',
    noTracksTitle: 'Пісні не знайдено',
    noTracksDesc: 'Завантажте аудіофайл (MP3, WAV, AAC), щоб поповнити свою аудіотеку.',
    playTrack: 'Відтворити',
    pauseTrack: 'Пауза',
    nextTrack: 'Наступний трек',
    prevTrack: 'Попередній трек',
    shuffle: 'Перемішати',
    repeat: 'Повтор',
    playbackSpeed: 'Швидкість',
    volume: 'Гучність',
    trackCountSuffix: 'треків',
    newsBadge: 'Публікації та статті',
    newsTitle: 'Стрічка новин та публікацій',
    newsDesc: 'Читайте свіжі оновлення, публікуйте статті з обкладинками, залишайте коментарі та ставте лайки.',
    createPostBtn: 'Створити пост',
    categoryAll: 'Всі категорії',
    searchNewsPlaceholder: 'Пошук новин за назвою або текстом...',
    noPostsTitle: 'Статті не знайдено',
    noPostsDesc: 'Скиньте фільтр або напишіть новий пост, щоб наповнити стрічку.',
    likesSuffix: 'Лайків',
    commentsSuffix: 'Коментарів',
    deleteBtn: 'Видалити',
    commentsHeading: 'Коментарі',
    noCommentsYet: 'Поки немає коментарів. Будьте першим!',
    yourNamePlaceholder: "Ваше ім'я",
    addCommentPlaceholder: 'Написати коментар...',
    postCommentBtn: 'Надіслати',
    addMediaTitle: 'Додати фото або відео',
    mediaFormatLabel: 'Формат медіа',
    formatPhoto: 'Фото (Зображення)',
    formatVideo: 'Відео (MP4 / WebM / Посилання)',
    mediaTitleLabel: 'Назва *',
    mediaUploadLabel: 'Завантажити файл із пристрою або ввести URL',
    categoryTagLabel: 'Категорія / Тег',
    descriptionLabel: 'Опис (необов’язково)',
    cancelBtn: 'Скасувати',
    saveToGalleryBtn: 'Зберегти в галерею',
    uploadSongModalTitle: 'Завантаження пісні / аудіотреку',
    songTitleLabel: 'Назва пісні *',
    songArtistLabel: 'Виконавець *',
    songGenreLabel: 'Жанр / Категорія',
    songAudioFileLabel: 'Аудіофайл (MP3, WAV, OGG, M4A) або посилання *',
    songCoverLabel: 'Обкладинка (Зображення або URL)',
    saveSongBtn: 'Додати в плейлист',
    publishModalTitle: 'Опублікувати статтю',
    articleTitleLabel: 'Заголовок статті *',
    categoryLabel: 'Категорія',
    authorNameLabel: "Ім'я автора",
    featuredImageLabel: 'Обкладинка (Завантажити або URL)',
    articleContentLabel: 'Текст статті *',
    publishPostBtn: 'Опублікувати',
    exportModalTitle: 'Автономний єдиний HTML-файл',
    exportModalDesc: 'Цей веб-застосунок на 100% автономний в одному HTML-файлі зі стилями в <style> та скриптом в <script>. Ви можете завантажити його та запускати на телефоні чи комп’ютері без встановлення сторонніх програм!',
    exportFeature1: 'Повна адаптивність: працює на смартфонах, планшетах і ПК.',
    exportFeature2: 'Офлайн-режим: зберігає дані локально в LocalStorage браузера.',
    exportFeature3: 'Медіаплеєр: новітні веб-стандарти та MediaSession API.',
    exportFeature4: 'Підтримка фото, відео та музики: пряме завантаження ваших файлів.',
    downloadFileBtn: 'Завантажити файл index.html',
    copyCodeBtn: 'Скопіювати HTML у буфер',
    closeBtn: 'Закрити',
    resetDemoBtn: 'Скинути до демо-даних',
    downloadLightboxBtn: 'Завантажити',
    minReadSuffix: 'хв читання',
    footerBrand: 'MediaVault & News App',
    footerDesc: 'Чистий HTML5, CSS3 з Flexbox та Grid, Vanilla JavaScript в одному файлі.',
    exportHtmlBtn: 'Експорт HTML',
    uploadFromDevice: 'Завантажити з телефону або ПК',
    dragDropSong: 'Перетягніть аудіо сюди або натисніть для вибору з пристрою',
    dragDropMedia: 'Перетягніть фото чи відео сюди або натисніть для вибору з пристрою',
    choosePresetSource: 'Або виберіть приклад з мережі / пресет:',
    htmlDownloadedSuccess: 'Файл index.html успішно завантажено! Працює автономно на телефоні та ПК.',
    sourceUrl: 'Посилання / URL',
    sourcePresets: 'Приклади з мережі',
    navYouTube: 'YouTube',
    navViewCode: 'Перегляд HTML коду',
    navShortUrl: 'Коротке посилання',
    telegramBtn: 'Telegram',
    viberBtn: 'Viber',
    youtubeBtn: 'YouTube',
    viewHtmlCodeBtn: 'Перегляд коду HTML',
    copyShortUrlBtn: 'Короткий URL',
    youtubeModalTitle: 'Перегляд відео з YouTube',
    youtubeModalDesc: 'Дивіться будь-які відео з YouTube прямо на сайті без переходу на сторонні сервіси. Вставте посилання або виберіть пресет.',
    youtubeInputPlaceholder: 'Вставте посилання на YouTube (watch?v=, youtu.be, shorts)...',
    youtubeWatchBtn: 'Дивитися на сайті',
    youtubeSaveBtn: 'Зберегти в галерею',
    youtubePresetsTitle: 'Популярні відео та стріми YouTube:',
    codeModalTitle: 'Повний вихідний код автономного HTML',
    codeModalDesc: 'Весь застосунок повністю автономний і зібраний у цьому єдиному файлі. Ви можете переглянути, скопіювати або завантажити його.',
    codeModalCopyBtn: 'Скопіювати весь код',
    codeModalStats: 'Статистика файлу',
    shortUrlCopiedToast: 'Коротке посилання скопійовано в буфер обміну!',
    deleteConfirmTitle: 'Підтвердження видалення',
    deleteConfirmDesc: 'Ви дійсно хочете видалити цей файл?',
    undoBtn: 'Скасувати',
    fileDeletedToast: 'Файл успішно видалено',
    filterYouTube: 'YouTube',
    youtubeSearchLabel: 'Пошуковик відео YouTube',
    youtubeSearchPlaceholder: 'Введіть назву відео, пісню, тему, канал або вставте посилання...',
    youtubeSearchBtn: 'Шукати',
    youtubeSearchModeTitle: 'Результати пошуку YouTube',
    youtubePlayNow: 'Дивитися',
    youtubeQuickTopics: 'Швидкий пошук за категоріями',
    youtubeSearchResultsCount: 'знайдено відео',
    youtubeSaveSearchBtn: 'В галерею',
    youtubeClearSearch: 'Очистити',
  },
};

export function getTranslation(lang: SupportedLang, key: string): string {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
  return dict[key] || TRANSLATIONS.en[key] || key;
}

export function validateMediaItem(item: Partial<MediaItem>): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  if (!item.title || !item.title.trim()) {
    errors.push('Media title is required');
  }
  if (!item.url || !item.url.trim()) {
    errors.push('Media URL or file source is required');
  }
  if (!item.type || (item.type !== 'image' && item.type !== 'video')) {
    errors.push('Type must be either image or video');
  }
  return {
    valid: errors.length === 0,
    errors,
  };
}

export function validatePostItem(post: Partial<NewsPost>): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  if (!post.title || !post.title.trim()) {
    errors.push('Post title is required');
  }
  if (!post.content || !post.content.trim()) {
    errors.push('Post content is required');
  }
  if (post.title && post.title.trim().length < 3) {
    errors.push('Post title must be at least 3 characters');
  }
  return {
    valid: errors.length === 0,
    errors,
  };
}

export function validateAudioTrack(track: Partial<AudioTrack>): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  if (!track.title || !track.title.trim()) {
    errors.push('Song title is required');
  }
  if (!track.audioUrl || !track.audioUrl.trim()) {
    errors.push('Audio file or URL is required');
  }
  return {
    valid: errors.length === 0,
    errors,
  };
}

export function formatAudioTime(seconds: number): string {
  if (isNaN(seconds) || seconds < 0) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}

export function getNextTrackIndex(
  currentIndex: number,
  total: number,
  options?: { shuffle?: boolean; repeat?: 'none' | 'track' | 'all' }
): number {
  if (total <= 0) return 0;
  if (options?.repeat === 'track') return currentIndex;
  if (options?.shuffle && total > 1) {
    let next = Math.floor(Math.random() * total);
    if (next === currentIndex) {
      next = (currentIndex + 1) % total;
    }
    return next;
  }
  return (currentIndex + 1) % total;
}

export function getPrevTrackIndex(currentIndex: number, total: number): number {
  if (total <= 0) return 0;
  return (currentIndex - 1 + total) % total;
}

export function filterMedia(
  items: MediaItem[],
  options: {
    type?: 'all' | 'image' | 'video';
    search?: string;
    favoriteOnly?: boolean;
  }
): MediaItem[] {
  const { type = 'all', search = '', favoriteOnly = false } = options;
  const q = search.trim().toLowerCase();

  return items.filter((item) => {
    if (type !== 'all' && item.type !== type) return false;
    if (favoriteOnly && !item.isFavorite) return false;
    if (q) {
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchDesc = item.description?.toLowerCase().includes(q);
      const matchTag = item.tag?.toLowerCase().includes(q);
      if (!matchTitle && !matchDesc && !matchTag) return false;
    }
    return true;
  });
}

export function filterPosts(
  posts: NewsPost[],
  options: {
    category?: string;
    search?: string;
  }
): NewsPost[] {
  const { category = 'all', search = '' } = options;
  const q = search.trim().toLowerCase();

  return posts.filter((post) => {
    if (category && category !== 'all' && post.category.toLowerCase() !== category.toLowerCase()) {
      return false;
    }
    if (q) {
      const matchTitle = post.title.toLowerCase().includes(q);
      const matchContent = post.content.toLowerCase().includes(q);
      const matchAuthor = post.author?.toLowerCase().includes(q);
      if (!matchTitle && !matchContent && !matchAuthor) return false;
    }
    return true;
  });
}

export function estimateReadingTime(text: string, suffix = 'min read'): string {
  if (!text) return `1 ${suffix}`;
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 180));
  return `${minutes} ${suffix}`;
}

export function generateId(prefix = 'item'): string {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

export function parseYouTubeUrl(url: string): {
  isYouTube: boolean;
  videoId?: string;
  embedUrl?: string;
  thumbnail?: string;
} {
  if (!url) return { isYouTube: false };
  const trimmed = url.trim();
  const match = trimmed.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/i
  );
  if (match && match[1]) {
    const videoId = match[1];
    return {
      isYouTube: true,
      videoId,
      embedUrl: `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`,
      thumbnail: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
    };
  }
  return { isYouTube: false };
}

export function getCleanShortUrl(fullUrl: string): string {
  if (!fullUrl) return '';
  try {
    const u = new URL(fullUrl);
    return `${u.origin}${u.pathname}`;
  } catch {
    return fullUrl.split('?')[0].split('#')[0];
  }
}

export function deleteMediaItem(items: MediaItem[], id: string): MediaItem[] {
  return items.filter((item) => item.id !== id);
}

export function deleteAudioTrack(tracks: AudioTrack[], id: string): AudioTrack[] {
  return tracks.filter((track) => track.id !== id);
}

export function deleteNewsPost(posts: NewsPost[], id: string): NewsPost[] {
  return posts.filter((post) => post.id !== id);
}

export interface YouTubeCatalogVideo {
  id: string;
  title: string;
  channel: string;
  category: string;
  duration: string;
  tags: string[];
}

export const YOUTUBE_SEARCH_CATALOG: YouTubeCatalogVideo[] = [
  {
    id: 'kJQP7kiw5Fk',
    title: 'Luis Fonsi - Despacito ft. Daddy Yankee',
    channel: 'Luis Fonsi',
    category: 'Music',
    duration: '4:42',
    tags: ['music', 'музыка', 'latin', 'pop', 'hits', 'хиты', 'танцы'],
  },
  {
    id: 'fJ9rUzIMcZQ',
    title: 'Queen – Bohemian Rhapsody (Official Video Remastered)',
    channel: 'Queen Official',
    category: 'Rock',
    duration: '6:00',
    tags: ['rock', 'рок', 'queen', 'freddie mercury', 'legend', 'хиты', 'classics'],
  },
  {
    id: '4xDzrJKXOOY',
    title: 'Synthwave Radio - Chill synth / retro 80s vibes',
    channel: 'Lofi Girl',
    category: 'Chill',
    duration: 'Live',
    tags: ['synthwave', 'chill', 'релакс', '80s', 'electronic', 'lofi'],
  },
  {
    id: 'ysz5S6PUM-U',
    title: 'Nature 4K Relaxing Ultra HD Wildlife & Landscapes',
    channel: 'Scenic Relaxation',
    category: 'Nature',
    duration: '11:45',
    tags: ['nature', 'природа', '4k', 'relax', 'релакс', 'forest', 'пейзаж'],
  },
  {
    id: 'Bey4XXJAqS8',
    title: 'Earth 4K - Breathtaking Relaxing Drone Footage',
    channel: '4K Relaxation Hub',
    category: 'Nature',
    duration: '15:20',
    tags: ['природа', '4k', 'drone', 'earth', 'пейзаж', 'relax', 'путешествия'],
  },
  {
    id: 'jfKfPfyJRdk',
    title: 'Lofi Hip Hop Radio - Beats to Relax / Study to',
    channel: 'Lofi Girl',
    category: 'Lo-Fi',
    duration: 'Live',
    tags: ['lofi', 'beats', 'chill', 'музыка для учебы', 'релакс', 'hip hop'],
  },
  {
    id: 'M7lc1UVf-VE',
    title: 'YouTube Developers Official Embed Showcase',
    channel: 'Google Developers',
    category: 'Tech',
    duration: '3:15',
    tags: ['tech', 'technology', 'технологии', 'google', 'code', 'youtube'],
  },
  {
    id: '7NOSDKb0HlU',
    title: 'Cute Kittens & Funny Cats Compilation',
    channel: 'Animal Fun',
    category: 'Animals',
    duration: '10:04',
    tags: ['котики', 'cats', 'animals', 'животные', 'юмор', 'funny', 'приколы'],
  },
  {
    id: '5qap5aO4i9A',
    title: 'Chillhop Radio - Jazzy & Lofi Hip Hop Beats',
    channel: 'Chillhop Music',
    category: 'Music',
    duration: 'Live',
    tags: ['jazz', 'джаз', 'chill', 'music', 'музыка', 'relax', 'beats'],
  },
  {
    id: 'kXYiU_JCYtU',
    title: 'Linkin Park - Numb (Official Music Video 4K)',
    channel: 'Linkin Park',
    category: 'Rock',
    duration: '3:07',
    tags: ['rock', 'рок', 'linkin park', 'numb', 'hits', 'alternative'],
  },
  {
    id: 'JGwWNGJdvx8',
    title: 'Ed Sheeran - Shape of You (Official Music Video)',
    channel: 'Ed Sheeran',
    category: 'Pop',
    duration: '4:24',
    tags: ['pop', 'music', 'музыка', 'хиты', 'ed sheeran', 'dance'],
  },
  {
    id: '2Vv-BfVoq4g',
    title: 'Ed Sheeran - Perfect (Official Music Video)',
    channel: 'Ed Sheeran',
    category: 'Acoustic',
    duration: '4:40',
    tags: ['acoustic', 'love', 'романтика', 'ed sheeran', 'guitar'],
  },
];

export function getYouTubeSearchEmbedUrl(queryOrUrl: string): {
  url: string;
  isDirectVideo: boolean;
  videoId?: string;
} {
  const trimmed = (queryOrUrl || '').trim();
  const parsed = parseYouTubeUrl(trimmed);
  if (parsed.isYouTube && parsed.videoId) {
    return {
      url: `https://youtube.com/embed/${parsed.videoId}?autoplay=1&rel=0`,
      isDirectVideo: true,
      videoId: parsed.videoId,
    };
  }
  // Search query list embed
  return {
    url: `https://youtube.com/embed?listType=search&list=${encodeURIComponent(trimmed)}&autoplay=1&rel=0`,
    isDirectVideo: false,
  };
}

export function searchYouTubeCatalog(
  catalog: YouTubeCatalogVideo[],
  query: string
): YouTubeCatalogVideo[] {
  const q = (query || '').trim().toLowerCase();
  if (!q) return catalog;
  const words = q.split(/\s+/).filter(Boolean);
  return catalog.filter((item) => {
    const haystack = [
      item.title,
      item.channel,
      item.category,
      ...item.tags,
    ]
      .join(' ')
      .toLowerCase();
    return words.some((w) => haystack.includes(w));
  });
}


