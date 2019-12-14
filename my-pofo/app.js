const express = require('express');
const hbs = require('hbs');
const session = require('express-session');
const middlewares = require('./middlewares/appMiddleware');
const routes = require('./routes/index')
const app = express();


app.set('views', __dirname+'/views');
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname+'/views/partials')


app.use(middlewares.logger);

app.use(session({
    secret: 'myappsupersecret',
    saveUninitialized: false,
    resave: false,
    cookie:{maxAge: 10000000}
}))



app.use(express.static(__dirname+'/static'))
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.get('/' , routes.index);
app.get('/projects', routes.projectList);
app.get('/blogs', routes.blogList);
app.get('/project-detail', routes.projectDetail);
app.get('/contact', routes.contact);
app.post('/contact', routes.doContact);
app.get('/admin',  middlewares.authenticate,   routes.admin);

app.get('/signin', routes.signin);

app.post('/signin', routes.doSignin);

app.get('/signup', routes.signup);

app.post('/signup', routes.doSignup);



app.use(middlewares.notFound);
app.use(middlewares.handleError);


app.listen(3000, () => console.log('App up n running on port 3000'));