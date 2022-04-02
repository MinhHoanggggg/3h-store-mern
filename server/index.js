const express = require('express');
const app = express();
const port = 6969;
const db = require('./src/config/db/conn');
const route = require('./src/routes');

// //connect db 
db.connect();

// app.use(express.static(path.join(__dirname, 'resources', 'public')));

app.use(express.json());
app.use(express.urlencoded());

//method
// app.use(methodOverride('_method'))

//routes init
route(app);

app.listen(port, () =>
    console.log(`App listening on port ${port}`));