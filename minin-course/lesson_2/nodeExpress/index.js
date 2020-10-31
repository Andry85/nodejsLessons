const express = require('express');
var exphbs  = require('express-handlebars');
const path = require('path');
const homeRoutes = require('./routes/home');
const addRoutes = require('./routes/add');
const coursesRoutes = require('./routes/courses');

const app = express();

var hbs = exphbs.create({ 
    defaultLayout: 'main',
    extname: 'hbs',

});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');


app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use('/', homeRoutes);
app.use('/add', addRoutes);
app.use('/courses', coursesRoutes);



const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))