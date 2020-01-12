module.exports.logger = (req,res,next) => {
    console.log(req.method, req.url);
    next()
}

module.exports.notFound = (req,res,next) => {
    res.status(404).json({'msg':'URL not found'});
}

module.exports.handleError = (err,req,res,next) => {
    console.log(err);
    res.status(500).json({'msg':err.message})
}