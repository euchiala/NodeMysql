module.exports = app => {
    const subscription = require('../controllers/Subscription.controller');

    app.post('/subscriptions', subscription.create);

    app.get('/subscriptions', subscription.getAll);

    app.get('/subscriptions/:id', subscription.findOne);

    app.put('/subscriptions/:id', subscription.update);

    app.delete('/subscriptions/:id', subscription.delete);
}