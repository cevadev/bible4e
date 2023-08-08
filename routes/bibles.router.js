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
  const { id } = req.params;
  if (id === '999') {
    res.status(404).json({ message: 'Bible not found' });
  } else {
    res.status(200).json({
      id: id,
      name: 'Reina Valera 1909',
    });
  }
});

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'Biblia added',
    data: body,
  });
});

router.patch('/:id', (req, res) => {
  const body = req.body;
  const { id } = req.params;
  res.json({
    message: 'Biblia updated',
    data: body,
    id: id,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'Bible deleted',
    id: id,
  });
});

module.exports = router;
