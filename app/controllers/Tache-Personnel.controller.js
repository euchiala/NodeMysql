const tache_personnel = require('../models/Tache-Personnel.model');

exports.create = (req, res) => {
    const object = new tache_personnel(req.body);

    tache_personnel.create(object, (err, data) => {
        res.status(err ? 500 : 201).send(err ? err : data);
    })
};

exports.getAll = (req, res) => {
    tache_personnel.getAll((err, data) => {
        res.status(err ? 500 : 201).send(err ? err : data);
    })
};

exports.findOne = (req, res) => {
    const {id} = req.params;
    tache_personnel.findByID(id, (err, data) => {
        if (err) {
            if (err.type === 'not_found') {
                res.status(404).send({message: `tache_personnel with id ${id} NOT FOUND`});
            } else {
                res.status(500).send({message: `Error getting tache_personnel with id ${id}`});
            }
        } else {
            res.status(200).send(data);
        }
    })
}

exports.update = (req, res) => {
    tache_personnel.updateByID(
        req.params.id,
        new tache_personnel(req.body),
        (err, data) => {
            if (err) {
                if (err.type === 'not_found') {
                    res.status(404).send({message: `tache_personnel with id ${req.params.id} NOT FOUND`});
                } else {
                    res.status(500).send({message: `Error updating tache_personnel with id ${req.params.id}`, err});
                }
            } else {
                res.status(200).send(data);
            }
        }
    )
};

exports.delete = (req, res) => {
    tache_personnel.delete(req.params.id, (err, data) => {
        if (err) {
            if (err.type === 'not_found') {
                res.status(404).send({message: `tache_personnel with id ${id} NOT FOUND`});
            } else {
                res.status(500).send({message: `Error deleting tache_personnel with id ${id}`});
            }
        } else {
            res.status(200).send(data);
        }
    })
};