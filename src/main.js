import { createUserRankTemplate } from './view/user-rank.js';
import { renderTemplate, RenderPosition } from './render.js';
import { createMainNavMenuTemplate } from './view/main-nav-menu.js';
import { createSortListTemplate } from './view/sorting.js';
import { createFilmCardTemplate } from './view/film-card.js';
import { createShowMoreBtnTemplate } from './view/show-more-btn.js';
import { createFilmsBoardListTemplate } from './view/films-board.js';
import { createFooterStatsTemplate } from './view/footer-stats.js';
import { createFilmDetailsPopupTemplate } from './view/film-details-popup.js';
import { generateFilm } from './mock/film.js';

const headerEl = document.querySelector('.header');
const mainEl = document.querySelector('.main');
const FILM_QUANTITY_CARD = 5;
const films = Array.from({length: FILM_QUANTITY_CARD}, generateFilm);

renderTemplate(headerEl, createUserRankTemplate(), RenderPosition.BEFOREEND);
renderTemplate(mainEl, createMainNavMenuTemplate(), RenderPosition.BEFOREEND);
renderTemplate(mainEl, createSortListTemplate(), RenderPosition.BEFOREEND);
renderTemplate(mainEl, createFilmsBoardListTemplate(), RenderPosition.BEFOREEND);

const filmsListEl = mainEl.querySelector('.films-list');
const filmsListContainer = filmsListEl.querySelector('.films-list__container');
const footer = document.querySelector('.footer');
const footerStats = footer.querySelector('.footer__statistics');

for (let i = 0; i < FILM_QUANTITY_CARD; i++) {
  renderTemplate(filmsListContainer, createFilmCardTemplate(films[i]), RenderPosition.BEFOREEND);
}

renderTemplate(mainEl, createShowMoreBtnTemplate(), RenderPosition.BEFOREEND);
renderTemplate(footerStats, createFooterStatsTemplate(), RenderPosition.BEFOREEND);
renderTemplate(mainEl, createFilmDetailsPopupTemplate(), RenderPosition.BEFOREEND);
