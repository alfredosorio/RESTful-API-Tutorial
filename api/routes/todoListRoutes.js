module.exports = (server => {
  const todoList = require('../controllers/todoListController')

  // todoList Routes
  server.route('/tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task)

  server.route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task)
})