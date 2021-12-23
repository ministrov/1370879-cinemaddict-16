import FilmCard from '../view/film-card';
import FilmsBoard from '../view/films-board';
import { render, RenderPosition } from '../render';
import { onFilmCardClick } from '../view/main';
import { generateFilm } from '../mock/film';

const filmsBoardComp = new FilmsBoard();
const filmsBoardEl = filmsBoardComp.element.querySelector('.films-list__container');
const FILM_QUANTITY_CARD = 15;
const films = Array.from({length: FILM_QUANTITY_CARD}, generateFilm);
export default class MoviePresenter {
  constructor(film) {
    this.film = film;
  }

  #renderFilmCard = (count) => {
    filmsBoardEl.innerHTML = '';
    for (let i = 0; i < count; i++) {
      const filmCard = new FilmCard(films[i]);
      render(filmsBoardEl, filmCard, RenderPosition.BEFOREEND);
      filmCard.showCardPopup(onFilmCardClick);
    }
  }
}
