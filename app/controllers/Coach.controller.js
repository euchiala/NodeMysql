const coach = require('../models/coach.model');

exports.create = (req, res) => {
    const object = new coach(req.body);

    coach.create(object, (err, data) => {
        res.status(err ? 500 : 201).send(err ? err : data);
    })
};

exports.getAll = (req, res) => {
    coach.getAll((err, data) => {
        res.status(err ? 500 : 201).send(err ? err : data);
    })
};

exports.findOne = (req, res) => {
    const {id} = req.params;
    coach.findByID(id, (err, data) => {
        if (err) {
            if (err.type === 'not_found') {
                res.status(404).send({message: `coach with id ${id} NOT FOUND`});
            } else {
                res.status(500).send({message: `Error getting coach with id ${id}`});
            }
        } else {
            res.status(200).send(data);
        }
    })
}

exports.update = (req, res) => {
    coach.update(
        req.params.id,
        new coach(req.body),
        (err, data) => {
            if (err) {
                if (err.type === 'not_found') {
                    res.status(404).send({message: `coach with id ${req.params.id} NOT FOUND`});
                } else {
                    res.status(500).send({message: `Error updating coach with id ${req.params.id}`, err});
                }
            } else {
                res.status(200).send(data);
            }
        }
    )
};

exports.delete = (req, res) => {
    coach.delete(req.params.id, (err, data) => {
        if (err) {
            if (err.type === 'not_found') {
                res.status(404).send({message: `coach with id ${id} NOT FOUND`});
            } else {
                res.status(500).send({message: `Error deleting coach with id ${id}`});
            }
        } else {
            res.status(200).send(data);
        }
    })
};