const faq = document.getElementById('faq');
console.log(faq.innerText);
//console.log(faq.innerHTML); retorna o texto com as tags html

const grid = document.getElementsByClassName('grid');
//console.log(grid);
console.log(grid.length);
console.log(grid[2]);

const primeiroUl = document.querySelector('ul'); //retorna a primeira ul
console.log(primeiroUl);
const linkInterno = document.querySelector('[href^="#"]'); //querySelector retorna apenas o primeiro elemento
console.log('Primeiro link interno: ' + linkInterno.href); //a chamada deve ser compativel com o seletor css (.elemento) ou (#elemento)

// EXERCICIO 1 - RETORNAR TODAS IMAGENS
const imgsAnimais = document.querySelectorAll('.descricao-animais img'); 
console.log(imgsAnimais);
//console.log(imgsAnimais[0]);

// EXERCICIO 2 - RETORNAR IMAGENS COM QUE COMEÇAM COM A PALAVRA imagem no src
 //ex: src="./img/imagem5.jpg"
const linkImagens = document.querySelectorAll('img[src^="./img/imagem"]'); 
console.log(linkImagens);

// EXERCICIO 2 - RETORNAR LINKS INTERNOS ONDE O HREF COMEÇA COM #
const allLinks = document.querySelectorAll('[href^="#"]');
console.log('Quantidade de links internos: ' + allLinks.length);
allLinks.forEach(function(e,i){ //e = item, i = indice
    console.log(e); //NÃO PRECISA PASSAR O INDICE ,APENAS O ITEM!
});

// EXERCICIO 3 - SELECIONE O PRIMERIO H2 dentro da classe descricao-animais
const firstH2 = document.querySelector('.descricao-animais h2');
    //ou
const descricao = document.querySelector('.descricao-animais');
const firstH2Aux = descricao.querySelector('h2');
console.log(firstH2);
console.log(firstH2Aux);

// EXERCICIO 4 - SELECIONE O ÚLTIMO PARÁGRAFO DO SITE
const lastP = document.querySelectorAll('p');
let tam = lastP.length;
console.log('Quantidade de parágrafos: ' + lastP.length); //16 
console.log('Texto último: ' + lastP[16 - 1].innerText);
console.log('Tag último: ' + lastP[tam - 1].outerHTML);

//REVISAO
//document.querySelector('.classe'); 01
//document.querySelector('#id'); 01

//document.getElementById('id'); 02
//document.getElementsByClassName('classe'); 02