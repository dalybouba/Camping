const express = require('express');
const app = express();

//declaration du body parser qu'on a installé a traver npm i --save body-parser
const bodyParser = require('body-parser');
// import de notre module multter npm i -- save multer
const multer = require('multer');
// le path qui me doonne l'accer pour manipuler les dossier dans le serveur 
const path = require('path');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// fixation du path pour muler(define image folder destination)
app.use('/images', express.static(path.join('backend/images')));
const themes = require('./models/theme');
const mongoose = require('mongoose');
const Theme = require('./models/theme');
const Choice = require('./models/choice');
const desertChoise = require('./models/desertChoise');
const DesertChoise = require('./models/desertChoise');
const Menu = require('./models/menu');
const User = require('./models/user');
const Team = require('./models/team');

const Position = require('./models/position');

//connect application to db named soccerDB et on change test par notre db "soccerDB"
mongoose.connect('mongodb://localhost:27017/imtunisiaDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});

// define images to insert 
const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
}
//
const storage = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        // verify is image correspends to mine type 
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;
        }
        // cb est call back (retour du request)
        cb(null, 'backend/images')
    },
    // define file name 
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-imtunisia-' + '.' +
            extension;
        cb(null, imgName);
    }
});
//// partie theme 
app.get('/allThemes', (req, res) => {
    // console.log('I am here for all matches');
    //connect to DB 
    // find est une fct predefinie de recherche 
    Theme.find((err, docs) => {
        if (err) {
            console.log('Error', err);
        } else {
            res.status(200).json({
                message: 'here all objects',
                themes: docs
            });
        }
    })

});


app.post('/addTheme', multer({ storage: storage }).single('image'), (req, res) => {
    console.log('here in adding', req.body);
    //
    url = req.protocol + '://' + req.get('host');
    // on a cree un new Match (notre model) et resevoire notre request from the front end a traver req.body 
    // apres installé npm i --save body-parser pour parser sur notre attribue dans un autre bash 
    const theme = new Theme({
        // le model qui assure la communication entre la app.js et la base de donnée mongo 
        //teb3a el front bech ye5ou les input eli fel form 
        themeName: req.body.themeName,
        discription: req.body.discription,
        category: req.body.category,

        image: url + '/images/' + req.file.filename
    });

    console.log(('theme after adding', theme));
    // pour sauvé notre dooné inserer 
    //.then() est une fonction prédefinie pour donner un ordre apres le save 
    theme.save().then(
        result => {
            if (result) {
                res.status(200).json({
                    message: "added successfully"
                })
            }
        }
    );
})


app.delete('/deleteTheme/:id', (req, res) => {
    //req.params.id : pour recupérer notre id automatiquement 
    console.log('here in delete', req.params.id);
    // _id c'est l'attribue dans la db 
    // delet one fct predefinie dans mongoose
    Theme.deleteOne({ _id: req.params.id }).then(
        result => {
            if (result) {
                res.status(200).json({
                    message: 'deleted successfully'
                })
            }

        }
    )
});


app.get('/displayTheme/:id', (req, res) => {
    // req.params.id pour trouver l'id envoyer par le front 
    console.log('here in get', req.params.id);
    Theme.findOne({ _id: req.params.id }).then(
        data => {
            if (data) {
                //res eli bech nraja3ha lel front b objet json
                res.status(200).json({
                    theme: data
                    //on a crée match pour qu'on puissent l'envoyer au front dans service 
                })
            }
        }
    )
})


app.put('/editTheme/:id', (req, res) => {
    console.log("here in edit", req.params.id);
    const theme = new Theme({
        // le model qui assure la communication entre la app.js et la base de donnée mongo 
        //teb3a el front bech ye5ou les input eli fel form 
        _id: req.body._id,
        themeName: req.body.themeName,
        discription: req.body.discription

    });
    // update takes 2 params : 1st for search object and the 2nd to replace it 
    Theme.update({ _id: req.params.id }, theme).then(
        result => {
            if (result) {
                res.status(200).json({
                    message: 'updated successfully'
                })
            }
        }
    )
});
//  fin partie theme 
// debut  desert choise ******************************************************
app.get('/allDesertChoise/:category', (req, res) => {
    // console.log('I am here for all matches');
    //connect to DB 
    // find est une fct predefinie de recherche 
    Choice.find({ category: req.params.category }).then(docs => {

        res.status(200).json({
            message: 'here all objects',
            choices: docs
        });

    })

});
app.get('/allChoices', (req, res) => {
    // console.log('I am here for all matches');
    //connect to DB 
    // find est une fct predefinie de recherche 
    Choice.find((err, docs) => {
        if (err) {
            console.log('Error', err);
        } else {
            res.status(200).json({
                message: 'here all objects',
                options: docs
            });
        }
    })

});

