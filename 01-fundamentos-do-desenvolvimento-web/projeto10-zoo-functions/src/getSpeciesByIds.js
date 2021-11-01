const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  const result = [];
  ids.forEach((id) => {
    result.push(species.find((specie) => specie.id === id));
  });

  return result;
}

module.exports = getSpeciesByIds;
