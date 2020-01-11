const router = require('express').Router();
const data = require('../mydata').data;
const ProjectService = require('../services/projectService')


router.get('/', function(req,res,next) {
    
    // function callback (err ,data) {
    //     if(err) {
    //         next(err)
    //     }else{
    //         res.render('projectList', {
    //             title: 'Projects',
    //             projects: data,
    //             navProject: true
    //         })
    //     }
    // }



    ProjectService.getProjects().then(data => {
        res.render('projectList', {
            title: 'Projects',
            projects: data,
            navProject: true
        })
    }).catch(err => next(err))
});

router.get('/:alias', function(req,res,next) {
    let alias = req.params.alias;
    // req.body.email

   ProjectService.projectDetail(alias)
        .then(dt => {
            res.render('projectDetail', {
                title: dt.name,
                project: dt
            })
        }).catch(err => next(err))

    
});


router.get('/:alias/demo', function(req,res) {
    let alias = req.params.alias;
    res.render('demo', {
        title:'Demo',
        alias:alias,
        layout:'layout-signin'
    })
})

module.exports = router;