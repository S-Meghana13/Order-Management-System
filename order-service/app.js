require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/orders', orderRoutes);
app.use('/api/auth', require('./routes/authRoutes'));

app.get('/', (req, res) => {
  res.send('Backend is running');
});


mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch(err => console.log('MongoDB connection error:', err));
