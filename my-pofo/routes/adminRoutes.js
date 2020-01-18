const router = require('express').Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const unzip = require('unzip');
const uploadService = require('../services/uploadService')
const ProjectService = require('../services/projectService')





const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'../static/images'))
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})

const upload = multer({storage:storage})


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
    
});


router.post('/projects/:alias/update', function(req,res,next) {
    let alias = req.params.alias
    let bodyData = req.body;

    let classes = ['danger','primary','success','info','warning']
    bodyData.tags = bodyData.tags.split(',').map((ele,i) => {
        return {
            name:ele,
            class: classes[i]
        }
    })
    bodyData.updatedOn = Date.now();

    ProjectService.updateProject(alias,bodyData).then(dt => {
        console.log('Data updated');

        res.redirect('/admin/projects');



    }).catch(err => next(err))
})


router.get('/projects/:alias/delete', function(req,res,next) {

    let alias = req.params.alias;

    ProjectService.deleteProject(alias).then(dt => {
        res.redirect('/admin/projects')
    }).catch(err => next(err))
});


router.get('/projects/:alias/upload', (req,res) => {
    res.render('admin/upload', {
        title: 'Upload',
        layout:'admin-layout',
        path:`/admin/projects/${req.params.alias}/upload`
    })
})


router.post('/projects/:alias/upload', upload.single('img'), (req,res,next) => {

    let alias = req.params.alias;
    let file = req.file
    console.log(req.file);

    ProjectService.updateProject(alias, {'image':`/images/${file.originalname}`}).then(dt => {
        res.redirect('/admin/projects')
    }).catch(err => next(err))

   
});


router.get('/projects/:alias/upload-demo', (req,res) => {
    res.render('admin/upload', {
        title: 'Upload',
        layout:'admin-layout',
        path:`/admin/projects/${req.params.alias}/upload-demo`
    })
})


router.post('/projects/:alias/upload-demo',(req,res,next) => {

    let alias = req.params.alias

    let filename = `${alias}.zip`;

    let dir = path.join(__dirname,`../static/project-demos/${alias}`)

    // mypofo/static/project-demos/number-guessing-game


    function uploaded(err,sucess) {
        if(err) {
            next(err)
        }else {
            fs.createReadStream(dir+'/'+filename).pipe(unzip.Extract({ path: dir }));

            fs.unlinkSync(dir);

            res.redirect('/admin/projects');
        }
    }

    uploadService.uploadDemo(req,res,filename,dir,uploaded)
})



module.exports = router;