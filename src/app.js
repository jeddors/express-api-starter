const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
//const cors = require('cors'); <included in middleware now>

require('dotenv').config();

const middlewares = require('./middlewares');
const api = require('./api');

const app = express();

//app.use(morgan('dev'));
app.use(helmet());
//app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: "you've reached the server, hello!",
    timestamp: new Date().getUTCMilliseconds()
  });
});

app.use('/api/v1', api);

app.use(middlewares.logging);
app.use(middlewares.cors);
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const port = process.env.PORT || 5000;

//init passport.js
//init rateLimiter


app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});
