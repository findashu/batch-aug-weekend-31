const Projects = require('../models/projectModel');


// module.exports.getProjects = (cb) => {
//     Projects.find()
//         .then(data => cb(null,data))
//         .catch(err => cb(err,null))
// }



module.exports.getProjects = () => {
    return new Promise((resolve,reject) => {
        Projects.find({status:'active'})
            .then(data => resolve(data))
            .catch(err => reject(err))
    })
}

module.exports.projectDetail = (alias) => {
    return new Promise((resolve,reject) => {
        Projects.findOne({alias:alias})
            .then(dt => resolve(dt))
            .catch(err => reject(err))
    })
}


module.exports.createProject = (bd) => {
    return new Promise((resolve,reject) =>  {

        let newProject = new Projects(bd);

        console.log(newProject);


        newProject.save()
            .then(dt => {
                console.log('data saved',dt)
                resolve(dt)})
            .catch(err => reject(err))

    })
}