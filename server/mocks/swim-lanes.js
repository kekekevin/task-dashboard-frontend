module.exports = function(app) {
  var express = require('express');
  var swimLanesRouter = express.Router();
  var swimLanes = [
    {
      id: 0,
      name: "Today",
      order: 0,
      days: 1,
      tasks: [0, 1, 2],
      board: 0
    },
    {
      id: 1,
      name: "Tomorrow",
      order: 1,
      days: 2,
      tasks: [3, 4, 5, 6],
      board: 0
    },
    {
      id: 2,
      name: "One Week",
      order: 2,
      days: 7,
      tasks: [7],
      board: 0
    },
    {
      id: 3,
      name: "One Month",
      order: 3,
      days: 30,
      tasks: [8, 9],
      board: 0
    }
  ];

  swimLanesRouter.get('/', function(req, res) {
    res.send({
      'swimLanes': []
    });
  });

  swimLanesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  swimLanesRouter.get('/:id', function(req, res) {
    res.send({
      'swimLanes': swimLanes[req.params.id]
    });
  });

  swimLanesRouter.put('/:id', function(req, res) {
    res.send({
      'swimLanes': {
        id: req.params.id
      }
    });
  });

  swimLanesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/swim-lanes', swimLanesRouter);
};
