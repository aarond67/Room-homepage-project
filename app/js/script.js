const btnHamburger1 = document.querySelector('#btnHamburger1');
const btnHamburger2 = document.querySelector('#btnHamburger2');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');
const leftbtn1 = document.querySelector("#left1");
const rightbtn1 = document.querySelector("#right1");
const leftbtn2 = document.querySelector("#left2");
const rightbtn2 = document.querySelector("#right2");
const headerbg = document.querySelector('#headerbg');
const text0 = document.querySelector('.text0');
const text1 = document.querySelector('.text1');
const text2 = document.querySelector('.text2');
var index = 0;


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

leftbtn1.addEventListener("click", function(){
    leftbutton();   
});

leftbtn2.addEventListener("click", function(){
    leftbutton();   
});

rightbtn1.addEventListener("click", function(){
    rightbutton();
});

rightbtn2.addEventListener("click", function(){
    rightbutton();
});

function leftbutton(){
  if (index > 0){
      headerbg.classList.remove("background" + (index));
      var text3 = document.querySelector('.text' + (index));
      text3.classList.remove("height");
      text3.classList.add("height-none");
      index--;
      var text4 = document.querySelector('.text' + (index));
      headerbg.classList.add("background" + (index));
      text4.classList.remove("height-none");
      text4.classList.add("height");
  }else{
      headerbg.classList.remove("background" + (index));
      text0.classList.remove("height");
      text0.classList.add("height-none");
      index = 2;
      headerbg.classList.add("background" + (index)); 
      text2.classList.remove("height-none");
      text2.classList.add("height");
  }   
}

function rightbutton(){
  if (index < 2){
      headerbg.classList.remove("background" + (index));
      var text3 = document.querySelector('.text' + (index));
      text3.classList.remove("height");
      text3.classList.add("height-none");
      index++;
      headerbg.classList.add("background" + (index));
      var text4 = document.querySelector('.text' + (index));
      text4.classList.remove("height-none");
      text4.classList.add("height");
  }else{
      headerbg.classList.remove("background" + (2));
      var text5 = document.querySelector('.text' + (index));
      text5.classList.remove("height");
      text5.classList.add("height-none");
      index = 0;
      headerbg.classList.add("background" + (index));
      var text6 = document.querySelector('.text' + (index));
      text6.classList.remove("height-none");
      text6.classList.add("height"); 
  }   
}