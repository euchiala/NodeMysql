module.exports = app => {
    const client = require('../controllers/Client.controller');

    app.post('/clients', client.create);

    app.get('/clients', client.getAll);

    app.get('/clients/:id', client.findOne);

    app.put('/clients/:id', client.update);

    app.delete('/clients/:id', client.delete);
}