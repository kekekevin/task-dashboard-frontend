module.exports = function(app) {
  var express = require('express');
  var tasksRouter = express.Router();
  var tasks = [
    {
      id: 0,
      summary: "task 1",
      description: "description 1",
      dueDate: "Tue Aug 04 2015 19:02:29 GMT-0500 (CDT)",
      swimLane: 0
    },
    {
      id: 1,
      summary: "task 2",
      description: "description 2",
      dueDate: "Tue Aug 04 2015 19:02:29 GMT-0500 (CDT)",
      swimLane: 0
    },
    {
      id: 2,
      summary: "task 3",
      description: "description 3",
      dueDate: "Tue Aug 04 2015 19:02:29 GMT-0500 (CDT)",
      swimLane: 0
    },
    {
      id: 3,
      summary: "task 4",
      description: "description 4",
      dueDate: "Tue Aug 04 2015 19:02:29 GMT-0500 (CDT)",
      swimLane: 1
    },
    {
      id: 4,
      summary: "task 1",
      description: "description 1",
      dueDate: "Tue Aug 04 2015 19:02:29 GMT-0500 (CDT)",
      swimLane: 1
    },
    {
      id: 5,
      summary: "task 1",
      description: "description 1",
      dueDate: "Tue Aug 04 2015 19:02:29 GMT-0500 (CDT)",
      swimLane: 1
    },
    {
      id: 6,
      summary: "task 1",
      description: "description 1",
      dueDate: "Tue Aug 04 2015 19:02:29 GMT-0500 (CDT)",
      swimLane: 1
    },
    {
      id: 7,
      summary: "task 1",
      description: "description 1",
      dueDate: "Tue Aug 04 2015 19:02:29 GMT-0500 (CDT)",
      swimLane: 2
    },
    {
      id: 8,
      summary: "task 1",
      description: "description 1",
      dueDate: "Tue Aug 04 2015 19:02:29 GMT-0500 (CDT)",
      swimLane: 3
    },
    {
      id: 9,
      summary: "task 1",
      description: "description 1",
      dueDate: "Tue Aug 04 2015 19:02:29 GMT-0500 (CDT)",
      swimLane: 3
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
      'tasks': tasks[req.params.id]
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
