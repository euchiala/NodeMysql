module.exports = app => {
    const taches_rdv = require('../controllers/Taches-Rdv.controller');

    app.post('/taches_rdvs', taches_rdv.create);

    app.get('/taches_rdvs', taches_rdv.getAll);

    app.get('/taches_rdvs/:id', taches_rdv.findOne);

    app.put('/taches_rdvs/:id', taches_rdv.update);

    app.delete('/taches_rdvs/:id', taches_rdv.delete);
}