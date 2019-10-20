<template>
  <header class="fluid-container w-100 m-0">
    <div class="row">
      <section id="identificacion" class="col-10 col-sm-6 col-md-4 py-4 text-left">
        <img id='logo' src="../assets/images/logo.png" alt='logo shake it. Dos bocadillos de conversacion contrapuestos.'/>
        <h2>{{web_info.current_page}}</h2>
      </section>
      <nav class="col-2 d-md-none offset-sm-4 w-100">
          <a id='menu_movil' href="#" ><img src="../assets/images/hamburguesa.png" alt='icono menu desplegable para móviles' class="w-100 pr-1 pt-4 pt-sm-2"/></a>
        <section id='nav_oculto' class='col-2 offset-10 px-0'>
          <ul>
            <li class='list-unstyled my-1 mx-0'><img src="../assets/images/home.png" alt='submenu Home'/></li>
            <li class='list-unstyled my-1 mx-0'><img src="../assets/images/proyectos.png" alt='submenu Proyectos'/></li>
            <li class='list-unstyled my-1 mx-0'><img src="../assets/images/persona.png" alt='submenu Sobre mi'/></li>
            <li class='list-unstyled my-1 mx-0'><img src="../assets/images/contacto.png" alt='submenu Contactame'/></li>
          </ul>
        </section>
      </nav>
      <nav id='menu_tablet' class="col-12 col-md-6 d-none d-md-inline-block pt-4 text-right offset-1">
        <a v-for="section in sections" :key="section.id" :href="section.link" :title="section.name" class="row m-0 p-2">{{section.name}}</a>
      </nav>
    </div>
  </header>
</template>


<script>
export default {
  name: 'pellin-menu',
  props: {
    web_info: Object,
    sections: Array,
  },
}
window.addEventListener('DOMContentLoaded',CargandoseEstaPagina,false);
//Funcion que se ejecuta cargandose la pagina
  function CargandoseEstaPagina(e) {
    //Definimos variables
    var botonMenu = document.getElementById("menu_movil");
    var navOculto = document.getElementById("nav_oculto");

    //Llamada a la funcion
    botonMenu.addEventListener("click", function(e){toggleMe(navOculto);}, false);
  }
// Funcion para mostrar u ocultar submenu en dispositivos moviles
  function toggleMe(element){
      if(!element) return true;
      if(element.style.display == "none") {
          element.style.display = "block";
      } else {
          element.style.display = "none";
      }
      return true;
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  header { background-color: #333333; color: #ffffff; z-index: 10;}

  h2 { margin: 0; display: inline-block;}

  a { color: #ffffff; text-decoration: none; display: inline-block;}

  #menu_tablet a:hover { color: #2c2c2c; background-color: #ffffff;}

  #logo { width: 25%; height: auto; display: inline-block; margin: 0 1em;}

  #nav_oculto{ position: fixed; top: 3em; right: 1.1em; display: none; z-index: 10;}

  #nav_oculto img { position: relative; width: 30px; height: auto; z-index: 10;}

/*Media query*/
  @media screen and (min-width: 576px) {
    #nav_oculto img { width: 50px; right: 0; top: 3.2em;}
  }
  @media screen and (min-width: 992px) {
    header{ position: fixed; top:0;}
  }
</style>
