const express = require('express');

// generamos un router especifico para bibles
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    {
      id: '592420522e16049f-01',
      name: 'Reina Valera 1909',
    },
    {
      id: '48acedcf8595c754-01',
      name: 'Palabra de Dios para ti',
    },
  ]);
});

// endpoint especifico. siempre que tengamos 2 endpoints parecidos en estructura, es necesario
// primero especificar el endpoint especifico y despues el endpoint dinamico
router.get('/filter', (req, res) => {
  res.send('Este es un endpoint especifico');
});

// endpoint dinamico
router.get('/:id', (req, res) => {
  res.json([
    {
      id: '592420522e16049f-01',
      name: 'Reina Valera 1909',
    },
  ]);
});

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'Biblia added',
    data: body,
  });
});

module.exports = router;
