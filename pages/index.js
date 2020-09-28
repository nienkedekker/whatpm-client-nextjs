import fetch from 'isomorphic-unfetch';
import absoluteUrl from 'next-absolute-url';

// Get items by current year and display them.
export async function getServerSideProps({ req }) {
  const { origin } = absoluteUrl(req, 'localhost:3000');
  const res = await fetch(`${origin}/api/index`);
  const data = await res.json();
  return { props: { data } };
}

export default function IndexPage({ data }) {
  return (
    <>
      <b>Movies</b>
      <ol>
        {data.movies.map((movie) => (
          <li>
            {movie.title} ({movie.director})
          </li>
        ))}
      </ol>
      <b>Books</b>
      <ol>
        {data.books.map((book) => (
          <li>
            {book.author} - {book.title}
          </li>
        ))}
      </ol>
      <b>Shows</b>
      <ol>
        {data.shows.map((show) => (
          <li>
            {show.title} (season {show.season})
          </li>
        ))}
      </ol>
    </>
  );
}
