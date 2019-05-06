// Express
const express = require('express');
<<<<<<< HEAD

// Module People Service
=======
const bodyParser = require('body-parser');
>>>>>>> corrections
const PeopleService = require('./people-service');
const HttpStatus = require('http-status-codes');

const peopleService = new PeopleService();

// APP
const app = express();
const routeur = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/v1', routeur);

routeur.put('/people/:id', (request, response) => {
    const id = parseInt(request.params.id, 10);
    const people = request.body;

    try  {
        peopleService.updatePeople(id, people);
        response.sendStatus(HttpStatus.OK);
    } catch (error) {
        response.sendStatus(HttpStatus.NOT_FOUND);
    }
});

<<<<<<< HEAD
// V1
// const v1 = express.Router();

// Express a besoin d’un middleware pour parser les corps de requêtes POST
const bodyParser = require('body-parser');

// Basic Auth
const { digestAuth } = require('../basic-auth/basic-auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use('/api/v1', v1);

app.get('/api/v1/people', async (request, response) => {
    try {
	    const data = await peopleService.getPeople();
	    response.send(data);
    } catch (error) {
        console.log('error get people: ', error);
        response.sendStatus(404).end(error);
    }
});

app.put('/api/v1/people/:id', async (request, response) => {
    const id = request.params.id;
    const people = {...request.name };
    try {
        const result = await peopleService.updatePeople(id, people);
        response.sendStatus(200);
    } catch (error) {
        console.log('error update people: ', error);
        response.sendStatus(404).end(error);
    }
});

=======
routeur.get('/people', (request, response) => {
    const filters = request.query;
    response.send(peopleService.getPeople(filters));
});
>>>>>>> corrections

module.exports = app;
