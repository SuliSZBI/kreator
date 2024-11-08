require('dotenv').config();
const express = require('express');
const path = require('node:path');
const dbConnection = require('./utils/dbConnect');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use(express.json());

app.use('/api', require('./routes/mainRoutes'));
app.use('/api/kerdesek', require('./routes/kerdesekRoutes'));
app.use('/api/ujkerdes', require('./routes/ujKerdesRoutes'));
app.use('/api/kerdes', require('./routes/kerdesRoutes'));

dbConnection
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:${PORT}/api`);
        });
    })
    .catch((err) => {
        console.log(err.message);
    });
