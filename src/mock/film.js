import { getRandomDecilmalNum, getRandomInteger } from '../utils';

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

export const generateTitle = () => {
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

const generateRuntime = () => {
  const durationPeriods = [
    '1h 55m',
    '2h 05m',
    '1h 45m',
    '1h 35m',
    '2h 15m',
    '2h 45m',
  ];

  const randomIndex = getRandomInteger(0, durationPeriods.length - 1);
  return durationPeriods[randomIndex];
};

const genres = [
  'Action',
  'Drama',
  'Comedy',
  'Sci-fy',
  'Film-Noir',
  'Musical'
];


// const emotions = [
//   'smile',
//   'sleeping',
//   'puke',
//   'angry'
// ];

// const localComents = {
//   comment: 'a film that changed my life, a true masterpiece, post-credit scene was just amazing omg.',
//   emotion: 'smile'
// };

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
// ];

export const generateFilm = () => ({
  id: (Math.random() * 100).toFixed(),
  filmInfo: {
    title: generateTitle(),
    alternativeTitle: 'The Great Flamarion',
    totalRating: getRandomDecilmalNum(),
    poster: generatePoster(),
    ageRating: 18,
    directors: [
      'Anthony Mann'
    ],
    writers: [
      'Anne Wigton',
      'Heinz Herald',
      'Richard Weil'
    ],
    actors: [
      'Erich von Stroheim',
      'Mary Beth Hughes',
      'Dan Duryea'
    ],
    release: {
      date: '30 March 1945',
      releaseCountry: 'USA'
    },
    runtime: generateRuntime(),
    genre: genres[getRandomInteger(0, 5)],
    description: `'The film opens following a murder at a cabaret in Mexico City
    in 1936, and then presents the events leading up to it in flashback. The Great
    Flamarion (Erich von Stroheim) is an arrogant, friendless, and misogynous
     marksman who displays his trick gunshot act in the vaudeville circuit. His
     show features a beautiful assistant, Connie (Mary Beth Hughes) and her drunken
      husband Al (Dan Duryea), Flamarions other assistant. Flamarion falls in love
      with Connie, the movies femme fatale, and is soon manipulated by her into
      killing her no good husband during one of their acts.'`
  },
  userDetails: {
    watchlist: (Math.random() * 100) > 50,
    alreadyWatched: (Math.random() * 100) > 50,
    watchingDate: '',
    favorite: (Math.random() * 100) > 50
  },
  comments: getRandomInteger(0, 9)
});
