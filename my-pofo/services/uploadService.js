const fs = require('fs');
const multer = require('multer');

module.exports.uploadDemo = (req,res,fn, dir,cb) => {

    try {
        fs.mkdirSync(dir);
    } catch (error) {
        console.log(error)
        cb(err,null)
    }

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, dir)
        },
        filename: function (req, file, cb) {
            cb(null, fn)
        }
    })

    let upload = multer({storage:storage}).single('img');


    upload(req,res,function(err,succss) {
        if(err) {
            console.log('Something went wrong ',err);
            cb(err,null)
        }else {
            console.log('Uploaded')
            cb(null,'sucess')
        }
    })

}