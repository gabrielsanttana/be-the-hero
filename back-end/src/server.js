const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('Server is running on port 3333');
});