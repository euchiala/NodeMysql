module.exports = app => {
    const coach = require('../controllers/Coach.controller');

    app.post('/coaches', coach.create);

    app.get('/coaches', coach.getAll);

    app.get('/coaches/:id', coach.findOne);

    app.put('/coaches/:id', coach.update);

    app.delete('/coaches/:id', coach.delete);
}