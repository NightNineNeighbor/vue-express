const express = require('express');

//https://yorr.tistory.com/6

const app = express();

let port = 3000;

app.listen(port, () => {
  console.log(`서버가 ${port}에서 동작중입니다.`);
});

const indexRouter = require('./routes/index');

app.use(express.static('public'));

app.use('/', indexRouter);

const history = require('connect-history-api-fallback');

app.use(history());