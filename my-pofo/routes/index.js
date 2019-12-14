module.exports.index = function(req,res) {

    console.log(req.session);



    res.render('index',{
        title: 'My Portfolio - Ashutosh Mishra',
        navHome: true
    })
}

module.exports.projectList = (req,res) => {
    res.render('projectList', {
        title: 'Projects',
        navProject: true
    })
}


module.exports.blogList = (req,res) => {
    res.render('blog', {
        title: 'Blog List',
        navBlog: true
    })
}

module.exports.projectDetail = (req,res) => {
    res.render('projectDetail', {
        title: 'Project Detail'
    })
}

module.exports.contact = (req,res) => {
    res.render('contact', {
        title: 'Contact Us',
        navContact: true
    })
}

module.exports.doContact = (req,res) => {
    let body = req.body;
    console.log(body);

    res.status(201).json({
        message: 'Thanks for Contacting US'
    });
}

module.exports.signin = (req,res) => {
    res.render('signin', {
        title: 'Sign In',
        layout:'layout-signin'
    })
}

module.exports.signup = (req,res) => {
    res.render('signup', {
        title: 'Sign Up',
        layout:'layout-signin'
    })
}

module.exports.doSignup = (req,res) => {
    let body = req.body;
    console.log(body);
    res.redirect('/signin');
}


module.exports.admin = (req,res) => {
    res.render('admin', {
        title:'Admin'
    })
}

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



module.exports.doSignin = (req,res) => {
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
}