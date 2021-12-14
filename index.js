var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var cors = require('cors')

var path = require('path');
const events = require('./events');
// for testing, replace with a config with a valid path, try not to copy paste directly
// DO NOT LEAVE ANYTHING HERE BEFORE YOU PUSH THE PROJECT, IT SHOULD ONLY BE THE PROCESS VARIABLE
var connection = mysql.createConnection(process.env.JAWSDB_URL);

connection.connect();

// keep the 3000 for testing
const port = process.env.PORT || 3000;

const app = express()
    .use(session({
        secret: process.env.session_key || 'secret',
        resave: false,
        saveUninitialized: false
    }))
    // should be used for local development but it turns out it's inconsistent.
    .use(cors())
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(events(connection))
    // requires to connect the angular project to the server
    .use(express.static(path.join(__dirname,"recipe-app/dist/recipe-app/")))
    
app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});