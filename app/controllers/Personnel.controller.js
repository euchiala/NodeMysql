const personnel = require('../models/Personnel.model');

exports.create = (req, res) => {
    const object = new personnel(req.body);

    personnel.create(object, (err, data) => {
        res.status(err ? 500 : 201).send(err ? err : data);
    })
};

exports.getAll = (req, res) => {
    personnel.getAll((err, data) => {
        res.status(err ? 500 : 201).send(err ? err : data);
    })
};

exports.findOne = (req, res) => {
    const {id} = req.params;
    personnel.findByID(id, (err, data) => {
        if (err) {
            if (err.type === 'not_found') {
                res.status(404).send({message: `personnel with id ${id} NOT FOUND`});
            } else {
                res.status(500).send({message: `Error getting personnel with id ${id}`});
            }
        } else {
            res.status(200).send(data);
        }
    })
}

exports.update = (req, res) => {
    personnel.updateByID(
        req.params.id,
        new personnel(req.body),
        (err, data) => {
            if (err) {
                if (err.type === 'not_found') {
                    res.status(404).send({message: `personnel with id ${req.params.id} NOT FOUND`});
                } else {
                    res.status(500).send({message: `Error updating personnel with id ${req.params.id}`, err});
                }
            } else {
                res.status(200).send(data);
            }
        }
    )
};

exports.delete = (req, res) => {
    personnel.delete(req.params.id, (err, data) => {
        if (err) {
            if (err.type === 'not_found') {
                res.status(404).send({message: `personnel with id ${id} NOT FOUND`});
            } else {
                res.status(500).send({message: `Error deleting personnel with id ${id}`});
            }
        } else {
            res.status(200).send(data);
        }
    })
};