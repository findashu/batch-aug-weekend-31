const Project = require('./projectModel');



module.exports.projectList = () => {
    return new Promise((resolve,reject) => {
        Project.find({'status':'active'}).then(dt => {
            resolve(dt)
        }).catch(err => reject(err))
    })
}

module.exports.create = (bodyData) => {

    return new Promise((resolve,reject) => {

        let newProject = new Project(bodyData);

        newProject.save().then(dt => {
            resolve(dt)
        }).catch(err => reject(err))
    })
}

module.exports.getByAlias = (alias) => {
    return new Promise((resolve,reject) => {

        Project.findOne({alias:alias}).then(dt => {
            resolve(dt)
        }).catch(err => reject(err))

    })
}

module.exports.update = (alias,bodyData) => {

    return new Promise((resolve,reject) => {

        Project.findOneAndUpdate({alias:alias}, {$set:bodyData,$inc:{'__v':1}},{new:true})
            .then(dt => resolve(dt))
            .catch(err => reject(err))
    })
}

module.exports.delete = (alias) => {
    return new Promise((resolve,reject) => {
        Project.findOneAndDelete({alias:alias}).then(dt => {
            resolve(dt)
        }).catch(err => reject(err))
    })
}