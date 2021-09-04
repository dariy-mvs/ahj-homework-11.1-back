const Router = require('@koa/router');

const router = new Router({ prefix: '/messages/unread' });
const faker = require('faker');

router.get('/', async (ctx) => {
  const messages = [];
  const random = Math.floor(Math.random() * 4);
  for (let i = 0; i < random; i++) {
    const message = {
      id: faker.datatype.uuid(),
      from: faker.internet.email(),
      subject: faker.lorem.words(),
      body: faker.lorem.sentences(),
      received: new Date().toLocaleString('ru'),
    };
    messages.push(message);
  };
  const data = {
    status: 'ok',
    timestamp: new Date().toLocaleString('ru'),
    messages,
  };
  ctx.response.body = data;
});

module.exports = router;
