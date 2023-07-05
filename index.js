const express = require('express');

const app = express();
const port = 3000;

app.get('/api/v1/bibles', (req, res) => {
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

app.get('/api/v1/bibles/:bibleId/books', (req, res) => {
  const { bibleId } = req.params;
  res.json([
    {
      id: 'GEN',
      abbreviation: 'Gn.',
      name: 'Génesis',
      nameLong: 'Génesis',
    },
    {
      id: 'EXO',
      abbreviation: 'Ex.',
      name: 'Éxodo',
      nameLong: 'Éxodo',
    },
    {
      id: 'LEV',
      abbreviation: 'Lv.',
      name: 'Levítico',
      nameLong: 'Levítico',
    },
    {
      id: 'NUM',
      abbreviation: 'Nm.',
      name: 'Números',
      nameLong: 'Números',
    },
    {
      id: 'DEU',
      abbreviation: 'Dt.',
      name: 'Deuteronomio',
      nameLong: 'Deuteronomio',
    },
    {
      id: 'JOS',
      abbreviation: 'Jos.',
      name: 'Josué',
      nameLong: 'Josué',
    },
    {
      id: 'JDG',
      abbreviation: 'Jue.',
      name: 'Jueces',
      nameLong: 'Jueces',
    },
    {
      id: 'RUT',
      abbreviation: 'Rt.',
      name: 'Rut',
      nameLong: 'Rut',
    },
    {
      id: '1SA',
      abbreviation: '1 S.',
      name: '1 Samuel',
      nameLong: 'Primer libro de Samuel',
    },
    {
      id: '2SA',
      abbreviation: '2 S.',
      name: '2 Samuel',
      nameLong: 'Segundo libro de Samuel',
    },
    {
      id: '1KI',
      abbreviation: '1 R.',
      name: '1 Reyes',
      nameLong: 'Primer libro de los Reyes',
    },
    {
      id: '2KI',
      abbreviation: '2 R.',
      name: '2 Reyes',
      nameLong: 'Segundo libro de los Reyes',
    },
    {
      id: '1CH',
      abbreviation: '1 Cr.',
      name: '1 Crónicas',
      nameLong: 'Primer libro de las Crónicas',
    },
    {
      id: '2CH',
      abbreviation: '2 Cr.',
      name: '2 Crónicas',
      nameLong: 'Segundo libro de las Crónicas',
    },
    {
      id: 'EZR',
      abbreviation: 'Esd.',
      name: 'Esdras',
      nameLong: 'Esdras',
    },
    {
      id: 'NEH',
      abbreviation: 'Neh.',
      name: 'Nehemías',
      nameLong: 'Nehemías',
    },
    {
      id: 'EST',
      abbreviation: 'Est.',
      name: 'Ester',
      nameLong: 'Ester',
    },
    {
      id: 'JOB',
      abbreviation: 'Job',
      name: 'Job',
      nameLong: 'Job',
    },
    {
      id: 'PSA',
      abbreviation: 'Sal.',
      name: 'Salmos',
      nameLong: 'Salmos',
    },
    {
      id: 'PRO',
      abbreviation: 'Pr.',
      name: 'Proverbios',
      nameLong: 'Proverbios',
    },
    {
      id: 'ECC',
      abbreviation: 'Ec.',
      name: 'Eclesiastés',
      nameLong: 'Eclesiastés',
    },
    {
      id: 'SNG',
      abbreviation: 'Cnt.',
      name: 'Cantares',
      nameLong: 'El Cantar de los Cantares',
    },
    {
      id: 'ISA',
      abbreviation: 'Is.',
      name: 'Isaías',
      nameLong: 'Isaías',
    },
    {
      id: 'JER',
      abbreviation: 'Jer.',
      name: 'Jeremías',
      nameLong: 'Jeremías',
    },
    {
      id: 'LAM',
      abbreviation: 'Lm.',
      name: 'Lamentaciones',
      nameLong: 'Lamentaciones',
    },
    {
      id: 'EZK',
      abbreviation: 'Ez.',
      name: 'Ezequiel',
      nameLong: 'Ezequiel',
    },
    {
      id: 'DAN',
      abbreviation: 'Dn.',
      name: 'Daniel',
      nameLong: 'Daniel',
    },
    {
      id: 'HOS',
      abbreviation: 'Os.',
      name: 'Oseas',
      nameLong: 'Oseas',
    },
    {
      id: 'JOL',
      abbreviation: 'Jl.',
      name: 'Joel',
      nameLong: 'Joel',
    },
    {
      id: 'AMO',
      abbreviation: 'Am.',
      name: 'Amós',
      nameLong: 'Amós',
    },
    {
      id: 'OBA',
      abbreviation: 'Abd.',
      name: 'Abdías',
      nameLong: 'Abdías',
    },
    {
      id: 'JON',
      abbreviation: 'Jon.',
      name: 'Jonás',
      nameLong: 'Jonás',
    },
    {
      id: 'MIC',
      abbreviation: 'Mi.',
      name: 'Miqueas',
      nameLong: 'Miqueas',
    },
    {
      id: 'NAM',
      abbreviation: 'Nah.',
      name: 'Nahúm',
      nameLong: 'Nahúm',
    },
    {
      id: 'HAB',
      abbreviation: 'Hab.',
      name: 'Habacuc',
      nameLong: 'Habacuc',
    },
    {
      id: 'ZEP',
      abbreviation: 'Sof.',
      name: 'Sofonías',
      nameLong: 'Sofonías',
    },
    {
      id: 'HAG',
      abbreviation: 'Hag.',
      name: 'Hageo',
      nameLong: 'Hageo',
    },
    {
      id: 'ZEC',
      abbreviation: 'Zac.',
      name: 'Zacarías',
      nameLong: 'Zacarías',
    },
    {
      id: 'MAL',
      abbreviation: 'Mal.',
      name: 'Malaquías',
      nameLong: 'Malaquías',
    },
    {
      id: 'MAT',
      abbreviation: 'Mt.',
      name: 'San Mateo',
      nameLong: 'Evangelio según San Mateo',
    },
    {
      id: 'MRK',
      abbreviation: 'Mr.',
      name: 'San Marcos',
      nameLong: 'Evangelio según San Marcos',
    },
    {
      id: 'LUK',
      abbreviation: 'Lc.',
      name: 'San Lucas',
      nameLong: 'Evangelio según San Lucas',
    },
    {
      id: 'JHN',
      abbreviation: 'Jn.',
      name: 'San Juan',
      nameLong: 'Evangelio según San Juan',
    },
    {
      id: 'ACT',
      abbreviation: 'Hch.',
      name: 'Hechos',
      nameLong: 'Hechos de los Apóstoles',
    },
    {
      id: 'ROM',
      abbreviation: 'Ro.',
      name: 'Romanos',
      nameLong: 'Carta de san Pablo a los Romanos',
    },
    {
      id: '1CO',
      abbreviation: '1 Co.',
      name: '1 Corintios',
      nameLong: 'Primera carta de san Pablo a los Corintios',
    },
    {
      id: '2CO',
      abbreviation: '2 Co.',
      name: '2 Corintios',
      nameLong: 'Segunda carta de san Pablo a los Corintios',
    },
    {
      id: 'GAL',
      abbreviation: 'Ga.',
      name: 'Gálatas',
      nameLong: 'Carta de san Pablo a los Gálatas',
    },
    {
      id: 'EPH',
      abbreviation: 'Ef.',
      name: 'Efesios',
      nameLong: 'Carta de san Pablo a los Efesios',
    },
    {
      id: 'PHP',
      abbreviation: 'Fil.',
      name: 'Filipenses',
      nameLong: 'Carta de san Pablo a los Filipenses',
    },
    {
      id: 'COL',
      abbreviation: 'Col.',
      name: 'Colosenses',
      nameLong: 'Carta de san Pablo a los Colosenses',
    },
    {
      id: '1TH',
      abbreviation: '1 Ts.',
      name: '1 Tesalonicenses',
      nameLong: 'Primera carta de san Pablo a los Tesalonicenses',
    },
    {
      id: '2TH',
      abbreviation: '2 Ts.',
      name: '2 Tesalonicenses',
      nameLong: 'Segunda carta de san Pablo a los Tesalonicenses',
    },
    {
      id: '1TI',
      abbreviation: '1 Ti.',
      name: '1 Timoteo',
      nameLong: 'Primera carta de san Pablo a Timoteo',
    },
    {
      id: '2TI',
      abbreviation: '2 Ti.',
      name: '2 Timoteo',
      nameLong: 'Segunda carta de san Pablo a Timoteo',
    },
    {
      id: 'TIT',
      abbreviation: 'Tit.',
      name: 'Tito',
      nameLong: 'Carta de san Pablo a Tito',
    },
    {
      id: 'PHM',
      abbreviation: 'Flm.',
      name: 'Filemón',
      nameLong: 'Carta de san Pablo a Filemón',
    },
    {
      id: 'HEB',
      abbreviation: 'He.',
      name: 'Hebreos',
      nameLong: 'Carta a los Hebreos',
    },
    {
      id: 'JAS',
      abbreviation: 'Stg.',
      name: 'Santiago',
      nameLong: 'Carta de Santiago',
    },
    {
      id: '1PE',
      abbreviation: '1 P.',
      name: '1 Pedro',
      nameLong: 'Primera carta de san Pedro',
    },
    {
      id: '2PE',
      abbreviation: '2 P.',
      name: '2 Pedro',
      nameLong: 'Segunda carta de san Pedro',
    },
    {
      id: '1JN',
      abbreviation: '1 Jn.',
      name: '1 Juan',
      nameLong: 'Primera carta de san Juan',
    },
    {
      id: '2JN',
      abbreviation: '2 Jn.',
      name: '2 Juan',
      nameLong: 'Segunda carta de san Juan',
    },
    {
      id: '3JN',
      abbreviation: '3 Jn.',
      name: '3 Juan',
      nameLong: 'Tercera carta de san Juan',
    },
    {
      id: 'JUD',
      abbreviation: 'Jud.',
      name: 'Judas',
      nameLong: 'Carta de san Judas',
    },
    {
      id: 'REV',
      abbreviation: 'Ap.',
      name: 'Apocalipsis',
      nameLong: 'Apocalipsis',
    },
  ]);
});

app.get('/api/v1/bibles/:bibleId/books/:bookId', (req, res) => {
  const { bibleId, bookId } = req.params;
  res.json({
    bibleId: bibleId,
    bookId: bookId,
    abbreviation: 'Gn.',
    name: 'Génesis',
    nameLong: 'Génesis',
  });
});

app.listen(port, () => {
  console.info('La aplicacion se esta ejecutando satisfactoriamente');
});
