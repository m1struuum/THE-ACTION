const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const cards = (list, render) => list.map(render).join('');

const byId = (list, id) =>
  id === undefined ? list[0] : list.find(item => String(item.id) === String(id));

const pic = (src, label = '') => src ? `<img src="${src}" alt="" loading="lazy">` : label;

const paragraphs = text => text.split('\n').map(t => `<p class="film-text">${t}</p>`).join('');

const state = message => `<p class="state">${message}</p>`;
const notFound = () => state('Страница не найдена');

var authReady = false; // станет true, когда загрузится блок авторизации внизу файла


const lorem = 'Здесь будет описание. Здесь будет много букв для описания. Здесь будет много букв для описания. Здесь будет много букв для описания.';
const make = (n, fn) => Array.from({ length: n }, (_, i) => ({ id: i + 1, ...fn(i) }));

// уровни лексики в фильме (поле vocab) — для фильтра студенческой и преподавательской подписок
const VOCAB_LEVELS = ['Лёгкая', 'Средняя', 'Повышенная'];


const vydohni = {
  title: 'Выдохни', year: 2026, country: 'Россия', language: 'Русский', genre: 'Социальная драма',
  director: 'Алиса Сергеева', directorId: 'alisa-sergeeva', duration: '',
  summary: '«Выдохни» — короткометражный фильм о молодой матери, которая в заботе о ребёнке постепенно забывает о себе. Оставшись один на один с младенцем, она сталкивается с усталостью, одиночеством и потерей собственной личности.',
  description: [
    'Фильм показывает неидеальную сторону материнства — эмоциональное выгорание, постоянную отдачу себя семье и необходимость иногда остановиться, выйти из привычного ритма и просто побыть собой. Маленький момент тишины и свободы помогает героине восстановить силы и снова почувствовать связь с собой и миром.'
  ].join('\n'),
  backdrop: 'img/vydohni-hero.jpg',
  poster: 'img/vydohni.jpg', video: 'https://youtu.be/ZaKhUAJvSd4?si=iT8E09_NkApAMQKY',
  materials: [],   // пример: [{ title: 'Лексика к фильму', text: 'Короткое описание', link: 'https://...' }]
  vocab: '',       // уровень лексики: 'Лёгкая', 'Средняя' или 'Повышенная'
  tasks: false,    // есть ли задания к фильму (true / false)
  isNew: true,
  isPick: false,
  actors: [
    { pid: 'maria-kairova', name: 'Мария Каирова', character: 'Главная героиня', role: 'Актриса', photo: 'img/people/maria.jpg' },
    { pid: 'dominika-kairova', name: 'Доминика Каирова', character: 'Дочка героини', role: 'Актриса', photo: 'img/people/dominika.jpg' },
    { pid: 'daniel-kairov', name: 'Даниэль Каиров', character: 'Сын героини', role: 'Актер', photo: 'img/people/daniel.jpg' }
  ],
  crew: [
    { pid: 'alisa-sergeeva', name: 'Сергеева Алиса Васильевна', role: 'Режиссер, Продюсер', photo: 'img/people/alisa.jpg' },
    { pid: 'sergey-sergeev', name: 'Сергей Сергеев', role: 'Продюсер', photo: 'img/people/sergey.jpg' },
    { pid: 'olga-smirnova', name: 'Ольга Смирнова', role: 'Режиссер монтажа', photo: 'img/people/olga.jpg' },
    { pid: 'ruslana-berezkina', name: 'Руслана Березкина', role: 'Режиссер монтажа', photo: 'img/people/ruslana.jpg' }
  ]
};

const poTuStoronu = {
  title: 'По ту сторону кадра', year: 2026, country: 'Россия', language: 'Русский', genre: 'Драма, 14+',
  director: 'Карапетова Эмилия', directorId: 'emilia-karapetova', duration: '',
  summary: '«По ту сторону кадра» — короткометражный игровой фильм о молодой девушке, которая сталкивается с суровой реальностью кинопроизводства. Её идеализированные представления о кино постепенно разрушаются, заставляя переосмыслить собственные мечты, ценности и отношение к творчеству.',
  description: [
    '«По ту сторону кадра» — короткометражная игровая трагикомедия о столкновении творческих амбиций с суровой реальностью кинопроизводства.',
    'В центре истории — молодая девушка, которая мечтает создавать настоящее кино, но оказывается в мире, где вдохновение постоянно сталкивается с бытовыми трудностями, непредвиденными обстоятельствами и человеческим фактором. То, что представлялось ей увлекательным творческим процессом, постепенно превращается в череду испытаний, заставляющих усомниться в собственных силах и выбранном пути.',
    'Через комичные, абсурдные и одновременно драматичные ситуации фильм раскрывает изнанку киноиндустрии, показывая, что за каждым красивым кадром стоят не только профессионализм и талант, но и ошибки, конфликты, компромиссы и огромный труд целой команды.',
    'Особое внимание уделяется развитию регионального кинематографа. Действие разворачивается в Калужской области, где создание кино становится настоящим испытанием для молодых авторов, стремящихся реализовать свои идеи вдали от крупных кинопроизводственных центров.',
    '«По ту сторону кадра» — это история не столько о том, как снимают кино, сколько о людях, которые продолжают его создавать, даже когда всё идёт не по плану. Фильм с юмором и искренностью рассказывает о взрослении, разочаровании, дружбе и поиске настоящего смысла творчества, напоминая, что иногда самое важное происходит не перед камерой, а по ту сторону кадра.'
  ].join('\n'),
  backdrop: 'img/po-tu-storonu-hero.jpg',
  poster: 'img/po-tu-storonu-kadra.jpg', video: '',
  materials: [],
  vocab: '',
  tasks: false,
  isNew: true,
  isPick: false,
  actors: [
    { pid: 'margarita-proskurina', name: 'Маргарита Проскурина', role: 'Актриса', photo: 'img/people/proskurina.jpg' },
    { pid: 'anna-shestopalova', name: 'Анна Шестопалова', role: 'Актриса', photo: 'img/people/shestopalova.jpg' },
    { pid: 'valeriy-bordachev', name: 'Валерий Бордачёв', role: 'Актер', photo: 'img/people/bordachev.jpg' },
    { pid: 'evgeniy-bobrikov', name: 'Евгений Бобриков', role: 'Актер', photo: 'img/people/bobrikov.jpg' },
    { pid: 'aleksey-frey', name: 'Алексей Фрей', role: 'Актер', photo: 'img/people/frey.jpg' },
    { pid: 'lyubov-yurevna', name: 'Любовь Юрьевна', role: 'Актриса', photo: 'img/people/lyubov.jpg' },
    { pid: 'lina-yurlova', name: 'Лина Юрлова', role: 'Актриса', photo: 'img/people/yurlova.jpg' }
  ],
  crew: [
    { pid: 'emilia-karapetova', name: 'Карапетова Эмилия', role: 'Режиссер, Продюсер, Режиссер монтажа', photo: 'img/people/karapetova.jpg' },
    { pid: 'aleksey-zolotov', name: 'Алексей Золотов', role: 'Продюсер', photo: 'img/people/zolotov.jpg' },
    { pid: 'semyon-kleshchev', name: 'Клещёв Семён', role: 'Оператор', photo: 'img/people/kleshchev.jpg' },
    { pid: 'alina-zhumaeva', name: 'Жумаева Алина', role: 'Второй режиссер', photo: 'img/people/zhumaeva.jpg' },
    { pid: 'mikhail-androsov', name: 'Андросов Михаил', role: 'Гафер', photo: 'img/people/androsov.jpg' },
    { pid: 'leyla-rybakova', name: 'Рыбакова Лейла', role: 'Звукооператор', photo: 'img/people/rybakova.jpg' },
    { pid: 'aleksey-urmanov', name: 'Урманов Алексей', role: 'Сценарист', photo: 'img/people/urmanov.jpg' },
    { pid: 'ksenia-arzina', name: 'Арзина Ксения', role: 'Художник-раскадровщик', photo: 'img/people/arzina.jpg' },
    { pid: 'margarita-matveeva', name: 'Матвеева Маргарита', role: 'Художник-постановщик', photo: 'img/people/matveeva.jpg' },
    { pid: 'vyacheslav-prokhorov', name: 'Прохоров Вячеслав', role: 'Колорист', photo: 'img/people/prokhorov.jpg' }
  ]
};

const stubFilm = i => ({
  title: 'Название фильма', year: 1234, country: 'Россия', language: 'Русский', genre: 'Комедия',
  director: 'Артемов', duration: '1,38', description: lorem,
  poster: '', video: '',
  vocab: VOCAB_LEVELS[i % 3],   // демо-значения для заглушек
  tasks: i % 2 === 0,
  isNew: i < 6,
  isPick: i > 3,
  actors: make(5, () => ({ name: 'ФИ актера', role: 'роль', photo: '' })),
  crew: make(4, () => ({ name: 'ФИ', role: 'должность', photo: '' }))
});

const films = make(10, i => i === 0 ? vydohni : i === 1 ? poTuStoronu : stubFilm(i));

// Фильмы, добавленные через админ-панель (демо: хранятся в этом браузере).
// Тексты экранируются, ссылки и картинки проверяются: в разметку попадает только безопасное.
const CUSTOM_FILMS_KEY = 'action_demo_films';

function readCustomFilms() {
  try {
    const list = JSON.parse(localStorage.getItem(CUSTOM_FILMS_KEY) || '[]');
    return Array.isArray(list) ? list : [];
  } catch { return []; }
}

function escHtml(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g,
    c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function normalizeFilm(raw) {
  const list = v => Array.isArray(v) ? v : [];
  const img = v => /^data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+/=]+$/.test(v || '') ? v : '';
  const link = v => /^https?:\/\/[^\s"'<>]+$/i.test(v || '') ? v : '';

  return {
    id: String(raw.id), custom: true,
    title: escHtml(raw.title || 'Без названия'),
    year: escHtml(raw.year), country: escHtml(raw.country), language: escHtml(raw.language), genre: escHtml(raw.genre),
    director: escHtml(raw.director), directorId: '', duration: escHtml(raw.duration),
    summary: escHtml(raw.summary), description: escHtml(raw.description),
    backdrop: img(raw.backdrop), poster: img(raw.poster), video: link(raw.video),
    isNew: Boolean(raw.isNew), isPick: Boolean(raw.isPick),
    vocab: VOCAB_LEVELS.includes(raw.vocab) ? raw.vocab : '', tasks: Boolean(raw.tasks),
    actors: list(raw.actors).map(p => ({ name: escHtml(p.name), role: 'Актёр', character: escHtml(p.character), photo: img(p.photo) })),
    crew: list(raw.crew).map(p => ({ name: escHtml(p.name), role: escHtml(p.role), photo: img(p.photo) }))
  };
}

// новые фильмы идут первыми (самый свежий — в начале)
films.unshift(...readCustomFilms().map(raw => normalizeFilm(raw)).reverse());

// Авторы, добавленные через админ-панель
const CUSTOM_AUTHORS_KEY = 'action_demo_authors';

function readCustomAuthors() {
  try {
    const list = JSON.parse(localStorage.getItem(CUSTOM_AUTHORS_KEY) || '[]');
    return Array.isArray(list) ? list : [];
  } catch { return []; }
}

function normalizeAuthor(raw) {
  const img = /^data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+/=]+$/.test(raw.photo || '') ? raw.photo : '';
  return {
    id: String(raw.id), custom: true, pid: '',
    name: escHtml(raw.name || 'Без имени'), role: escHtml(raw.role || 'Автор'),
    bio: escHtml(raw.bio), photo: img
  };
}


const events = make(12, () => ({
  title: 'Название мероприятия', date: '01.01', description: lorem, image: ''
}));

const alisaAuthor = {
  pid: 'alisa-sergeeva', name: 'Сергеева Алиса Васильевна', role: 'Режиссер',
  bio: [
    'Я — Алиса Сергеева, продюсер, видеограф и лайф-фотограф. В своих работах стремлюсь сохранять честность момента, показывая человека без масок и лишнего глянца.',
    'Мой путь в кино начался с площадки программы «Что? Где? Когда?», где я впервые почувствовала магию создания экранных историй. Сегодня я получаю высшее образование в сфере продюсирования кино и телевидения, создаю проекты и ищу смыслы через визуальное искусство.',
    'Для меня кадр — это не просто изображение, а живой диалог с человеком и его историей.'
  ].join('\n'), photo: 'img/people/alisa.jpg'
};

const emiliaAuthor = {
  pid: 'emilia-karapetova', name: 'Карапетова Эмилия', role: 'Режиссер',
  bio: lorem, photo: 'img/people/karapetova.jpg'
};

const stubAuthor = () => ({
  name: 'Имя Фамилия', role: 'должность', bio: lorem, photo: ''
});

const authors = make(12, i => i === 0 ? emiliaAuthor : i === 1 ? alisaAuthor : stubAuthor());

authors.unshift(...readCustomAuthors().map(raw => normalizeAuthor(raw)).reverse());

const show = { title: 'Название шоу', description: 'Краткое описание сути шоу' };
const episodes = make(3, i => ({ title: `серия ${i + 1}`, description: lorem, video: '' }));


const eventCard = (e, page) => `
  <a class="ev" href="#/${page}/${e.id}">
    <div class="ph">${pic(e.image)}</div>
    <div class="ev-i">
      <b>${e.date}</b>
      <div>
        <h4>${e.title}</h4>
        <p>${e.description}</p>
      </div>
    </div>
  </a>`;

const filmCard = f => `
  <a class="fl" href="#/film/${f.id}" data-genres="${genreList(f).join('|').toLowerCase()}" data-lang="${langKey(f)}"
     data-year="${String(f.year || '').trim()}" data-country="${String(f.country || '').trim().toLowerCase()}"
     data-vocab="${String(f.vocab || '').toLowerCase()}" data-tasks="${f.tasks ? '1' : '0'}">
    <div class="ph">${pic(f.poster)}</div>
    <h4>${f.title}</h4>
    <small>${f.genre}</small>
    ${cardRating(f.id)}
  </a>`;

const authorCard = a => `
  <article class="au">
    <div class="ph">${pic(a.photo)}</div>
    <h4>${a.name}</h4>
    <small>${a.role}</small><br>
    <a class="pill" href="#/author/${a.id}">фильмография</a>
  </article>`;

const personCard = p => {
  const inner = `
    <div class="ph">${pic(p.photo)}</div>
    <h4>${p.name}</h4>
    <small>${p.character || p.role}</small>`;
  if (!p.pid) return `<article class="person">${inner}</article>`;

  const author = authors.find(a => a.pid === p.pid);
  const href = author ? `#/author/${author.id}` : `#/person/${p.pid}`;
  return `<a class="person" href="${href}">${inner}</a>`;
};

const peopleRow = list => `
  <div class="rowwrap">
    <div class="row">${cards(list, personCard)}</div>
    <button class="arr arr-prev" aria-label="Назад" hidden>‹</button>
    <button class="arr arr-next" aria-label="Далее">›</button>
  </div>`;

const searchBox = () => `
  <label class="search">
    <span>⌕</span>
    <input type="search" placeholder="Поиск">
  </label>`;

