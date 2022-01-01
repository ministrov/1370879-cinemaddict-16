import FilmPopup from '../view/film-details-popup.js';
import { render, RenderPosition, remove} from '../render.js';
import { isEscEvent } from '../utils.js';
import FilmCard from '../view/film-card.js';

const bodyEl = document.querySelector('body');
let currentPopup = null;
export default class MoviePresenter {
  #popupData = {};
  #film = null;
  #filmCard = null;
  #filmContainer = null;
  #currentPopup = new FilmPopup();

  constructor(filmContainer) {
    // this.#popupData = popupData;
    this.#filmContainer = filmContainer;
  }

  init = (film) => {
    this.#film = film;

    this.#filmCard = new FilmCard(this.#film);

    // попап

    // if (currentPopup) {
    //   this.#closePopup();
    // }
    // this.#clickOnFilmCard(this.#popupData);
    this.#renderFilm();
  }

  #renderFilm = () => {
    render(this.#filmContainer, this.#filmCard.element, RenderPosition.BEFOREEND);
  }

  #renderPopup = () => {
    render(bodyEl, currentPopup, RenderPosition.BEFOREEND);
    currentPopup.closePopup(this.#closePopup);
  }

  // Popup
  #clickOnFilmCard = () => {
    this.#renderPopup();
  }

  #closePopup = () => {
    remove(currentPopup);
    document.body.classList.remove('hide-overflow');
    currentPopup = null;
    currentPopup.closePopup(this.#closePopup);
    this.#closePopupOnEsc();
    document.addEventListener('keydown', this.#closePopupOnEsc);
  }

  #closePopupOnEsc = (event) => {
    if (isEscEvent(event)) {
      this.#closePopup();
      document.removeEventListener('keydown', this.#closePopupOnEsc);
    }
    document.addEventListener('keydown', this.#closePopupOnEsc);
  }
  // Обработка событий
}
