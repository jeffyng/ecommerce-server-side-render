const express = require('express');
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const Home = require('../components/Home').default;
const htmlTemplate = require('./htmlTemplate')
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  const content = renderToString(<Home />);
  res.send(htmlTemplate(content));
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
