module.exports = app => {
    const personnel = require('../controllers/Personnel.controller');

    app.post('/personnels', personnel.create);

    app.get('/personnels', personnel.getAll);

    app.get('/personnels/:id', personnel.findOne);

    app.put('/personnels/:id', personnel.update);

    app.delete('/personnels/:id', personnel.delete);
}