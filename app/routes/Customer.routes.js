module.exports = app => {
    const customer = require('../controllers/Customer.controller');

    app.post('/customers', customer.create);

    app.get('/customers', customer.getAll);

    app.get('/customers/:id', customer.findOne);

    app.put('/customers/:id', customer.update);

    app.delete('/customers/:id', customer.delete);
}