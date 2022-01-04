import UserRank from './view/user-rank.js';
import { render, RenderPosition } from './render.js';
import MainNavigation from './view/main-nav.js';
import SortList from './view/sorting.js';
// import FilmCard from './view/film-card.js';
// import ShowMoreBtn from './view/show-more-btn.js';
// import FilmsBoard from './view/films-board.js';
import FooterStats from './view/footer-stats.js';
// import FilmPopup from './view/film-details-popup.js';
// import NoFilmCard from './view/no-film-card.js';
import { generateFilm } from './mock/film.js';
import MovieListPresenter from './presenter/MovieListPresenter.js';
// import { isEscEvent } from './utils.js';

const FILM_QUANTITY_CARD = 15;
// const MAX_FILMS = 5;
const headerElement = document.querySelector('.header');
// const bodyEl = document.querySelector('body');
const mainElement = document.querySelector('.main');
const films = Array.from({length: FILM_QUANTITY_CARD}, generateFilm);
// let currentCount = MAX_FILMS;
// const filmsBoardComp = new FilmsBoard();
// const filmsBoardEl = filmsBoardComp.element.querySelector('.films-list__container');
// let currentPopup = null;
// const moreBtnComponent = new ShowMoreBtn();
const movieListPresenter = new MovieListPresenter(mainElement);
const footer = document.querySelector('.footer');
const footerStats = footer.querySelector('.footer__statistics');

render(headerElement, new UserRank().element, RenderPosition.BEFOREEND);
render(mainElement, new MainNavigation(films).element, RenderPosition.BEFOREEND);
render(mainElement, new SortList().element, RenderPosition.BEFOREEND);
// render(mainElement, filmsBoardComp, RenderPosition.BEFOREEND);
// render(mainElement, moreBtnComponent.element, RenderPosition.BEFOREEND);
render(footerStats, new FooterStats(films).element, RenderPosition.BEFOREEND);

movieListPresenter.init(films);

// const onFilmCardClick = (popupData) => {
//   console.log(popupData);
//   // let target = evt.target;

//   // if (target.tagName !== 'ARTICLE') {
//   //   target = target.closest('article');
//   // }
//   // const closePopup = () => {
//   //   remove(currentPopup);
//   //   document.body.classList.remove('hide-overflow');
//   //   currentPopup = null;
//   // };
//   // if (currentPopup) {
//   //   closePopup();
//   // }

//   // const popupData = films.filter((item) => `film-${item.id}` === target.id);
//   // currentPopup = new FilmPopup(popupData);
//   // render(bodyEl, currentPopup, RenderPosition.BEFOREEND);
//   // currentPopup.closePopup(closePopup);

//   // document.body.classList.add('hide-overflow');
//   // const closePopupOnEsc = (event) => {
//   //   if (isEscEvent(event)) {
//   //     closePopup();
//   //     document.removeEventListener('keydown', closePopupOnEsc);
//   //   }
//   // };
//   document.addEventListener('keydown', closePopupOnEsc);
//   // currentPopup.element.querySelector('.film-details__close-btn').addEventListener('click', closePopup);
// };


// renderFilmCard(MAX_FILMS);

// moreBtnComponent.addMoreFilmOnClick(() => {
//   currentCount += MAX_FILMS;
//   if (currentCount >= FILM_QUANTITY_CARD) {
//     remove(moreBtnComponent);
//   }

//   renderFilmCard(currentCount);
// });
