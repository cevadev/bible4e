const express = require('express');

const app = express();
const port = 3000;

app.get('/verse', (req, res) => {
  res.json({
    verse: 'Juan 3:16',
    text: 'Porque de tal manera Dios al mundo que ha dado a su hijo unigenito para que todo aquel que el crea no se pierda mas tenga vida eterna',
  });
});

app.listen(port, () => {
  console.info('La aplicacion se esta ejecutando satisfactoriamente');
});
