const data = require('../mydata').data;

const mongoClient = require('mongodb').MongoClient;


let db;

mongoClient.connect('mongodb://localhost:27017',{useNewUrlParser:true,useUnifiedTopology:true },function(err,client) {

    if(err) {
        console.log('DB Connection Err', err)
    }else{
        console.log('MongoDB Connected')
        db = client.db('aug-pofo');
    }
});





module.exports.index = function(req,res) {
    // console.log(req.session);
    res.render('index',{
        title: 'My Portfolio - Ashutosh Mishra',
        navHome: true
    })
}

module.exports.projectList = (req,res) => {

    // console.log(data.myProjects);

    res.render('projectList', {
        title: 'Projects',
        projects: data.myProjects,
        navProject: true
    })
}


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

module.exports.projectDetail = (req,res) => {

    let alias = req.params.alias;
    // req.body.email

    let project = data.myProjects.filter(ele => ele.alias == alias)[0]

    // console.log(project)
    // data.myProjects

    console.log('my alias',alias);

    res.render('projectDetail', {
        title: project.name,
        project: project
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
    res.render('admin/admin', {
        title:'Admin',
        layout:'admin-layout'
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

module.exports.blogDetail = (req,res) => {
    let alias = req.params.alias;
    let blog = data.myBlog.filter(ele => ele.alias == alias)[0];


    res.render('blogDetail', {
        title: blog.name,
        blog: blog
    })
}

module.exports.adminProjectList = (req,res) => {
    
    let projectCollection = db.collection('projects');
    projectCollection.find().toArray(function(err,data) {
        if(err) {
            console.log(err)
        }else {
            console.log('Data from db',data);
            res.render('admin/projects', {
                title: 'Project List',
                layout:'admin-layout',
                projects: data
            })
        }
    })


    
}

module.exports.adminProjectDetail = (req,res,next) => {

    let alias = req.params.alias;

    let projectCollection = db.collection('projects');

    projectCollection.find({alias:alias}).toArray(function(err,data) {
        if(err) {
            next(err)
        }else {
            console.log(data)
            res.render('admin/projectDetail', {
                title: 'Project Detail',
                layout:'admin-layout',
                project: data[0]
            })
        }
    })

    // console.log(alias);
    let project = data.myProjects.filter(ele => ele.alias == alias)[0]

    
}

module.exports.signout = (req,res) => {
    req.session.isLoggedIn = false;
    req.session.user = {};
    res.redirect('/');
}


module.exports.createNewProject = (req,res) => {
    res.render('admin/newProject', {
        title: 'Create New Project',
        layout:'admin-layout',
    })
}

module.exports.doCreateNewProject = (req,res,next) => {
    let bodyData = req.body;
    bodyData.alias = bodyData.name.split(' ').join('-').toLowerCase();


    console.log(bodyData);
    let projectCollection = db.collection('projects');

    projectCollection.insert(bodyData, function(err, data) {

        if(err) {
            console.log(err);
            next(err)
        }else {
            console.log('data',data)
            res.redirect('/admin/projects');
        }
    })
}