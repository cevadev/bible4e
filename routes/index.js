const biblesRouter = require('./bibles.router');
const bookRouter = require('./books.router');
const chapterRouter = require('./chapters.router');

function routerApi(app) {
  app.use('/api/v1/bibles/', biblesRouter);
  app.use('/api/v1/bibles/', bookRouter);
  app.use('/api/v1/bibles/', chapterRouter);
}

module.exports = routerApi;
