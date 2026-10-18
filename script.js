const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const cards = (list, render) => list.map(render).join('');

const byId = (list, id) =>
  id === undefined ? list[0] : list.find(item => String(item.id) === String(id));

const pic = (src, label = '') => src ? `<img src="${src}" alt="" loading="lazy">` : label;

const paragraphs = text => text.split('\n').map(t => `<p class="film-text">${t}</p>`).join('');

const state = message => `<p class="state">${message}</p>`;
const notFound = () => state('Страница не найдена');


const lorem = 'Здесь будет описание. Здесь будет много букв для описания. Здесь будет много букв для описания. Здесь будет много букв для описания.';
const make = (n, fn) => Array.from({ length: n }, (_, i) => ({ id: i + 1, ...fn(i) }));


const vydohni = {
  title: 'Выдохни', year: 2026, country: 'Россия', genre: 'Социальная драма',
  director: 'Алиса Сергеева', directorId: 'alisa-sergeeva', duration: '',
  summary: '«Выдохни» — короткометражный фильм о молодой матери, которая в заботе о ребёнке постепенно забывает о себе. Оставшись один на один с младенцем, она сталкивается с усталостью, одиночеством и потерей собственной личности.',
  description: [
    'Фильм показывает неидеальную сторону материнства — эмоциональное выгорание, постоянную отдачу себя семье и необходимость иногда остановиться, выйти из привычного ритма и просто побыть собой. Маленький момент тишины и свободы помогает героине восстановить силы и снова почувствовать связь с собой и миром.'
  ].join('\n'),
  backdrop: 'img/vydohni-hero.jpg',
  poster: 'img/vydohni.jpg', video: 'https://youtu.be/ZaKhUAJvSd4?si=iT8E09_NkApAMQKY',
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
  title: 'По ту сторону кадра', year: 2026, country: 'Россия', genre: 'Драма, 14+',
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
  title: 'Название фильма', year: 1234, country: 'Россия', genre: 'Комедия',
  director: 'Артемов', duration: '1,38', description: lorem,
  poster: '', video: '',
  isNew: i < 6,
  isPick: i > 3,
  actors: make(5, () => ({ name: 'ФИ актера', role: 'роль', photo: '' })),
  crew: make(4, () => ({ name: 'ФИ', role: 'должность', photo: '' }))
});

const films = make(10, i => i === 0 ? vydohni : i === 1 ? poTuStoronu : stubFilm(i));


const events = make(12, () => ({
  title: 'Название мероприятия', date: '01.01', description: lorem, image: ''
}));

const premieres = make(6, i => ({
  title: 'Название фильма', date: '01.01', description: lorem, image: '', filmId: i + 1
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

const authors = make(12, i => i === 0 ? alisaAuthor : i === 1 ? emiliaAuthor : stubAuthor());

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
  <a class="fl" href="#/film/${f.id}">
    <div class="ph">${pic(f.poster)}</div>
    <h4>${f.title}</h4>
    <small>${f.genre}</small>
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

const applyForm = () => `
  <form class="form" novalidate>
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
        <li><a data-scroll="apply">Оставить заявку</a></li>
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
      <h2>О нас</h2>
      <div class="about">
        <p>тут будет краткая или не очень история данной кинокомпании, обычно эту информацию не читают, но любознательные люди могут и почитать. скорее всего рядом может быть одна или несколько фотографий, связанных с историей.</p>
        <div class="ph"></div>
      </div>
    </section>
    <hr>

    <section class="center" id="apply">
      <h2>Оставить заявку</h2>
      ${applyForm()}
    </section>
    <hr>

    <section class="center" id="contacts">
      <h2>Контакты</h2>
      <p style="font-size:14px; margin:30px 0 60px; color:var(--txt)">тут будет информация о контактных данных.</p>
    </section>`,

  films: () =>
    titleBar('Фильмы') +
    filmRow('Наши фильмы', films) +
    filmRow('Новинки', films.filter(f => f.isNew)) +
    filmRow('Стоит посмотреть', films.filter(f => f.isPick)),

  film: id => {
    const f = byId(films, id);
    if (!f) return notFound();

    const specs = [['Год производства:', f.year], ['Страна:', f.country], ['Жанр:', f.genre],
    ['Режиссер:', f.director], ['Длительность:', f.duration]].filter(([, v]) => v);

    const paragraphs = list => list.filter(Boolean).join('\n').split('\n')
      .map(t => `<p class="film-text">${t}</p>`).join('');

    const meta = [f.year, f.country, f.genre,
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
        </div>
        <div class="tab-panel" data-panel="descr">${paragraphs([f.description])}</div>
        ${hasPeople ? `<div class="tab-panel" data-panel="crew" hidden>${castCrew}</div>` : ''}
      </section>` : castCrew;

    return `
      ${top}

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

  premieres: () =>
    titleBar('Премьеры') +
    `<div class="grid2">${cards(premieres, p => eventCard(p, 'premiere'))}</div>`,

  premiere: id => {
    const p = byId(premieres, id);
    if (!p) return notFound();
    return `
      <section class="detail">
        <div class="ph">${pic(p.image, 'изображение')}</div>
        <div>
          <h1 class="film-title">${p.title}</h1>
          <p class="film-text">${p.description}</p>
          <a class="btn" href="#/film/${p.filmId}">смотреть</a>
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

  coop: () => `
    <h1>Сотрудничество</h1>
    <h2 class="sub" style="margin-top:20px">Оставить заявку</h2>
    ${applyForm()}`
};


const menu = [
  { id: 'home', title: 'Главная' },
  { id: 'films', title: 'Фильмы' },
  { id: 'afisha', title: 'Афиша' },
  { id: 'premieres', title: 'Премьеры' },
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
  film: 'films', person: 'films', event: 'afisha', premiere: 'premieres', episode: 'show', author: 'partners'
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

  $('#app').innerHTML = pages[id](param);
  syncArrows();
  setMenu(false);
  document.body.className = id;

  $$('#nav a').forEach(link =>
    link.classList.toggle('on', link.dataset.k === (parentTab[id] || id))
  );

  window.scrollTo({ top: 0, behavior: 'instant' });
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

  if (field.matches('.search input')) {
    const query = field.value.trim().toLowerCase();
    $$('.ev, .fl, .au').forEach(card => {
      card.style.display = card.textContent.toLowerCase().includes(query) ? '' : 'none';
    });
  }

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
