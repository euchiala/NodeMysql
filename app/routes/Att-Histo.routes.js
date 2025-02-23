module.exports = app => {
    const att_histo = require('../controllers/Att-Histo.controller');

    app.post('/att_histos', att_histo.create);

    app.get('/att_histos', att_histo.getAll);

    app.get('/att_histos/coach/:id', att_histo.findByCoach);

    app.get('/att_histos/customer/:id', att_histo.findByCustomer);

    app.put('/att_histos/:id', att_histo.update);

    app.delete('/att_histos/:id', att_histo.delete);
}