const titleBar = title => `
  <div class="bar">
    <h1>${title}</h1>
    ${searchBox()}
  </div>`;

const filmRow = (title, list) => !list.length ? '' : `
  <section>
    <h2>${title}</h2>
    <div class="rowwrap">
      <div class="row">${cards(list, filmCard)}</div>
      <button class="arr arr-prev" aria-label="Назад" hidden>‹</button>
      <button class="arr arr-next" aria-label="Далее">›</button>
    </div>
  </section>
  <hr>`;

function embedUrl(url) {
  let m = url.match(/(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([\w-]{11})/i);
  if (m) return `https://www.youtube.com/embed/${m[1]}`;

  m = url.match(/drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?(?:.*&)?id=)([\w-]+)/i);
  if (m) return `https://drive.google.com/file/d/${m[1]}/preview`;

  return url;
}

function player(url) {
  if (!/^https?:\/\//i.test(url || '')) return '<div class="player">видеоплеер</div>';
  if (/\.(mp4|webm)(\?|$)/i.test(url)) {
    return `<div class="player"><video controls src="${url}"></video></div>`;
  }
  return `<div class="player"><iframe src="${embedUrl(url)}" allowfullscreen loading="lazy"
         referrerpolicy="strict-origin-when-cross-origin"
         allow="autoplay; fullscreen; picture-in-picture"></iframe></div>`;
}

// Слайды раздела «О нас». Меняйте тексты, фото и ссылки только здесь, вёрстка подхватит.
const aboutSlides = [
  {
    photo: 'img/about-1.jpg',
    title: 'Кино, которое выходит за рамки экрана.',
    text: [
      'The Action — онлайн-кинотеатр авторского кино, где независимые истории находят своего зрителя.',
      'Смотрите фильмы, короткий метр и оригинальные шоу со всего мира. Открывайте новые имена, культуры и смыслы.'
    ],
    buttons: [{ label: 'Открыть каталог фильмов', link: '#/films' }]
  },
  {
    photo: '',
    gfx: true,   // графический слайд без фото
    title: 'Английский, который выходит за рамки учебников.',
    text: [
      'Изучайте английский язык через авторское кино вместе с The Action. Смотрите фильмы в оригинале, погружайтесь в живую речь и закрепляйте знания с помощью интерактивных заданий, двойных субтитров, транскрипций и разбора лексики.',
      'Для преподавателей мы создали особые возможности: организуйте собственные онлайн-кинопросмотры, приглашайте студентов по ссылке, смотрите фильмы вместе и обсуждайте их в формате полноценного занятия.',
      'Используйте образовательные материалы, задания и эксклюзивный контент от авторов фильмов для подготовки уроков. А ещё открывайте лекции и образовательные мероприятия по подписке.'
    ],
    featuresTitle: 'Возможности The Action',
    features: [
      { icon: 'users', text: 'Свои онлайн-кинопросмотры' },
      { icon: 'subs', text: 'Двойные субтитры' },
      { icon: 'doc', text: 'Транскрипции и лексика' },
      { icon: 'book', text: 'Задания и материалы для уроков' },
      { icon: 'video', text: 'Лекции и мастер-классы' },
      { icon: 'star', text: 'Контент от авторов' }
    ],
    buttons: [
      { label: 'Выбрать подписку', link: '#/plans' },
      { label: 'Изучить подробнее', link: '#/teachers', ghost: true }
    ]
  },
  {
    photo: 'img/about-3.jpg',
    title: 'Не только на экране. Встречаемся вживую.',
    text: [
      'The Action — больше, чем онлайн-кинотеатр. Это пространство, где зрители, кинематографисты и творческие люди становятся частью единого сообщества.',
      'В нашей афише — офлайн-кинопоказы, фестивали, творческие встречи, мастер-классы и мероприятия партнёров. Смотрите кино на большом экране, знакомьтесь с авторами, обсуждайте фильмы и находите единомышленников.',
      'А если хочется присоединиться из любой точки мира — посещайте онлайн-лекции и встречи с приглашёнными экспертами. Часть событий доступна бесплатно.'
    ],
    buttons: [{ label: 'Афиша мероприятий', link: '#/afisha' }]
  }
];

const aboutIcons = {
  users: '<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.6 2.7-5.6 6-5.6s6 2 6 5.6"/><circle cx="17.5" cy="9" r="2.4"/><path d="M17 14.6c2.4 0 4 1.5 4 4.4"/>',
  subs: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M7 11h10M7 15h6"/>',
  doc: '<rect x="5" y="3" width="14" height="18" rx="3"/><path d="M9 9h6M9 13h6"/>',
  book: '<path d="M12 6c-2-1.5-5-2-9-2v14c4 0 7 .5 9 2 2-1.5 5-2 9-2V4c-4 0-7 .5-9 2zM12 6v14"/>',
  video: '<rect x="2.5" y="6" width="13" height="12" rx="3"/><path d="M15.5 10.5l6-3v9l-6-3z"/>',
  star: '<path d="M12 3l2.7 5.6 6.1.8-4.5 4.3 1.1 6.1L12 16.8 6.6 19.8l1.1-6.1L3.2 9.4l6.1-.8z"/>'
};

const aboutIcon = name =>
  `<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${aboutIcons[name] || ''}</svg>`;

function aboutSlider() {
  const total = aboutSlides.length;
  const arrow = (dir, label, sign) =>
    `<button type="button" class="about-arr about-arr-${dir > 0 ? 'next' : 'prev'}" data-about-dir="${dir}" aria-label="${label}">${sign}</button>`;

  return `
    <div class="about-slider" role="region" aria-roledescription="carousel" aria-label="О нас">
      <div class="about-track" tabindex="0">
        ${aboutSlides.map((s, i) => `
          <article class="about-slide${s.gfx ? ' about-gfx' : ''}" aria-label="Слайд ${i + 1} из ${total}">
            ${s.gfx ? '' : `<div class="ph about-photo">${pic(s.photo)}</div>`}
            ${i > 0 ? arrow(-1, 'Предыдущий слайд', '‹') : ''}
            ${i < total - 1 ? arrow(1, 'Следующий слайд', '›') : ''}
            <div class="about-body">
              <h3 class="about-title">${s.title}</h3>
              ${s.text.map(t => `<p class="about-text">${t}</p>`).join('')}
              ${s.features ? `
                <div class="about-feats">
                  ${s.featuresTitle ? `<h4>${s.featuresTitle}</h4>` : ''}
                  <ul>${s.features.map(f => `<li>${aboutIcon(f.icon)}<span>${f.text}</span></li>`).join('')}</ul>
                </div>` : ''}
              <div class="about-btns">
                ${s.buttons.map(b => `<a class="btn about-btn${b.ghost ? ' about-btn-ghost' : ''}" href="${b.link}">${b.label} ↗</a>`).join('')}
              </div>
            </div>
          </article>`).join('')}
      </div>
    </div>`;
}

// Кто отправляет заявку на странице «Сотрудничество»
const roleOptions = [
  ['person', 'Просто человек'],
  ['author', 'Автор'],
  ['advertiser', 'Рекламодатель']
];

// подсказка в поле «Описание запроса» меняется вместе с выбором
const roleHints = {
  person: 'Расскажите ваш запрос',
  author: 'Расскажите о себе и своём проекте: фильм, сценарий, ссылки на работы',
  advertiser: 'Расскажите о компании и о том, какое сотрудничество вам интересно'
};

const applyForm = () => `
  <form class="form" novalidate>
    <div class="role-field">
      <span class="role-t">Кто вы:</span>
      <div class="roles" role="radiogroup" aria-label="Кто отправляет заявку">
        ${roleOptions.map(([value, label], i) => `
          <label class="role">
            <input type="radio" name="role" value="${value}"${i === 0 ? ' checked' : ''}>
            <span>${label}</span>
          </label>`).join('')}
      </div>
    </div>
    <label>Ваши ФИ:
      <input name="name" placeholder="Фамилия Имя" required>
    </label>
    <label>Номер телефона:
      <input name="phone" type="tel" placeholder="+7 (***) ***-**-**" required>
    </label>
    <label>Описание запроса:
      <textarea name="msg" placeholder="Расскажите ваш запрос"></textarea>
    </label>
    <button class="btn">оставить заявку</button>
    <p class="ok" hidden>Спасибо! Заявка отправлена.</p>
  </form>`;


// Контакты. Меняйте данные и вопросы только здесь, вёрстка подхватит.
const contacts = {
  telegram: 'https://t.me/',   // TODO: вставьте ссылку на ваш чат в Telegram
  email: 'theactionproduction@yandex.ru',
  requisites: [
    'ИП Карапетова Эмилия Вахтанговна',
    'ИНН 402810576541',
    'ОГРНИП 324400000040914'
  ]
};

// Вопросы и ответы (черновик: поправьте формулировки под себя)
const faq = [
  {
    q: 'Что такое The Action?',
    a: 'Онлайн-кинотеатр авторского кино: фильмы, короткий метр и оригинальные шоу, а также афиша офлайн- и онлайн-мероприятий.'
  },
  {
    q: 'Как начать смотреть?',
    a: 'Откройте каталог, выберите фильм и запустите плеер на его странице. Чтобы оценивать фильмы и сохранять их в закладки, войдите в аккаунт через значок профиля вверху страницы.'
  },
  {
    q: 'Сколько устройств можно подключить?',
    a: 'До 5 устройств на один аккаунт. Список устройств можно посмотреть и изменить в личном кабинете.'   // если меняете DEVICE_LIMIT ниже — меняйте и здесь
  },
  {
    q: 'Как оформить подписку?',
    a: 'Выберите подписку на странице <a href="#/plans">«Подписки»</a>: войти в аккаунт нужно только после выбора. Для оформления нужно привязать способ оплаты в личном кабинете.'
  },
  {
    q: 'Что входит в студенческую подписку?',
    a: 'Переводы фильмов и учебные файлы к ним. Оформить подписку можно в личном кабинете.'
  },
  {
    q: 'Я преподаватель. Что для меня?',
    a: 'Подписка преподавателя открывает образовательный контент к фильмам и возможность проводить конференции. Подробнее на странице <a href="#/teachers">«Для преподавателей»</a>.'
  },
  {
    q: 'Забыли пароль?',
    a: 'В окне входа нажмите «Забыли пароль?», укажите почту, и мы вышлем одноразовый код для смены пароля.'
  },
  {
    q: 'Как предложить сотрудничество?',
    a: 'Оставьте заявку на странице <a href="#/coop">«Сотрудничество»</a> или напишите нам на почту.'
  }
];

const contactIcons = {
  faq: '<circle cx="12" cy="12" r="9"/><path d="M9.6 9.4a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1.1 1-1.1 1.8"/><path d="M12 17h.01"/>',
  telegram: '<path d="M21 4L3 11l6 2.2L11 20l3-4.2 5 3.7L21 4z"/><path d="M9 13.2L21 4"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M3.5 7.5L12 13l8.5-5.5"/>'
};

const contactIcon = name =>
  `<span class="c-ico"><svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${contactIcons[name]}</svg></span>`;

const contactsBlock = () => `
  <div class="contacts">
    <div class="c-tiles">
      <button type="button" class="c-tile" data-faq aria-expanded="false" aria-controls="faq">
        ${contactIcon('faq')}
        <span class="c-txt"><b>Вопросы и ответы</b><small>Ответы на частые вопросы</small></span>
        <span class="c-go c-chev" aria-hidden="true"></span>
      </button>
      <div class="faq" id="faq" hidden>
        ${faq.map(item => `
          <details>
            <summary>${item.q}</summary>
            <p>${item.a}</p>
          </details>`).join('')}
      </div>
      <a class="c-tile c-tile-main" href="${contacts.telegram}" target="_blank" rel="noopener">
        ${contactIcon('telegram')}
        <span class="c-txt"><b>Чат в Telegram</b><small>Написать нам в мессенджере</small></span>
        <span class="c-go" aria-hidden="true">↗</span>
      </a>
      <a class="c-tile" href="mailto:${contacts.email}">
        ${contactIcon('mail')}
        <span class="c-txt"><b>Почта для связи</b><small>${contacts.email}</small></span>
        <span class="c-go" aria-hidden="true">↗</span>
      </a>
    </div>

    <div class="contacts-req">${contacts.requisites.map(r => `<span>${r}</span>`).join('')}</div>
  </div>`;

/* ---- материалы к фильму (по преподавательской подписке) ---- */

const matIcons = {
  book: '<path d="M12 6c-2-1.5-5-2-9-2v14c4 0 7 .5 9 2 2-1.5 5-2 9-2V4c-4 0-7 .5-9 2zM12 6v14"/>',
  lock: '<rect x="5" y="11" width="14" height="10" rx="3"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>'
};

const matIcon = (name, size = 24) =>
  `<svg viewBox="0 0 24 24" width="${size}" height="${size}" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${matIcons[name]}</svg>`;

// материалы задаются у фильма: materials: [{ title, text, link }]
function materialsBlock(f) {
  if (!hasStudyAccess()) {
    return `
      <div class="mat">
        <span class="mat-ico">${matIcon('lock', 26)}</span>
        <div>
          <h4>Материалы к фильму для обучения</h4>
          <p>Учебные файлы, задания и материалы для уроков открываются со студенческой или преподавательской подпиской.</p>
          <a class="btn" href="#/plans">оформить подписку</a>
        </div>
      </div>`;
  }

  const list = (Array.isArray(f.materials) ? f.materials : []).filter(m => m && m.title);
  if (!list.length) return `
    <div class="mat">
      <span class="mat-ico">${matIcon('book', 26)}</span>
      <div>
        <h4>Доступ открыт</h4>
        <p>Материалы к этому фильму появятся здесь.</p>
      </div>
    </div>`;

  return `<div class="mat-list">${list.map(m => {
    const link = /^https?:\/\//i.test(m.link || '') ? m.link : '';
    const inner = `
      <span class="mat-ico">${matIcon('book')}</span>
      <span class="mat-txt"><b>${m.title}</b>${m.text ? `<small>${m.text}</small>` : ''}</span>
      ${link ? '<span class="mat-go" aria-hidden="true">↗</span>' : ''}`;
    return link
      ? `<a class="mat-item" href="${link}" target="_blank" rel="noopener">${inner}</a>`
      : `<div class="mat-item">${inner}</div>`;
  }).join('')}</div>`;
}

/* ---- фильтры каталога: жанр и язык ---- */

// жанры берём из поля genre: «Драма, комедия, 14+» → драма, комедия (возрастной рейтинг не считается)
function genreList(f) {
  return String(f.genre || '').split(',').map(s => s.trim()).filter(g => g && !/^\d{1,2}\+$/.test(g));
}

let filmFilter = { genre: '', lang: '', year: '', country: '', vocab: '', tasks: '' };

// язык фильма для фильтра: ru или en
function langKey(f) {
  const l = String(f.language || '').toLowerCase();
  return /англ|english/.test(l) ? 'en' : /рус|russian/.test(l) ? 'ru' : '';
}

const filterBar = () => {
  const genres = new Map();
  const years = new Map();
  const countries = new Map();
  films.forEach(f => {
    genreList(f).forEach(g => genres.set(g.toLowerCase(), g));
    const y = String(f.year || '').trim();
    if (y) years.set(y, y);
    const c = String(f.country || '').trim();
    if (c) countries.set(c.toLowerCase(), c);
  });
  const byLabel = (a, b) => a[1].localeCompare(b[1], 'ru');

  const group = (key, title, map) => `
    <div class="filt">
      <span class="filt-t">${title}</span>
      <div class="filt-chips">
        <button type="button" class="chip on" data-filter="${key}" data-val="">Все</button>
        ${[...map].map(([v, label]) =>
          `<button type="button" class="chip" data-filter="${key}" data-val="${v}">${label}</button>`).join('')}
      </div>
    </div>`;

  // лексика и задания — только для студенческой и преподавательской подписок
  const study = hasStudyAccess()
    ? group('vocab', 'Лексика', VOCAB_LEVELS.map(v => [v.toLowerCase(), v]))
      + group('tasks', 'Задания', [['0', 'Без заданий'], ['1', 'С заданиями']])
    : '<p class="filt-lock">Фильтры по лексике и заданиям открываются с <a href="#/plans">студенческой или преподавательской подпиской</a>.</p>';

  return `
  <div class="filt-wrap">
    <button type="button" class="filt-toggle" data-filt-toggle aria-expanded="false" aria-controls="filters">
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16l-6 7.5V19l-4-2v-4.5z"/></svg>
      Фильтры <span class="filt-count" hidden></span>
    </button>
    <div class="filters" id="filters" hidden>
      ${group('genre', 'Жанр', [...genres].sort(byLabel))}
      ${group('lang', 'Язык', [['ru', 'Русский'], ['en', 'Английский']])}
      ${group('year', 'Год', [...years].sort((a, b) => Number(b[0]) - Number(a[0])))}
      ${group('country', 'Страна', [...countries].sort(byLabel))}
      ${study}
      <div class="filt-foot">
        <button type="button" class="pill" data-filt-reset>сбросить</button>
        <button type="button" class="btn" data-filt-close>готово</button>
      </div>
    </div>
  </div>`;
};

// поиск и фильтры работают вместе; пустые ряды скрываются
function applyFilters() {
  const input = $('.search input');
  const query = input ? input.value.trim().toLowerCase() : '';
  const onFilms = document.body.className === 'films';

  $$('.ev, .fl, .au').forEach(card => {
    let ok = card.textContent.toLowerCase().includes(query);
    if (ok && onFilms && card.classList.contains('fl')) {
      const genres = (card.dataset.genres || '').split('|');
      ok = (!filmFilter.genre || genres.includes(filmFilter.genre))
        && (!filmFilter.lang || card.dataset.lang === filmFilter.lang)
        && (!filmFilter.year || card.dataset.year === filmFilter.year)
        && (!filmFilter.country || card.dataset.country === filmFilter.country)
        && (!filmFilter.vocab || card.dataset.vocab === filmFilter.vocab)
        && (filmFilter.tasks === '' || card.dataset.tasks === filmFilter.tasks);
    }
    card.style.display = ok ? '' : 'none';
  });

  if (!onFilms) return;

  let visible = 0;
  $$('#app > section').forEach(sec => {
    const any = $$('.fl', sec).some(c => c.style.display !== 'none');
    sec.hidden = !any;
    const hr = sec.nextElementSibling;
    if (hr && hr.tagName === 'HR') hr.hidden = !any;
    if (any) visible++;
  });
  const empty = $('#no-films');
  if (empty) empty.hidden = visible > 0;
}

const pages = {

  home: () => `
    <div class="big marquee" aria-label="КИНОТЕАТР АВТОРСКОГО КИНО">
      <div class="marquee-track">
        <div class="marquee-group">${'<span>КИНОТЕАТР АВТОРСКОГО КИНО</span>'.repeat(3)}</div>
        <div class="marquee-group" aria-hidden="true">${'<span>КИНОТЕАТР АВТОРСКОГО КИНО</span>'.repeat(3)}</div>
      </div>
    </div>

    <section class="hero" id="top">
      <ul>
        <li><a data-scroll="films">Наши фильмы</a></li>
        <li><a data-scroll="afisha">Афиша</a></li>
        <li><a data-scroll="about">О нас</a></li>
        <li><a data-scroll="contacts">Контакты</a></li>
      </ul>
      <img src="logo-3d.png" alt="ACTION">
    </section>
    <hr>

    <section class="center" id="films">
      <h2>Наши фильмы</h2>
      <div class="grid4">${cards(films.slice(0, 4), filmCard)}</div>
      <div class="more"><a class="btn" href="#/films">посмотреть все</a></div>
    </section>
    <hr>

    <section class="center" id="afisha">
      <h2>Афиша</h2>
      <div class="grid3">${cards(events.slice(0, 3), e => eventCard(e, 'event'))}</div>
      <div class="more"><a class="btn" href="#/afisha">перейти к афише</a></div>
    </section>
    <hr>

    <section class="center" id="about">
      ${aboutSlider()}
    </section>
    <hr>

    


    <section class="center" id="contacts">
      <h2>Контакты</h2>
      ${contactsBlock()}
    </section>`,

  films: () => {
    filmFilter = { genre: '', lang: '', year: '', country: '', vocab: '', tasks: '' };
    return titleBar('Фильмы') +
      filterBar() +
      filmRow('Наши фильмы', films) +
      filmRow('Стоит посмотреть', films.filter(f => f.isPick)) +
      filmRow('Новинки', films.filter(f => f.isNew)) +
      '<p class="state" id="no-films" hidden>По вашему запросу ничего не найдено</p>';
  },

  film: id => {
    const f = byId(films, id);
    if (!f) return notFound();

    const specs = [['Год производства:', f.year], ['Страна:', f.country], ['Язык:', f.language], ['Жанр:', f.genre],
    ['Режиссер:', f.director], ['Длительность:', f.duration]].filter(([, v]) => v);

    const paragraphs = list => list.filter(Boolean).join('\n').split('\n')
      .map(t => `<p class="film-text">${t}</p>`).join('');

    const meta = [f.year, f.country, f.language, f.genre,
    f.director && `Режиссер: ${f.director}`,
    f.duration && `Длительность: ${f.duration}`].filter(Boolean).join(' · ');

    const hasPeople = f.actors.length || f.crew.length;

    const castCrew = `
      ${f.actors.length ? `<h3 class="film-h">Актерский состав</h3>
        ${peopleRow(f.actors)}<hr>` : ''}
      ${f.crew.length ? `<h3 class="film-h">Над фильмом работали</h3>
        ${peopleRow(f.crew)}` : ''}`;

    const top = f.backdrop ? `
      <section class="film-hero" style="background-image:url('${f.backdrop}')">
        <div class="film-hero-in">
          <h1 class="film-title">${f.title}</h1>
          ${meta ? `<p class="film-meta">${meta}</p>` : ''}
          ${f.summary ? `<p class="film-lead">${f.summary}</p>` : ''}
        </div>
      </section>` : `
      <section class="film-top">
        <div>
          <h1 class="film-title">${f.title}${f.year ? `, ${f.year}` : ''}</h1>
          <h3 class="film-h">О фильме</h3>
          <dl class="film-specs">${specs.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl>
          ${paragraphs([f.summary, f.description])}
        </div>
        <div class="film-poster">${pic(f.poster, 'постер фильма')}</div>
      </section>`;

    const details = f.backdrop ? `
      <section class="tabs">
        <div class="tabs-bar" role="tablist">
          <button class="tab on" role="tab" aria-selected="true" data-tab="descr">Описание</button>
          ${hasPeople ? '<button class="tab" role="tab" aria-selected="false" data-tab="crew">Создатели</button>' : ''}
          <button class="tab tab-hl" role="tab" aria-selected="false" data-tab="mat">${matIcon('book', 18)}<span>Материалы</span><i>для обучения</i></button>
        </div>
        <div class="tab-panel" data-panel="descr">${paragraphs([f.description])}</div>
        ${hasPeople ? `<div class="tab-panel" data-panel="crew" hidden>${castCrew}</div>` : ''}
        <div class="tab-panel" data-panel="mat" hidden>${materialsBlock(f)}</div>
      </section>` : `${castCrew}
      <section class="mat-sec">
        <h3 class="film-h">Материалы</h3>
        ${materialsBlock(f)}
      </section>`;

    return `
      ${top}

      ${filmActions(f)}

      ${player(f.video)}

      ${hasPeople
        ? `<div class="more"><button class="btn" data-credits="${f.id}">смотреть титры</button></div>` : ''}

      ${details}`;
  },

  afisha: () =>
    titleBar('Афиша') +
    `<div class="grid4">${cards(events, e => eventCard(e, 'event'))}</div>`,

  event: id => {
    const e = byId(events, id);
    if (!e) return notFound();
    return `
      <section class="detail">
        <div class="ph">${pic(e.image, 'изображение')}</div>
        <div>
          <span class="detail-date">${e.date}</span>
          <h1 class="film-title">${e.title}</h1>
          <p class="film-text">${e.description}</p>
        </div>
      </section>`;
  },

  show: () => `
    <section class="showpg">
      <h1>${show.title}</h1>
      <p>${show.description}</p>
      <a class="btn" href="#/episode">посмотреть последнюю серию</a>
    </section>`,

  episode: () => {
    const ep = episodes[episodes.length - 1];
    return `
      <h1 class="film-title">${show.title}, ${ep.title}</h1>
      ${player(ep.video)}
      <h3 class="film-h">О серии</h3>
      <p class="film-text">${ep.description}</p>`;
  },

  partners: () =>
    titleBar('Наши авторы') +
    `<div class="grid6">${cards(authors, authorCard)}</div>`,

  author: id => {
    const a = byId(authors, id);
    if (!a) return notFound();
    const list = a.pid ? films.filter(f => f.directorId === a.pid) : [];
    return `
      <section class="detail detail-author">
        <div class="ph">${pic(a.photo, 'фото автора')}</div>
        <div>
          <h1 class="film-title">${a.name}</h1>
          <small>${a.role}</small>
          ${a.bio ? `<h3 class="film-h">Об авторе</h3>${paragraphs(a.bio)}` : ''}
        </div>
      </section>
      ${list.length ? `<h3 class="film-h">Фильмография</h3>
        <div class="grid6">${cards(list, filmCard)}</div>` : ''}`;
  },

  person: pid => {
    const list = films.filter(f => [...f.actors, ...f.crew].some(p => p.pid === pid));
    if (!list.length) return notFound();

    const entries = list.flatMap(f => [...f.actors, ...f.crew]).filter(p => p.pid === pid);
    const p = entries[0];
    const roles = [...new Set(entries.map(e => e.role))].join(', ');

    return `
      <section class="detail detail-author">
        <div class="ph">${pic(p.photo, 'фото')}</div>
        <div>
          <h1 class="film-title">${p.name}</h1>
          <small>${roles}</small>
          ${p.bio ? `<h3 class="film-h">Об авторе</h3>${paragraphs(p.bio)}` : ''}
        </div>
      </section>
      <h3 class="film-h">Фильмография</h3>
      <div class="grid6">${cards(list, filmCard)}</div>`;
  },

  account: () => authReady ? accountPage() : '',

  plans: () => authReady ? plansPage() : '',

  teachers: () => {
    const lockTeach = `
      <p class="acc-sub">Откроется после оформления преподавательской подписки.</p>
      <a class="btn" href="#/plans">оформить подписку</a>`;
    const lockStudy = `
      <p class="acc-sub">Откроется после оформления студенческой или преподавательской подписки.</p>
      <a class="btn" href="#/plans">оформить подписку</a>`;
    // переводы и учебные файлы открыты и студентам; конференции только преподавателям
    const block = (title, text, soon = 'Материалы появятся здесь.', teachOnly = false) => `
      <section class="acc-card">
        <h3 class="acc-ph">${title}</h3>
        <p class="acc-sub">${text}</p>
        ${(teachOnly ? hasTeacherAccess() : hasStudyAccess())
          ? `<p class="acc-sub teach-open">Доступ открыт. ${soon}</p>`
          : (teachOnly ? lockTeach : lockStudy)}
      </section>`;

    return `
      <h1>Для преподавателей</h1>
      <p class="doc-lead">Фильмы кинотеатра можно использовать на занятиях: к ним есть образовательные материалы и переводы, а занятия можно проводить в формате конференций.</p>
      <div class="grid2 teach">
        ${block('Учебные файлы', 'Материалы для работы с фильмами на занятиях и для учёбы.')}
        ${block('Переводы', 'Переводы фильмов для занятий.')}
        ${block('Конференции', 'Проводите онлайн-занятия и встречи со студентами.', 'Создавайте конференции в <a href="#/account">личном кабинете</a>.', true)}
      </div>`;
  },

  admin: () => authReady ? adminPage() : '',

  terms: () => docPage('Пользовательское соглашение'),
  privacy: () => docPage('Политика конфиденциальности'),

  coop: () => `
    <h1>Сотрудничество</h1>
    <h2 class="sub" style="margin-top:20px">Оставить заявку</h2>
    ${applyForm()}`
};


/* ================= Оценки, закладки, «поделиться» ================= */
// Демо: оценки и закладки хранятся в этом браузере (localStorage). Рейтинг складывается
// только из оценок, поставленных здесь. Когда появится сервер, замените функции
// lsRead/lsWrite запросами к нему, чтобы рейтинг был общим для всех зрителей.
// Это блок на функциях-декларациях и не зависит от кода авторизации ниже:
// страница фильма рисуется раньше, чем тот код загрузится.

const bookmarkIcon = `<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M6 3h12v18l-6-4.5L6 21z" fill="currentColor" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`;
const shareIcon = `<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="2.6"/><circle cx="6" cy="12" r="2.6"/><circle cx="18" cy="19" r="2.6"/><path d="M8.3 10.8l7.4-4.4M8.3 13.2l7.4 4.4"/></svg>`;

const RATING_MAX = 10;                        // оценка от 1 до 10
const RATINGS_KEY = 'action_demo_ratings10';  // отдельный ключ, чтобы не смешивать со старой 5-балльной шкалой

function lsRead(key) {
  try { return JSON.parse(localStorage.getItem(key) || '{}'); } catch { return {}; }
}

function lsWrite(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* без хранилища */ }
}

