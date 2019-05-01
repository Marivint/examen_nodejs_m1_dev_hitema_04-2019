const fs = require('fs');

const INDEX_NOT_FOUND = -1;

module.exports = class PeopleService {
    constructor() {
        this.peoples = JSON.parse(fs.readFileSync(__dirname + '/people.json', 'utf8'));
    }

    updatePeople(id, people) {
        const indexToUpdate = this.peoples.findIndex(people => people.id === id);
        if (indexToUpdate === INDEX_NOT_FOUND) throw 'not_found';
        this.peoples[indexToUpdate] = people;
    }
    
    getPeople(filters) {
        const keys = Object.keys(filters);
        if (!keys.length) return this.peoples; 
        return this.peoples.filter(people =>
            keys.every(key => people[key] === filters[key])
        );
    }
}
