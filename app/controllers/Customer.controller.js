const customer = require('../models/customer.model');

exports.create = (req, res) => {
    const object = new customer(req.body);

    customer.create(object, (err, data) => {
        res.status(err ? 500 : 201).send(err ? err : data);
    })
};

exports.getAll = (req, res) => {
    customer.getAll((err, data) => {
        res.status(err ? 500 : 201).send(err ? err : data);
    })
};

exports.findOne = (req, res) => {
    const {id} = req.params;
    customer.findByID(id, (err, data) => {
        if (err) {
            if (err.type === 'not_found') {
                res.status(404).send({message: `customer with id ${id} NOT FOUND`});
            } else {
                res.status(500).send({message: `Error getting customer with id ${id}`});
            }
        } else {
            res.status(200).send(data);
        }
    })
}

exports.update = (req, res) => {
    customer.update(
        req.params.id,
        new customer(req.body),
        (err, data) => {
            if (err) {
                if (err.type === 'not_found') {
                    res.status(404).send({message: `customer with id ${req.params.id} NOT FOUND`});
                } else {
                    res.status(500).send({message: `Error updating customer with id ${req.params.id}`, err});
                }
            } else {
                res.status(200).send(data);
            }
        }
    )
};

exports.delete = (req, res) => {
    customer.delete(req.params.id, (err, data) => {
        if (err) {
            if (err.type === 'not_found') {
                res.status(404).send({message: `customer with id ${id} NOT FOUND`});
            } else {
                res.status(500).send({message: `Error deleting customer with id ${id}`});
            }
        } else {
            res.status(200).send(data);
        }
    })
};