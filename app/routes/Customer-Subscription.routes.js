module.exports = app => {
    const customer_subscription = require('../controllers/Customer-Subscription.controller');

    app.post('/customer_subscriptions', customer_subscription.create);

    app.get('/customer_subscriptions', customer_subscription.getAll);

    app.get('/customer_subscriptions/:id', customer_subscription.findOne);

    app.put('/customer_subscriptions/:id', customer_subscription.update);

    app.delete('/customer_subscriptions/:id', customer_subscription.delete);
}