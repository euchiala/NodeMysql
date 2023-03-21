const client = require('../models/Client.model');

exports.create = (req, res) => {
    const object = new client(req.body);

    client.create(object, (err, data) => {
        res.status(err ? 500 : 201).send(err ? err : data);
    })
};

exports.getAll = (req, res) => {
    client.getAll((err, data) => {
        res.status(err ? 500 : 201).send(err ? err : data);
    })
};

exports.findOne = (req, res) => {
    const {id} = req.params;
    client.findByID(id, (err, data) => {
        if (err) {
            if (err.type === 'not_found') {
                res.status(404).send({message: `client with id ${id} NOT FOUND`});
            } else {
                res.status(500).send({message: `Error getting client with id ${id}`});
            }
        } else {
            res.status(200).send(data);
        }
    })
}

exports.update = (req, res) => {
    client.updateByID(
        req.params.id,
        new client(req.body),
        (err, data) => {
            if (err) {
                if (err.type === 'not_found') {
                    res.status(404).send({message: `client with id ${req.params.id} NOT FOUND`});
                } else {
                    res.status(500).send({message: `Error updating client with id ${req.params.id}`, err});
                }
            } else {
                res.status(200).send(data);
            }
        }
    )
};

exports.delete = (req, res) => {
    client.delete(req.params.id, (err, data) => {
        if (err) {
            if (err.type === 'not_found') {
                res.status(404).send({message: `client with id ${id} NOT FOUND`});
            } else {
                res.status(500).send({message: `Error deleting client with id ${id}`});
            }
        } else {
            res.status(200).send(data);
        }
    })
};