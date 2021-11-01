const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const loginButton = document.querySelector('#login-button');
const agreement = document.querySelector('#agreement');
const submitBtn = document.getElementById('submit-btn');
const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');
let inputContent = document.querySelectorAll('.input');

// console.log(inputContent[10].name);



loginButton.addEventListener('click', () => {
  if (emailInput.value === 'tryber@teste.com' || passwordInput.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

agreement.addEventListener('change', () => {
  if (submitBtn.disabled === false) {
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
  }
});

textArea.addEventListener('keyup', () => {
  let initialCount = 500
  let currentCount = textArea.value.length
  counter.innerText = initialCount - currentCount
});

let targetPlace = document.getElementById('name-lastName-container')
let checkboxPlace = document.getElementsByClassName('rateBox')
let evaluationForm = document.querySelector('#evaluation-form')
let formContainer = document.querySelector('#form-container')


function checked() {
  let text = '';
  for (let i = 0; i < inputContent.length; i += 1)  { 
    if ( inputContent[i].checked === true ) {
      text = text + ` ${inputContent[i].value}`;
    }
  }
  textResult = 'Matérias:' + ' ' + `${text}`;
  let newContent = document.createElement('div');
  newContent.innerText = textResult;
  evaluationForm.appendChild(newContent);
}

function fisrtLastname() {
  let text = '';
  for (let i = 0; i < inputContent.length; i += 1)  { 
    if (inputContent[i].type === 'text') {
      text = text + ` ${inputContent[i].value}`;
    }
  }
  textResult = 'Nome:' + ' ' + `${text}`;
  let newContent = document.createElement('div')
  newContent.innerText = textResult;
  evaluationForm.appendChild(newContent);
}

function email() {
  let text = '';
  for (let i = 0; i < inputContent.length; i += 1)  { 
    if (inputContent[i].type === 'email') {
      text = text + ` ${inputContent[i].value}`;
    }
  }
    textResult = 'Email:' + ' ' + `${text}`;
    let newContent = document.createElement('div')
    newContent.innerText = textResult;
    evaluationForm.appendChild(newContent);
}

function house() {
  let text = '';
  for (let i = 0; i < inputContent.length; i += 1)  { 
    if (inputContent[i].selected === true) {
      text = text + ` ${inputContent[i].value}`;
    }
  }
    textResult = 'Casa:' + ' ' + `${text}`;
    let newContent = document.createElement('div')
    newContent.innerText = textResult;
    evaluationForm.appendChild(newContent);
}

function family() {
  let text = '';
  for (let i = 0; i < inputContent.length; i += 1)  { 
    if (inputContent[i].checked === true && inputContent[i].name === 'family' ) {
      text = text + ` ${inputContent[i].value}`;
      console.log(inputContent[i].value);
    }
  }
    textResult = 'Família:' + ' ' + `${text}`;
    let newContent = document.createElement('div')
    newContent.innerText = textResult;
    evaluationForm.appendChild(newContent);
    
  }
  
function subjects() {
  let text = '';
  for (let i = 0; i < inputContent.length; i += 1)  { 
    if (inputContent[i].checked === true && inputContent[i].name === 'subjects' ) {
      text = text + ` ${inputContent[i].value}`;
      console.log(inputContent[i].value);
    }
  }
    textResult = 'Matéria:' + ' ' + `${text}`;
    let newContent = document.createElement('div')
    newContent.innerText = textResult;
    evaluationForm.appendChild(newContent);    
}

function rate() {
  let text = '';
  for (let i = 0; i < inputContent.length; i += 1)  { 
    if (inputContent[i].checked === true && inputContent[i].name === 'rate' ) {
      text = text + ` ${inputContent[i].value}`;
      console.log(inputContent[i].value);
    }
  }
    textResult = 'Avaliação:' + ' ' + `${text}`;
    let newContent = document.createElement('div')
    newContent.innerText = textResult;
    evaluationForm.appendChild(newContent);    
}

function Comments() {
  let text = '';
  for (let i = 0; i < inputContent.length; i += 1)  { 
    if (inputContent[i].name === 'textarea' ) {
      text = text + ` ${inputContent[i].value}`;
      console.log(inputContent[i].value);
    }
  }
    textResult = 'Observações:' + ' ' + `${text}`;
    let newContent = document.createElement('div')
    newContent.innerText = textResult;
    evaluationForm.appendChild(newContent);    
}

  
submitBtn.addEventListener("click", () => {
      
  evaluationForm.innerText = '';
  // let label = ['Nome:', 'Email:', 'Casa:', 'Família:', 'Matérias:', 'Avaliação:', 'Observações:'];
  // let text = '';
  // let textResult = '';
  
  fisrtLastname();

  email();

  house();

  family();

  subjects();

  rate();

  Comments();




  // checked();

  // let x = -1;
    // if (inputContent[i].type === 'text') {
    //   x += 1;
    //   text = text + ` ${inputContent[i].value}`;
    //   textResult = label[0] + ' ' + `${text}`;
    //   if(text.split(' ').length > 2) {
    //     let newContent = document.createElement('div')
    //     newContent.innerText = textResult;
    //     evaluationForm.appendChild(newContent);
    //   }
    // }
    
    // if (inputContent[i].selected === true || inputContent[i].tagName === 'TEXTAREA') {
    //   text = '';
    //   text = label[x] + ' ' + `${inputContent[i].value}`;
    //   let newContent = document.createElement('div')
    //   newContent.innerText = text;
    //   evaluationForm.appendChild(newContent);
    //   x += 1;
    // }

    
    // if ( inputContent[i].checked === true ) {
      //   text = '';
      //   text = text + ` ${inputContent[i].value}`;
      //   textResult = label[x] + ' ' + `${text}`;
      //     let newContent = document.createElement('div');
      //     newContent.innerText = textResult;
      //     evaluationForm.appendChild(newContent);
      //     x += 1;
      // }
    // }
    
})


//   function inputShow(text, i) {
//     let newContent = document.createElement('div')
//     newContent.innerText = text;
//     inputContent[i].parentNode.appendChild(newContent);
//     console.log(text);
//   }
  
//   submitBtn.addEventListener("click", () => {
//     for (let i = 0; i < inputContent.length; i += 1)  { 
//       let validation = inputContent[i].checked === true || inputContent[i].type === 'text' || inputContent[i].type === 'email' || inputContent[i].selected === true || inputContent[i].tagName === 'TEXTAREA';
      
//     if ( validation ) {
//       console.log(inputContent[i].value)
//       inputShow(inputContent[i].value , i)
//     } 
//   }
// });
