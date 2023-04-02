const sql = require('./db');
const tableName = 'customer_subscription';
const customer_subscription = function (object) {
    this.customerId  = object.customerId ;
    this.subscriptionId = object.subscriptionId;
    this.startDate = object.startDate;
    this.endDate = object.endDate;
}

customer_subscription.create = (newObject, result) => {
    sql.query(`INSERT INTO ${tableName} SET ?`, newObject, (err, res) => {
        if(err)
            result(err, null);
        else
            result(null, {id: res.insertId, ...newObject});
    });
};

customer_subscription.findByID = (id, result) => {
    sql.query(`SELECT * FROM ${tableName} WHERE customerId = '${id}'`, (err, res) => {
        if(err)
            result(err, null);
        else
            result(null, res);
    });
};

customer_subscription.getAll = result => {
    sql.query(`SELECT * FROM ${tableName}`, (err, res) => {
        if(err)
            result(err, null);
        else
            result(null, res);
    });
};

customer_subscription.updateByID = (id, object, result) => {
    sql.query(
        `
            UPDATE ${tableName} SET 
            customerId  = ?,
            subscriptionId = ?,
            startDate = ?,
            endDate = ?
            WHERE id = '${id}'
        `,
        [object.customerId , object.subscriptionId, object.startDate, object.endDate],
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


customer_subscription.delete = (id, result) => {
    sql.query(`DELETE FROM ${tableName} WHERE customerId = ?`, id,  (err, res) => {
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


module.exports = customer_subscription;