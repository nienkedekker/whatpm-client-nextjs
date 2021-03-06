import fetch from 'isomorphic-unfetch';
import { getCurrentYear } from '../../../lib/tiny-utils';

export default function handler(req, res) {
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/years/year/${getCurrentYear()}`)
    .then((response) => response.json())
    .then((data) => {
      res.status(200).json({
        movies: data.allMovies,
        books: data.allBooks,
        shows: data.allShows,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        items: null,
      });
    });
}
