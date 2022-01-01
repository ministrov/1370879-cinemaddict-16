import NoFilmCard from '../view/no-film-card.js';
import FilmsBoard from '../view/films-board.js';
import { render, RenderPosition } from '../render.js';
import MoviePresenter from './MoviePresenter.js';
import showMoreBtn from '../view/show-more-btn.js';
// import showMoreButton from '../view/show-more-btn.js';
// const mainEl = document.querySelector('.main');
// const moreBtnComponent = new showMoreButton();
const FILM_QUANTITY_CARD = 15;
const MAX_FILMS = 5;
export default class MovieListPresenter {
  #filmsContainer = null;
  #currentCount = MAX_FILMS;
  #noFilmCardComponent = new NoFilmCard();
  #filmsBoard = new FilmsBoard();
  #filmsBoardElement = this.#filmsBoard.element.querySelector('.films-list__container');
  #showMoreButton = null;
  #films = [];
  #filmsPresenterMap = new Map();

  constructor(filmsContainer) {
    this.#filmsContainer = filmsContainer;
  }

  init = (films) => {
    this.#films = [...films];
    this.#renderBoard();

    if (this.#films.length === 0) {
      render(this.#filmsBoard,  this.#noFilmCardComponent, RenderPosition.BEFOREEND);
    } else {
      this.#renderFilmCards(this.#films.slice(0, this.#currentCount));

      if (this.#films.length > MAX_FILMS) {
        this.#showMoreButton = new showMoreBtn();
        this.#renderMoreButton();
      }
    }
  }

  #renderBoard = () => {
    render(this.#filmsContainer, this.#filmsBoard.element, RenderPosition.BEFOREEND);
  }

  #renderFilmCards = (films) => {
    films.forEach((film) => {
      const moviePresenter = new MoviePresenter(this.#filmsBoardElement);

      this.#filmsPresenterMap.set((Math.random() * 1000).toFixed(), moviePresenter);
      moviePresenter.init(film);
    });
  }

  #renderMoreButton = () => {
    render(this.#filmsContainer, this.#showMoreButton.element, RenderPosition.BEFOREEND);

    this.#showMoreButton.addMoreFilmOnClick(() => {
      this._removeFilms();

      this.#currentCount += MAX_FILMS;

      if (this.#currentCount >= FILM_QUANTITY_CARD) {
        this.#showMoreButton.removeElement();
      }

      this.#renderFilmCards(this.#films.slice(0, this.#currentCount));
    });
  }

  _removeFilms () {
    // удалить все фильмы
    this.#filmsPresenterMap.clear();
  }
}
