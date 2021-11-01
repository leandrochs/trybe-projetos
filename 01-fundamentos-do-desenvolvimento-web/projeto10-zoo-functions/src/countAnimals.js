const data = require('../data/zoo_data');

const { species } = data;

const undefinedParam = () => {
  const obj = {};
  species.map(({ name, residents }) => {
    obj[name] = residents.length;
    return obj;
  });

  return obj;
};

const specieAndSex = ({ specie, sex }) => {
  let sexFilter = [];

  species.find(({ name, residents }) => {
    if (name === specie) {
      sexFilter = residents.filter((resident) => resident.sex === sex);
    }
    return sexFilter.length;
  });

  return sexFilter.length;
};

const justSpecie = ({ specie }) => {
  let n = 0;
  species.find(({ name, residents }) => {
    if (name === specie) { n = residents.length; }
    return n;
  });
  return n;
};

const definedParam = (param) => {
  const result = (Object.entries(param).length === 2)
    ? specieAndSex(param) : justSpecie(param);

  return result;
};

const countAnimals = (animal) => {
  let result = {};
  if (animal === undefined) {
    result = undefinedParam();
  } else {
    result = definedParam(animal);
  }
  return result;
};

module.exports = countAnimals;
