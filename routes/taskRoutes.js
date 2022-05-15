const taskController= require ('../controllers/taskController');
const express=require('express');

const router= express.Router();

router.route('/').get(taskController.getTasks).post(taskController.createTask);

router.route('/:id').patch(taskController.deleteTask).delete(taskController.updateController);

module.exports= router;