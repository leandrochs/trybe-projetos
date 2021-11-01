const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldestFromFirstSpecies(idParam) {
  let firstId = '';
  employees.forEach(({ id, responsibleFor }) => {
    if (id === idParam) {
      const [first] = responsibleFor;
      firstId = first;
    }
  });

  const listAnimals = species.find((specie) => specie.id === firstId).residents
    .sort((a, b) => b.age - a.age)[0];

  const selectedAnimal = Object.values(listAnimals);

  return selectedAnimal;
}

module.exports = getOldestFromFirstSpecies;

getOldestFromFirstSpecies('4b40a139-d4dc-4f09-822d-ec25e819a5ad');
