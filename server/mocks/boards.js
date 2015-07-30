module.exports = function(app) {
  var express = require('express');
  var boardsRouter = express.Router();

  boardsRouter.get('/', function(req, res) {
    res.send({
      'boards': []
    });
  });

  boardsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  boardsRouter.get('/:id', function(req, res) {
    res.send({
      'boards': {
        id: req.params.id
      }
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
