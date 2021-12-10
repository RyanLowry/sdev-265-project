const express = require('express');
const async = require('async');
var bcrypt = require('bcrypt');
var session = require('express-session');
var path = require('path');


// TODO: Get user information as a get route

function createRouter(db) {
    const router = express.Router();

    router.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, "recipe-app/dist/recipe-app/index.html"));
    })

    router.post('/register', function (request, response, next) {
        var username = request.body.username;
        var password = request.body.password;
        var email = request.body.email;
        bcrypt.hash(password, 12, function (err, hash) {
            db.query('INSERT INTO users (username,password,email) VALUES (?,?,?)', [username, hash, email], function (error, results) {
                console.log(results)

                if (!error) {
                    request.session.loggedin = true;
                    request.session.username = username;
                    request.session.id = result.user_id;
                    response.status(200).json({ status: 'ok', user: request.session.username });
                } else {
                    response.send('Unable to register account');
                }
                response.end();
            });

        });
    });

    // TODO: Add user id to recipes and checklists
    router.post('/addRecipe', function (request, response, next) {
        var name = request.body.name;
        var desc = request.body.description;
        db.query('INSERT INTO recipes (name,desc,user_id) VALUES (?,?,?)', [name, desc, request.session.id], function (error, results) {
            if (!error) {

                res.status(200).json({ status: 'ok', });
            } else {
                response.send('Unable to create recipe');
            }
            response.end();
        });
    });
    router.post('/addChecklist', function (request, response, next) {
        var name = request.body.name;
        var desc = request.body.description;
        db.query('INSERT INTO recipes (name,desc,user_id) VALUES (?,?,?)', [name, desc, request.session.id], function (error, results) {
            if (!error) {
                res.status(200).json({ status: 'ok', });
            } else {
                response.send('Unable to create checklist');
            }
            response.end();
        });
    });



    // TODO: make sure to get correct recipe/checklist ID.
    router.post('/addRecipeItem', function (request, response, next) {
        var ing = request.body.ingredient;
        var meas = request.body.measurement;
        var prep = request.body.preparation;

        db.query('INSERT INTO recipe_items (ingredient,measurement,preparation,recipe_id) VALUES (?,?,?,?)', [ing, meas, prep, ''], function (error, results) {
            if (!error) {
                res.status(200).json({ status: 'ok', });
            } else {
                response.send('Unable to create item');
            }
            response.end();
        });
    });
    router.post('/addChecklistItem', function (request, response, next) {
        var ing = request.body.ingredient;
        var meas = request.body.measurement;
        var prep = request.body.preparation;

        db.query('INSERT INTO recipe_items (ingredient,measurement,preparation,recipe_id) VALUES (?,?,?,?)', [ing, meas, prep, ''], function (error, results) {
            if (!error) {
                res.status(200).json({ status: 'ok', });
            } else {
                response.send('Unable to create item');
            }
            response.end();
        });
    });



    router.post('/auth', function (request, response, next) {
        console.log(request.session)
        var username = request.body.username;
        var password = request.body.password;
        if (username && password) {
            db.query('SELECT * FROM users WHERE username = ?', [username], function (error, results, fields) {
                if (results.length > 0) {
                    bcrypt.compare(password, results[0].password, function (err, result) {

                        if (!err) {
                            request.session.loggedin = true;
                            request.session.username = username;
                            response.status(200).json({ status: 'ok', user: request.session.username, id: results[0].id });
                        } else {
                            response.send('Incorrect Username and/or Password!');
                        }
                        response.end();
                    });
                }
                else {
                    response.send('An unexpected error happened');
                }
            });

        } else {
            response.send('Please enter Username and Password!');
            response.end();
        }
    });

    return router;
}

module.exports = createRouter;