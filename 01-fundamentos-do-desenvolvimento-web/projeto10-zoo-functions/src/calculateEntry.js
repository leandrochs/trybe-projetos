const data = require('../data/zoo_data');

const { child: childPriece, adult: adultPrice, senior: seniorPrice } = data.prices;

function countEntrants(entrants) {
  const child = entrants.filter(({ age }) => age < 18).length;
  const adult = entrants.filter(({ age }) => age > 17 && age < 50).length;
  const senior = entrants.filter(({ age }) => age > 49).length;

  return { child, adult, senior };
}

function calculateEntry(entrants) {
  if (entrants && entrants.length > 0) {
    const { child, adult, senior } = countEntrants(entrants);
    return (child * childPriece + adult * adultPrice + senior * seniorPrice);
  }

  return 0;
}

module.exports = { calculateEntry, countEntrants };
