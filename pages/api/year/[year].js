import fetch from 'isomorphic-unfetch';

export default function handler(req, res) {
  const {
    query: { year },
  } = req;

  fetch(`${process.env.NEXT_PUBLIC_API_URL}/years/year/${year}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
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
