const router = require('express').Router();
const controller = require('./projectController');


router.get('/', controller.getList);

router.post('/',controller.createProject);


// router.get('/:alias', controller.getProject);
// router.put(':/alias, controller.updateProject)


router.route('/:alias')
    .get(controller.getProject)
    .put(controller.updateProject)
    .delete(controller.deleteProject);


module.exports = router;