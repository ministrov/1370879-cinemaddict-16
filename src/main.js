import { createUserRankTemplate } from "./view/user-rank.js";
import { renderTemplate, RenderPosition } from "./render.js";
import { createMainNavMenuTemplate } from "./view/main-nav-menu.js";
import { createSortListTemplate } from "./view/sorting.js";
import { createFilmCardTemplate } from "./view/film-card.js";
import { createShowMoreBtnTemplate } from "./view/show-more-btn.js";

const headerEl = document.querySelector('.header');
const mainEl = document.querySelector('.main');
const FILM_QUANTITY_CARD = 5;

renderTemplate(headerEl, createUserRankTemplate(), RenderPosition.BEFOREEND);
renderTemplate(mainEl, createMainNavMenuTemplate(), RenderPosition.BEFOREEND);
renderTemplate(mainEl, createSortListTemplate(), RenderPosition.BEFOREEND);

for (let i = 0; i < FILM_QUANTITY_CARD; i++) {
    renderTemplate(mainEl, createFilmCardTemplate(), RenderPosition.BEFOREEND);
}

renderTemplate(mainEl, createShowMoreBtnTemplate(), RenderPosition.BEFOREEND);
