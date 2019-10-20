"use strict"
//Basico recurso
var jpa_resource = new Vue({
    el: '#jpa_resource',
    data: {
      tittle: 'Hello World ',
      description: 'Lorem fistrum quietooor condemor condemor no puedor llevame al sircoo a peich caballo blanco caballo negroorl.',
      image_url: 'https://s1.thcdn.com/productimg/1600/1600/11489653-1374492597223451.jpg',
     
    }
})

//Componente debate
// Escribimos el template con \ en cada salto de linea xa que tb lo interprete bien Internet Explorer
Vue.component('debate-post', {
  props: ['debate'], //Refactoring debate-post component (en vez de poner todas las propiedades, ponemos debate q englobará el resto)
  template: '\
    <div class="debate">\
      <h2>{{debate.title}}</h2>\
      <p>{{debate.description}}</p>\
      <p>{{debate.ok_vote}} <img class="icon" src="img/ok.png"><img class="icon" src="img/ko.png"> {{debate.ko_vote}}</p>\
    </div>\
  '
})

//new Vue({ el: '#contenedor-debates' })
new Vue({
  el: '#contenedor-debates',
  data: {
    debates: [
      { id: 1, title: 'debate 1', description: 'descripción 1', ok_vote: 9, ko_vote: 1 },
      { id: 2, title: 'debate 2', description: 'descripción 2', ok_vote: 8, ko_vote: 2 },
      { id: 3, title: 'debate 3', description: 'descripción 3', ok_vote: 7, ko_vote: 3 }
    ]
  }
})
/* JSON de API
new Vue({
  el: '#contenedor-debates',
  data: {
    debates: []
  },
  created: function () {
    // Alias the component instance as `vm`, so that we  
    // can access it inside the promise function
    var vm = this
    // Fetch our array of debates from an API
    fetch('https://elenapellin.com/debates')
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        vm.debates = data
      })
  }
})*/