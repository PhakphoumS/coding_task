'use strict';
module.exports = (app) => {
  var taskList = require('../controllers/controller');

  app.route('/tasks').get(taskList.list_all_tasks).post(taskList.create_a_task);
  app
    .route('/tasks/:taskId')
    .get(taskList.read_a_task)
    .put(taskList.update_a_task)
    .delete(taskList.delete_a_task);
};
