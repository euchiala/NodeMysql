const sql = require('./db');
const tableName = 'personnel';
const personnel = function (object) {
    this.nom = object.nom;
    this.date_naiss = object.date_naiss;
    this.num_tel = object.num_tel;
    this.adresse = object.adresse;
    this.cin = object.cin;
}

personnel.create = (newObject, result) => {
    sql.query(`INSERT INTO ${tableName} SET ?`, newObject, (err, res) => {
        if(err)
            result(err, null);
        else
            result(null, {id: res.insertId, ...newObject});
    });
};

personnel.findByID = (id, result) => {
    sql.query(`SELECT * FROM ${tableName} WHERE id = '${id}'`, (err, res) => {
        if(err)
            result(err, null);
        else
            result(null, res[0]);
    });
};

personnel.getAll = result => {
    sql.query(`SELECT * FROM ${tableName}`, (err, res) => {
        if(err)
            result(err, null);
        else
            result(null, res);
    });
};

personnel.updateByID = (id, object, result) => {
    sql.query(
        `
            UPDATE ${tableName} SET 
            nom = ?,
            date_naiss = ?,
            num_tel = ?,
            adresse = ?,
            cin = ?
            WHERE id = '${id}'
        `,
        [object.nom ,object.date_naiss ,object.num_tel ,object.adresse ,object.cin],
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


personnel.delete = (id, result) => {
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


module.exports = personnel;