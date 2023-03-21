const sql = require('./db');
const tableName = 'subscription';
const subscription = function (object) {
    this.type = object.type;
    this.price = object.price;
    this.number_of_sessions = object.number_of_sessions;
    this.description = object.description;
    this.duration = object.duration;
}

subscription.create = (newObject, result) => {
    sql.query(`INSERT INTO ${tableName} SET ?`, newObject, (err, res) => {
        if(err)
            result(err, null);
        else
            result(null, {id: res.insertId, ...newObject});
    });
};

subscription.findByID = (id, result) => {
    sql.query(`SELECT * FROM ${tableName} WHERE id = '${id}'`, (err, res) => {
        if(err)
            result(err, null);
        else
            result(null, res[0]);
    });
};

subscription.getAll = result => {
    sql.query(`SELECT * FROM ${tableName}`, (err, res) => {
        if(err)
            result(err, null);
        else
            result(null, res);
    });
};

subscription.update = (id, object, result) => {
    sql.query(
        `
            UPDATE ${tableName} SET 
            type =?,
            price =?,
            number_of_sessions =?,
            description =?,
            duration =?
            WHERE id = '${id}'
        `,
        [object.type ,object.price ,object.number_of_sessions ,object.description ,object.duration],
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


subscription.delete = (id, result) => {
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


module.exports = subscription;