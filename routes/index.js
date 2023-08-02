const express = require('express');

const biblesRouter = require('./bibles.router');
const bookRouter = require('./books.router');
const chapterRouter = require('./chapters.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);

  router.use('/bibles', biblesRouter);
  router.use('/bibles', bookRouter);
  router.use('/bibles', chapterRouter);
}

module.exports = routerApi;
