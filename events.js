const express = require('express');
const async = require('async');
var bcrypt = require('bcrypt');
var session = require('express-session');
var path = require('path');


// this isn't a great way to handle routing, in a perfect world we would utilize GET more and have more dynamic routing to allow more options.

function createRouter(db) {
    const router = express.Router();

    // need to send static index.html file to start the angular routing
    router.get('/', (request, response) => {
        response.sendFile(path.join(__dirname, "recipe-app/dist/recipe-app/index.html"));
    })

    // LOGIN routes
    router.post('/register', function (request, response, next) {
        var username = request.body.username;
        var password = request.body.password;
        var email = request.body.email;
        bcrypt.hash(password, 12, function (err, hash) {
            db.query('SELECT COUNT(*) AS names FROM users where username = ?', [username], function (error, result) {
                if (result[0].names === 0) {
                    db.query('INSERT INTO users (username,password,email) VALUES (?,?,?)', [username, hash, email], function (error, result) {
                        if (!error) {
                            request.session.loggedin = true;
                            request.session.username = username;
                            request.session.user_id = result.insertId;
                            request.session.save((e) => {
                            })
                            response.status(200).json({ status: 'ok', user: request.session.username });
                        } else {
                            response.status(401).json({ status: 'error' });
                        }
                        response.end();
                    });
                } else {
                    response.status(401).json({ status: 'username already exists' });

                }
            });
        });
    });

    router.post('/auth', function (request, response, next) {

        var username = request.body.username;
        var password = request.body.password;
        if (username && password) {
            db.query('SELECT * FROM users WHERE username = ?', [username], function (error, results, fields) {
                if (results.length > 0) {
                    bcrypt.compare(password, results[0].password).then((result) => {
                        if (result) {
                            request.session.loggedin = true;
                            request.session.username = username;
                            request.session.user_id = results[0].user_id;
                            request.session.save((e) => { })
                            response.status(200).json({ status: 'ok', user: request.session.username, id: results[0].id });
                        } else {
                            response.status(401).json({ status: 'incorrect username/password' })
                            // response.send('incorrect username/password');
                        }

                    }).catch(err => {
                        response.status(401).json({ status: 'error' })
                        // response.send('An unexpected error happened');
                    });
                }
            });

        } else {
            response.status(401).json({ status: 'error' })
        }
    });

    // recipe/recipeitem routes

    router.post('/userRecipe', (request, response) => {
        db.query('select * from recipes where user_id = ?', [request.session.user_id], function (error, results) {
            if (!error) {
                response.status(200).json({ status: 'ok', recipes: results });
            } else {
                response.status(401).json({ status: 'error' });
            }
        });
    });


    router.post('/addRecipe', function (request, response, next) {
        var name = request.body.name;
        var desc = request.body.description;
        db.query('INSERT INTO recipes (name,description,user_id) VALUES (?,?,?)', [name, desc, request.session.user_id], function (error, result) {
            if (!error) {
                response.status(200).json({ status: 'ok', recipeId: result.insertId });
            } else {
                response.status(401).json({ status: 'error' });
            }
        });
    });
    router.put('/updateRecipe', (request, response) => {
        var ins = request.body.instructions;
        var itemLength = request.body.itemLength;
        var recipeId = request.body.recipeId;
        db.query('UPDATE recipes SET ingredient_length = ? , instructions = ? WHERE recipe_id = ?', [itemLength, ins, recipeId], function (error, result) {
            if (!error) {
                response.status(200).json({ status: 'ok', item: result });
            } else {
                response.status(401).json({ status: 'error' });
            }
        });
    })


    router.post('/recipeItems', (request, response) => {
        var recipeId = request.body.recipeId;
        db.query('select * from recipe_items where recipe_id = ?', [recipeId], function (error, results) {
            if (!error) {
                response.status(200).json({ status: 'ok', steps: results });
            } else {
                response.status(401).json({ status: 'error' });
            }
        });
    })
    router.post('/addRecipeItem', function (request, response, next) {
        var ing = request.body.ingredient;
        var meas = request.body.measurement;
        var prep = request.body.preparation;

        db.query('INSERT INTO recipe_items (ingredient,measurement,preparation,recipe_id) VALUES (?,?,?,?)', [ing, meas, prep, ''], function (error, results) {
            if (!error) {
                response.status(200).json({ status: 'ok', });
            } else {
                response.status(401).json({ status: 'error' });
            }
        });
    });
    router.post('/recipeItem', (request, response) => {
        var meas = request.body.measurement;
        var ing = request.body.ingredient;
        var preparation = request.body.preparation;
        var recipeId = request.body.recipeId;
        db.query('INSERT INTO recipe_items (ingredient,measurement,preparation,recipe_id) VALUES (?,?,?,?)', [ing, meas, preparation, recipeId], function (error, result) {
            if (!error) {
                response.status(200).json({ status: 'ok', itemId: result.insertId });
            } else {
                response.status(401).json({ status: 'error' });
            }
        });
    })
    router.put('/recipeItem', (request, response) => {
        var meas = request.body.measurement;
        var ing = request.body.ingredient;
        var preparation = request.body.preparation;
        var itemId = request.body.itemId;
        db.query('UPDATE recipe_items SET ingredient = ? , measurement = ? , preparation = ? WHERE recipeItem_id = ?', [ing, meas, preparation, itemId], function (error, result) {
            if (!error) {
                response.status(200).json({ status: 'ok' });
            } else {
                response.status(401).json({ status: 'error' });
            }
        });
    });
    // checklists routes


    router.post('/userChecklist', (request, response) => {
        db.query('select * from checklists where user_id = ?', [request.session.user_id], function (error, results) {
            if (!error) {
                response.status(200).json({ status: 'ok', checklist: results });
            } else {
                response.status(401).json({ status: 'error' });
            }
        });
    })



    router.post('/addChecklist', function (request, response, next) {
        var name = request.body.name;
        var desc = request.body.description;
        db.query('INSERT INTO checklists (name,description,user_id) VALUES (?,?,?)', [name, desc, request.session.user_id], function (error, results) {
            if (!error) {
                response.status(200).json({ status: 'ok', checklist: results.insertId });
            } else {
                response.status(401).json({ status: 'error' });
            }
        });
    });


    // checklist item routes

    router.post('/addChecklistItem', function (request, response, next) {
        var ing = request.body.ingredient;
        var meas = request.body.measurement;
        var checkId = request.body.checklistId

        db.query('INSERT INTO checklist_items (is_complete,ingredient,measurement,checklist_id) VALUES (false,?,?,?)', [ing, meas, checkId], function (error, results) {
            if (!error) {
                response.status(200).json({ status: 'ok', itemId: results.insertId });
            } else {
                response.status(401).json({ status: 'error' });
            }
        });
    });
    router.post('/getChecklistItem', function (request, response, next) {
        var checkid = request.body.checklistId;

        db.query('select * from  checklist_items where checklist_id = ?', [checkid], function (error, results) {
            if (!error) {
                response.status(200).json({ status: 'ok', checklistItems: results });
            } else {
                response.status(401).json({ status: 'error' });
            }
        });
    });

    router.put('/addChecklistItem', (request, response) => {
        var bool = request.body.isComplete;
        var id = request.body.checklistItem
        console.log(id)
        db.query('UPDATE checklist_items SET is_complete = ? WHERE checklistItem_id = ?', [bool, id], function (error, result) {
            if (!error) {
                response.status(200).json({ status: 'ok', item: result });
            } else {
                response.status(401).json({ status: 'error' });
            }
        });
    })




    // Share Recipe route
    router.post('/shareRecipe', function (request, response, next) {
        var recipient = request.body.recipient;
        var recipe = request.body.recipe;
        db.query('INSERT INTO shared_recipes (recipient_id,sender_id,recipe_id) SELECT users.user_id,?,? From users WHERE users.username = ?', [request.session.user_id, recipe, recipient], function (error, result) {
            if (!error) {
                response.status(200).json({ status: 'ok', });
            } else {
                response.status(401).json({ status: 'error', });

            }
        });
    });
    router.post('/userShared', (request, response) => {
        db.query('select recipes.* from shared_recipes left join recipes on shared_recipes.recipe_id = recipes.recipe_id where recipient_id = ?', [request.session.user_id], function (error, results) {

            if (!error) {
                response.status(200).json({ status: 'ok', sharedRecipes: results });
            } else {
                response.status(401).json({ status: 'error' });
            }
        });
    });




    // DELETE routes
    router.delete('/removeChecklistItem', function (request, response) {
        var id = request.body.id;
        db.query('DELETE FROM checklist_items WHERE checklistItem_id = ?', [id], function (error, result) {
            if (!error) {
                response.status(200).json({ status: 'ok', });
            } else {
                response.status(401).json({ status: 'error', });

            }
        });
    })
    router.delete('/removeRecipe', function (request, response) {
        var id = request.body.id;
        db.query('DELETE FROM recipes WHERE recipe_id = ?', [id], function (error, result) {
            if (!error) {
                response.status(200).json({ status: 'ok', });
            } else {
                response.status(401).json({ status: 'error', });

            }
        });
    })
    router.delete('/removeChecklist', function (request, response) {
        var id = request.body.id;
        db.query('DELETE FROM checklists WHERE checklist_id = ?', [id], function (error, result) {
            if (!error) {
                response.status(200).json({ status: 'ok', });
            } else {
                response.status(401).json({ status: 'error', });

            }
        });
    })






    return router;
}

module.exports = createRouter;