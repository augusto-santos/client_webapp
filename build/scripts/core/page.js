import axios from 'axios'

class Page {
  constructor(url){
    this.url = 'views/' + url
  }

  load(){
    return axios.get(this.url)
      .then((res) => {
        this.html = res
      })
  }

  show(elem){
    elem.innerHTML = this.html
  }

}