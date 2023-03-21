module.exports = app => {
    const taches_personnel = require('../controllers/Taches-Personnel.controller');

    app.post('/taches_personnels', taches_personnel.create);

    app.get('/taches_personnels', taches_personnel.getAll);

    app.get('/taches_personnels/:id', taches_personnel.findOne);

    app.put('/taches_personnels/:id', taches_personnel.update);

    app.delete('/taches_personnels/:id', taches_personnel.delete);
}