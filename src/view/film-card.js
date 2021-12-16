import AbstractView from './abstract';
const createFilmCardTemplate = ({id, filmInfo}) => {
  const {title, totalRating, genre, poster, description, comments, runtime} = filmInfo;
  return `<article class="film-card" id="film-${id}">
    <a class="film-card__link">
    <h3 class="film-card__title">${title}</h3>
    <p class="film-card__rating">${totalRating}</p>
    <p class="film-card__info">
      <span class="film-card__year">1988</span>
      <span class="film-card__duration">${runtime}</span>
      <span class="film-card__genre">${genre}</span>
    </p>
    <img src="${poster}" alt="" class="film-card__poster">
    <p class="film-card__description">${description}</p>
    <span class="film-card__comments">${comments} comments</span>
    </a>
    <div class="film-card__controls">
      <button class="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
      <button class="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
      <button class="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>
    </div>
  </article>`;
};

export default class FilmCard extends AbstractView {
  #filmInfo = null;

  constructor(filmInfo) {
    super();
    this.#filmInfo = filmInfo;
  }

  get template() {
    return createFilmCardTemplate(this.#filmInfo);
  }
}

