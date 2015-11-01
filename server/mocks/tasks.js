module.exports = function(app) {
  var express = require('express');
  var tasksRouter = express.Router();
  var tasks = [
    {
      "id":1,
      "summary":"task1",
      "description":null,
      "due_date":"2015-10-31"
    },{
      "id":2,
      "summary":"task2",
      "description":null,
      "due_date":"2015-11-01"
    },{
      "id":3,
      "summary":"task3",
      "description":null,
      "due_date":"2015-11-07"
    },{
      "id":4,
      "summary":"task4",
      "description":null,
      "due_date":"2015-11-30"
    }
  ];

  tasksRouter.get('/', function(req, res) {
    res.send({
      'tasks': tasks
    });
  });

  tasksRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  tasksRouter.get('/:id', function(req, res) {
    res.send({
      'task': tasks[req.params.id - 1]
    });
  });

  tasksRouter.put('/:id', function(req, res) {
    res.send({
      'tasks': {
        id: req.params.id
      }
    });
  });

  tasksRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/tasks', tasksRouter);
};