app.post('/addToDesertChoise', multer({ storage: storage }).single('image'), (req, res) => {
    console.log('here in adding', req.body);
    //
    url = req.protocol + '://' + req.get('host');
    // on a cree un new Match (notre model) et resevoire notre request from the front end a traver req.body 
    // apres installé npm i --save body-parser pour parser sur notre attribue dans un autre bash 
    const choice = new Choice({
        // le model qui assure la communication entre la app.js et la base de donnée mongo 
        //teb3a el front bech ye5ou les input eli fel form 
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        sousCategory: req.body.sousCategory,

        image: url + '/images/' + req.file.filename
    });

    console.log(('theme after adding', choice));
    // pour sauvé notre dooné inserer 
    //.then() est une fonction prédefinie pour donner un ordre apres le save 
    choice.save().then(
        result => {
            if (result) {
                res.status(200).json({
                    message: "added successfully"
                })
            }
        }
    );
})


app.delete('/deleteChoice/:id', (req, res) => {
    //req.params.id : pour recupérer notre id automatiquement 
    console.log('here in delete', req.params.id);
    // _id c'est l'attribue dans la db 
    // delet one fct predefinie dans mongoose
    Choice.deleteOne({ _id: req.params.id }).then(
        result => {
            if (result) {
                res.status(200).json({
                    message: 'deleted successfully'
                })
            }

        }
    )
});


app.get('/displayChoice/:id', (req, res) => {
    // req.params.id pour trouver l'id envoyer par le front 
    console.log('here in get', req.params.id);
    Choice.findOne({ _id: req.params.id }).then(
        data => {
            if (data) {
                //res eli bech nraja3ha lel front b objet json
                res.status(200).json({
                    choice: data
                    //on a crée match pour qu'on puissent l'envoyer au front dans service 
                })
            }
        }
    )
})


app.put('/editChoice/:id', (req, res) => {
    console.log("here in edit", req.params.id);
    const choice = new Choice({
        // le model qui assure la communication entre la app.js et la base de donnée mongo 
        //teb3a el front bech ye5ou les input eli fel form 
        _id: req.body._id,
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        sousCategory: req.body.sousCategory

    });
    // update takes 2 params : 1st for search object and the 2nd to replace it 
    Choice.update({ _id: req.params.id }, choice).then(
        result => {
            if (result) {
                res.status(200).json({
                    message: 'updated successfully'
                })
            }
        }
    )
});
// fin desrtt choise
// debut menu 
app.get('/allMenuAdmin', (req, res) => {
    // console.log('I am here for all matches');
    //connect to DB 
    // find est une fct predefinie de recherche 
    Menu.find((err, docs) => {
        if (err) {
            console.log('Error', err);
        } else {
            res.status(200).json({
                message: 'here all objects',
                menu: docs
            });
        }
    })

});

app.get('/allMenu/:category/:sousCategory', (req, res) => {
    console.log('params sousCategory', req.params.sousCategory);
    console.log('params type', req.params.category);
    // console.log('I am here for all matches');
    //connect to DB 
    // find est une fct predefinie de recherche 
    Menu.find({ sousCategory: req.params.sousCategory, category: req.params.category }).then(data => {
        console.log('data ', data);
        if (data) {
            //res eli bech nraja3ha lel front b objet json
            res.status(200).json({
                menues: data
                //on a crée match pour qu'on puissent l'envoyer au front dans service 
            })
        }
    })

});
app.get('/allMenu/:category/:sousCategory/:location', (req, res) => {
    console.log('params sousCategory', req.params.sousCategory);
    console.log('params type', req.params.category);
    // console.log('I am here for all matches');
    //connect to DB 
    // find est une fct predefinie de recherche 
    Menu.find({ sousCategory: req.params.sousCategory, category: req.params.category, location: req.params.location }).then(data => {
        console.log('data ', data);
        if (data) {
            //res eli bech nraja3ha lel front b objet json
            res.status(200).json({
                menues: data
                //on a crée match pour qu'on puissent l'envoyer au front dans service 
            })
        }
    })

});


