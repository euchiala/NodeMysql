module.exports = app => {
    const taches_facture = require('../controllers/Tache-Facture.controller');

    app.post('/taches_factures', taches_facture.create);

    app.get('/taches_factures', taches_facture.getAll);

    app.get('/taches_factures/:id', taches_facture.findOne);

    app.put('/taches_factures/:id', taches_facture.update);

    app.delete('/taches_factures/:id', taches_facture.delete);
}