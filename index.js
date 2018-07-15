const express = require('express');
const bodyParser = require('body-parser');

require('./schemas/user');

const user =  require('./userFunctions');

let app = express();
app.use(bodyParser.urlencoded({extended: true}));

let port = 5000 || process.env.port;

let listener  = app.listen(port, () => {
    console.log('Running at ' + listener.address().port);
});

app.get('/user-create', user.getUserForm)


app.post('/user-create', user.saveUser);

app.post('/jayson', (req, res) => {
    res.json(req.query);
});