app.post('/addToMenu', multer({ storage: storage }).single('image'), (req, res) => {
    console.log('here in adding', req.body);
    //
    url = req.protocol + '://' + req.get('host');
    // on a cree un new Match (notre model) et resevoire notre request from the front end a traver req.body 
    // apres installé npm i --save body-parser pour parser sur notre attribue dans un autre bash 
    const menu = new Menu({
        // le model qui assure la communication entre la app.js et la base de donnée mongo 
        //teb3a el front bech ye5ou les input eli fel form 
        type: req.body.type,
        location: req.body.location,
        discription: req.body.discription,
        titre: req.body.titre,
        category: req.body.category,
        sousCategory: req.body.sousCategory,
        image: url + '/images/' + req.file.filename
    });

    console.log(('menu after adding', menu));
    // pour sauvé notre dooné inserer 
    //.then() est une fonction prédefinie pour donner un ordre apres le save 
    menu.save().then(
        result => {
            if (result) {
                res.status(200).json({
                    message: "added successfully"
                })
            }
        }
    );
})


app.delete('/deleteMenu/:id', (req, res) => {
    //req.params.id : pour recupérer notre id automatiquement 
    console.log('here in delete', req.params.id);
    // _id c'est l'attribue dans la db 
    // delet one fct predefinie dans mongoose
    Menu.deleteOne({ _id: req.params.id }).then(
        result => {
            if (result) {
                res.status(200).json({
                    message: 'deleted successfully'
                })
            }

        }
    )
});


app.get('/displayMenu/:id', (req, res) => {
    // req.params.id pour trouver l'id envoyer par le front 
    console.log('here in get', req.params.id);
    Menu.findOne({ _id: req.params.id }).then(
        data => {
            if (data) {
                //res eli bech nraja3ha lel front b objet json
                res.status(200).json({
                    Menu: data
                    //on a crée match pour qu'on puissent l'envoyer au front dans service 
                })
            }
        }
    )
})


app.put('/editMenu/:id', (req, res) => {
    console.log("here in edit", req.params.id);
    const menu = new Menu({
        // le model qui assure la communication entre la app.js et la base de donnée mongo 
        //teb3a el front bech ye5ou les input eli fel form 
        _id: req.body._id,
        name: req.body.name,
        titre: req.body.titre,
        discription: req.body.discription,
        category: req.body.category,
        sousCategory: req.body.sousCategory

    });
    // update takes 2 params : 1st for search object and the 2nd to replace it 
    Menu.update({ _id: req.params.id }, menu).then(
        result => {
            if (result) {
                res.status(200).json({
                    message: 'updated successfully'
                })
            }
        }
    )
});
// search 
app.get('/api/search/:term', (req, res) => {
    console.log('req.body search', req.body);
    console.log('req.params', req.params.term);
    Menu.find({ titre: req.params.term }).then(
        result => {
            console.log('Here searched result', result);
            if (result) {
                res.send(result);
            }
        }
    )
});

// user 

