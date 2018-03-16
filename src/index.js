const express = require('express');
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const Home = require('./components/Home').default;
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {


  res.send(renderToString(<Home />));
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
