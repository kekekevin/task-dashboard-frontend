module.exports = function(app) {
  var express = require('express');
  var boardsRouter = express.Router();
  var boards = [
    {
      id: 0,
      name: "Kevin's tasks",
      description: "daily tasks for personal stuff",
      timeZone: "America/Chicago",
      swimLanes: [0, 1, 2, 3]
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

  app.use('/api/boards', boardsRouter);
};