function sessionUserId() {
  try { return localStorage.getItem('action_demo_session') || ''; } catch { return ''; }
}

function getMarks(uid) {
  return uid ? (lsRead('action_demo_marks')[uid] || []) : [];
}

function toggleMark(uid, filmId) {
  const all = lsRead('action_demo_marks');
  const id = String(filmId);
  const list = all[uid] || [];
  all[uid] = list.includes(id) ? list.filter(x => x !== id) : [...list, id];
  lsWrite('action_demo_marks', all);
}

function filmRating(filmId) {
  const votes = Object.values(lsRead(RATINGS_KEY)[filmId] || {});
  const count = votes.length;
  return { count, avg: count ? votes.reduce((a, b) => a + b, 0) / count : 0 };
}

function myRating(uid, filmId) {
  return uid ? Number((lsRead(RATINGS_KEY)[filmId] || {})[uid]) || 0 : 0;
}

// повторный клик по той же оценке снимает её
function setRating(uid, filmId, value) {
  if (!Number.isInteger(value) || value < 1 || value > RATING_MAX) return;
  const all = lsRead(RATINGS_KEY);
  const votes = all[filmId] || {};
  if (votes[uid] === value) delete votes[uid];
  else votes[uid] = value;
  all[filmId] = votes;
  lsWrite(RATINGS_KEY, all);
}

