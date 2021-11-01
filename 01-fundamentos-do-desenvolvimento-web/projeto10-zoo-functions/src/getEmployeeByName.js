const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  const obj = {};

  const nameFilter = employees.filter(({ firstName, lastName }) =>
    firstName === employeeName || lastName === employeeName);

  return (nameFilter[0] === undefined) ? obj : nameFilter[0];
}

module.exports = getEmployeeByName;
