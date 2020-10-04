import fetch from 'isomorphic-unfetch';
import absoluteUrl from 'next-absolute-url';

// Get items by current year and display them.
export async function getServerSideProps({ req, params: { year } }) {
  const { origin } = absoluteUrl(req, 'localhost:3000');
  const res = await fetch(`${origin}/api/year/${year}`);
  const data = await res.json();
  const { movies, books, shows } = data;
  return { props: { movies, books, shows, year } };
}

export default function YearPage({ movies, books, shows, year }) {
  return (
    <>
      <h1>Items by year {year} </h1>

      <b>Movies</b>
      <ol>
        {movies.map((movie) => (
          <li key={movie._id}>
            {movie.title} ({movie.director})
          </li>
        ))}
      </ol>
      <b>Books</b>
      <ol>
        {books.map((book) => (
          <li key={book._id}>
            {book.author} - {book.title}
          </li>
        ))}
      </ol>
      <b>Shows</b>
      <ol>
        {shows.map((show) => (
          <li key={show._id}>
            {show.title} (season {show.season})
          </li>
        ))}
      </ol>
    </>
  );
}
