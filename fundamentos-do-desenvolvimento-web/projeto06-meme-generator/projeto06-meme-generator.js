const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
// const memeInsert = document.querySelector('#meme-insert');
const memeImage = document.querySelector('#meme-image');

const fireButton = document.querySelector('#fire');
const waterButton = document.querySelector('#water');
const earthButton = document.querySelector('#earth');

const memeImageContainer = document.querySelector('#meme-image-container');

textInput.addEventListener('input', () => {
  memeText.innerText = textInput.value;
  console.log(textInput.value);
});


// Temos a tag <img src="" id="meme-image">
// E se atribuirmos o caminho da imagem para src, ela aparecerá no navegador
// memeImage.src = "imgs/meme1.png"

// Mas para criar dinamicamente este caminho, nós vamos usar uma
// tag input com type file <input type="file" id="meme-insert">
const memeInsert = document.querySelector('#meme-insert');

// essa tag terá a propriedade 'files' no javascript
console.log(memeInsert.files);

// Entretanto, só fará sentido conferir o seu conteúdo após um evento.
// Então vamos colocar um evento de mudança nesse input


// *** EVENTO ***

memeInsert.addEventListener('change', () => {
  console.log(memeInsert.files);

//   // no primeiro log temos o objeto FileList {0: File, length: 1}
//   // queremos o valor do objeto File que está na chave 0
  console.log(memeInsert.files[0]);

//   // agora temos o caminho para o objeto File:
  const file = memeInsert.files[0];

//   // Mas ainda precisamos ler o conteúdo do arquivo.

//   // Então usamos o fileReader, que é um leitor de objetos.
//   // O objeto FileReader permite aplicações web ler assincronamente o conteúdo dos arquivos do computador do usuário, utilizando o objeto File para especificar o arquivo ou os dados a serem lidos. => ( https://developer.mozilla.org/pt-BR/docs/Web/API/FileReader )

//   // obs.: existe outras opçoes para carregar arquivos. Mas como escolhi o FileReader para esse projeto, vamos prosseguir com o passo a passo final.
  
//   // 1) Criar uma constante e atribuir o objeto FileReader a ela:
  const fileReader = new FileReader();

  console.log(typeof fileReader);

  
//   // Agora podemos aplicar uma série de extenções ao nosso objeto fileReader, como pode ser verificado em sua documentação. Para nós será útil o seguinte:
  
//   // 2) Deixar o fileReader ler o arquivo
  fileReader.readAsDataURL(file);

//   // 3) Esperar o arquivo carregar: fileReader.onload
//   // Então teremos o resultado de fileReader: fileReader.result;

//   // Quer ver o que o .result está entregando?  
  // fileReader.onload = () => console.log(fileReader.result);
  
//   // b) Nessa função vamor atribuir o resultado de FileReader ao memeImage.src
  fileReader.onload = () => memeImage.src = fileReader.result;
})

//////////

// memeInsert.addEventListener('change', () => {
//   const file = memeInsert.files[0];
//   const fileReader = new FileReader();
 
//   fileReader.readAsDataURL(file);
//   fileReader.onload = () => memeImage.src = fileReader.result;
// })

//////////




// const fileReader = new FileReader();

// function src() {
//   memeImage.src = fileReader.result;
// }

// memeInsert.addEventListener('change', () => {
//   const file = memeInsert.files[0];
//   fileReader.onload = src;
//   fileReader.readAsDataURL(file);
// });




fireButton.addEventListener('click', () => {
  memeImageContainer.style.border = 'dashed 3px red';
});

waterButton.addEventListener('click', () => {
  memeImageContainer.style.border = 'double 5px blue';
});

earthButton.addEventListener('click', () => {
  memeImageContainer.style.border = 'groove 6px green';
});

const meme1 = document.querySelector('#meme-1');
const meme2 = document.querySelector('#meme-2');
const meme3 = document.querySelector('#meme-3');
const meme4 = document.querySelector('#meme-4');

meme1.addEventListener('click', () => {
  memeImage.src = meme1.src;
});

meme2.addEventListener('click', () => {
  memeImage.src = meme2.src;
});

meme3.addEventListener('click', () => {
  memeImage.src = meme3.src;
});

meme4.addEventListener('click', () => {
  memeImage.src = meme4.src;
});
