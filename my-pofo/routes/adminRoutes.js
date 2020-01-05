const router = require('express').Router();
// const Projects = require('../models/projectModel');
const ProjectService = require('../services/projectService')

router.get('/', function(req,res,next) {
    res.render('admin/admin', {
        title:'Admin',
        layout:'admin-layout'
    })
});

router.get('/projects', function(req,res,next) {
    
    ProjectService.getProjects()
        .then(dt => {
            res.render('admin/projects', {
                title: 'Project List',
                layout:'admin-layout',
                projects: dt
            })
        }).catch(err => next(err))
    
})


router.get('/projects/create-new',function(req,res) {
    res.render('admin/newProject', {
        title: 'Create New Project',
        layout:'admin-layout',
    })
});

router.post('/projects/create-new', function(req,res,next) {
    let bodyData = req.body;
    bodyData.alias = bodyData.name.split(' ').join('-').toLowerCase();

    let classes = ['danger','primary','success','info','warning']


    bodyData.tags = bodyData.tags.split(',').map((ele,i) => {
        return {
            name:ele,
            class: classes[i]
        }
    })

    ProjectService.createProject(bodyData)
        .then(dt => {
            res.redirect('/admin/projects');
        }).catch(err => next(err))
    
    
    // console.log(bodyData);
    // let projectCollection = db.collection('projects');

    // projectCollection.insert(bodyData, function(err, data) {

    //     if(err) {
    //         console.log(err);
    //         next(err)
    //     }else {
    //         console.log('data',data)
    //         
    //     }
    // })
})


router.get('/projects/:alias', function(req,res,next) {
    let alias = req.params.alias;

    
    ProjectService.projectDetail(alias)
        .then(dt => {
            res.render('admin/projectDetail', {
                title: 'Project Detail',
                layout:'admin-layout',
                project: dt
            })
        }).catch(err => next(err))
    
})


module.exports = router;