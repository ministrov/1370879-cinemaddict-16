import NoFilmCard from '../view/no-film-card.js';
import FilmsBoard from '../view/films-board.js';
import { render, RenderPosition, remove } from '../render.js';
import MoviePresenter from './MoviePresenter.js';
import ShowMoreBtn from '../view/show-more-btn.js';
// import ShowMoreBtn from '../view/show-more-btn.js';
const mainEl = document.querySelector('.main');
// const moreBtnComponent = new ShowMoreBtn();
const FILM_QUANTITY_CARD = 15;
const MAX_FILMS = 5;
export default class MovieListPresenter {
  #filmsContainer = null;
  #currentCount = null;
  #noFilmCardComponent = new NoFilmCard();
  #filmsBoard = new FilmsBoard();
  #filmsBoardEl = new FilmsBoard().element.querySelector('.films-list__container');
  #showMoreBtn = new ShowMoreBtn();
  #films = [];

  constructor(filmsContainer) {
    this.#filmsContainer = filmsContainer;
  }

  init = (films) => {
    this.#films = [...films];
    this.#renderBoard();
    if (this.#films.length === 0) {
      render(this.#filmsBoard,  this.#noFilmCardComponent, RenderPosition.BEFOREEND);
    } else {
      this.#renderFilmCards(this.#films);
    }
    // this.#renderMoreBtn();
    this.#renderMoreBtn();
  }

  #renderBoard = () => {
    render(this.#filmsBoardEl, this.#filmsBoard , RenderPosition.BEFOREEND);
  }

  #renderFilmCards = (films) => {

    for (let i = 0; i < films.length; i++) {
      const moviePresenter = new MoviePresenter();
      // render(filmsBoardEl, moviePresenter, RenderPosition.BEFOREEND);
      moviePresenter.init(films[i]);
    }
  }

  // More Btn
  #renderMoreBtn = () => {
    render(mainEl, this.#showMoreBtn.element, RenderPosition.BEFOREEND);

    this.#showMoreBtn.addMoreFilmOnClick(() => {
      this.#currentCount += MAX_FILMS;
      if (this.#currentCount >= FILM_QUANTITY_CARD) {
        remove(this.#showMoreBtn);
      }

      this.#renderFilmCards(this.#currentCount);
    });
  }
  // Фильтрация фильмов
}

