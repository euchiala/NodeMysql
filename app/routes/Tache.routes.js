module.exports = app => {
    const tache = require('../controllers/Tache.controller');

    app.post('/taches', tache.create);

    app.get('/taches', tache.getAll);

    app.get('/taches/:id', tache.findOne);

    app.put('/taches/:id', tache.update);

    app.delete('/taches/:id', tache.delete);
}