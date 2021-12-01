import { getRandomDecilmalNum } from '../utils';
import { generateTitle, generatePoster } from './film';

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

export const generateFilmPopup = () => ({
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
    runtime: '1h 18m',
    genre: [
      'Drama',
      'Film-Noir',
      'Mystery'
    ],
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
    watchlist: false,
    alreadyWatched: true,
    watchingDate: '',
    favorite: false
  },
  comments: []
});
