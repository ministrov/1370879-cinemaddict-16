import { createUserRankTemplate } from "./view/user-rank.js";
import { renderTemplate, RenderPosition } from "./render.js";

const headerEl = document.querySelector('.header');

renderTemplate(headerEl, createUserRankTemplate(), RenderPosition.BEFOREEND);
console.log(createUserRankTemplate());