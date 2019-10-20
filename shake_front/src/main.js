import Vue from 'vue'
import App from './App.vue'

require('@/assets/styles/style_shake_it.css');

//Para comunicación entre componentes hermanos sin tener que pasar por el padre.
export const eventBus = new Vue();

// Para evitar que el consejo de producción se produzca al iniciar Vue.
Vue.config.productionTip = false

//h es quivalente a createElement funcion simplificada de function (createElement) {return createElement(App);}
//h xq viene de Hyperscript -> Hyperscript itself stands for "script that generates HTML structures"
new Vue({
  render: h => h(App),
}).$mount('#app')
//$mount('#app') para iniciar manualmente el montaje de una instancia Vue desmontada. 
//Es el equivalente a ({ el: '#app' })
