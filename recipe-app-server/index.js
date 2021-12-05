var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var cors = require('cors')

var path = require('path');
const events = require('./events');
const cfg = require('./config')

var connection = mysql.createConnection({
    host: cfg.host,
    user: cfg.user,
    password: cfg.password,
    database: cfg.database
});

connection.connect();
const port = process.env.PORT || cfg.port;

const app = express()
    .use(session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    }))
    .use(cors())
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(events(connection))
app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});