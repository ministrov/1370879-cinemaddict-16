import NoFilmCard from '../view/no-film-card';
import FilmsBoard from '../view/films-board';
import { render, RenderPosition } from '../render';
import MoviePresenter from '../presenter/MoviePresenter';

const filmsBoardComp = new FilmsBoard();
const filmsBoardEl = filmsBoardComp.element.querySelector('.films-list__container');
// const FILM_QUANTITY_CARD = 15;
// const MAX_FILMS = 5;
export default class MovieListPresenter {
  #filmsContainer = null;
  #noFilmCardComponent = new NoFilmCard();

  constructor(filmsContainer, films) {
    this.films = films;
    this.#filmsContainer = filmsContainer;
  }

  init() {

  }

  #renderBoard = () => {
    render(this.#filmsContainer, filmsBoardComp, RenderPosition.BEFOREEND);
  }

  #renderFilmCards = (count) => {
    filmsBoardEl.innerHTML = '';
    if (this.films.length === 0) {
      render(filmsBoardEl,  this.#noFilmCardComponent, RenderPosition.BEFOREEND);
    } else {
      for (let i = 0; i < count; i++) {
        const moviePresenter = new MoviePresenter();
        // const filmCard = new FilmCard(films[i]);
        render(filmsBoardEl, moviePresenter, RenderPosition.BEFOREEND);
        moviePresenter.showCardPopup();
      }
    }
  }

  // MoreBtn
  // Фильтрация фильмов
}

