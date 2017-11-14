import '../styles/main.scss';

/*===================
| Menu Scripts:start 
=====================*/  

var menu = document.querySelectorAll('.menu');
// transformando um HTMLCollection em array
var arrMenu = Array.prototype.slice.call(menu, 0);

arrMenu.forEach(function(elem) {
var btn_menu = elem.querySelector('button[data-toggle="menu"]');
var menu_box = elem.querySelector('.menu_box');
document.addEventListener('click', function(e){
  if(e.target == btn_menu){
    if(menu_box.classList.contains('open')){
      menu_box.classList.remove('open');
    }else{
      menu_box.classList.add('open');
    }
  }else{
    if(menu_box.classList.contains('open')){
      menu_box.classList.remove('open');
    }
  }
}); 
});

/*=================
| Menu Script:end
===================*/