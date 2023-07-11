const express = require('express');

// generamos un router especifico para capitulos de libros de la biblia
const router = express.Router();

router.get('/:bibleId/books/:bookId/chapters', (req, res) => {
  res.json([
    {
      id: '3JN.intro',
      bibleId: '592420522e16049f-01',
      bookId: '3JN',
      number: 'intro',
      reference: '3 Juan',
    },
    {
      id: '3JN.1',
      bibleId: '592420522e16049f-01',
      bookId: '3JN',
      number: '1',
      reference: '3 Juan 1',
    },
  ]);
});

// solicitud GET con parametros tipo query o query params
router.get('/:bibleId/chapters/:chapterId', (req, res) => {
  const { contentType, includeNotes } = req.query;
  if (contentType && includeNotes) {
    res.json({
      id: '3JN.1',
      bibleId: '592420522e16049f-01',
      number: '1',
      bookId: '3JN',
      reference: '3 Juan 1',
      copyright:
        'Reina-Valera 1909 - Dominio público. Fue realizada por Sociedades Bíblicas Unidas y publicada por primera vez en 1909.',
      verseCount: 15,
      content:
        '     [1] EL anciano al muy amado Gaio, al cual yo amo en verdad.\n     [2] Amado, yo deseo que tú seas prosperado en todas cosas, y que tengas salud, así como tu alma está en prosperidad.\n     [3] Ciertamente me gocé mucho cuando vinieron los hermanos y dieron testimonio de tu verdad, así como tú andas en la verdad.\n     [4] No tengo yo mayor gozo que éste, el oir que mis hijos andan en la verdad.\n     [5] Amado, fielmente haces todo lo que haces para con los hermanos, y con los extranjeros,\n     [6] Los cuales han dado testimonio de tu amor en presencia de la iglesia: á los cuales si ayudares como conviene según Dios, harás bien.\n     [7] Porque ellos partieron por amor de su nombre, no tomando nada de los Gentiles.\n     [8] Nosotros, pues, debemos recibir á los tales, para que seamos cooperadores á la verdad.\n     [9] Yo he escrito á la iglesia: mas Diótrefes, que ama tener el primado entre ellos, no nos recibe.\n     [10] Por esta causa, si yo viniere, recordaré las obras que hace parlando con palabras maliciosas contra nosotros; y no contento con estas cosas, no recibe á los hermanos, y prohibe á los que los quieren recibir, y los echa de la iglesia.\n     [11] Amado, no sigas lo que es malo, sino lo que es bueno. El que hace bien es de Dios: mas el que hace mal, no ha visto á Dios.\n     [12] Todos dan testimonio de Demetrio, y aun la misma verdad: y también nosotros damos testimonio; y vosotros habéis conocido que nuestro testimonio es verdadero.\n     [13] Yo tenía muchas cosas que escribirte; empero no quiero escribirte por tinta y pluma:\n     [14] Porque espero verte en breve, y hablaremos boca á boca.\n     [15] Paz sea contigo. Los amigos te saludan. Saluda tú á los amigos por nombre.\n\n\n1 2 Jn. 1.\n3 2 Jn. 4.\n4 1 Co. 4.15.\n5 Ga. 6.10.\n7 1 Co. 9.12,15.\n10 1 Ti. 5.13.\n10 Is. 66.5.\n11 Sal. 34.14. 1 P. 3.11,13.\n11 1 Jn. 2.29.\n11 1 Jn. 3.6.\n12 Hch. 6.3.\n12 Jn. 21.24.\n13 2 Jn. 12.\n',
      next: {
        id: 'JUD.intro',
        number: 'intro',
        bookId: 'JUD',
      },
      previous: {
        id: '3JN.intro',
        number: 'intro',
        bookId: '3JN',
      },
    });
  } else {
    res.send('No hay parametros... error');
  }
});

module.exports = router;
