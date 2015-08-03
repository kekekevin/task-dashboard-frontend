module.exports = function(app) {
  var express = require('express');
  var swimLanesRouter = express.Router();
  var swimLanes = [
    {
      id: 0,
      name: "Today",
      order: 0,
      days: 1
    },
    {
      id: 1,
      name: "Tomorrow",
      order: 1,
      days: 2
    },
    {
      id: 2,
      name: "One Week",
      order: 2,
      days: 7
    },
    {
      id: 3,
      name: "One Month",
      order: 3,
      days: 30
    }
  ];

  swimLanesRouter.get('/', function(req, res) {
    res.send({
      'swim-lanes': swimLanes
    });
  });

  swimLanesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  swimLanesRouter.get('/:id', function(req, res) {
    res.send({
      'swim-lanes': swimLanes[req.params.id]
    });
  });

  swimLanesRouter.put('/:id', function(req, res) {
    res.send({
      'swim-lanes': {
        id: req.params.id
      }
    });
  });

  swimLanesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/swim-lanes', swimLanesRouter);
};
