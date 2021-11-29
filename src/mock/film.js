import { getRandomInteger, getRandomDecilmalNum } from '../utils.js';

const generateDescription = () => {
  const descriptions = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Cras aliquet varius magna, non porta ligula feugiat eget',
    'Fusce tristique felis at fermentum pharetra.',
    'Aliquam id orci ut lectus varius viverra',
    'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  ];

  const randomIndex = getRandomInteger(0, descriptions.length - 1);
  return descriptions[randomIndex];
};

const generateTitle = () => {
  const titles = [
    'made-for-each-other',
    'popeye-meets-sinbad',
    'sagebrush-trail',
    'santa-claus-conquers-the-martians',
    'the-dance-of-life',
    'the-great-flamarion',
    'the-man-with-the-golden-arm',
  ];

  const randomIndex = getRandomInteger(0, titles.length - 1);
  return titles[randomIndex];
};

const generatePoster = () => {
  const posters = [
    './images/posters/made-for-each-other.png',
    './images/posters/popeye-meets-sinbad.png',
    './images/posters/sagebrush-trail.jpg',
    './images/posters/santa-claus-conquers-the-martians.jpg',
    './images/posters/the-dance-of-life.jpg',
    './images/posters/the-great-flamarion.jpg',
    './images/posters/the-man-with-the-golden-arm.jpg',
  ];

  const randomIndex = getRandomInteger(0, posters.length - 1);
  return posters[randomIndex];
};

const generateYear = () => {
  const years = [
    '1925',
    '1945',
    '1957',
    '1975',
    '1984',
    '1998',
  ];

  const randomIndex = getRandomInteger(0, years.length - 1);
  return years[randomIndex];
};

const generateDuration = () => {
  const durationPeriods = [
    '1h 55m',
    '2h 05m',
    '1h 45m',
    '1h 35m',
    '2h 15m',
    '2h 45m',
  ]

  const randomIndex = getRandomInteger(0, durationPeriods.length - 1);
  return durationPeriods[randomIndex];
};

const genres = [
  'Action',
  'Drama',
  'Comedy',
  'Sci-fy',
  'Musical'
];

export const generateFilm = () => ({
  user_controls: {
    addToWatchList: false,
    AlreadyWatched: false,
    AddToFavorites: false
  },
  title: generateTitle(),
  poster: generatePoster(),
  description: generateDescription(),
  genre: genres[getRandomInteger(0, 3)],
  year: generateYear(),
  duration: generateDuration(),
  comment: getRandomInteger(0, 10),
  ratio: getRandomDecilmalNum(),
});
