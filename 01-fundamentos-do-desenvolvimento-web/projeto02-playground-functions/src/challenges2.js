// Desafio 10
function techList(tech, inName) {
  let message = [];
  let orderedTech = tech.sort();
  let finalList = [];
  if (orderedTech.length !== 0) {
    for (let i = 0; i < orderedTech.length; i += 1) {
      let list = {
        name: inName,
        tech: orderedTech[i],
      };
      finalList.push(list);
      message = finalList;
    }
  } else {
    message = 'Vazio!';
  }
  return message;
}

function returnCount(numbers, number) {
  let count = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (number === numbers[i]) {
      count += 1;
    }
  }
  return count;
}

function testRepetition(numbers) {
  for (let index = 0; index < numbers.length; index += 1) {
    let number = numbers[index];
    let count = returnCount(numbers, number);
    if (count > 2) {
      let message = 'não é possível gerar um número de telefone com esses valores';
      return message;
    }
  }
  let message = true;
  return message;
}

function testNumbers(numbers) {
  let message = true;
  if (numbers.length !== 11) {
    message = 'Array com tamanho incorreto.';
    return message;
  }
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < 0 || numbers[index] > 9) {
      message = 'não é possível gerar um número de telefone com esses valores';
      return message;
    }
    message = testRepetition(numbers);
  }
  return message;
}

function assemblePhone(numbers) {
  let part1 = '';
  let part2 = '';
  let part3 = '';
  let message;
  for (let index = 0; index < 2; index += 1) {
    part1 += numbers[index];
  }
  for (let index = 2; index < 7; index += 1) {
    part2 += numbers[index];
  }
  for (let index = 7; index < 11; index += 1) {
    part3 += numbers[index];
  }
  message = `(${part1}) ${part2}-${part3}`;
  return message;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  let message = testNumbers(numbers);
  if (message === true) {
    message = assemblePhone(numbers);
  }
  return message;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
// seu código aqui
  let a = lineA;
  let b = lineB;
  let c = lineC;
  let message = false;

  let test1 = b + c > a;
  let test2 = a + c > b;
  let test3 = a + b > c;

  if (test1 && test2 && test3) {
    message = true;
  }
  return message;
}

// Desafio 13
function hydrate(frase) {
  // seu código aqui
  let message;
  let count = 0;
  for (let i = 0; i < frase.length; i += 1) {
    let n = parseFloat(frase[i]);
    let isANumber = n > 0;
    if (isANumber) {
      count += n;
    }
  }
  if (count === 1) {
    message = '1 copo de água';
  } else {
    message = `${count} copos de água`;
  }
  return message;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
