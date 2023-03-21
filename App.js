const express = require('express');
const bodyParser = require("body-parser");
var cors = require('cors')
var app = express()
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Route for front-end
app.get('/', (req,res) => {
    res.json({message: 'Client not ready yet'})
})

require('./app/routes/Personnel.routes')(app);

app.listen(1338, () => {
    console.log('esthetique server is running on port 1338')
});