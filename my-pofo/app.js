const express = require('express');
const hbs = require('hbs');
const session = require('express-session');
const mongoose = require('mongoose');
const middlewares = require('./middlewares/appMiddleware');
const projectRouter = require('./routes/projectRoutes');
const adminRouter = require('./routes/adminRoutes');

const indexRouter = require('./routes/index')
const app = express();


mongoose.connect('mongodb://localhost:27017/aug-pofo', {useNewUrlParser:true,useUnifiedTopology:true}).then(cnected => {
    console.log('DB Connected')
}).catch(err => console.log('Connection issue with mongoDB'))


app.set('views', __dirname+'/views');
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname+'/views/partials')


app.use(middlewares.logger);

app.use(session({
    secret: 'myappsupersecret',
    saveUninitialized: false,
    resave: false,
    cookie:{maxAge: 10000000}
}));


app.use(middlewares.authenticated);

app.use(express.static(__dirname+'/static'))
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/' , indexRouter);
app.use('/projects', projectRouter)
app.use('/admin',middlewares.authenticate, adminRouter)

// app.get('/blogs', routes.blogList);

// app.get('/blog/:alias', routes.blogDetail);

app.use(middlewares.notFound);
app.use(middlewares.handleError);

app.listen(3000, () => console.log('App up n running on port 3000'));