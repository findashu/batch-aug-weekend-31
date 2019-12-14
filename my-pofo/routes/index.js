module.exports.index = function(req,res) {
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
        title: 'Sign In'
    })
}