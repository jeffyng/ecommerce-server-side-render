import React from 'react';
import serialize from 'serialize-javascript';

const renderPage = (page, store) => (
  ` <!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/style.css" >
    </head>
    <body>
    <div id="root">${page}</div>
    <script>window.INITIAL_STATE = ${serialize(store.getState())}</script>
    <script src="bundle.js"></script>
    </body>
    </html>
  `
)

module.exports = renderPage;
