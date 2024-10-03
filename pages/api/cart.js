const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { bookId, quantity } = req.body;
    // Add the book to the cart
    // ...
    res.json({ message: 'Book added to cart successfully' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default handler;