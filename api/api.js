const express = require('express');
const bodyParser = require('body-parser');
const PeopleService = require('./people-service');
const HttpStatus = require('http-status-codes');

const peopleService = new PeopleService();
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

routeur.get('/people', (request, response) => {
    const filters = request.query;
    response.send(peopleService.getPeople(filters));
});

module.exports = app;
