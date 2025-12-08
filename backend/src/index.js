const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { getSales } = require('./controllers/salescontroller');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/sales', getSales);

const port = process.env.PORT || 4000;
app.listen(port, ()=> console.log(`Server running on port ${port}`));