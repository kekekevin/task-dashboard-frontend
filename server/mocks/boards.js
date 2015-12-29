module.exports = function(app) {
  var express = require('express');
  var boardsRouter = express.Router();
  var board = {
    "id":1,
    "name":"Kevin's Tasks",
    "time_zone":"America/Chicago",
    "description":"random stuff that i need to do",
    "swim_lane_ids":[
      1,
      2,
      3,
      4
    ]
  };

  boardsRouter.get('/', function(req, res) {
    res.send({
      boards: [
        board
      ]
    });
  });

  boardsRouter.post('/', function(req, res) {

  });

  boardsRouter.get('/:id', function(req, res) {
    res.send({
      board: board
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
