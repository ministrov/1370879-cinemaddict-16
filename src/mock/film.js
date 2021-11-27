const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomDecilmalNum = () => {
    let decimal = Math.random() * 10;
  return decimal.toFixed(1);
}

const generateDescription = () => {
  const descriptions = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Cras aliquet varius magna, non porta ligula feugiat eget',
    'Fusce tristique felis at fermentum pharetra.',
    'Aliquam id orci ut lectus varius viverra',
    'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  ]

  const randomIndex = getRandomInteger(0, descriptions.length - 1);
  return descriptions[randomIndex];
}

const generateTitle = () => {
  const titles = [
    'made-for-each-other',
    'popeye-meets-sinbad',
    'sagebrush-trail',
    'santa-claus-conquers-the-martians',
    'the-dance-of-life',
    'the-great-flamarion',
    'the-man-with-the-golden-arm',
  ]

  const randomIndex = getRandomInteger(0, titles.length - 1);
  return titles[randomIndex];
}

const generatePoster = () => {
  const posters = [
    './images/posters/made-for-each-other.png',
    './images/posters/popeye-meets-sinbad.png',
    './images/posters/sagebrush-trail.jpg',
    './images/posters/santa-claus-conquers-the-martians.jpg',
    './images/posters/the-dance-of-life.jpg',
    './images/posters/the-great-flamarion.jpg',
    './images/posters/the-man-with-the-golden-arm.jpg',
  ]

  const randomIndex = getRandomInteger(0, posters.length - 1);
  return posters[randomIndex];
}

const genres = [
  'Action', 
  'Drama', 
  'Comedy', 
  'Sci-fy',
  'Musical'
]

// const emotions = [
//   "smile",
//   "sleeping",
//   "puke", 
//   "angry"
// ]

const localComents = {
  comment: 'a film that changed my life, a true masterpiece, post-credit scene was just amazing omg.',
  emotion: 'smile'
}

// const comments = [
//   {
//     id: '42',
//     author: 'Ilya O\'Reilly',
//     comment: 'a film that changed my life, a true masterpiece, post-credit scene was just amazing omg.',
//     date: '2019-05-11T16:12:32.554Z',
//     emotion: emotions[getRandomInteger(0, 3)]
//   },
//   {
//     id: '21',
//     author: 'Pavel Gomes',
//     comment: 'a film that changed my life, a true masterpiece, post-credit scene was just amazing omg.',
//     date: '2020-06-13T16:12:32.554Z',
//     emotion: emotions[getRandomInteger(0, 3)]
//   },
//   {
//     id: '2',
//     author: 'Bruno Fernandes',
//     comment: 'a film that changed my life, a true masterpiece, post-credit scene was just amazing omg.',
//     date: '2020-07-01T16:12:32.554Z',
//     emotion: emotions[getRandomInteger(0, 3)]
//   }
// ]

export const generateFilm = () => ({
  id: getRandomInteger(0, 10),
  title: generateTitle(),
  poster: generatePoster(),
  description: generateDescription(),
  genre: genres[getRandomInteger(0, 3)],
  year: 2010,
  comment: localComents.comment,
  ratio: getRandomDecilmalNum(),
});