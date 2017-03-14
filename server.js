const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use('/scripts', express.static(`${__dirname}/dist/scripts`));
app.use('/styles', express.static(`${__dirname}/dist/styles`));

app.get(`/`, (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

app.listen(port, () => {
  console.info('app listening on', port);
});
