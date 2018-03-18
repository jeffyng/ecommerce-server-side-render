const express = require('express');
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const Home = require('../pages/Home').default;
const renderPage = require('./utils/renderPage')
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  const content = renderToString(<Home />);
  res.send(renderPage(content));
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