const fmtAvg = n => n.toFixed(1).replace('.', ',');

function plural(n, [one, few, many]) {
  const m10 = n % 10, m100 = n % 100;
  return m10 === 1 && m100 !== 11 ? one
    : m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14) ? few : many;
}

function cardRating(filmId) {
  const { count, avg } = filmRating(filmId);
  return count ? `<span class="fl-rate">★ ${fmtAvg(avg)}</span>` : '';
}

function filmActions(f) {
  const uid = sessionUserId();
  const marked = getMarks(uid).includes(String(f.id));
  const mine = myRating(uid, f.id);
  const { count, avg } = filmRating(f.id);

  const score = count
    ? `<b>${fmtAvg(avg)}</b><em>/ ${RATING_MAX}</em><span>${count} ${plural(count, ['оценка', 'оценки', 'оценок'])}</span>`
    : '<b>—</b><span>Пока нет оценок</span>';

  return `
    <div class="film-act" data-film="${f.id}">
      <div class="film-rate">
        <div class="film-score">${score}</div>
        <div class="film-vote">
        <div class="stars" role="group" aria-label="Ваша оценка">
          ${Array.from({ length: RATING_MAX }, (_, i) => RATING_MAX - i).map(v => `
            <button type="button" class="star${v <= mine ? ' on' : ''}" data-film-act="rate" data-v="${v}"
              aria-label="Оценка ${v} из ${RATING_MAX}" title="${v}">★</button>`).join('')}
        </div>
        <small class="film-mine">${mine ? `Ваша оценка: ${mine} из ${RATING_MAX}` : 'Оцените фильм по 10-балльной шкале'}</small>
        </div>
      </div>
      <div class="film-btns">
        <button type="button" class="film-btn${marked ? ' on' : ''}" data-film-act="mark" aria-pressed="${marked}">
          ${bookmarkIcon}${marked ? 'в закладках' : 'в закладки'}</button>
        <button type="button" class="film-btn" data-film-act="share">${shareIcon}поделиться</button>
      </div>
    </div>`;
}

function refreshFilmActs() {
  $$('.film-act').forEach(box => {
    const film = byId(films, box.dataset.film);
    if (film) box.outerHTML = filmActions(film);
  });
}

let toastTimer = 0;
function toast(text) {
  let el = $('.toast');
  if (!el) {
    el = document.createElement('div');
    el.className = 'toast';
    el.setAttribute('role', 'status');
    document.body.append(el);
  }
  el.textContent = text;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const area = document.createElement('textarea');
    area.value = text;
    area.style.cssText = 'position:fixed;opacity:0';
    document.body.append(area);
    area.select();
    let ok = false;
    try { ok = document.execCommand('copy'); } catch { /* не вышло */ }
    area.remove();
    return ok;
  }
}

async function shareFilm(filmId) {
  const f = byId(films, filmId);
  if (!f) return;
  const url = location.href.split('#')[0] + '#/film/' + f.id;

  if (navigator.share) {
    try {
      await navigator.share({ title: f.title, text: `Фильм «${f.title}» — THE ACTION`, url });
      return;
    } catch (err) {
      if (err && err.name === 'AbortError') return;   // человек закрыл окно
    }
  }
  toast((await copyText(url)) ? 'Ссылка скопирована' : 'Скопируйте ссылку: ' + url);
}

document.addEventListener('click', e => {
  const btn = e.target.closest('[data-film-act]');
  if (!btn) return;

  const box = btn.closest('.film-act');
  const film = box && byId(films, box.dataset.film);
  if (!film) return;

  const act = btn.dataset.filmAct;
  if (act === 'share') return shareFilm(film.id);

  const uid = sessionUserId();
  if (!uid) {
    authNote = act === 'rate' ? 'Войдите, чтобы оценить фильм.' : 'Войдите, чтобы добавлять фильмы в закладки.';
    authReturn = location.hash || '#/';
    openAuth('login');
    return;
  }

  if (act === 'rate') setRating(uid, film.id, Number(btn.dataset.v));
  if (act === 'mark') toggleMark(uid, film.id);
  refreshFilmActs();
});


/* ================= Подвал и служебные страницы ================= */

let pendingScroll = '';   // раздел главной, к которому нужно прокрутить после перехода

function goSection(id) {
  if (document.body.className === 'home') {
    const el = $('#' + id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  } else {
    pendingScroll = id;
    location.hash = '#/';
  }
}

const siteFooter = document.createElement('footer');
siteFooter.className = 'foot';
siteFooter.innerHTML = `
  <p class="foot-copy">© 2026 THE ACTION. Все права защищены.</p>
  <nav class="foot-nav" aria-label="Информация">
    <a href="#/" data-goto="about">О нас</a>
    <a href="#/" data-goto="contacts">Контакты</a>
    <a href="#/plans">Подписки</a>
    <a href="#/teachers">Для преподавателей</a>
    <a href="#/terms">Пользовательское соглашение</a>
    <a href="#/privacy">Политика конфиденциальности</a>
  </nav>`;
($('main') || $('#app')).after(siteFooter);

document.addEventListener('click', e => {
  const link = e.target.closest('[data-goto]');
  if (!link) return;
  e.preventDefault();
  goSection(link.dataset.goto);
});

// учебные файлы и переводы: студенческая или преподавательская подписка
function hasStudyAccess() {
  try {
    const users = JSON.parse(localStorage.getItem('action_demo_users') || '[]');
    const me = users.find(u => u.id === sessionUserId());
    return Boolean(me && me.plan && (me.plan.id === 'student' || me.plan.id === 'teach'));
  } catch { return false; }
}

// доступ к материалам для преподавателей: есть активная подписка «Преподавателям»
function hasTeacherAccess() {
  try {
    const users = JSON.parse(localStorage.getItem('action_demo_users') || '[]');
    const me = users.find(u => u.id === sessionUserId());
    return Boolean(me && me.plan && me.plan.id === 'teach');
  } catch { return false; }
}

function docPage(title) {
  return `
    <h1>${title}</h1>
    <div class="doc">
      <p class="film-text">${lorem}</p>
      <p class="film-text">${lorem}</p>
    </div>`;
}

const menu = [
  { id: 'home', title: 'Главная' },
  { id: 'films', title: 'Фильмы' },
  { id: 'afisha', title: 'Афиша' },
  { id: 'show', title: 'Шоу' },
  { id: 'partners', title: 'Авторы' },
  { id: 'coop', title: 'Сотрудничество' }
];

$('#nav').innerHTML = menu.map(({ id, title }) =>
  `<a href="#/${id === 'home' ? '' : id}" data-k="${id}">${title}</a>`
).join('');

const burgerBtn = $('.burger');

function setMenu(open) {
  $('#nav').classList.toggle('open', open);
  burgerBtn.setAttribute('aria-expanded', open);
}


const parentTab = {
  film: 'films', person: 'films', event: 'afisha', episode: 'show', author: 'partners'
};

function closeCredits() {
  const box = $('.credits');
  if (!box) return;
  box.remove();
  document.body.style.overflow = '';
}

function openCredits(film) {
  if (!film || $('.credits')) return;

  const actors = film.actors.length ? `
    <h3>В ролях</h3>
    ${film.actors.map(p => `
      <div class="cr"><b>${p.name}</b>${p.character ? `<span>${p.character}</span>` : ''}</div>`).join('')}` : '';

  const crew = film.crew.length ? `
    <h3>Над фильмом работали</h3>
    ${film.crew.map(p => `
      <div class="cr"><span>${p.role}</span><b>${p.name}</b></div>`).join('')}` : '';

  const seconds = Math.round(18 + (film.actors.length + film.crew.length) * 3.2);
  const box = document.createElement('div');
  box.className = 'credits';
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-label', 'Титры');
  box.innerHTML = `
    <button class="credits-close" aria-label="Закрыть">×</button>
    <div class="credits-roll" style="--dur:${seconds}s">
      <h2>${film.title}</h2>
      ${film.year ? `<p class="credits-year">${film.year}</p>` : ''}
      ${actors}
      ${crew}
      <img class="credits-logo" src="logo-3d.png" alt="THE ACTION">
    </div>
    <p class="credits-hint">клик — пауза · Esc — закрыть</p>`;

  document.body.append(box);
  document.body.style.overflow = 'hidden';

  $('.credits-roll', box).addEventListener('animationend', () => setTimeout(closeCredits, 1500));
}

function syncArrows() {
  $$('.rowwrap').forEach(wrap => {
    const row = $('.row', wrap);
    $('.arr-prev', wrap).hidden = row.scrollLeft < 10;
    $('.arr-next', wrap).hidden = row.scrollLeft + row.clientWidth >= row.scrollWidth - 10;
  });
}

function route() {
  closeCredits();
  const [hash, param] = location.hash.replace('#/', '').split('/');
  const id = Object.prototype.hasOwnProperty.call(pages, hash) ? hash : 'home';

  // в кабинет пускаем только вошедших
  if (id === 'account' && authReady && !auth.current()) {
    location.hash = '#/';
    openAuth('login');
    return;
  }

  // админ-панель: только для администратора
  if (id === 'admin' && authReady && !isAdmin(auth.current())) {
    location.hash = '#/';
    return;
  }

  $('#app').innerHTML = pages[id](param);
  syncArrows();
  setMenu(false);
  document.body.className = id;

  $$('#nav a').forEach(link =>
    link.classList.toggle('on', link.dataset.k === (parentTab[id] || id))
  );

  window.scrollTo({ top: 0, behavior: 'instant' });

  if (pendingScroll) {
    const el = $('#' + pendingScroll);
    pendingScroll = '';
    if (el) el.scrollIntoView();
  }
}

addEventListener('hashchange', route);
addEventListener('resize', syncArrows);
route();


document.addEventListener('click', e => {
  if (e.target.closest('.burger')) {
    setMenu(!$('#nav').classList.contains('open'));
  } else if (e.target.closest('#nav a, .logo') || !e.target.closest('.top')) {
    setMenu(false);
  }

  const anchor = e.target.closest('[data-scroll]');
  if (anchor) {
    $('#' + anchor.dataset.scroll).scrollIntoView({ behavior: 'smooth' });
  }

  const creditsBtn = e.target.closest('[data-credits]');
  if (creditsBtn) openCredits(byId(films, creditsBtn.dataset.credits));

  const creditsBox = e.target.closest('.credits');
  if (creditsBox) {
    if (e.target.closest('.credits-close')) closeCredits();
    else creditsBox.classList.toggle('paused');
  }

  const tab = e.target.closest('.tab');
  if (tab) {
    const box = tab.closest('.tabs');
    $$('.tab', box).forEach(t => {
      t.classList.toggle('on', t === tab);
      t.setAttribute('aria-selected', t === tab);
    });
    $$('.tab-panel', box).forEach(p => { p.hidden = p.dataset.panel !== tab.dataset.tab; });
    syncArrows();
  }

  const arrow = e.target.closest('.arr');
  if (arrow) {
    const row = $('.row', arrow.parentElement);
    const direction = arrow.classList.contains('arr-prev') ? -1 : 1;
    row.scrollBy({ left: direction * row.clientWidth * 0.8 });
  }
});

document.addEventListener('scroll', e => {
  const row = e.target;
  if (!row.classList || !row.classList.contains('row')) return;

  $('.arr-prev', row.parentElement).hidden = row.scrollLeft < 10;
  $('.arr-next', row.parentElement).hidden =
    row.scrollLeft + row.clientWidth >= row.scrollWidth - 10;
}, true);

document.addEventListener('input', e => {
  const field = e.target;

  if (field.matches('.search input')) applyFilters();

  if (field.name === 'phone') {
    field.value = formatPhone(field.value);
  }
});

function formatPhone(value) {
  const digits = value.replace(/\D/g, '').replace(/^[78]/, '').slice(0, 10);
  let out = digits ? '+7 (' + digits.slice(0, 3) : '';

  if (digits.length > 3) out += ') ' + digits.slice(3, 6);
  if (digits.length > 6) out += '-' + digits.slice(6, 8);
  if (digits.length > 8) out += '-' + digits.slice(8);

  return out;
}

document.addEventListener('submit', e => {
  e.preventDefault();
  const form = e.target;
  if (form.closest('.auth, .acc, .adm')) return; // у окна входа, кабинета и админ-панели своя проверка
  let valid = true;

  $$('[required]', form).forEach(input => {
    const isPhone = input.name === 'phone';
    const bad = isPhone
      ? input.value.replace(/\D/g, '').length < 11
      : !input.value.trim();

    input.classList.toggle('err', bad);
    if (bad) valid = false;
  });

  if (!valid) return;

  $('.ok', form).hidden = false;
  form.reset();
  const msgField = $('textarea[name="msg"]', form);
  if (msgField && typeof roleHints !== 'undefined') msgField.placeholder = roleHints.person;
});

document.addEventListener('keydown', e => {
  const box = $('.credits');
  if (!box) return;
  if (e.key === 'Escape') closeCredits();
  if (e.key === ' ') {
    e.preventDefault();
    box.classList.toggle('paused');
  }
});


/* ---- сотрудничество: выбор роли меняет подсказку в поле запроса ---- */

document.addEventListener('change', e => {
  const radio = e.target;
  if (!radio.matches || !radio.matches('.roles input')) return;
  const area = $('textarea[name="msg"]', radio.closest('form'));
  if (area) area.placeholder = roleHints[radio.value] || roleHints.person;
});

/* ---- фильтры каталога: клик по кнопке жанра или языка ---- */

document.addEventListener('click', e => {
  const chip = e.target.closest('[data-filter]');
  if (!chip) return;
  const key = chip.dataset.filter;
  filmFilter[key] = chip.dataset.val;
  $$(`[data-filter="${key}"]`).forEach(c => c.classList.toggle('on', c === chip));
  applyFilters();
  syncArrows();
  updateFilterBadge();
});

/* ---- фильтры каталога: выскакивающая плашка ---- */

function setFiltersOpen(open) {
  const panel = $('#filters');
  const btn = $('[data-filt-toggle]');
  if (!panel || !btn) return;
  panel.hidden = !open;
  btn.setAttribute('aria-expanded', open);
}

// число включённых фильтров на кнопке, когда плашка закрыта
function updateFilterBadge() {
  const n = Object.values(filmFilter).filter(v => v !== '').length;
  const badge = $('.filt-count');
  if (!badge) return;
  badge.textContent = n;
  badge.hidden = !n;
}

document.addEventListener('click', e => {
  if (e.target.closest('[data-filt-toggle]')) {
    const panel = $('#filters');
    return setFiltersOpen(Boolean(panel && panel.hidden));
  }
  if (e.target.closest('[data-filt-close]')) return setFiltersOpen(false);

  if (e.target.closest('[data-filt-reset]')) {
    filmFilter = { genre: '', lang: '', year: '', country: '', vocab: '', tasks: '' };
    $$('[data-filter]').forEach(c => c.classList.toggle('on', c.dataset.val === ''));
    applyFilters();
    syncArrows();
    updateFilterBadge();
    return;
  }

  if (!e.target.closest('.filt-wrap')) setFiltersOpen(false);   // клик вне плашки закрывает её
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') setFiltersOpen(false);
});

/* ---- контакты: раскрывающийся список вопросов ---- */

document.addEventListener('click', e => {
  const btn = e.target.closest('[data-faq]');
  if (!btn) return;
  const panel = $('#faq');
  if (!panel) return;
  const open = panel.hidden;
  panel.hidden = !open;
  btn.setAttribute('aria-expanded', open);
});

/* ---- слайдер «О нас»: стрелки и клавиатура (свайп работает через scroll-snap) ---- */

function aboutStep(direction) {
  const track = $('.about-track');
  if (track) track.scrollBy({ left: direction * track.clientWidth, behavior: 'smooth' });
}

document.addEventListener('click', e => {
  const btn = e.target.closest('[data-about-dir]');
  if (btn) aboutStep(Number(btn.dataset.aboutDir));
});

document.addEventListener('keydown', e => {
  if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
  const track = $('.about-track');
  if (!track || $('.credits') || !authBox.hidden) return;
  if (e.target.closest && e.target.closest('input, textarea, select, [contenteditable]')) return;

  const rect = track.getBoundingClientRect();
  if (rect.bottom < 0 || rect.top > innerHeight) return;   // слайдер сейчас не на экране

  e.preventDefault();
  aboutStep(e.key === 'ArrowLeft' ? -1 : 1);
});


/* ================= Авторизация ================= */

// true: аккаунты хранятся только в этом браузере. Так можно проверить внешний вид и логику,
// но это НЕ настоящая защита: пользователи не видны владельцу сайта и не переносятся между устройствами.
// Когда появится сервер (например, PocketBase на VPS), замените методы объекта auth ниже и поставьте false.
const AUTH_DEMO = true;

// Логины администраторов. В демо любой может зарегистрировать такой логин в своём браузере,
// но добавленные фильмы увидит только он сам. На настоящем сервере роль администратора
// должна выдаваться и проверяться на сервере.
const ADMIN_LOGINS = ['admin'];
const isAdmin = user => Boolean(user && ADMIN_LOGINS.includes(String(user.login).toLowerCase()));

const AUTH_USERS = 'action_demo_users';
const AUTH_SESSION = 'action_demo_session';

const readUsers = () => {
  try { return JSON.parse(localStorage.getItem(AUTH_USERS) || '[]'); } catch { return []; }
};

const writeStore = (key, value) => {
  try { localStorage.setItem(key, value); } catch { throw new Error('Браузер не даёт сохранить данные'); }
};

async function sha256(text) {
  if (!window.crypto || !crypto.subtle) throw new Error('Вход работает только на https или localhost');
  const bytes = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return [...new Uint8Array(bytes)].map(b => b.toString(16).padStart(2, '0')).join('');
}

const randomSalt = () =>
  [...crypto.getRandomValues(new Uint8Array(16))].map(b => b.toString(16).padStart(2, '0')).join('');

const publicUser = user => {
  const { salt, hash, ...safe } = user;
  return safe;
};

const auth = {
  current() {
    const id = localStorage.getItem(AUTH_SESSION);
    const user = readUsers().find(u => u.id === id);
    return user ? publicUser(user) : null;
  },

  async register(data) {
    const users = readUsers();
    if (users.some(u => u.login.toLowerCase() === data.login.toLowerCase())) {
      throw new Error('Этот логин уже занят');
    }
    if (users.some(u => u.email.toLowerCase() === data.email.toLowerCase())) {
      throw new Error('Эта почта уже зарегистрирована');
    }

    const salt = randomSalt();
    const user = {
      id: salt.slice(0, 12),
      name: data.name.trim(),
      age: Number(data.age),
      phone: data.phone,
      email: data.email.trim(),
      login: data.login.trim(),
      promo: Boolean(data.promo),                       // согласие на рассылку
      promoAt: data.promo ? new Date().toISOString() : '',
      salt,
      hash: await sha256(salt + data.password)
    };

    writeStore(AUTH_USERS, JSON.stringify([...users, user]));
    writeStore(AUTH_SESSION, user.id);
    return publicUser(user);
  },

  async login(login, password) {
    const user = readUsers().find(u => u.login.toLowerCase() === login.trim().toLowerCase());
    if (!user || user.hash !== await sha256(user.salt + password)) {
      throw new Error('Неверный логин или пароль');
    }
    writeStore(AUTH_SESSION, user.id);
    return publicUser(user);
  },

  update(patch) {
    const users = readUsers();
    const i = users.findIndex(u => u.id === localStorage.getItem(AUTH_SESSION));
    if (i < 0) return null;
    users[i] = { ...users[i], ...patch };
    writeStore(AUTH_USERS, JSON.stringify(users));
    return publicUser(users[i]);
  },

  // Шаг 1 восстановления: выдаёт одноразовый код на почту.
  // Всегда отвечает одинаково, чтобы нельзя было узнать, есть ли такая почта в базе.
  async requestReset(email) {
    const user = readUsers().find(u => u.email.toLowerCase() === email.trim().toLowerCase());
    if (!user) return null;

    const code = String(crypto.getRandomValues(new Uint32Array(1))[0] % 1000000).padStart(6, '0');
    const salt = randomSalt();
    resetState = {
      email: user.email,
      salt,
      hash: await sha256(salt + code),
      expires: Date.now() + RESET_TTL,
      tries: 0
    };
    return sendResetCode(user.email, code);
  },

  // Шаг 2: проверяет код и ставит новый пароль.
  async resetPassword(email, code, password) {
    const s = resetState;
    if (!s || s.email.toLowerCase() !== email.toLowerCase()) throw new Error('Сначала запросите код');
    if (Date.now() > s.expires) { resetState = null; throw new Error('Срок действия кода истёк, запросите новый'); }
    if (s.tries >= RESET_TRIES) { resetState = null; throw new Error('Слишком много попыток, запросите новый код'); }

    s.tries++;
    if (s.hash !== await sha256(s.salt + code.trim())) throw new Error('Неверный код');

    const users = readUsers();
    const i = users.findIndex(u => u.email.toLowerCase() === s.email.toLowerCase());
    if (i < 0) throw new Error('Аккаунт не найден');

    const salt = randomSalt();
    users[i] = { ...users[i], salt, hash: await sha256(salt + password) };
    writeStore(AUTH_USERS, JSON.stringify(users));
    resetState = null;
  },

  logout() {
    localStorage.removeItem(AUTH_SESSION);
  }
};

/* ---- восстановление пароля ---- */

const RESET_TTL = 10 * 60 * 1000;   // код живёт 10 минут
const RESET_TRIES = 5;              // попыток ввода кода
let resetState = null;              // выданный код (хранится только в памяти страницы)
let resetShown = null;              // что показать на втором шаге: { email, demoCode }
let authNote = '';                  // сообщение над формой входа
let authReturn = '';                // куда вернуть после входа (например, на страницу фильма)

// ВАЖНО: сайт без сервера не может отправить письмо. В демо-режиме код показывается
// прямо на экране. Когда появится сервер, отправьте письмо здесь (запрос на ваш бэкенд
// или сервис вроде EmailJS), код в ответ не возвращайте и поставьте AUTH_DEMO = false.
// На настоящем сервере код и проверку его надо хранить и делать на сервере, не в браузере.
async function sendResetCode(email, code) {
  if (AUTH_DEMO) return code;
  // await fetch('/api/password-reset', { method: 'POST', body: JSON.stringify({ email, code }) });
  return null;
}

/* ---- проверка полей ---- */

const rules = {
  name: v => /^[A-Za-zА-Яа-яЁё'’-]+(\s+[A-Za-zА-Яа-яЁё'’-]+)+$/.test(v.trim())
    ? '' : 'Укажите фамилию и имя полностью',
  age: v => Number.isInteger(Number(v)) && Number(v) >= 1 && Number(v) <= 120
    ? '' : 'От 1 до 120',
  phone: v => v.replace(/\D/g, '').length === 11 ? '' : 'Введите номер полностью',
  email: v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? '' : 'Проверьте адрес почты',
  login: v => /^[A-Za-z0-9_.-]{3,20}$/.test(v.trim())
    ? '' : '3–20 символов: латиница, цифры, _ . -',
  password: v => v.length >= 8 ? '' : 'Минимум 8 символов'
};

