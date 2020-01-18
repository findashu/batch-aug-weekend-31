const User = require('./userModel');


module.exports.create = (bd) => {

    return new Promise((resolve,reject) => {

        let newUser = new User(bd);


        newUser.save().then(dt => {
            resolve(dt)
        }).catch(err => reject(err))

    })

}

module.exports.getUser = (bd) => {
    return new Promise((resolve,reject) => {

        User.findOne({email:bd.email}).then(dt => {

            if(dt) {

                let cpm =   dt.compare(bd.password, dt.password)
                if(cpm) {
                    resolve(dt)
                }else {
                    reject(new Error('Email or pass incorrect'))
                }
            }else {
                reject(new Error('Account is not availabe'))
            }

        }).catch(err => reject(err))

    })
}