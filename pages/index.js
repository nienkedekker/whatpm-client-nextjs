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
    <div>
      <h1>hello</h1>
      <pre>{JSON.stringify(data.movies)}</pre>

      <pre>{JSON.stringify(data.books)}</pre>

      <pre>{JSON.stringify(data.shows)}</pre>
    </div>
  );
}
