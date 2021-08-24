const express = require('express');
const jsonServer = require('json-server');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const server = express();

server.use(fileUpload());

server.use(express.urlencoded({ extended: true }));
server.use(cors());

server.use('/recipe', (req, res, next) => {
  if (req.method === 'POST') {
    if (req.files) {
      const file = req.files.image;
      const name = req.body.title.replace(' ', '_');
      const image = `${name}.png`;
      file.mv(`${__dirname}/public/${image}`);
      req.body.image = image;
    }
    req.body.ingredients = req.body.ingredients.map((ingredient) =>
      JSON.parse(ingredient),
    );
  }
  next();
});

server.use(jsonServer.router('data.json'));

server.listen(3001);