app.get('/allUsers', (req, res) => {
    // console.log('I am here for all matches');
    //connect to DB 
    // find est une fct predefinie de recherche 
    User.find((err, docs) => {
        if (err) {
            console.log('Error', err);
        } else {
            res.status(200).json({
                message: 'here all objects',
                users: docs
            });
        }
    })

});
// add user ou signup
app.post('/addUser', (req, res) => {
    // console.log('here in adding', req.body);
    // //
    // url = req.protocol + '://' + req.get('host');
    // on a cree un new Match (notre model) et resevoire notre request from the front end a traver req.body 
    // apres installé npm i --save body-parser pour parser sur notre attribue dans un autre bash 
    const user = new User({
        // le model qui assure la communication entre la app.js et la base de donnée mongo 
        //teb3a el front bech ye5ou les input eli fel form 
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        tel: req.body.tel,
        pwd: req.body.pwd

        // image: url + '/images/' + req.file.filename
    });

    console.log(('user after adding', user));
    // pour sauvé notre dooné inserer 
    //.then() est une fonction prédefinie pour donner un ordre apres le save 
    user.save().then(
        result => {
            if (result) {
                res.status(200).json({
                    message: "added successfully"
                })
            }
        }
    );
})
app.delete('/deleteUser/:id', (req, res) => {
    //req.params.id : pour recupérer notre id automatiquement 
    console.log('here in delete', req.params.id);
    // _id c'est l'attribue dans la db 
    // delet one fct predefinie dans mongoose
    User.deleteOne({ _id: req.params.id }).then(
        result => {
            if (result) {
                res.status(200).json({
                    message: 'deleted successfully'
                })
            }

        }
    )
});
//display user
app.get('/displayUser/:id', (req, res) => {
    // req.params.id pour trouver l'id envoyer par le front 
    console.log('here in get', req.params.id);
    User.findOne({ _id: req.params.id }).then(
        data => {
            if (data) {
                //res eli bech nraja3ha lel front b objet json
                res.status(200).json({
                    user: data
                    //on a crée match pour qu'on puissent l'envoyer au front dans service 
                })
            }
        }
    )
})
// edit player
app.put('/editUser/:id', (req, res) => {
    console.log("here in edit", req.params.id);
    const user = new User({
        // le model qui assure la communication entre la app.js et la base de donnée mongo 
        //teb3a el front bech ye5ou les input eli fel form 
        _id: req.body._id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        pwd: req.body.pwd,
        email: req.body.email,
        tel: req.body.tel

    });
    // update takes 2 params : 1st for search object and the 2nd to replace it 
    User.update({ _id: req.params.id }, user).then(
        result => {
            if (result) {
                res.status(200).json({
                    message: 'updated successfully'
                })
            }
        }
    )
});


// login
app.post('/login', (req, res) => {
    console.log('here in login');
    console.log('req body', req.body);

    User.find({ email: req.body.email, pwd: req.body.pwd }).then(
        data => {
            console.log('login data', data);
            if (data) {
                res.status(200).json({
                    user: data
                })
            }

        }

    );
})

// debut position
app.get('/allPositions', (req, res) => {
    // console.log('I am here for all matches');
    //connect to DB 
    // find est une fct predefinie de recherche 
    Position.find((err, docs) => {
        if (err) {
            console.log('Error', err);
        } else {
            res.status(200).json({
                message: 'here all objects',
                positions: docs
            });
        }
    })

});

app.get('/allPosition/:category/:sousCategory', (req, res) => {
    console.log('params sousCategory', req.params.sousCategory);
    console.log('params type', req.params.category);
    // console.log('I am here for all matches');
    //connect to DB 
    // find est une fct predefinie de recherche 
    Menu.find({ sousCategory: req.params.sousCategory, category: req.params.category }).then(data => {
        console.log('data ', data);
        if (data) {
            //res eli bech nraja3ha lel front b objet json
            res.status(200).json({
                menues: data
                //on a crée match pour qu'on puissent l'envoyer au front dans service 
            })
        }
    })

});


app.post('/addToPosition', multer({ storage: storage }).single('image'), (req, res) => {
    console.log('here in adding', req.body);
    //
    url = req.protocol + '://' + req.get('host');
    // on a cree un new Match (notre model) et resevoire notre request from the front end a traver req.body 
    // apres installé npm i --save body-parser pour parser sur notre attribue dans un autre bash 
    const position = new Position({
        // le model qui assure la communication entre la app.js et la base de donnée mongo 
        //teb3a el front bech ye5ou les input eli fel form 
        name: req.body.name,
        discription: req.body.discription,
        titre: req.body.titre,
        location: req.body.location,
        category: req.body.category,
        sousCategory: req.body.sousCategory,
        image: url + '/images/' + req.file.filename
    });

    console.log(('menu after adding', position));
    // pour sauvé notre dooné inserer 
    //.then() est une fonction prédefinie pour donner un ordre apres le save 
    position.save().then(
        result => {
            if (result) {
                res.status(200).json({
                    message: "added successfully"
                })
            }
        }
    );
})


