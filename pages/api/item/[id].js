import fetch from 'isomorphic-unfetch';

export default function handler(req, res) {
  const {
    query: { id },
  } = req;

  fetch(`${process.env.NEXT_PUBLIC_API_URL}/item/${id}`)
    .then((response) => response.json())
    .then((data) => {
      res.status(200).json({
        item: data,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        item: null,
      });
    });
}
