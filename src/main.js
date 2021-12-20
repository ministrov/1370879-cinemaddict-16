import UserRank from './view/user-rank.js';
import { render, RenderPosition, remove } from './render.js';
import MainNavigation from './view/main-nav.js';
import SortList from './view/sorting.js';
import FilmCard from './view/film-card.js';
import ShowMoreBtn from './view/show-more-btn.js';
import FilmsBoard from './view/films-board.js';
import FooterStats from './view/footer-stats.js';
import FilmPopup from './view/film-details-popup.js';
import NoFilmCard from './view/no-film-card.js';
import { generateFilm } from './mock/film.js';
import { isEscEvent } from './utils.js';

const FILM_QUANTITY_CARD = 15;
const MAX_FILMS = 5;
const headerEl = document.querySelector('.header');
const bodyEl = document.querySelector('body');
const mainEl = document.querySelector('.main');
const films = Array.from({length: FILM_QUANTITY_CARD}, generateFilm);
let currentCount = MAX_FILMS;
const filmsBoardComp = new FilmsBoard();
const filmsBoardEl = filmsBoardComp.element.querySelector('.films-list__container');
let currentPopup = null;
const moreBtnComponent = new ShowMoreBtn();
const footer = document.querySelector('.footer');
const footerStats = footer.querySelector('.footer__statistics');

render(headerEl, new UserRank().element, RenderPosition.BEFOREEND);
render(mainEl, new MainNavigation(films).element, RenderPosition.BEFOREEND);
render(mainEl, new SortList().element, RenderPosition.BEFOREEND);
render(mainEl, filmsBoardComp, RenderPosition.BEFOREEND);
render(mainEl, moreBtnComponent.element, RenderPosition.BEFOREEND);
render(footerStats, new FooterStats().element, RenderPosition.BEFOREEND);

const onFilmCardClick = (evt) => {
  let target = evt.target;

  if (target.tagName !== 'ARTICLE') {
    target = target.closest('article');
  }
  const closePopup = () => {
    remove(currentPopup);
    document.body.classList.remove('hide-overflow');
    currentPopup = null;
  };
  if (currentPopup) {
    closePopup();
  }

  const popupData = films.filter((item) => `film-${item.id}` === target.id);
  currentPopup = new FilmPopup(popupData[0]);
  render(bodyEl, currentPopup, RenderPosition.BEFOREEND);

  document.body.classList.add('hide-overflow');
  const closePopupOnEsc = (event) => {
    if (isEscEvent(event)) {
      closePopup();
      document.removeEventListener('keydown', closePopupOnEsc);
    }
  };
  document.addEventListener('keydown', closePopupOnEsc);
  currentPopup.element.querySelector('.film-details__close-btn').addEventListener('click', closePopup);
};

const renderFilmCard = (count) => {
  filmsBoardEl.innerHTML = '';
  if (films.length === 0) {
    render(filmsBoardEl, new NoFilmCard().element, RenderPosition.BEFOREEND);
  } else {
    for (let i = 0; i < count; i++) {
      const filmCard = new FilmCard(films[i]);
      render(filmsBoardEl, filmCard, RenderPosition.BEFOREEND);
      filmCard.element.addEventListener('click', onFilmCardClick);
    }
  }
};

renderFilmCard(MAX_FILMS);

moreBtnComponent.addMoreFilmOnClick(() => {
  currentCount += MAX_FILMS;
  if (currentCount >= FILM_QUANTITY_CARD) {
    remove(moreBtnComponent);
  }

  renderFilmCard(currentCount);
});


