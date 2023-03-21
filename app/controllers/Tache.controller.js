const tache = require('../models/Tache.model');

exports.create = (req, res) => {
    const object = new tache(req.body);

    tache.create(object, (err, data) => {
        res.status(err ? 500 : 201).send(err ? err : data);
    })
};

exports.getAll = (req, res) => {
    tache.getAll((err, data) => {
        res.status(err ? 500 : 201).send(err ? err : data);
    })
};

exports.findOne = (req, res) => {
    const {id} = req.params;
    tache.findByID(id, (err, data) => {
        if (err) {
            if (err.type === 'not_found') {
                res.status(404).send({message: `tache with id ${id} NOT FOUND`});
            } else {
                res.status(500).send({message: `Error getting tache with id ${id}`});
            }
        } else {
            res.status(200).send(data);
        }
    })
}

exports.update = (req, res) => {
    tache.updateByID(
        req.params.id,
        new tache(req.body),
        (err, data) => {
            if (err) {
                if (err.type === 'not_found') {
                    res.status(404).send({message: `tache with id ${req.params.id} NOT FOUND`});
                } else {
                    res.status(500).send({message: `Error updating tache with id ${req.params.id}`, err});
                }
            } else {
                res.status(200).send(data);
            }
        }
    )
};

exports.delete = (req, res) => {
    tache.delete(req.params.id, (err, data) => {
        if (err) {
            if (err.type === 'not_found') {
                res.status(404).send({message: `tache with id ${id} NOT FOUND`});
            } else {
                res.status(500).send({message: `Error deleting tache with id ${id}`});
            }
        } else {
            res.status(200).send(data);
        }
    })
};