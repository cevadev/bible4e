const express = require('express');
const routerApi = require('./routes');

const app = express();
// middleware de express que nos permite recibir informacion en formato json
app.use(express.json());
const port = 3000;

routerApi(app);

app.listen(port, () => {
  console.info('La aplicacion se esta ejecutando satisfactoriamente');
});
