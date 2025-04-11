const express = require('express');
const connectDB = require('./config/mongo');
require('dotenv').config();
const toDoRoutes = require('./routes/toDoRoutes');
const cors = require('cors');

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/todos', )

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});