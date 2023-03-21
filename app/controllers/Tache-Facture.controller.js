const tache_facture = require('../models/Tache-Facture.model');

exports.create = (req, res) => {
    const object = new tache_facture(req.body);

    tache_facture.create(object, (err, data) => {
        res.status(err ? 500 : 201).send(err ? err : data);
    })
};

exports.getAll = (req, res) => {
    tache_facture.getAll((err, data) => {
        res.status(err ? 500 : 201).send(err ? err : data);
    })
};

exports.findOne = (req, res) => {
    const {id} = req.params;
    tache_facture.findByID(id, (err, data) => {
        if (err) {
            if (err.type === 'not_found') {
                res.status(404).send({message: `tache_facture with id ${id} NOT FOUND`});
            } else {
                res.status(500).send({message: `Error getting tache_facture with id ${id}`});
            }
        } else {
            res.status(200).send(data);
        }
    })
}

exports.update = (req, res) => {
    tache_facture.updateByID(
        req.params.id,
        new tache_facture(req.body),
        (err, data) => {
            if (err) {
                if (err.type === 'not_found') {
                    res.status(404).send({message: `tache_facture with id ${req.params.id} NOT FOUND`});
                } else {
                    res.status(500).send({message: `Error updating tache_facture with id ${req.params.id}`, err});
                }
            } else {
                res.status(200).send(data);
            }
        }
    )
};

exports.delete = (req, res) => {
    tache_facture.delete(req.params.id, (err, data) => {
        if (err) {
            if (err.type === 'not_found') {
                res.status(404).send({message: `tache_facture with id ${id} NOT FOUND`});
            } else {
                res.status(500).send({message: `Error deleting tache_facture with id ${id}`});
            }
        } else {
            res.status(200).send(data);
        }
    })
};