function validateRegistration(d) {
  const errors = {};
  ['name', 'age', 'phone', 'email', 'login', 'password'].forEach(key => {
    const message = rules[key](d[key] || '');
    if (message) errors[key] = message;
  });
  if (!errors.password && d.password !== d.password2) errors.password2 = 'Пароли не совпадают';
  return errors;
}

function validateForgot(d) {
  const message = rules.email(d.email || '');
  return message ? { email: message } : {};
}

function validateReset(d) {
  const errors = {};
  if (!/^\d{6}$/.test((d.code || '').trim())) errors.code = 'Код из 6 цифр';
  const message = rules.password(d.password || '');
  if (message) errors.password = message;
  else if (d.password !== d.password2) errors.password2 = 'Пароли не совпадают';
  return errors;
}

function validateLogin(d) {
  const errors = {};
  if (!(d.login || '').trim()) errors.login = 'Введите логин';
  if (!d.password) errors.password = 'Введите пароль';
  return errors;
}

/* ---- окно ---- */

const userIcon = `
  <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
    <circle cx="12" cy="8" r="4.2" fill="none" stroke="currentColor" stroke-width="1.8"/>
    <path d="M3.5 21c0-4.7 3.8-7.5 8.5-7.5s8.5 2.8 8.5 7.5" fill="none" stroke="currentColor"
      stroke-width="1.8" stroke-linecap="round"/>
  </svg>`;

const authField = (label, name, attrs = '') => `
  <label class="auth-f"><span>${label}</span>
    <input name="${name}" ${attrs}>
    <small class="auth-err" hidden></small>
  </label>`;

const authTabs = mode => `
  <div class="auth-tabs" role="tablist">
    <button type="button" class="auth-tab${mode === 'login' ? ' on' : ''}" data-mode="login">Вход</button>
    <button type="button" class="auth-tab${mode === 'register' ? ' on' : ''}" data-mode="register">Регистрация</button>
  </div>`;

const demoNote = () => AUTH_DEMO
  ? '<p class="auth-note">Демо-режим: данные сохраняются только в этом браузере.</p>' : '';

const loginView = () => {
  const note = authNote;
  authNote = '';
  return `
  ${authTabs('login')}
  ${note ? `<p class="auth-ok">${note}</p>` : ''}
  <form data-auth="login" novalidate>
    ${authField('Логин', 'login', 'autocomplete="username"')}
    ${authField('Пароль', 'password', 'type="password" autocomplete="current-password"')}
    <button class="btn">войти</button>
    <p class="auth-fail" hidden></p>
    <button type="button" class="auth-link" data-mode="forgot">Забыли пароль?</button>
  </form>
  ${demoNote()}`;
};

const forgotView = () => {
  if (!resetShown) return `
    <h3 class="auth-hello">Восстановление пароля</h3>
    <p class="auth-line">Укажите почту, которую вы указывали при регистрации. Мы отправим на неё одноразовый код.</p>
    <form data-auth="forgot" novalidate>
      ${authField('Почта', 'email', 'type="email" placeholder="name@example.com" autocomplete="email"')}
      <button class="btn">получить код</button>
      <p class="auth-fail" hidden></p>
    </form>
    <button type="button" class="auth-link" data-mode="login">Вернуться ко входу</button>`;

  const { email, demoCode } = resetShown;
  return `
    <h3 class="auth-hello">Введите код</h3>
    <p class="auth-line">Если аккаунт с почтой <b>${esc(email)}</b> существует, мы отправили на неё код. Он действует 10 минут.</p>
    ${AUTH_DEMO && demoCode ? `<p class="auth-demo">Демо-режим: письмо не отправляется. Ваш код: <b>${demoCode}</b></p>` : ''}
    <form data-auth="reset" novalidate>
      <input type="hidden" name="email" value="${esc(email)}">
      ${authField('Код из письма', 'code', 'inputmode="numeric" maxlength="6" autocomplete="one-time-code" placeholder="000000"')}
      <div class="auth-row">
        ${authField('Новый пароль', 'password', 'type="password" autocomplete="new-password"')}
        ${authField('Повторите пароль', 'password2', 'type="password" autocomplete="new-password"')}
      </div>
      <button class="btn">сменить пароль</button>
      <p class="auth-fail" hidden></p>
    </form>
    <button type="button" class="auth-link" data-reset="back">Отправить код заново или изменить почту</button>`;
};

const registerView = () => `
  ${authTabs('register')}
  <form data-auth="register" novalidate>
    ${authField('ФИО', 'name', 'placeholder="Фамилия Имя Отчество" autocomplete="name"')}
    <div class="auth-row age">
      ${authField('Возраст', 'age', 'type="number" min="1" max="120" inputmode="numeric"')}
      ${authField('Номер телефона', 'phone', 'type="tel" placeholder="+7 (***) ***-**-**" autocomplete="tel"')}
    </div>
    ${authField('Почта', 'email', 'type="email" placeholder="name@example.com" autocomplete="email"')}
    ${authField('Логин', 'login', 'autocomplete="username"')}
    <div class="auth-row">
      ${authField('Пароль', 'password', 'type="password" autocomplete="new-password"')}
      ${authField('Повторите пароль', 'password2', 'type="password" autocomplete="new-password"')}
    </div>
    <label class="auth-check">
      <input type="checkbox" name="promo" value="1">
      <span>Согласен получать интересные предложения и рассылку от THE ACTION</span>
    </label>
    <button class="btn">зарегистрироваться</button>
    <p class="auth-fail" hidden></p>
  </form>
  ${demoNote()}`;

const profileView = user => `
  <h3 class="auth-hello">${user.name}</h3>
  <p class="auth-line">Логин: <b>${user.login}</b></p>
  <p class="auth-line">Почта: <b>${user.email}</b></p>
  <button type="button" class="btn auth-logout">выйти</button>`;

const authBox = document.createElement('div');
authBox.className = 'auth';
authBox.hidden = true;
authBox.innerHTML = `
  <div class="auth-box" role="dialog" aria-modal="true" aria-label="Вход и регистрация">
    <button type="button" class="auth-close" aria-label="Закрыть">×</button>
    <div class="auth-body"></div>
  </div>`;
document.body.append(authBox);

const userBtn = document.createElement('button');
userBtn.type = 'button';
userBtn.className = 'user-btn';
userBtn.innerHTML = userIcon;
$('.top').append(userBtn);

