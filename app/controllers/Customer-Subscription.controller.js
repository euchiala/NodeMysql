const customer_subscription = require('../models/Tache-Personnel.model');

exports.create = (req, res) => {
    const object = new customer_subscription(req.body);

    customer_subscription.create(object, (err, data) => {
        res.status(err ? 500 : 201).send(err ? err : data);
    })
};

exports.getAll = (req, res) => {
    customer_subscription.getAll((err, data) => {
        res.status(err ? 500 : 201).send(err ? err : data);
    })
};

exports.findOne = (req, res) => {
    const {id} = req.params;
    customer_subscription.findByID(id, (err, data) => {
        if (err) {
            if (err.type === 'not_found') {
                res.status(404).send({message: `customer_subscription with id ${id} NOT FOUND`});
            } else {
                res.status(500).send({message: `Error getting customer_subscription with id ${id}`});
            }
        } else {
            res.status(200).send(data);
        }
    })
}

exports.update = (req, res) => {
    customer_subscription.updateByID(
        req.params.id,
        new customer_subscription(req.body),
        (err, data) => {
            if (err) {
                if (err.type === 'not_found') {
                    res.status(404).send({message: `customer_subscription with id ${req.params.id} NOT FOUND`});
                } else {
                    res.status(500).send({message: `Error updating customer_subscription with id ${req.params.id}`, err});
                }
            } else {
                res.status(200).send(data);
            }
        }
    )
};

exports.delete = (req, res) => {
    customer_subscription.delete(req.params.id, (err, data) => {
        if (err) {
            if (err.type === 'not_found') {
                res.status(404).send({message: `customer_subscription with id ${id} NOT FOUND`});
            } else {
                res.status(500).send({message: `Error deleting customer_subscription with id ${id}`});
            }
        } else {
            res.status(200).send(data);
        }
    })
};