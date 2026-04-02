const express = require('express');
const app = express();

const cors = require("cors");
app.use(cors());

const authRoutes = require('./routes/authRoutes');
app.use(express.json()); // parse JSON
app.use('/api/auth', authRoutes);

const userRoutes = require('./routes/userRoutes');
// app.use(express.json()); // parse JSON
app.use('/api', userRoutes);

const PORT = 5000;

app.get('/', (res) => {
  res.send('Server is running 🚀');
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});