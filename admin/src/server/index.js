// System
import path from 'path';
// Koa server
import Koa from 'koa';
import Router from 'koa-router';
import BodyParser from 'koa-bodyparser';
import Logger from 'koa-logger';
import Static from 'koa-static';
// DB settings
import dbSetting from '../../dbconfig';
// Import Database and Schema
import database from './mongodb';

const GraphqlRouter = require('./router');

const port = 3000;
const app = new Koa();
const router = new Router();

database.connect();
app.use(BodyParser());
app.use(Logger());
app.use(Static(path.resolve(__dirname, '../../public')));

router.use('', GraphqlRouter.routes());

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port);

console.warn('Current Path', __dirname);
console.info(dbSetting);
console.log(`API server on port: ${port}`);
