
import React from 'react';

const htmlTemplate = (page) => (
  ` <html>
    <head>
    <meta name="viewport" content="width-device-width, initial-scale=1.0"
    </head>
    <body>
    <div id="root">${page}</div>
    <script src="bundle.js"></script>
    </body>
    </html>
  `
)

module.exports = htmlTemplate;
