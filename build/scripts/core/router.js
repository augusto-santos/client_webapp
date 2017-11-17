import history from './history'

class Router {
  constructor(routes, elem){
    this.routes = routes
    this.elem = elem

    const location = history.location

    // history.listen((location, action) => {
    //   location = this.hashChanged.bind(this)
    // })
    window.onhashchange = this.hashChanged.bind(this)
    this.hashChanged()
  }

  async hashChanged(ev){
    if(window.location.hash.lenght > 0){
      const pageName = window.location.hash.substr(1) // location.pathname
      this.show(pageName)
    }else if(this.routes['#default']) { //history.push('/')
      this.show('#default')
    }
  }

  async show(pageName){
    const page = this.routes[pageName]
    await page.load()
    this.elem.innerHTML = ''
    page.show(this.elem)
  }

}