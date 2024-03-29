//CODIGO PRINCIPAL PARA INICIAR EL SERVIDOR CON CONEXION A MYSQL, para visualizar en navegador colocar localhost:4500
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const session = require('express-session');
const MySQLStore = require('express-mysql-session');


const {database} = require('./keys');


//initializations
const app = express();

//settings
app.set('port', process.env.PORT || 4500);
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs',exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname:'.hbs',
    helpers: require('./lib/handlebars')
}));
app.set('view engine','.hbs');
//Middlewares
app.use(session({
    secret: 'codemysqlnodesession',
    resave:false,
    saveUninitialized:false,
    store: new MySQLStore(database)
}));
app.use(flash());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Global Variables
app.use((req,res,next) => {
    app.locals.success = req.flash('success');
    next();
});

//Public
app.use(express.static(path.join(__dirname,'public')));

//Routes
app.use(require('./routes'));
app.use(require('./routes/authentication'));




//Starting the server
app.listen(app.get('port'), () => {
    console.log('Server is in port', app.get('port'));
});
