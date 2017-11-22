// components scripts imports
import history from './core/history'
import Menu from './menu'

import '../index.html'
import '../about.html'

// stylesheet for compilation
import '../styles/main.scss'

// link on click without refresh
const anchor = document.getElementsByTagName('a')
const anchorArr = Array.prototype.slice.call(anchor, 0)
anchorArr.forEach((elem) => {
  elem.addEventListener('click', function(e){
    e.preventDefault()
    if(elem.getAttribute('href')){
      history.push(elem.getAttribute('href'))
    }else{
      history.push({
        pathname: e.target.pathname,
        search: e.target.search
      })
    }
  })
})

// instances of components
let menus = new Menu('open')