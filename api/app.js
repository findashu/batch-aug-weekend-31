const express = require('express');
const mongoose = require('mongoose');
const appMiddleware = require('./midlewares/appMidlleware')

const app = express();

mongoose.connect('mongodb://localhost:27017/aug-pofo',{useNewUrlParser:true,useUnifiedTopology:true})
    .then(s => console.log('DB Connected'))
    .catch(err => console.log('DB Connection error ', err))



app.use(appMiddleware.logger)

app.use(express.json());
app.use(express.urlencoded({extended:false}));



app.get('/', (req,res) => {
    res.json({'msg':"Api up and running"});
})


app.use('/api/projects', require('./app/projects/routes'))

app.use(appMiddleware.notFound);
app.use(appMiddleware.handleError);



app.listen(3002,() => console.log('API up and running on port 3002'));