module.exports = function(app) {
  var express = require('express');
  var boardsRouter = express.Router();
  var boards = [
    {
      id: 0,
      name: "Kevin's tasks",
      description: "daily tasks for personal stuff",
      timeZone: "America/Chicago",
      links: {
        swimLanes: "swimLanes"
      }
    }
  ];
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

  boardsRouter.get('/', function(req, res) {
    res.send({
      'boards': boards
    });
  });

  boardsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  boardsRouter.get('/:id', function(req, res) {
    res.send({
      'boards': boards[req.params.id]
    });
  });

  boardsRouter.put('/:id', function(req, res) {
    res.send({
      'boards': {
        id: req.params.id
      }
    });
  });

  boardsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  boardsRouter.get('/:boardId/swimLanes', function (req, res) {
    res.send({
      'swimLanes': swimLanes
    })
  })

  app.use('/api/boards', boardsRouter);
};
