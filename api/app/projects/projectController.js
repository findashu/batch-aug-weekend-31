const ProjectService = require('./projectService');


module.exports.getList = (req,res,next) => {

    ProjectService.projectList().then(data => {
        res.json({'msg':'List of Projects',data:data})
    }).catch(err => next(err))

}

module.exports.createProject = (req,res,next) => {

    let body = req.body;

    console.log(body)

    body.alias = body.name.split(' ').join('-').toLowerCase();
    ProjectService.create(body).then(dt => {
        res.status(201).json({'msg':'Project Saved Successfully', data:dt});
    }).catch(err => next(err))
}


module.exports.getProject = (req,res,next) => {
    let alias = req.params.alias;

    ProjectService.getByAlias(alias).then(dt => {
        if(dt) {
            res.json({'msg':'Project Found',data:dt})
        }else{
            res.json({'msg':`Project not Found with alias ${alias}`})
        }
    }).catch(err => next(err))

}

module.exports.updateProject = (req,res,next) => {
    let alias = req.params.alias;
    let bodyData = req.body;
    bodyData.updatedOn = Date.now();
    

    ProjectService.update(alias,bodyData).then(dt => {
        res.json({'msg':'Project Updated', data:dt})
    }).catch(err => next(err))
}

module.exports.deleteProject = (req,res,next) => {
    let alias = req.params.alias;

    ProjectService.delete(alias).then(dt => {
        res.json({'msg':'Project deleted successfully',data:dt})
    }).catch(err => next(err))
}