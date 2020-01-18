const userService = require('./userService')


module.exports.createUser = (req,res,next) => {

    let bodyData = req.body;

    console.log(bodyData)

    userService.create(bodyData).then(dt => {
        res.status(201).json({'msg':'User created',data:dt})
    }).catch(err => next(err))
}


module.exports.login = (req,res,next) => {

    let bdData = req.body;


    userService.getUser(bdData).then(dt => {
        res.json({'msg':'Login success',data:dt})
    }).catch(err => next(err))

}




