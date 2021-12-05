import UserRank from './view/user-rank.js';
import { renderTemplate, renderElement, RenderPosition } from './render.js';
import MainNavigation from './view/main-nav.js';
import SortList from './view/sorting.js';
import { createFilmCardTemplate } from './view/film-card.js';
import ShowMoreBtn from './view/show-more-btn.js';
import FilmsBoard from './view/films-board.js';
import FooterStats from './view/footer-stats.js';
// import { createPopupTemplate } from './view/film-details-popup.js';
import { generateFilm } from './mock/film.js';

const FILM_QUANTITY_CARD = 15;
const MAX_FILMS = 5;

const headerEl = document.querySelector('.header');
const mainEl = document.querySelector('.main');

const films = Array.from({length: FILM_QUANTITY_CARD}, generateFilm);

let currentCount = MAX_FILMS;
const filmsBoardComp = new FilmsBoard();

renderElement(headerEl, new UserRank().element, RenderPosition.BEFOREEND);
renderElement(mainEl, new MainNavigation().element, RenderPosition.BEFOREEND);
renderElement(mainEl, new SortList().element, RenderPosition.BEFOREEND);
renderElement(mainEl, filmsBoardComp.element, RenderPosition.BEFOREEND);

const filmsListEl = mainEl.querySelector('.films-list');
const filmsListContainer = filmsListEl.querySelector('.films-list__container');
const footer = document.querySelector('.footer');
const footerStats = footer.querySelector('.footer__statistics');

const renderFilms = (count) => {
  filmsListContainer.innerHTML = '';

  for (let i = 0; i < count; i++) {
    renderTemplate(filmsListContainer, createFilmCardTemplate(films[i]), RenderPosition.BEFOREEND);
  }
};

renderFilms(MAX_FILMS);

renderElement(mainEl, new ShowMoreBtn().element, RenderPosition.BEFOREEND);
renderElement(footerStats, new FooterStats().element, RenderPosition.BEFOREEND);
// renderTemplate(mainEl, createPopupTemplate(films[0]), RenderPosition.BEFOREEND);

const moreButton = document.querySelector('.films-list__show-more');

const onMoreButtonClick = () => {
  currentCount += MAX_FILMS;

  if (currentCount >= FILM_QUANTITY_CARD) {
    moreButton.classList.add('visually-hidden');
    moreButton.removeEventListener('click', onMoreButtonClick);
  }

  renderFilms(currentCount);
};

moreButton.addEventListener('click', onMoreButtonClick);
