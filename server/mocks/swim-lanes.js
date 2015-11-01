module.exports = function(app) {
  var express = require('express');
  var swimLanesRouter = express.Router();
  var swimLanes = [
    {
      "id":1,
      "name":"Today",
      "days":1,
      "order":1,
      "task_ids":[1]
    },{
      "id":2,
      "name":"Tomorrow",
      "days":2,"order":2,
      "task_ids":[2]
    },{
      "id":3,
      "name":"One Week",
      "days":7,"order":3,
      "task_ids":[3]
    },{
      "id":4,
      "name":"One Month",
      "days":30,
      "order":4,
      "task_ids":[4]
    }
  ];

  swimLanesRouter.get('/', function(req, res) {
    res.send({
      'swim_lanes': swimLanes
    });
  });

  swimLanesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  swimLanesRouter.get('/:id', function(req, res) {
    res.send({
      'swim_lane': swimLanes[req.params.id - 1]
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

  app.use('/swim-lanes', swimLanesRouter);
};
