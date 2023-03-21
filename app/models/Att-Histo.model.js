const sql = require('./db');
const tableName = 'att_histo';
const att_histo = function (object) {
    this.coachId = object.coachId;
    this.customerId = object.customerId;
    this.attTime = object.attTime;
}

att_histo.create = (newObject, result) => {
    sql.query(`INSERT INTO ${tableName} SET ?`, newObject, (err, res) => {
        if(err)
            result(err, null);
        else
            result(null, {id: res.insertId, ...newObject});
    });
};

att_histo.findByID = (id, result) => {
    sql.query(`SELECT * FROM ${tableName} WHERE id = '${id}'`, (err, res) => {
        if(err)
            result(err, null);
        else
            result(null, res[0]);
    });
};

att_histo.getAll = result => {
    sql.query(`SELECT * FROM ${tableName}`, (err, res) => {
        if(err)
            result(err, null);
        else
            result(null, res);
    });
};

att_histo.update = (id, object, result) => {
    sql.query(
        `
            UPDATE ${tableName} SET 
            coachId  = ?,
            customerId= ?,
            attTime= ?
            WHERE id = '${id}'
        `,
        [object.coachId , object.customerId, object.attTime],
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


att_histo.delete = (id, result) => {
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


module.exports = att_histo;