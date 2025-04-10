const express = require('express');
const connectDB = require('./config/mongo');

const app = express();
const port = process.env.PORT;

connectDB();
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});