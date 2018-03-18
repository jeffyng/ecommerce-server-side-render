
import React from 'react';

const renderPage = (page) => (
  ` <!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/style.css" >
    </head>
    <body>
    <div id="root">${page}</div>
    <script src="bundle.js"></script>
    </body>
    </html>
  `
)

module.exports = renderPage;
