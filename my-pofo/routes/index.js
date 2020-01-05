const data = require('../mydata').data;
const router = require('express').Router();
const mongoClient = require('mongodb').MongoClient;
const users = [
    {
        name:'Test User',
        email:"test@test.com",
        password:'test1234'
    },
    {
        name:'User',
        email:"testuser@test.com",
        password:'test123456'
    }
]

let db;

mongoClient.connect('mongodb://localhost:27017',{useNewUrlParser:true,useUnifiedTopology:true },function(err,client) {

    if(err) {
        console.log('DB Connection Err', err)
    }else{
        console.log('MongoDB Connected')
        db = client.db('aug-pofo');
    }
});





router.get('/',function(req,res) {
    // console.log(req.session);
    res.render('index',{
        title: 'My Portfolio - Ashutosh Mishra',
        navHome: true
    })
});


router.get('/contact',(req,res) => {
    res.render('contact', {
        title: 'Contact Us',
        navContact: true
    })
})


router.post('/contact', (req,res) => {
    let body = req.body;
    console.log(body);

    res.status(201).json({
        message: 'Thanks for Contacting US'
    });
});

router.get('/signin', (req,res) => {
    res.render('signin', {
        title: 'Sign In',
        layout:'layout-signin'
    })
});

router.get('/signup', (req,res) => {
    res.render('signup', {
        title: 'Sign Up',
        layout:'layout-signin'
    })
});


router.post('/signup',(req,res) => {
    let body = req.body;
    console.log(body);
    res.redirect('/signin');
})

router.post('/signin', (req,res) => {
    let body = req.body;
    console.log(body);
    
    let user = users.filter((ele) => body.email == ele.email)

    console.log(user);

    if(user.length > 0) {
        if(user[0].password == body.password) {

            req.session.isLoggedIn = true;
            req.session.user = user[0];
            res.redirect('/admin');
        }else {
           res.render('signin', {
               title:'Signin',
               layout:'layout-signin',
               error: true,
               message: 'Email/Password Incorrect'
           })
        }
    }else {
        // user not found
        res.render('signin', {
            title:'Signin',
            layout:'layout-signin',
            error:true,
            message: 'Email/Password Incorrect'
        })
    }
})

router.get('/signout',(req,res) => {
    req.session.isLoggedIn = false;
    req.session.user = {};
    res.redirect('/');
})

module.exports.blogList = (req,res) => {

    let random = parseInt(Math.random()*data.myBlog.length)
    console.log(random)
    res.render('blog', {
        title: 'Blog List',
        navBlog: true,
        blogs: data.myBlog,
        blogCategory: data.blogCategories,
        featuredBlog: data.myBlog[random]
    })
}



module.exports.blogDetail = (req,res) => {
    let alias = req.params.alias;
    let blog = data.myBlog.filter(ele => ele.alias == alias)[0];


    res.render('blogDetail', {
        title: blog.name,
        blog: blog
    })
}


module.exports = router;