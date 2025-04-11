const express = require('express');
const connectDB = require('./config/mongo');
const toDoRoutes = require('./routes/toDoRoutes');
const cors = require('cors');
const port = require('./config/config').port;

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/todos', toDoRoutes);

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});