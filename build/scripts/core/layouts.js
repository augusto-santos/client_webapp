class Layout {
  constructor(...pages){
    this.pages = pages
  }

  load(){
    return Promise.all(this.pages.map((page) => page.load()))
  }

  show(elem){
    for (let page of this.pages){
      const div = document.createElement('div')
      page.show(div)
      elem.appendChild(div);
    }
  }

}