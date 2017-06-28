var controller = require('./../controllers/controller');

module.exports = app => {
  app.post('/api/login', controller.loginReg);
  app.get('/api/current_user', controller.getUser);
  app.get('/api/logout', controller.logout);
  app.post('/api/questions', controller.addQuestion);
  app.get('/api/questions', controller.getQuestions);
  app.get('/api/questions/:id', controller.show);
  app.post('/api/answers', controller.addAnswer);
  app.post('/api/likes', controller.addLike);






}
