<template>
  <footer class="fluid-container w-100 px-3 mt-5">
    <div class="row">
    <section class="col-10 col-md-3 order-1 pt-4">
      <h3 class="row m-0">{{web_info.title}}</h3>
      <p class="row m-0">{{web_info.current_page}}</p>
    </section>
    <nav class="col-12 col-sm-9 col-md-6 order-3 order-sm-2 pt-4 text-center text-md-right">
      <a v-for="section in sections" :key="section.id" :href="section.link" class="row m-auto p-2" :title="section.name">{{section.name}}</a>
    </nav>
    <section id="rrss" class="d-flex col-2 col-sm-3 col-lg-2 order-2 order-sm-3 offset-lg-1 py-4 justify-content-end ">
      <a href="https://twitter.com/E_Pellin" title='Haz click para ir al twitter de epellin' class="col-auto my-0 mx-1 p-1"><img class="img-fluid" src="../assets/images/twitter_white.png" alt="icono twitter"></a>
      <a href="https://www.linkedin.com/in/epellin/" title='Haz click para ir al linkedin de epellin' class="col-auto my-0 mx-1 p-1"><img class="img-fluid" src="../assets/images/linkedin_white.png" alt="icono Linkedin"></a>
    </section>
    </div>
  </footer>
</template>


<script>
export default {
  name: 'pellin-footer',
  props: {
    web_info: Object,
    sections: Array,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  footer { background-color: #333333; color: #ffffff;}

  h3 { font-family: HoboStd; }

  p { margin: 0;}

  a { color: #ffffff; text-decoration: none; display: inline-block;}

  a:hover { color: #FFCB65;}

  img { width: 21px; height: auto;}

/*Media query*/
  @media screen and (min-width: 992px) {
    footer{ position: relative; top:7em;}
  }
</style>