function updateUserButton() {
  const user = auth.current();
  userBtn.classList.toggle('in', Boolean(user));
  userBtn.innerHTML = user && user.avatar ? `<img src="${user.avatar}" alt="">` : userIcon;
  userBtn.setAttribute('aria-label', user ? `Аккаунт: ${user.name}` : 'Войти или зарегистрироваться');
  userBtn.title = user ? user.name : 'Войти';
}

function renderAuth(mode = 'login') {
  const user = auth.current();
  $('.auth-body', authBox).innerHTML =
    user ? profileView(user)
      : mode === 'register' ? registerView()
        : mode === 'forgot' ? forgotView() : loginView();
}

function openAuth(mode) {
  if (mode !== 'forgot') { resetShown = null; resetState = null; }
  renderAuth(mode);
  authBox.hidden = false;
  document.body.style.overflow = 'hidden';
  const first = $('input', authBox);
  if (first) first.focus();
}

function closeAuth() {
  authReturn = '';
  pendingPlan = '';
  authBox.hidden = true;
  if (!$('.credits')) document.body.style.overflow = '';
  userBtn.focus();
}

function showErrors(form, errors) {
  $$('.auth-f', form).forEach(label => {
    const input = $('input, textarea, select', label);
    const message = errors[input.name] || '';
    const note = $('.auth-err', label);
    note.textContent = message;
    note.hidden = !message;
    input.classList.toggle('err', Boolean(message));
  });
}

userBtn.addEventListener('click', () => {
  if (auth.current()) {
    if (!authBox.hidden) closeAuth();
    location.hash = '#/account';
  } else {
    authBox.hidden ? openAuth('login') : closeAuth();
  }
});

authBox.addEventListener('click', e => {
  if (e.target === authBox || e.target.closest('.auth-close')) return closeAuth();

  const tab = e.target.closest('.auth-tab, .auth-link[data-mode]');
  if (tab) openAuth(tab.dataset.mode);

  if (e.target.closest('[data-reset="back"]')) {
    resetShown = null;
    resetState = null;
    renderAuth('forgot');
    const first = $('input', authBox);
    if (first) first.focus();
  }

  if (e.target.closest('.auth-logout')) {
    auth.logout();
    updateUserButton();
    openAuth('login');
  }
});

authBox.addEventListener('submit', async e => {
  e.preventDefault();
  e.stopPropagation(); // чтобы форма заявок на странице её не обрабатывала
  const form = e.target;
  const data = Object.fromEntries(new FormData(form));
  const kind = form.dataset.auth;
  const register = kind === 'register';

  const errors = register ? validateRegistration(data)
    : kind === 'forgot' ? validateForgot(data)
      : kind === 'reset' ? validateReset(data) : validateLogin(data);
  showErrors(form, errors);
  const firstBad = Object.keys(errors)[0];
  if (firstBad) return $(`[name="${firstBad}"]`, form).focus();

  const button = $('.btn', form);
  const fail = $('.auth-fail', form);
  const label = button.textContent;
  fail.hidden = true;
  button.disabled = true;
  button.textContent = 'Подождите…';

  try {
    if (kind === 'forgot') {
      const demoCode = await auth.requestReset(data.email);
      resetShown = { email: data.email.trim(), demoCode };
      renderAuth('forgot');
      const first = $('input[name="code"]', authBox);
      if (first) first.focus();
      return;
    }
    if (kind === 'reset') {
      await auth.resetPassword(data.email, data.code, data.password);
      resetShown = null;
      authNote = 'Пароль изменён. Войдите с новым паролем.';
      renderAuth('login');
      return;
    }

    if (register) await auth.register(data);
    else await auth.login(data.login, data.password);
    updateUserButton();
    const back = authReturn;
    const plan = pendingPlan;             // подписка, которую выбрали до входа
    closeAuth();
    if (plan) return startPlan(plan);
    if (back) refreshFilmActs();          // вошли с кнопки на странице фильма: остаёмся на ней
    else location.hash = '#/account';     // иначе открываем личный кабинет
  } catch (error) {
    fail.textContent = error.message;
    fail.hidden = false;
    button.disabled = false;
    button.textContent = label;
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !authBox.hidden) closeAuth();
});

updateUserButton();


/* ================= Личный кабинет ================= */

const DEVICE_LIMIT = 5;

// Демо-тарифы: названия и цены замените на свои
const PLANS = [
  { id: 'base', title: 'Обычная', price: '199 ₽ / мес', text: 'Каталог авторских фильмов' },
  {
    id: 'student', title: 'Студенческая', price: '149 ₽ / мес',   // TODO: цена демо, поставьте свою
    text: 'Для студентов. После оформления открываются:',
    items: ['Переводы', 'Учебные файлы']
  },
  {
    id: 'teach', title: 'Преподавательская', price: '399 ₽ / мес',
    text: 'Для занятий с фильмами. После оформления открываются:',
    items: ['Образовательные материалы', 'Переводы', 'Конференции']
  }
];

const planItems = p => p.items
  ? `<ul class="acc-list">${p.items.map(i => `<li>${esc(i)}</li>`).join('')}</ul>` : '';

