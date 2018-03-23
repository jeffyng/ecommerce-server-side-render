const express = require('express');
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const Home = require('../pages/Home').default;
const renderPage = require('./utils/renderPage')
const app = express();
const PORT = process.env.PORT || 3000;
const StaticRouter = require('react-router-dom').StaticRouter;
const Routes = require('../routes/Routes.js').default;
const Provider = require('react-redux').Provider;
const createStore = require('./utils/createStore').default;
const renderRoutes = require('react-router-config').renderRoutes;
const matchRoutes = require('react-router-config').matchRoutes;


app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore(req.path);

  matchRoutes(Routes, req.path)

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );
  res.send(renderPage(content, store));
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
