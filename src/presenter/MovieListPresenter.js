import NoFilmCard from '../view/no-film-card';
import FilmsBoard from '../view/films-board';
import { render, RenderPosition } from '../render';
import { generateFilm } from '../mock/film';
import MoviePresenter from '../presenter/MoviePresenter';

const filmsBoardComp = new FilmsBoard();
const filmsBoardEl = filmsBoardComp.element.querySelector('.films-list__container');
const FILM_QUANTITY_CARD = 15;
const films = Array.from({length: FILM_QUANTITY_CARD}, generateFilm);
const MAX_FILMS = 5;
export default class MovieListPresenter {
  #filmsContainer = null;
  #noFilmCardComponent = new NoFilmCard();

  constructor(filmsContainer) {
    this.#filmsContainer = filmsContainer;
  }

  #renderBoard = () => {
    render(this.#filmsContainer, filmsBoardComp, RenderPosition.BEFOREEND);
  }

  #renderFilmCards = () => {
    filmsBoardEl.innerHTML = '';
    if (films.length === 0) {
      render(filmsBoardEl,  this.#noFilmCardComponent, RenderPosition.BEFOREEND);
    } else {
      MoviePresenter.renderFilmCard(MAX_FILMS);
    }
  }
}

