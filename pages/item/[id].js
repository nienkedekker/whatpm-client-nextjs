import fetch from 'isomorphic-unfetch';
import absoluteUrl from 'next-absolute-url';

// Get item by ID
export async function getServerSideProps({ req, params: { id } }) {
  const { origin } = absoluteUrl(req, 'localhost:3000');
  const res = await fetch(`${origin}/api/item/${id}`);
  const data = await res.json();
  return { props: { data } };
}

export default function ItemPage({ data }) {
  return <>{JSON.stringify(data)}</>;
}
