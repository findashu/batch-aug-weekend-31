const Projects = require('../models/projectModel');
const request = require('request');
const config = require('../config/config');

// module.exports.getProjects = (cb) => {
//     Projects.find()
//         .then(data => cb(null,data))
//         .catch(err => cb(err,null))
// }



module.exports.getProjects = () => {
    return new Promise((resolve,reject) => {
        // Projects.find({status:'active'})
        //     .then(data => resolve(data))
        //     .catch(err => reject(err))

        request(`${config.apiUrl}/projects`, function(err,resp,body) {
            if(err) {
                console.log(err);
                reject(err)
            }else {
                console.log('Data frm api', body);
                let dt = JSON.parse(body)

                resolve(dt.data)
            }
        })

    })
}

module.exports.projectDetail = (alias) => {
    return new Promise((resolve,reject) => {
        // Projects.findOne({alias:alias})
        //     .then(dt => resolve(dt))
        //     .catch(err => reject(err))


        request(`http://localhost:3002/api/projects/${alias}`, (err,resp,body) => {
            if(err) {
                reject(err)
            }else{
                console.log(JSON.parse(body))
                let dt = JSON.parse(body);
                resolve(dt.data)
            }
        })




    })
}


module.exports.createProject = (bd) => {
    return new Promise((resolve,reject) =>  {

        const createProject = {
            method:"POST",
            uri: 'http://localhost:3002/api/projects',
            body: bd,
            json: true
        }

        request(createProject, function(err,resp,body) {
            if(err) {
                console.log(err);
                reject(err)
            }else {
                console.log(JSON.stringify(body))
                resolve(JSON.parse(body))
            }
        })
    })
}

module.exports.updateProject = (alias,data) => {
    return new Promise((resolve,reject) => {

        let updatePro = {
            uri:`http://localhost:3002/api/projects/${alias}`,
            method:'PUT',
            body: data,
            json:true
        }

        request(updatePro, function(err,resp,body) {
            if(err) {
                reject(err)
            }else {
                // console.log(JSON.parse(body));
                // console.log(body)
                resolve('updated')
            }
        })
    })
}


module.exports.deleteProject = (alias) => {

    return new Promise((resolve,reject) => {

        Projects.findOneAndDelete({alias:alias}).then(dt => {
            resolve(dt)
        }).catch(err => reject(err))
    });
}