app.delete('/deletePosition/:id', (req, res) => {
    //req.params.id : pour recupérer notre id automatiquement 
    console.log('here in delete', req.params.id);
    // _id c'est l'attribue dans la db 
    // delet one fct predefinie dans mongoose
    Position.deleteOne({ _id: req.params.id }).then(
        result => {
            if (result) {
                res.status(200).json({
                    message: 'deleted successfully'
                })
            }

        }
    )
});


app.get('/displayPosition/:id', (req, res) => {
    // req.params.id pour trouver l'id envoyer par le front 
    console.log('here in get', req.params.id);
    Position.findOne({ _id: req.params.id }).then(
        data => {
            if (data) {
                //res eli bech nraja3ha lel front b objet json
                res.status(200).json({
                    Position: data
                    //on a crée match pour qu'on puissent l'envoyer au front dans service 
                })
            }
        }
    )
})


app.put('/editPosition/:id', (req, res) => {
    console.log("here in edit", req.params.id);
    const position = new Position({
        // le model qui assure la communication entre la app.js et la base de donnée mongo 
        //teb3a el front bech ye5ou les input eli fel form 
        _id: req.body._id,
        name: req.body.name,
        titre: req.body.titre,
        discription: req.body.discription

    });
    // update takes 2 params : 1st for search object and the 2nd to replace it 
    Position.update({ _id: req.params.id }, position).then(
        result => {
            if (result) {
                res.status(200).json({
                    message: 'updated successfully'
                })
            }
        }
    )
});
// team patie

app.get('/allTeams', (req, res) => {
    // console.log('I am here for all matches');
    //connect to DB 
    // find est une fct predefinie de recherche 
    Team.find((err, docs) => {
        if (err) {
            console.log('Error', err);
        } else {
            res.status(200).json({
                message: 'here all objects',
                teams: docs
            });
        }
    })

});


app.post('/addTeam', multer({ storage: storage }).single('image'), (req, res) => {
    console.log('here in adding', req.body);
    //
    url = req.protocol + '://' + req.get('host');
    // on a cree un new Match (notre model) et resevoire notre request from the front end a traver req.body 
    // apres installé npm i --save body-parser pour parser sur notre attribue dans un autre bash 
    const team = new Team({
        // le model qui assure la communication entre la app.js et la base de donnée mongo 
        //teb3a el front bech ye5ou les input eli fel form 
        name: req.body.name,
        discription: req.body.discription,
        lienFb: req.body.lienFb,


        image: url + '/images/' + req.file.filename
    });

    console.log(('theme after adding', team));
    // pour sauvé notre dooné inserer 
    //.then() est une fonction prédefinie pour donner un ordre apres le save 
    team.save().then(
        result => {
            if (result) {
                res.status(200).json({
                    message: "added successfully"
                })
            }
        }
    );
})


app.delete('/deleteTeam/:id', (req, res) => {
    //req.params.id : pour recupérer notre id automatiquement 
    console.log('here in delete', req.params.id);
    // _id c'est l'attribue dans la db 
    // delet one fct predefinie dans mongoose
    Team.deleteOne({ _id: req.params.id }).then(
        result => {
            if (result) {
                res.status(200).json({
                    message: 'deleted successfully'
                })
            }

        }
    )
});


app.get('/displayTeam/:id', (req, res) => {
    // req.params.id pour trouver l'id envoyer par le front 
    console.log('here in get', req.params.id);
    Team.findOne({ _id: req.params.id }).then(
        data => {
            if (data) {
                //res eli bech nraja3ha lel front b objet json
                res.status(200).json({
                    team: data
                    //on a crée match pour qu'on puissent l'envoyer au front dans service 
                })
            }
        }
    )
})


app.put('/editTeam/:id', (req, res) => {
    console.log("here in edit", req.params.id);
    const team = new Team({
        // le model qui assure la communication entre la app.js et la base de donnée mongo 
        //teb3a el front bech ye5ou les input eli fel form 
        _id: req.body._id,
        name: req.body.name,
        discription: req.body.discription


    });
    // update takes 2 params : 1st for search object and the 2nd to replace it 
    Team.update({ _id: req.params.id }, team).then(
        result => {
            if (result) {
                res.status(200).json({
                    message: 'updated successfully'
                })
            }
        }
    )
});

// fin team

module.exports = app;