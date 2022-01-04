import FilmPopup from '../view/film-details-popup.js';
import { render, RenderPosition, remove} from '../render.js';
import { isEscEvent } from '../utils.js';
import FilmCard from '../view/film-card.js';
export default class MoviePresenter {
  #film = null;
  #filmCard = null;
  #filmContainer = null;
  #bodyElement = document.querySelector('body');
  #currentPopup = null;

  constructor(filmContainer) {
    this.#filmContainer = filmContainer;
  }

  init = (film) => {
    this.#film = film;

    this.#filmCard = new FilmCard(this.#film);
    this.#filmCard.showCardPopup(this.#clickOnFilmCard);
    this.#filmCard.toggleAlreadyWatched(this.#toggleAlreadyWatched);
    // попап

    // if (this.#currentPopup) {
    //   this.#closePopup();
    // }
    this.#renderFilm();
  }

  #renderFilm = () => {
    render(this.#filmContainer, this.#filmCard.element, RenderPosition.BEFOREEND);
  }

  #renderPopup = () => {
    this.#currentPopup = new FilmPopup(this.#film);
    render(this.#bodyElement, this.#currentPopup, RenderPosition.BEFOREEND);
    this.#currentPopup.closePopup(this.#closePopup);
    document.addEventListener('keydown', this.#closePopupOnEsc);
  }

  // Popup
  #clickOnFilmCard = () => {
    this.#renderPopup();
  }

  #closePopup = () => {
    remove(this.#currentPopup);
    document.body.classList.remove('hide-overflow');
    // this.#currentPopup.closePopup(this.#closePopup);
  }

  #closePopupOnEsc = (event) => {
    if (isEscEvent(event)) {
      this.#closePopup();
      document.removeEventListener('keydown', this.#closePopupOnEsc);
    }
  }

  #toggleAlreadyWatched = (film) => {
    film.userDetails.alreadyWatched = !film.userDetails.alreadyWatched;
  }
}

