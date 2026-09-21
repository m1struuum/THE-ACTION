const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const repeat = (render, n) => Array.from({ length: n }, render).join('');


const eventCard = () => `
  <article class="ev">
    <div class="ph"></div>
    <div class="ev-i">
      <b>01.01</b>
      <div>
        <h4>Название мероприятия</h4>
        <p>Краткое подробное описание мероприятия в две или три строчки</p>
      </div>
    </div>
  </article>`;

const filmCard = () => `
  <a class="fl" href="#/film">
    <div class="ph"></div>
    <h4>Название фильма</h4>
    <small>жанр</small>
  </a>`;

const authorCard = () => `
  <article class="au">
    <div class="ph"></div>
    <h4>Имя Фамилия</h4>
    <small>должность</small><br>
    <a class="pill">фильмография</a>
  </article>`;

const personCard = (name, role) => `
  <article class="person">
    <div class="ph"></div>
    <h4>${name}</h4>
    <small>${role}</small>
  </article>`;

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

const filmRow = title => `
  <section>
    <h2>${title}</h2>
    <div class="rowwrap">
      <div class="row">${repeat(filmCard, 10)}</div>
      <button class="arr arr-prev" aria-label="Назад" hidden>‹</button>
      <button class="arr arr-next" aria-label="Далее">›</button>
    </div>
  </section>
  <hr>`;

const marquee = (text = 'КИНОТЕАТР АВТОРСКОГО КИНО') => {
  const group = repeat(() => `<span>${text}</span>`, 3);
  return `
    <div class="big marquee" aria-label="${text}">
      <div class="marquee-track">
        <div class="marquee-group">${group}</div>
        <div class="marquee-group" aria-hidden="true">${group}</div>
      </div>
    </div>`;
};

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

const filmInfo = {
  title: 'Название фильма, год выхода',
  specs: [
    ['Год производства:', '1234'],
    ['Страна:', 'Россия'],
    ['Жанр:', 'Комедия'],
    ['Режиссер:', 'Артемов'],
    ['Длительность:', '1,38']
  ],
  text: 'Здесь будет много букв для описания основной завязки фильма. Здесь будет много букв для описания основной завязки фильма. Здесь будет много букв для описания основной завязки фильма. Здесь будет много букв для описания основной завязки фильма. Здесь будет много букв для описания основной завязки фильма. Здесь будет много букв для описания основной завязки фильма.'
};

const pages = {

  home: () => `
    ${marquee()}

    <section class="hero" id="top">
      <ul>
        <li><a data-scroll="films">Наши фильмы</a></li>
        <li><a data-scroll="afisha">Афиша</a></li>
        <li><a data-scroll="about">О нас</a></li>
        <li><a data-scroll="apply">Оставить заявку</a></li>
        <li><a data-scroll="contacts">Контакты</a></li>
      </ul>
      <img src="logo.png" alt="ACTION">
    </section>
    <hr>

    <section class="center" id="films">
      <h2>Наши фильмы</h2>
      <div class="grid4">${repeat(filmCard, 4)}</div>
      <div class="more"><a class="btn" href="#/films">посмотреть все</a></div>
    </section>
    <hr>

    <section class="center" id="afisha">
      <h2>Афиша</h2>
      <div class="grid3">${repeat(eventCard, 3)}</div>
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
    filmRow('Наши фильмы') +
    filmRow('Новинки') +
    filmRow('Стоит посмотреть'),

  film: () => `
    <section class="film-top">
      <div>
        <h1 class="film-title">${filmInfo.title}</h1>
        <h3 class="film-h">О фильме</h3>
        <dl class="film-specs">
          ${filmInfo.specs.map(([label, value]) => `<dt>${label}</dt><dd>${value}</dd>`).join('')}
        </dl>
        <p class="film-text">${filmInfo.text}</p>
      </div>
      <div class="film-poster">постер фильма</div>
    </section>

    <!-- Сюда можно вставить <video controls src="..."> или iframe с плеером -->
    <div class="player">видеоплеер</div>

    <h3 class="film-h">Актерский состав</h3>
    <div class="people">${repeat(() => personCard('ФИ актера', 'роль'), 5)}</div>
    <hr>

    <h3 class="film-h">Над фильмом работали</h3>
    <div class="people">${repeat(() => personCard('ФИ', 'должность'), 4)}</div>`,

  afisha: () =>
    titleBar('Афиша') +
    `<div class="grid4">${repeat(eventCard, 12)}</div>`,

  premieres: () =>
    titleBar('Премьеры') +
    `<div class="grid2">${repeat(eventCard, 6)}</div>`,

  show: () => `
    <section class="showpg">
      <h1>Название шоу</h1>
      <p>Краткое описание сути шоу</p>
      <a class="btn">посмотреть последнюю серию</a>
    </section>`,

  partners: () =>
    titleBar('Партнеры') +
    `<h2>Наши авторы</h2>
     <div class="grid6">${repeat(authorCard, 12)}</div>`,

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
  { id: 'partners', title: 'Партнеры' },
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

function route() {
  const hash = location.hash.replace('#/', '').split('/')[0];
  const id = pages[hash] ? hash : 'home';
  const menuId = id === 'film' ? 'films' : id;

  $('#app').innerHTML = pages[id]();
  setMenu(false);
  document.body.className = id;

  $$('#nav a').forEach(link =>
    link.classList.toggle('on', link.dataset.k === menuId)
  );

  window.scrollTo({ top: 0, behavior: 'instant' });
}

addEventListener('hashchange', route);
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
      const match = card.textContent.toLowerCase().includes(query);
      card.style.display = match ? '' : 'none';
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
