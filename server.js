const http = require('http');
const Koa = require('koa');
const cors = require('@koa/cors');
const app = new Koa();
const koaBody = require('koa-body');
const router = require('./routes');

app.use(
  cors({
    origin: '*',
    credentials: true,
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
  }),
);

app.use(koaBody({
  urlencoded: true,
  text: true,
  json: true,
  multipart: true,
}));

app.use(router.routes());

const port = process.env.PORT || 7070;
const server = http.createServer(app.callback());

// app.listen(port, () => console.log('Server is works'));

server.listen(port);
