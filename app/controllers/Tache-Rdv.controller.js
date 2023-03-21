const tache_rdv = require('../models/Tache-Rdv.model');

exports.create = (req, res) => {
    const object = new tache_rdv(req.body);

    tache_rdv.create(object, (err, data) => {
        res.status(err ? 500 : 201).send(err ? err : data);
    })
};

exports.getAll = (req, res) => {
    tache_rdv.getAll((err, data) => {
        res.status(err ? 500 : 201).send(err ? err : data);
    })
};

exports.findOne = (req, res) => {
    const {id} = req.params;
    tache_rdv.findByID(id, (err, data) => {
        if (err) {
            if (err.type === 'not_found') {
                res.status(404).send({message: `tache_rdv with id ${id} NOT FOUND`});
            } else {
                res.status(500).send({message: `Error getting tache_rdv with id ${id}`});
            }
        } else {
            res.status(200).send(data);
        }
    })
}

exports.update = (req, res) => {
    tache_rdv.updateByID(
        req.params.id,
        new tache_rdv(req.body),
        (err, data) => {
            if (err) {
                if (err.type === 'not_found') {
                    res.status(404).send({message: `tache_rdv with id ${req.params.id} NOT FOUND`});
                } else {
                    res.status(500).send({message: `Error updating tache_rdv with id ${req.params.id}`, err});
                }
            } else {
                res.status(200).send(data);
            }
        }
    )
};

exports.delete = (req, res) => {
    tache_rdv.delete(req.params.id, (err, data) => {
        if (err) {
            if (err.type === 'not_found') {
                res.status(404).send({message: `tache_rdv with id ${id} NOT FOUND`});
            } else {
                res.status(500).send({message: `Error deleting tache_rdv with id ${id}`});
            }
        } else {
            res.status(200).send(data);
        }
    })
};