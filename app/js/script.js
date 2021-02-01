const btnHamburger1 = document.querySelector('#btnHamburger1');
const btnHamburger2 = document.querySelector('#btnHamburger2');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger1.addEventListener('click', function(){
    console.log('openhamburger');

    if(header.classList.contains('open')){//CLose Hamburger menu
        body.classList.remove('noscroll')
        header.classList.remove('open');
        fadeElems.forEach(function(element){
            element.classList.add('fade-out');
            element.classList.remove('fade-in');
        });
    }
    else{//Open Hamburger menu
        body.classList.add('noscroll')
        header.classList.add('open');
        fadeElems.forEach(function(element){
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
        });
    }
});

btnHamburger2.addEventListener('click', function(){
    console.log('openhamburger');

    if(header.classList.contains('open')){//CLose Hamburger menu
        body.classList.remove('noscroll')
        header.classList.remove('open');
        fadeElems.forEach(function(element){
            element.classList.add('fade-out');
            element.classList.remove('fade-in');
        });
    }
    else{//Open Hamburger menu
        body.classList.add('noscroll')
        header.classList.add('open');
        fadeElems.forEach(function(element){
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
        });
    }
});