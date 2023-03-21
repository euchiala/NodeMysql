const sql = require('./db');
const tableName = 'tache_rdv';
const tache_rdv = function (object) {
    this.id_rdv  = object.id_rdv ;
    this.id_tache = object.id_tache;
}

tache_rdv.create = (newObject, result) => {
    sql.query(`INSERT INTO ${tableName} SET ?`, newObject, (err, res) => {
        if(err)
            result(err, null);
        else
            result(null, {id: res.insertId, ...newObject});
    });
};

tache_rdv.findByID = (id, result) => {
    sql.query(`SELECT * FROM ${tableName} WHERE id = '${id}'`, (err, res) => {
        if(err)
            result(err, null);
        else
            result(null, res[0]);
    });
};

tache_rdv.getAll = result => {
    sql.query(`SELECT * FROM ${tableName}`, (err, res) => {
        if(err)
            result(err, null);
        else
            result(null, res);
    });
};

tache_rdv.updateByID = (id, object, result) => {
    sql.query(
        `
            UPDATE ${tableName} SET 
            id_rdv  = ?,
            id_tache= ?
            WHERE id = '${id}'
        `,
        [object.id_rdv , object.etat, object.id_tache],
        (err, res) => {
            if(err)
            {
                result(err, null);
                return;
            }
            if(res.affectedRows === 0)
            {
                result({type: 'not_found'}, null);
                return;
            }
            result(null, {id: id, ...object})
        }
    )
};


tache_rdv.delete = (id, result) => {
    sql.query(`DELETE FROM ${tableName} WHERE id = ?`, id,  (err, res) => {
        if (err) {
            result(null, err);
            return;
        }

        if (res.affectedRows === 0) {
            result({ type: "not_found" }, null);
            return;
        }

        result(null, res);
    })
}


module.exports = tache_rdv;