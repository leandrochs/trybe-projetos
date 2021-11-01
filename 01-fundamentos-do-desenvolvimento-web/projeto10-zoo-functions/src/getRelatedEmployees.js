const data = require('../data/zoo_data');

const { employees } = data;

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
const allManagers = [stephanieId, olaId, burlId];

function isManager(id) {
  let verify = false;
  allManagers.forEach((manager) => {
    if (manager === id) { verify = true; }
  });

  return verify;
}

const pushManager = (managerId) => {
  const result = [];
  employees.filter(({ managers, firstName, lastName }) => managers
    .forEach((manager) => {
      if (manager === managerId) {
        result.push(`${firstName} ${lastName}`);
      }
    }));
  return result;
};

function getRelatedEmployees(managerId) {
  const verifyManager = isManager(managerId);

  if (!verifyManager) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else {
    return pushManager(managerId);
  }
}

module.exports = { isManager, getRelatedEmployees };