const esc = s => String(s).replace(/[&<>"']/g,
  c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const initials = name => name.trim().split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase();
const fmtDate = value => new Date(value).toLocaleDateString('ru-RU');

const luhn = num => {
  let sum = 0, alt = false;
  for (let i = num.length - 1; i >= 0; i--) {
    let n = Number(num[i]);
    if (alt) { n *= 2; if (n > 9) n -= 9; }
    sum += n;
    alt = !alt;
  }
  return sum % 10 === 0;
};

let accOpen = '';   // какая панель раскрыта: '', 'pay' или 'dev'
let accMsg = '';    // короткое сообщение сверху
let accCardPending = null;   // карта ждёт подтверждения кодом из банка: { last4, salt, hash, expires, tries, demoCode }

const CARD_CODE_TTL = 5 * 60 * 1000;
const CARD_CODE_TRIES = 3;

// ВАЖНО: настоящий код подтверждения присылает банк (3-D Secure) через платёжного провайдера,
// это невозможно сделать на сайте без сервера. В демо-режиме код показывается на экране.
// Данные карты (номер, срок, CVV) в браузере не сохраняются: остаются только последние 4 цифры.
// Для настоящих платежей подключите платёжного провайдера (ЮKassa, CloudPayments и т. п.),
// чтобы карту вводили в его защищённой форме.
async function sendBankCode(last4, code) {
  if (AUTH_DEMO) return code;
  return null;
}

const cardFormHtml = card => `
  <form data-acc-card novalidate>
    ${authField(card ? 'Новая карта' : 'Номер карты', 'card', 'inputmode="numeric" placeholder="0000 0000 0000 0000" autocomplete="cc-number"')}
    <div class="auth-row">
      ${authField('Срок действия', 'expiry', 'inputmode="numeric" placeholder="ММ/ГГ" maxlength="5" autocomplete="cc-exp"')}
      ${authField('CVV/CVC', 'cvv', 'type="password" inputmode="numeric" placeholder="***" maxlength="3" autocomplete="cc-csc"')}
    </div>
    ${authField('Имя на карте', 'holder', 'placeholder="IVAN IVANOV" autocomplete="cc-name"')}
    <button class="btn">${card ? 'заменить' : 'привязать'}</button>
  </form>`;

const cardConfirmHtml = () => `
  <form data-acc-confirm novalidate>
    <p class="acc-sub">Банк отправил код подтверждения на телефон, привязанный к карте •••• ${accCardPending.last4}. Код действует 5 минут.</p>
    ${AUTH_DEMO && accCardPending.demoCode ? `<p class="auth-demo">Демо-режим: SMS не отправляется. Ваш код: <b>${accCardPending.demoCode}</b></p>` : ''}
    ${authField('Код из банка', 'code', 'inputmode="numeric" maxlength="6" autocomplete="one-time-code" placeholder="000000"')}
    <button class="btn">подтвердить</button>
    <button type="button" class="pill acc-pill" data-acc="card-cancel">отмена</button>
  </form>`;

function validateCard(d) {
  const errors = {};
  const num = (d.card || '').replace(/\D/g, '');
  if (num.length !== 16 || !luhn(num)) errors.card = 'Проверьте номер карты';

  const m = /^(\d{2})\/(\d{2})$/.exec(d.expiry || '');
  if (!m || Number(m[1]) < 1 || Number(m[1]) > 12) {
    errors.expiry = 'Формат ММ/ГГ';
  } else {
    const year = 2000 + Number(m[2]);
    const now = new Date();
    const expired = year < now.getFullYear() || (year === now.getFullYear() && Number(m[1]) < now.getMonth() + 1);
    if (expired) errors.expiry = 'Срок действия истёк';
    else if (year > now.getFullYear() + 20) errors.expiry = 'Проверьте год';
  }

  if (!/^\d{3}$/.test(d.cvv || '')) errors.cvv = '3 цифры';
  if (!/^[A-Z][A-Z.'-]*( [A-Z.'-]+)+$/.test((d.holder || '').trim())) errors.holder = 'Латиницей, как на карте';
  return errors;
}

function deviceId() {
  let id = localStorage.getItem('action_demo_device');
  if (!id) {
    id = randomSalt().slice(0, 12);
    try { localStorage.setItem('action_demo_device', id); } catch { /* без хранилища */ }
  }
  return id;
}

function deviceName() {
  const ua = navigator.userAgent;
  const browser = /Edg\//.test(ua) ? 'Edge' : /OPR\//.test(ua) ? 'Opera' : /YaBrowser/.test(ua) ? 'Яндекс Браузер'
    : /Firefox\//.test(ua) ? 'Firefox' : /Chrome\//.test(ua) ? 'Chrome' : /Safari\//.test(ua) ? 'Safari' : 'Браузер';
  const os = /iPhone|iPad/.test(ua) ? 'iOS' : /Android/.test(ua) ? 'Android' : /Windows/.test(ua) ? 'Windows'
    : /Mac OS/.test(ua) ? 'macOS' : /Linux/.test(ua) ? 'Linux' : '';
  return os ? `${browser}, ${os}` : browser;
}

// текущее устройство попадает в список, пока лимит не исчерпан
function ensureDevice(user) {
  const id = deviceId();
  const list = user.devices || [];
  if (list.some(d => d.id === id) || list.length >= DEVICE_LIMIT) return user;
  return auth.update({ devices: [...list, { id, name: deviceName(), added: new Date().toISOString() }] }) || user;
}

function accountPage() {
  let user = auth.current();
  if (!user) return notFound();
  user = ensureDevice(user);

  const msg = accMsg;
  accMsg = '';

  const me = deviceId();
  const devices = user.devices || [];
  const registered = devices.some(d => d.id === me);
  const plan = user.plan && PLANS.find(p => p.id === user.plan.id);
  const card = user.card;
  const marks = getMarks(user.id).map(id => byId(films, id)).filter(Boolean);

  const avatar = user.avatar
    ? `<img src="${user.avatar}" alt="">`
    : `<span>${esc(initials(user.name))}</span>`;

  const subs = plan ? `
    <section class="acc-card">
      <div class="acc-plan"><span class="acc-badge">${esc(plan.title)}</span><span class="acc-state">Активна</span></div>
      ${planItems(plan)}
      <p class="acc-sub">Следующее списание ${fmtDate(user.plan.next)} · ${esc(plan.price)}</p>
      <button type="button" class="pill acc-pill" data-acc="plan-off">отменить подписку</button>
    </section>` : `
    <section class="acc-card"><p class="acc-sub">Активных подписок пока нет</p></section>
    ${PLANS.map(p => `
      <section class="acc-card acc-offer">
        <div>
          <h4>${esc(p.title)}</h4>
          <p class="acc-sub">${esc(p.text)}</p>
          ${planItems(p)}
          <p class="acc-sub">${esc(p.price)}</p>
        </div>
        <button type="button" class="btn" data-acc="plan-on" data-plan="${p.id}">оформить</button>
      </section>`).join('')}`;

  return `
    <div class="acc">
      <div class="acc-col">
        <section class="acc-card acc-profile">
          <label class="acc-avatar" title="Сменить фото">
            ${avatar}<i>сменить</i>
            <input type="file" accept="image/*" data-avatar hidden>
          </label>
          <div>
            <h1 class="acc-name">${esc(user.name)}</h1>
            <p class="acc-sub">${esc(user.phone)}</p>
            <p class="acc-sub">${esc(user.email)}</p>
            ${user.avatar ? '<button type="button" class="pill acc-pill" data-acc="avatar-remove">удалить фото</button>' : ''}
          </div>
        </section>

        <h2 class="acc-h">Мои подписки</h2>
        ${subs}

        ${hasTeacherAccess() ? confSection(user) : ''}

        <h2 class="acc-h">Закладки</h2>
        ${marks.length
      ? `<div class="acc-marks">${cards(marks, filmCard)}</div>`
      : '<section class="acc-card"><p class="acc-sub">Закладок пока нет. Нажмите «в закладки» на странице фильма.</p></section>'}
      </div>

      <div class="acc-col">
        ${msg ? `<p class="acc-msg">${esc(msg)}</p>` : ''}

        <div class="acc-tiles">
          <button type="button" class="acc-tile${accOpen === 'pay' ? ' on' : ''}" data-acc="toggle" data-panel="pay">
            <span>Способ оплаты</span>
            <b>${card ? '*' + card.last4 : 'не привязан'}</b>
          </button>
          <button type="button" class="acc-tile${accOpen === 'dev' ? ' on' : ''}" data-acc="toggle" data-panel="dev">
            <span>Устройства</span>
            <b>${devices.length}/${DEVICE_LIMIT}</b>
          </button>
        </div>

        <section class="acc-card" ${accOpen === 'pay' ? '' : 'hidden'}>
          <h3 class="acc-ph">Способ оплаты</h3>
          ${card ? `
            <div class="acc-row">
              <span>Карта •••• ${card.last4}</span>
              <button type="button" class="pill acc-pill" data-acc="card-del">отвязать</button>
            </div>` : ''}
          ${accCardPending ? cardConfirmHtml() : cardFormHtml(card)}
          <p class="acc-note">Номер, срок и CVV не сохраняются: остаются только последние 4 цифры.</p>
        </section>

        <section class="acc-card" ${accOpen === 'dev' ? '' : 'hidden'}>
          <h3 class="acc-ph">Устройства (до ${DEVICE_LIMIT})</h3>
          ${devices.map(d => `
            <div class="acc-row">
              <div>
                <b>${esc(d.name)}</b>
                <small>${d.id === me ? 'Это устройство · ' : ''}добавлено ${fmtDate(d.added)}</small>
              </div>
              ${d.id === me ? '' : `<button type="button" class="pill acc-pill" data-acc="dev-del" data-id="${d.id}">удалить</button>`}
            </div>`).join('')}
          ${registered ? '' : `<p class="acc-note">Лимит устройств исчерпан: удалите одно, чтобы добавить это.</p>`}
        </section>

        ${isAdmin(user) ? '<a class="btn acc-admin" href="#/admin">панель администратора</a>' : ''}

        <section class="acc-card">
          <label class="auth-check">
            <input type="checkbox" data-acc="promo" ${user.promo ? 'checked' : ''}>
            <span>Получать интересные предложения и рассылку от THE ACTION</span>
          </label>
        </section>

        <button type="button" class="btn acc-logout" data-acc="logout">выйти из аккаунта</button>
      </div>
    </div>`;
}

function renderAccount() {
  if (/^#\/account/.test(location.hash)) $('#app').innerHTML = accountPage();
}

/* ---- конференции преподавателя (Zoom) ---- */
// Демо: список хранится в этом браузере. Преподаватель создаёт встречу в своём Zoom, вставляет ссылку сюда
// и отправляет студентам. Доступ по подписке на стороне браузера не защищён: при появлении сервера
// храните конференции и проверяйте подписку там.
const CONFS_KEY = 'action_demo_confs';
const ZOOM_RE = /^https:\/\/([\w-]+\.)*(zoom\.us|zoom\.com|zoomgov\.com)\/[^\s"'<>]+$/i;

const readConfs = () => {
  try {
    const list = JSON.parse(localStorage.getItem(CONFS_KEY) || '[]');
    return Array.isArray(list) ? list : [];
  } catch { return []; }
};

function confSection(user) {
  const list = readConfs()
    .filter(c => c.owner === user.id && ZOOM_RE.test(c.link || ''))
    .sort((a, b) => String(a.when).localeCompare(String(b.when)));
  const fmt = v => {
    const d = new Date(v);
    return isNaN(d) ? '' : d.toLocaleString('ru-RU', { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' });
  };
  const past = c => Date.parse(c.when) + 3 * 3600 * 1000 < Date.now();

  return `
    <h2 class="acc-h">Конференции</h2>
    <section class="acc-card">
      <p class="acc-sub">Создайте встречу в своём аккаунте Zoom, вставьте ссылку сюда и отправьте её студентам. Показ экрана включается кнопкой «Демонстрация экрана» внутри Zoom.</p>
      <form data-acc-conf novalidate>
        ${authField('Название занятия', 'title', 'maxlength="80" placeholder="Лексика к фильму"')}
        <div class="auth-row">
          ${authField('Дата и время', 'when', 'type="datetime-local"')}
          ${authField('Ссылка Zoom', 'link', 'type="url" placeholder="https://zoom.us/j/..."')}
        </div>
        <button class="btn">добавить</button>
      </form>
    </section>
    <section class="acc-card">
      ${list.length ? list.map(c => `
        <div class="acc-row">
          <div>
            <b>${esc(c.title)}</b>
            <small>${fmt(c.when)}${past(c) ? ' · прошла' : ''}</small>
          </div>
          <div class="adm-btns">
            <a class="pill acc-pill" href="${esc(c.link)}" target="_blank" rel="noopener">начать</a>
            <button type="button" class="pill acc-pill" data-acc="conf-copy" data-id="${esc(c.id)}">ссылка</button>
            <button type="button" class="pill acc-pill" data-acc="conf-del" data-id="${esc(c.id)}">удалить</button>
          </div>
        </div>`).join('')
      : '<p class="acc-sub">Конференций пока нет.</p>'}
    </section>`;
}

document.addEventListener('submit', e => {
  const form = e.target.closest('[data-acc-conf]');
  if (!form) return;
  const user = auth.current();
  if (!user || !hasTeacherAccess()) return;

  const data = Object.fromEntries(new FormData(form));
  const title = String(data.title || '').trim();
  const link = String(data.link || '').trim();
  const errors = {};
  if (!title) errors.title = 'Укажите название';
  if (!data.when || isNaN(new Date(data.when))) errors.when = 'Укажите дату и время';
  if (!ZOOM_RE.test(link)) errors.link = 'Нужна ссылка Zoom: https://…zoom.us/…';

  showErrors(form, errors);
  const bad = Object.keys(errors)[0];
  if (bad) return $(`[name="${bad}"]`, form).focus();

  const list = readConfs();
  list.push({ id: 'z' + Date.now().toString(36), owner: user.id, title, when: data.when, link });
  try {
    localStorage.setItem(CONFS_KEY, JSON.stringify(list));
    accMsg = 'Конференция добавлена';
  } catch { accMsg = 'Не удалось сохранить: браузер не даёт записать данные'; }
  renderAccount();
});

/* ---- выбор подписки до входа ---- */

let pendingPlan = '';   // подписка, которую человек выбрал, пока не вошёл или не привязал карту

function plansPage() {
  const user = auth.current();
  const current = user && user.plan ? user.plan.id : '';
  return `
    <h1>Подписки</h1>
    <p class="doc-lead">Выберите подходящую подписку. Войти или зарегистрироваться предложим после выбора.</p>
    <div class="grid2 plans">
      ${PLANS.map(p => `
        <section class="acc-card acc-offer">
          <div>
            <h4>${esc(p.title)}</h4>
            <p class="acc-sub">${esc(p.text)}</p>
            ${planItems(p)}
            <p class="acc-sub">${esc(p.price)}</p>
          </div>
          ${current === p.id
      ? '<span class="acc-state">Активна</span>'
      : `<button type="button" class="btn" data-plan-pick="${p.id}">оформить</button>`}
        </section>`).join('')}
    </div>`;
}

// включает подписку текущему пользователю, возвращает её название
function activatePlan(planId) {
  const plan = PLANS.find(p => p.id === planId);
  if (!plan || !auth.current()) return '';
  const next = new Date();
  next.setMonth(next.getMonth() + 1);
  auth.update({ plan: { id: plan.id, next: next.toISOString() } });
  return plan.title;
}

function startPlan(planId) {
  const user = auth.current();
  const plan = PLANS.find(p => p.id === planId);
  if (!user || !plan) return;

  if (user.card) {
    pendingPlan = '';
    activatePlan(planId);
    accMsg = `Подписка «${plan.title}» оформлена`;
  } else {
    pendingPlan = planId;
    accOpen = 'pay';
    accMsg = `Привяжите способ оплаты — подписка «${plan.title}» оформится автоматически`;
  }
  updateUserButton();
  if (location.hash === '#/account') renderAccount(); else location.hash = '#/account';
}

document.addEventListener('click', e => {
  const btn = e.target.closest('[data-plan-pick]');
  if (!btn) return;
  const plan = PLANS.find(p => p.id === btn.dataset.planPick);
  if (!plan) return;

  if (!auth.current()) {
    pendingPlan = plan.id;
    authNote = `Войдите или зарегистрируйтесь, чтобы оформить подписку «${plan.title}».`;
    openAuth('login');
    return;
  }
  startPlan(plan.id);
});

const readAvatar = file => new Promise((resolve, reject) => {
  const url = URL.createObjectURL(file);
  const img = new Image();
  img.onload = () => {
    const size = 256;
    const side = Math.min(img.width, img.height);
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = size;
    canvas.getContext('2d').drawImage(img, (img.width - side) / 2, (img.height - side) / 2, side, side, 0, 0, size, size);
    URL.revokeObjectURL(url);
    resolve(canvas.toDataURL('image/jpeg', 0.85));
  };
  img.onerror = () => {
    URL.revokeObjectURL(url);
    reject(new Error('Не удалось прочитать изображение'));
  };
  img.src = url;
});

document.addEventListener('change', async e => {
  if (!e.target.matches('[data-avatar]')) return;
  const file = e.target.files[0];
  if (!file) return;
  try {
    if (!file.type.startsWith('image/')) throw new Error('Выберите файл-изображение');
    auth.update({ avatar: await readAvatar(file) });
    updateUserButton();
  } catch (error) {
    accMsg = error.message;
  }
  renderAccount();
});

document.addEventListener('input', e => {
  const f = e.target;
  if (!f.closest || !f.closest('[data-acc-card], [data-acc-confirm]')) return;

  if (f.name === 'card') {
    f.value = f.value.replace(/\D/g, '').slice(0, 16).replace(/(.{4})(?=.)/g, '$1 ');
  } else if (f.name === 'expiry') {
    const d = f.value.replace(/\D/g, '').slice(0, 4);
    f.value = d.length > 2 ? d.slice(0, 2) + '/' + d.slice(2) : d;
  } else if (f.name === 'cvv' || f.name === 'code') {
    f.value = f.value.replace(/\D/g, '').slice(0, f.name === 'cvv' ? 3 : 6);
  } else if (f.name === 'holder') {
    f.value = f.value.toUpperCase().replace(/[^A-Z .'-]/g, '');
  }
});

document.addEventListener('submit', async e => {
  const cardForm = e.target.closest('[data-acc-card]');
  const confirmForm = e.target.closest('[data-acc-confirm]');
  if (!cardForm && !confirmForm) return;

  // шаг 1: данные карты, банк «присылает» код
  if (cardForm) {
    const data = Object.fromEntries(new FormData(cardForm));
    const errors = validateCard(data);
    showErrors(cardForm, errors);
    const firstBad = Object.keys(errors)[0];
    if (firstBad) return $(`[name="${firstBad}"]`, cardForm).focus();

    const num = data.card.replace(/\D/g, '');
    const code = String(crypto.getRandomValues(new Uint32Array(1))[0] % 1000000).padStart(6, '0');
    const salt = randomSalt();
    const demoCode = await sendBankCode(num.slice(-4), code);
    accCardPending = {
      last4: num.slice(-4), salt, hash: await sha256(salt + code),
      expires: Date.now() + CARD_CODE_TTL, tries: 0, demoCode
    };
    accOpen = 'pay';
    renderAccount();
    const first = $('[data-acc-confirm] input');
    if (first) first.focus();
    return;
  }

  // шаг 2: код из банка
  const data = Object.fromEntries(new FormData(confirmForm));
  const p = accCardPending;
  let error = '';
  if (!p) error = 'Начните привязку заново';
  else if (Date.now() > p.expires) { accCardPending = null; accMsg = 'Срок действия кода истёк, повторите привязку'; return renderAccount(); }
  else if (!/^\d{6}$/.test(data.code || '')) error = 'Код из 6 цифр';
  else {
    p.tries++;
    if (p.hash !== await sha256(p.salt + data.code)) {
      error = 'Неверный код';
      if (p.tries >= CARD_CODE_TRIES) {
        accCardPending = null;
        accMsg = 'Слишком много попыток, повторите привязку';
        return renderAccount();
      }
    }
  }

  showErrors(confirmForm, error ? { code: error } : {});
  if (error) return;

  auth.update({ card: { last4: p.last4 } });
  accCardPending = null;
  accMsg = 'Карта привязана';
  if (pendingPlan) {                    // подписка была выбрана раньше — оформляем её сразу
    const title = activatePlan(pendingPlan);
    pendingPlan = '';
    if (title) accMsg = `Карта привязана, подписка «${title}» оформлена`;
  }
  renderAccount();
});

document.addEventListener('click', e => {
  const btn = e.target.closest('.acc [data-acc]');
  if (!btn) return;
  const user = auth.current();
  if (!user) return;

  const action = btn.dataset.acc;

  if (action === 'toggle') {
    accOpen = accOpen === btn.dataset.panel ? '' : btn.dataset.panel;
  } else if (action === 'logout') {
    auth.logout();
    accOpen = '';
    accCardPending = null;
    updateUserButton();
    location.hash = '#/';
    return;
  } else if (action === 'avatar-remove') {
    auth.update({ avatar: '' });
    updateUserButton();
  } else if (action === 'plan-on') {
    if (!user.card) {
      accMsg = 'Сначала привяжите способ оплаты';
      accOpen = 'pay';
    } else {
      const next = new Date();
      next.setMonth(next.getMonth() + 1);
      auth.update({ plan: { id: btn.dataset.plan, next: next.toISOString() } });
      accMsg = 'Подписка оформлена';
    }
  } else if (action === 'plan-off') {
    auth.update({ plan: null });
    accMsg = 'Подписка отменена';
  } else if (action === 'promo') {
    auth.update({ promo: btn.checked, promoAt: btn.checked ? new Date().toISOString() : '' });
    accMsg = btn.checked ? 'Рассылка включена' : 'Рассылка отключена';
  } else if (action === 'card-cancel') {
    accCardPending = null;
  } else if (action === 'card-del') {
    auth.update({ card: null });
    accMsg = 'Карта отвязана';
  } else if (action === 'dev-del') {
    auth.update({ devices: (user.devices || []).filter(d => d.id !== btn.dataset.id) });
  } else if (action === 'conf-del') {
    try {
      localStorage.setItem(CONFS_KEY, JSON.stringify(
        readConfs().filter(c => !(c.id === btn.dataset.id && c.owner === user.id))));
    } catch { /* без хранилища */ }
    accMsg = 'Конференция удалена';
  } else if (action === 'conf-copy') {
    const conf = readConfs().find(c => c.id === btn.dataset.id && c.owner === user.id);
    if (conf) copyText(conf.link).then(ok => toast(ok ? 'Ссылка скопирована' : 'Скопируйте ссылку: ' + conf.link));
    return;
  }

  renderAccount();
});

/* ================= Админ-панель ================= */

let admMsg = '';

const admArea = (label, name, rows, hint = '') => `
  <label class="auth-f"><span>${label}</span>
    <textarea name="${name}" rows="${rows}"></textarea>
    ${hint ? `<small class="adm-hint">${hint}</small>` : ''}
    <small class="auth-err" hidden></small>
  </label>`;

function adminPage() {
  if (!isAdmin(auth.current())) return notFound();

  const mine = films.filter(f => f.custom);
  const myAuthors = authors.filter(a => a.custom);
  const msg = admMsg;
  admMsg = '';

  return `
    <div class="adm">
      <h1>Админ-панель</h1>
      <p class="doc-lead">Добавляйте фильмы через форму, без правки кода. Фильм сразу появится в каталоге, на странице фильма и в рядах «Новинки» и «Стоит посмотреть».</p>
      ${msg ? `<p class="acc-msg">${esc(msg)}</p>` : ''}

      <section class="acc-card">
        <h3 class="acc-ph">Добавить фильм</h3>
        <form data-adm-film novalidate>
          ${authField('Название *', 'title', 'placeholder="Название фильма"')}
          <div class="auth-row">
            ${authField('Год', 'year', 'inputmode="numeric" maxlength="4" placeholder="2026"')}
            ${authField('Страна', 'country', 'placeholder="Россия"')}
          </div>
          <div class="auth-row">
            ${authField('Жанр (через запятую)', 'genre', 'placeholder="Драма, комедия, 14+"')}
            ${authField('Длительность', 'duration', 'placeholder="12 мин"')}
          </div>
          <div class="auth-row">
            ${authField('Режиссёр', 'director')}
            ${authField('Язык', 'language', 'placeholder="Русский"')}
          </div>
          ${admArea('Краткое описание', 'summary', 3, 'Показывается на обложке страницы фильма.')}
          ${admArea('Полное описание', 'description', 6, 'Абзацы разделяйте переносом строки.')}
          ${authField('Ссылка на видео', 'video', 'placeholder="YouTube, Google Drive или файл .mp4"')}
          <div class="auth-row">
            ${authField('Постер (вертикальный, 2:3)', 'poster', 'type="file" accept="image/*"')}
            ${authField('Широкая обложка (необязательно)', 'backdrop', 'type="file" accept="image/*"')}
          </div>
          ${peopleBlock('actors')}
          ${peopleBlock('crew')}
          <label class="auth-f"><span>Лексика</span>
            <select name="vocab"><option value="">не указана</option>${VOCAB_LEVELS.map(v => `<option>${v}</option>`).join('')}</select>
            <small class="auth-err" hidden></small>
          </label>
          <label class="auth-check"><input type="checkbox" name="tasks" value="1"><span>Есть задания к фильму</span></label>
          <label class="auth-check"><input type="checkbox" name="isNew" value="1"><span>Новинка</span></label>
          <label class="auth-check"><input type="checkbox" name="isPick" value="1"><span>Стоит посмотреть</span></label>
          <button class="btn">добавить фильм</button>
          <p class="auth-fail" hidden></p>
        </form>
      </section>

      <section class="acc-card">
        <h3 class="acc-ph">Добавить автора</h3>
        <form data-adm-author novalidate>
          ${authField('Имя Фамилия *', 'name')}
          ${authField('Должность', 'role', 'placeholder="Режиссёр"')}
          ${admArea('Об авторе', 'bio', 4)}
          ${authField('Фото', 'photo', 'type="file" accept="image/*"')}
          <button class="btn">добавить автора</button>
          <p class="auth-fail" hidden></p>
        </form>
      </section>

      <h2 class="acc-h">Добавленные фильмы</h2>
      ${mine.length ? `
        <div class="adm-list">
          ${mine.map(f => `
            <div class="acc-card adm-item">
              <div class="adm-thumb">${f.poster ? `<img src="${f.poster}" alt="">` : ''}</div>
              <div class="adm-info">
                <b>${f.title}</b>
                <small>${[f.year, f.genre].filter(Boolean).join(' · ')}</small>
              </div>
              <div class="adm-btns">
                <a class="pill" href="#/film/${f.id}">открыть</a>
                <button type="button" class="pill" data-adm="del" data-id="${f.id}">удалить</button>
              </div>
            </div>`).join('')}
        </div>
        <button type="button" class="btn adm-export" data-adm="export">скачать список (JSON)</button>`
      : '<section class="acc-card"><p class="acc-sub">Пока нет добавленных фильмов.</p></section>'}

      <h2 class="acc-h">Добавленные авторы</h2>
      ${myAuthors.length ? `
        <div class="adm-list">
          ${myAuthors.map(a => `
            <div class="acc-card adm-item">
              <div class="adm-thumb">${a.photo ? `<img src="${a.photo}" alt="">` : ''}</div>
              <div class="adm-info"><b>${a.name}</b><small>${a.role}</small></div>
              <div class="adm-btns">
                <a class="pill" href="#/author/${a.id}">открыть</a>
                <button type="button" class="pill" data-adm="del-author" data-id="${a.id}">удалить</button>
              </div>
            </div>`).join('')}
        </div>`
      : '<section class="acc-card"><p class="acc-sub">Пока нет добавленных авторов.</p></section>'}
    </div>`;
}

const PEOPLE = {
  actors: { title: 'В ролях', note: 'Персонаж' },
  crew: { title: 'Над фильмом работали', note: 'Должность' }
};

const personRow = kind => `
  <div class="adm-person">
    <label class="adm-photo" title="Прикрепить фото">
      <span>фото</span><img alt="" hidden>
      <input type="file" accept="image/*" hidden>
    </label>
    <div class="adm-person-f">
      <input class="adm-p-name" placeholder="Имя Фамилия" maxlength="80">
      <input class="adm-p-note" placeholder="${PEOPLE[kind].note}" maxlength="80">
    </div>
    <button type="button" class="adm-x" data-adm="del-person" aria-label="Убрать">×</button>
  </div>`;

const peopleBlock = kind => `
  <div class="adm-people" data-people="${kind}">
    <div class="adm-people-head">
      <span>${PEOPLE[kind].title}</span>
      <button type="button" class="pill" data-adm="add-person" data-kind="${kind}">+ добавить</button>
    </div>
    <div class="adm-rows">${personRow(kind)}</div>
  </div>`;

// собирает людей из формы вместе с фото
async function collectPeople(form, kind) {
  const out = [];
  for (const row of $$(`[data-people="${kind}"] .adm-person`, form)) {
    const name = $('.adm-p-name', row).value.trim();
    if (!name) continue;
    const note = $('.adm-p-note', row).value.trim();
    const photo = await fileToDataUrl($('input[type="file"]', row).files[0], 400, 0.85);
    out.push(kind === 'actors'
      ? { name, character: note, photo }
      : { name, role: note || 'Участник съёмочной группы', photo });
  }
  return out;
}

// показывает выбранное фото в кружке
document.addEventListener('change', e => {
  const input = e.target;
  if (!input.matches || !input.matches('.adm-photo input')) return;

  const label = input.closest('.adm-photo');
  const img = $('img', label);
  const hint = $('span', label);
  const file = input.files[0];

  if (img.dataset.url) URL.revokeObjectURL(img.dataset.url);
  if (file && file.type.startsWith('image/')) {
    img.dataset.url = URL.createObjectURL(file);
    img.src = img.dataset.url;
    img.hidden = false;
    hint.hidden = true;
  } else {
    img.hidden = true;
    hint.hidden = false;
  }
});

function renderAdmin() {
  if (!/^#\/admin/.test(location.hash)) return;
  $('#app').innerHTML = adminPage();
  window.scrollTo({ top: 0 });
}

// уменьшает картинку и возвращает JPEG в виде data-URL (пустая строка, если файла нет)
const fileToDataUrl = (file, maxSide, quality) => new Promise((resolve, reject) => {
  if (!(file instanceof File) || !file.size) return resolve('');
  if (!file.type.startsWith('image/')) return reject(new Error('Выберите файл-изображение'));

  const url = URL.createObjectURL(file);
  const img = new Image();
  img.onload = () => {
    const scale = Math.min(1, maxSide / Math.max(img.width, img.height));
    const canvas = document.createElement('canvas');
    canvas.width = Math.round(img.width * scale);
    canvas.height = Math.round(img.height * scale);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#1e1e1e';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    URL.revokeObjectURL(url);
    resolve(canvas.toDataURL('image/jpeg', quality));
  };
  img.onerror = () => {
    URL.revokeObjectURL(url);
    reject(new Error('Не удалось прочитать изображение'));
  };
  img.src = url;
});

document.addEventListener('submit', async e => {
  const form = e.target.closest('[data-adm-film]');
  if (!form || !isAdmin(auth.current())) return;

  const data = Object.fromEntries(new FormData(form));
  const text = key => String(data[key] || '').trim();

  const errors = {};
  if (!text('title')) errors.title = 'Укажите название';
  if (text('year') && !/^\d{4}$/.test(text('year'))) errors.year = '4 цифры';
  if (text('video') && !/^https?:\/\/[^\s"'<>]+$/i.test(text('video'))) errors.video = 'Ссылка должна начинаться с http:// или https://';

  showErrors(form, errors);
  const firstBad = Object.keys(errors)[0];
  if (firstBad) return $(`[name="${firstBad}"]`, form).focus();

  const button = $('.btn', form);
  const fail = $('.auth-fail', form);
  fail.hidden = true;
  button.disabled = true;
  button.textContent = 'Сохраняем…';

  try {
    const raw = {
      id: 'c' + Date.now().toString(36),
      title: text('title'), year: text('year'), country: text('country'), language: text('language'), genre: text('genre'),
      duration: text('duration'), director: text('director'),
      summary: text('summary'), description: text('description'), video: text('video'),
      poster: await fileToDataUrl(data.poster, 600, 0.85),
      backdrop: await fileToDataUrl(data.backdrop, 1920, 0.8),
      isNew: Boolean(data.isNew), isPick: Boolean(data.isPick),
      vocab: text('vocab'), tasks: Boolean(data.tasks),
      actors: await collectPeople(form, 'actors'),
      crew: await collectPeople(form, 'crew')
    };

    const list = readCustomFilms();
    list.push(raw);
    try {
      localStorage.setItem(CUSTOM_FILMS_KEY, JSON.stringify(list));
    } catch {
      throw new Error('Не хватило места в браузере: уменьшите картинки или удалите старые фильмы');
    }

    films.unshift(normalizeFilm(raw));   // новый фильм встаёт первым
    admMsg = 'Фильм добавлен';
    renderAdmin();
  } catch (error) {
    fail.textContent = error.message;
    fail.hidden = false;
    button.disabled = false;
    button.textContent = 'добавить фильм';
  }
});

document.addEventListener('submit', async e => {
  const form = e.target.closest('[data-adm-author]');
  if (!form || !isAdmin(auth.current())) return;

  const data = Object.fromEntries(new FormData(form));
  const text = key => String(data[key] || '').trim();

  const errors = {};
  if (!text('name')) errors.name = 'Укажите имя';
  showErrors(form, errors);
  if (errors.name) return $('[name="name"]', form).focus();

  const button = $('.btn', form);
  const fail = $('.auth-fail', form);
  fail.hidden = true;
  button.disabled = true;
  button.textContent = 'Сохраняем…';

  try {
    const raw = {
      id: 'a' + Date.now().toString(36),
      name: text('name'), role: text('role'), bio: text('bio'),
      photo: await fileToDataUrl(data.photo, 600, 0.85)
    };

    const list = readCustomAuthors();
    list.push(raw);
    try {
      localStorage.setItem(CUSTOM_AUTHORS_KEY, JSON.stringify(list));
    } catch {
      throw new Error('Не хватило места в браузере: уменьшите фото или удалите старые записи');
    }

    authors.unshift(normalizeAuthor(raw));
    admMsg = 'Автор добавлен';
    renderAdmin();
  } catch (error) {
    fail.textContent = error.message;
    fail.hidden = false;
    button.disabled = false;
    button.textContent = 'добавить автора';
  }
});

document.addEventListener('click', e => {
  const btn = e.target.closest('.adm [data-adm]');
  if (!btn || !isAdmin(auth.current())) return;

  if (btn.dataset.adm === 'del') {
    if (!confirm('Удалить этот фильм?')) return;
    const id = btn.dataset.id;
    try {
      localStorage.setItem(CUSTOM_FILMS_KEY, JSON.stringify(readCustomFilms().filter(f => String(f.id) !== id)));
    } catch { /* без хранилища */ }
    const i = films.findIndex(f => String(f.id) === id && f.custom);
    if (i >= 0) films.splice(i, 1);
    admMsg = 'Фильм удалён';
    renderAdmin();
  }

  if (btn.dataset.adm === 'add-person') {
    $('.adm-rows', btn.closest('.adm-people')).insertAdjacentHTML('beforeend', personRow(btn.dataset.kind));
  }

  if (btn.dataset.adm === 'del-person') {
    btn.closest('.adm-person').remove();
  }

  if (btn.dataset.adm === 'del-author') {
    if (!confirm('Удалить этого автора?')) return;
    const id = btn.dataset.id;
    try {
      localStorage.setItem(CUSTOM_AUTHORS_KEY, JSON.stringify(readCustomAuthors().filter(a => String(a.id) !== id)));
    } catch { /* без хранилища */ }
    const i = authors.findIndex(a => String(a.id) === id && a.custom);
    if (i >= 0) authors.splice(i, 1);
    admMsg = 'Автор удалён';
    renderAdmin();
  }

  if (btn.dataset.adm === 'export') {
    const blob = new Blob([JSON.stringify(readCustomFilms(), null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'films.json';
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }
});

authReady = true;
if (/^#\/(account|admin|plans)/.test(location.hash)) route();


/* ================= Всплывающие баннеры ================= */
// Баннеры появляются в случайное время и в случайном порядке, каждый — один раз за визит.
// Тексты и ссылки меняйте здесь.
const promos = [
  {
    id: 'english',
    tag: 'Учи английский',
    title: 'Учи английский через авторское кино',
    text: 'Смотри фильмы в оригинале: двойные субтитры, транскрипции и разбор лексики.',
    button: 'Узнать подробнее',
    link: '#/teachers'
  },
  {
    id: 'plans',
    tag: 'Подписки',
    title: 'Три подписки на любой вкус',
    items: [   // если меняете тарифы в PLANS — поправьте и здесь
      ['Обычная', 'каталог авторских фильмов'],
      ['Студенческая', 'переводы и учебные файлы к фильмам'],
      ['Преподавательская', 'материалы к фильмам, переводы и конференции']
    ],
    button: 'Выбрать подписку',
    link: '#/plans'
  }
];

// показан ли баннер на этой загрузке страницы. В хранилище не пишем: на телефоне вкладка живёт днями,
// и баннер перестал бы появляться после первого раза.
let promoDone = false;
const promoShown = () => promoDone;
const promoMark = () => { promoDone = true; };

const randBetween = (a, b) => a + Math.random() * (b - a);

let promoEl = null;

// не перебиваем личный кабинет, админку, титры, окно входа и скрытую вкладку
const promoBlocked = () =>
  /^#\/(account|admin)/.test(location.hash) || $('.credits') || !authBox.hidden || document.hidden;

// при заходе на сайт показываем ОДИН случайный баннер (один раз за визит)
function tryShowPromo(attempt = 0) {
  if (promoShown() || promoEl) return;
  if (promoBlocked()) {
    if (attempt < 30) setTimeout(() => tryShowPromo(attempt + 1), 4000);   // не время — попробуем позже
    return;
  }
  showPromo(promos[Math.floor(Math.random() * promos.length)]);
}

function showPromo(p) {
  promoMark();

  const el = document.createElement('aside');
  el.className = 'promo';
  el.setAttribute('role', 'dialog');
  el.setAttribute('aria-label', p.title);
  el.innerHTML = `
    <button type="button" class="promo-x" aria-label="Закрыть">×</button>
    <span class="promo-tag">${p.tag}</span>
    <h4>${p.title}</h4>
    ${p.text ? `<p>${p.text}</p>` : ''}
    ${p.items ? `<ul class="promo-list">${p.items.map(([name, desc]) =>
      `<li><b>${name}</b><span>${desc}</span></li>`).join('')}</ul>` : ''}
    <a class="btn" href="${p.link}">${p.button} ↗</a>`;
  // окно по центру экрана на затемнённом фоне
  const wrap = document.createElement('div');
  wrap.className = 'promo-wrap';
  wrap.append(el);
  document.body.append(wrap);
  promoEl = el;
  requestAnimationFrame(() => wrap.classList.add('show'));

  const onKey = e => { if (e.key === 'Escape') close(); };
  function close() {
    if (promoEl !== el) return;
    promoEl = null;
    document.removeEventListener('keydown', onKey);
    wrap.classList.remove('show');
    setTimeout(() => wrap.remove(), 400);
  }

  // закрывается: крестиком, кликом по затемнённому фону, Esc или переходом по кнопке
  wrap.addEventListener('click', e => {
    if (e.target === wrap || e.target.closest('.promo-x, a')) close();
  });
  document.addEventListener('keydown', onKey);
}

setTimeout(tryShowPromo, randBetween(2, 5) * 1000);

// телефон: возврат на сайт кнопкой «назад» или из фона тоже считается заходом
addEventListener('pageshow', e => {
  if (!e.persisted) return;
  promoDone = false;
  setTimeout(tryShowPromo, randBetween(1, 3) * 1000);
});
