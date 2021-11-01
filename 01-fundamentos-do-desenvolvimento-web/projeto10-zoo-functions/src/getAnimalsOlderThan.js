const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  let ageTest = false;
  species.forEach((specie) => {
    const { name, residents } = specie;

    if (name === animal) {
      ageTest = residents.every((resident) => (resident.age > age));
    }
  });

  return ageTest;
}

module.exports = getAnimalsOlderThan;
