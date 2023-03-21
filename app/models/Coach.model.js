const sql = require('./db');
const tableName = 'coach';
const coach = function (object) {
    this.name = object.name;
    this.birth_date = object.birth_date;
    this.phone_number = object.phone_number;
    this.adress = object.adress;
    this.cin = object.cin;
    this.speciality = object.speciality;
    this.color = object.color;
}

coach.create = (newObject, result) => {
    sql.query(`INSERT INTO ${tableName} SET ?`, newObject, (err, res) => {
        if(err)
            result(err, null);
        else
            result(null, {id: res.insertId, ...newObject});
    });
};

coach.findByID = (id, result) => {
    sql.query(`SELECT * FROM ${tableName} WHERE id = '${id}'`, (err, res) => {
        if(err)
            result(err, null);
        else
            result(null, res[0]);
    });
};

coach.getAll = result => {
    sql.query(`SELECT * FROM ${tableName}`, (err, res) => {
        if(err)
            result(err, null);
        else
            result(null, res);
    });
};

coach.update = (id, object, result) => {
    sql.query(
        `
            UPDATE ${tableName} SET 
            name = ?,
            birth_date = ?,
            phone_number = ?,
            adress = ?,
            cin = ?,
            speciality = ?,
            color = ?
            WHERE id = '${id}'
        `,
        [object.name ,object.birth_date ,object.phone_number ,object.adress ,object.cin ,object.speciality ,object.color],
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


coach.delete = (id, result) => {
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


module.exports = coach;