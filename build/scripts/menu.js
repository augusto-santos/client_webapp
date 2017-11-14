function Menu(open){
  this.wrapper = '.menu'
  this.open = open
}

Menu.prototype.getOpen = function(){
  return this.open
}

module.exports = Menu