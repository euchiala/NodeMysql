const att_histo = require('../models/Att-Histo.model');

exports.create = (req, res) => {
    const object = new att_histo(req.body);

    att_histo.create(object, (err, data) => {
        res.status(err ? 500 : 201).send(err ? err : data);
    })
};

exports.getAll = (req, res) => {
    att_histo.getAll((err, data) => {
        res.status(err ? 500 : 201).send(err ? err : data);
    })
};

exports.findByCoach = (req, res) => {
    const {id} = req.params;
    att_histo.findByCoachId(id, (err, data) => {
        if (err) {
            if (err.type === 'not_found') {
                res.status(404).send({message: `att_histo with Coachid ${id} NOT FOUND`});
            } else {
                res.status(500).send({message: `Error getting att_histo with Coachid ${id}`});
            }
        } else {
            res.status(200).send(data);
        }
    })
}
exports.findByCustomer = (req, res) => {
    const {id} = req.params;
    att_histo.findByCustomerId(id, (err, data) => {
        if (err) {
            if (err.type === 'not_found') {
                res.status(404).send({message: `att_histo with CustomerId ${id} NOT FOUND`});
            } else {
                res.status(500).send({message: `Error getting att_histo with CustomerId ${id}`});
            }
        } else {
            res.status(200).send(data);
        }
    })
}

exports.update = (req, res) => {
    att_histo.updateByID(
        req.params.id,
        new att_histo(req.body),
        (err, data) => {
            if (err) {
                if (err.type === 'not_found') {
                    res.status(404).send({message: `att_histo with id ${req.params.id} NOT FOUND`});
                } else {
                    res.status(500).send({message: `Error updating att_histo with id ${req.params.id}`, err});
                }
            } else {
                res.status(200).send(data);
            }
        }
    )
};

exports.delete = (req, res) => {
    att_histo.delete(req.params.id, (err, data) => {
        if (err) {
            if (err.type === 'not_found') {
                res.status(404).send({message: `att_histo with id ${id} NOT FOUND`});
            } else {
                res.status(500).send({message: `Error deleting att_histo with id ${id}`});
            }
        } else {
            res.status(200).send(data);
        }
    })
};