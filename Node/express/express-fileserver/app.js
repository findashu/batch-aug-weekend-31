const express = require('express');
const middleware = require('./middleware/appMiddleware');
const routes = require('./routes/index')
const app = express();


// Body Data Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// serve static content
app.use(express.static(__dirname+'/static',{maxAge:24*60*60}));

// Logger Middlewares
app.use(middleware.logger);


// Routes
app.get('/', routes.index);
app.get('/contact', routes.contact);
app.post('/contact', routes.doContact);


// Error Middleware
app.use(middleware.notFound);
app.use(middleware.errorHandler);



app.listen(3000, () => console.log('Server running on port 3000'));