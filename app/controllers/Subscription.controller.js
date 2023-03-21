const subscription = require('../models/subscription.model');

exports.create = (req, res) => {
    const object = new subscription(req.body);

    subscription.create(object, (err, data) => {
        res.status(err ? 500 : 201).send(err ? err : data);
    })
};

exports.getAll = (req, res) => {
    subscription.getAll((err, data) => {
        res.status(err ? 500 : 201).send(err ? err : data);
    })
};

exports.findOne = (req, res) => {
    const {id} = req.params;
    subscription.findByID(id, (err, data) => {
        if (err) {
            if (err.type === 'not_found') {
                res.status(404).send({message: `subscription with id ${id} NOT FOUND`});
            } else {
                res.status(500).send({message: `Error getting subscription with id ${id}`});
            }
        } else {
            res.status(200).send(data);
        }
    })
}

exports.update = (req, res) => {
    subscription.update(
        req.params.id,
        new subscription(req.body),
        (err, data) => {
            if (err) {
                if (err.type === 'not_found') {
                    res.status(404).send({message: `subscription with id ${req.params.id} NOT FOUND`});
                } else {
                    res.status(500).send({message: `Error updating subscription with id ${req.params.id}`, err});
                }
            } else {
                res.status(200).send(data);
            }
        }
    )
};

exports.delete = (req, res) => {
    subscription.delete(req.params.id, (err, data) => {
        if (err) {
            if (err.type === 'not_found') {
                res.status(404).send({message: `subscription with id ${id} NOT FOUND`});
            } else {
                res.status(500).send({message: `Error deleting subscription with id ${id}`});
            }
        } else {
            res.status(200).send(data);
        }
    })
};