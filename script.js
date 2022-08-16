
let header = document.querySelector('header');
let menu = document.querySelector('#menu');
const clos = document.querySelector('.close');
menu.addEventListener('click',() =>{
  header.style.display=`flex`;
menu.style.display='none';
clos.style.display='block';});

clos.addEventListener('click',() =>{
  header.style.display=`none`;
  clos.style.display='none';
  menu.style.display='block';

});

  
    