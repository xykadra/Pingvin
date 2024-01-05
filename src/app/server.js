// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Simple authentication logic
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Replace these hardcoded values with your actual user data or database query
  const validUsername = 'admin';
  const validPassword = 'admin';

  if (username === validUsername && password === validPassword) {
    // You might generate a token here for more secure authentication
    const authToken = 'your_generated_token';

    res.json({
      success: true,
      message: 'Login successful',
      authToken, // Include token or any other relevant information
    });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


//cart logic

let cartItems = [];

app.post('/api/addToCart', (req, res) => {
  const { product } = req.body;

  console.log('Adding to cart:', product);

  // Add the product to the cart (you might want to validate or modify this logic)
  cartItems.push(product);

  console.log('Updated Cart:', cartItems);

  res.json({ success: true, message: 'Product added to cart', cart: cartItems });
});
