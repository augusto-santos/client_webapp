function Menu(classOpen){
  this.wrapper = '.menu' // pode ser modificado para ser mais dinâmico...
  this.classOpen = classOpen // esse nome tá feio, talves altere ele...

  this._init()
}

Menu.prototype._init = function(){
  const menus = document.querySelectorAll(this.wrapper)
  const arrMenus = Array.prototype.slice.call(menus, 0)
  
  arrMenus.forEach((elem) => {
    const btn_menus = elem.querySelector('[data-toggle="menu"]');
    const menus_box = elem.querySelector('.menu_box');
    document.addEventListener('click', (e) => {   //onclick só funciona com btn, alterar o css pra funcionar com <a>.
      e.preventDefault
      if(e.target == btn_menus){
        if(menus_box.classList.contains(this.classOpen)){
          menus_box.classList.remove(this.classOpen)
        }else{
          menus_box.classList.add(this.classOpen)
        }
      }else{
        if(menus_box.classList.contains(this.classOpen)){
          menus_box.classList.remove(this.classOpen)
        }
      }
    })
  })
}

export default Menu