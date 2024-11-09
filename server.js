require('dotenv').config();
const express = require('express');
const path = require('node:path');
const dbConnection = require('./utils/dbConnect');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use(express.json());

app.use('/', require('./routes/mainRoutes'));
app.use('/kerdesek', require('./routes/kerdesekRoutes'));
app.use('/ujkerdes', require('./routes/ujKerdesRoutes'));
app.use('/kerdes', require('./routes/kerdesRoutes'));

dbConnection
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err.message);
    });
