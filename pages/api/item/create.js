export async function CreateItem(req, res) {
  const { type, newItem } = req.body;
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${type}`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        // todo
        Authorization: `Bearer ${Cookie.get('mevn-token')}`,
      },
      body: JSON.stringify(newItem),
    });
    res.status(200).end();
  } catch (error) {
    res.status(500).json({ error: e.message });
  }
}
