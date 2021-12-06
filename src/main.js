import UserRank from './view/user-rank.js';
import { render, RenderPosition } from './render.js';
import MainNavigation from './view/main-nav.js';
import SortList from './view/sorting.js';
import FilmCard from './view/film-card.js';
import ShowMoreBtn from './view/show-more-btn.js';
import FilmsBoard from './view/films-board.js';
import FooterStats from './view/footer-stats.js';
// import FilmPopup from './view/film-details-popup.js';
import { generateFilm } from './mock/film.js';

const FILM_QUANTITY_CARD = 15;
const MAX_FILMS = 5;

const headerEl = document.querySelector('.header');
const mainEl = document.querySelector('.main');

const films = Array.from({length: FILM_QUANTITY_CARD}, generateFilm);

let currentCount = MAX_FILMS;
const filmsBoardComp = new FilmsBoard();
const filmsBoardEl = filmsBoardComp.element.querySelector('.films-list__container');

render(headerEl, new UserRank().element, RenderPosition.BEFOREEND);
render(mainEl, new MainNavigation(films).element, RenderPosition.BEFOREEND);
render(mainEl, new SortList().element, RenderPosition.BEFOREEND);
render(filmsBoardComp.element, filmsBoardEl.element, RenderPosition.BEFOREEND);

const footer = document.querySelector('.footer');
const footerStats = footer.querySelector('.footer__statistics');

const renderFilms = (count) => {
  filmsBoardEl.innerHTML = '';

  for (let i = 0; i < count; i++) {
    render(filmsBoardEl, new FilmCard(films[i]).element, RenderPosition.BEFOREEND);
  }
};

renderFilms(MAX_FILMS);

render(mainEl, new ShowMoreBtn().element, RenderPosition.BEFOREEND);
render(footerStats, new FooterStats().element, RenderPosition.BEFOREEND);
// render(mainEl, new FilmPopup(films[0]).element, RenderPosition.BEFOREEND);

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
