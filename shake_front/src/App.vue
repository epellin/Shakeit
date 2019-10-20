<template>
  <div id="app" class="small-container" >
    <pellin-menu :web_info="web_info" :sections="sections"/>
    <debate-post :posts="posts" :argumentss="deb_argumentss" @addVote:post="addVoteDebate"  @setVisibility="setVisibility($event)"/>
    <argument-form @add:argument="addArgument" :formClass="formClass"/>
    <!--addVote:argument es la funcion a la q llamo desde el componente. Y hace que se ejecute la funcion addVoteArgument de este archivo, con los parametros q le paso desde el componente. Recorro la lista de argumentos y el que coincida con el id lo sustituyo con el argumento actualizado q he modificado en el componente y he pasado como parametro.-->
    <pellin-footer :web_info="web_info" :sections="sections"/>
  </div>
</template>

<script>
  import DebatePost from '@/components/DebatePost.vue';
  import ArgumentPost from '@/components/DebateArgumentPost.vue';
  import ArgumentForm from '@/components/ArgumentForm.vue';
  import PellinMenu from '@/components/PellinMenu.vue';
  import PellinFooter from '@/components/PellinFooter.vue';

  export default {
    name: "App",
    components: {
      DebatePost,
      ArgumentPost,
      ArgumentForm,
      PellinMenu,
      PellinFooter,
    },
    data() {
      return {
        formClass: '',
        posts: [],
        deb_argumentss: [],
        web_info: {
          title: "Elena Pellín",
          current_page: "Shake-it!",
        },
        sections: [
          {
            id: 1,
            name: "Home",
            link: "#",
          },
          {
            id: 2,
            name: "Proyectos",
            link: "#",
          },
          {
            id: 3,
            name: "Sobre mí",
            link: "#",
          },
          {
            id: 4,
            name: "Contáctame",
            link: "#",
          },
        ],
      }
    },
    mounted() {
      this.getPosts();
      this.getArguments();
    },
    methods:{
      async getPosts() {
        try {
          const response = await fetch('http://localhost:3000/debates')
          const data = await response.json()
          this.posts = data
        } catch (error) {
          console.error(error)
        }
      },
      async addPost(post) {
        try {
          const response = await fetch('http://localhost:3000/debates', {
            method: 'POST',
            body: JSON.stringify(post),
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
          })
          const data = await response.json()
          this.posts = [...this.posts, data]
        } catch (error) {
          console.error(error)
        }
      },
     async addVoteDebate(id, updatedDebate) {
        try {
          const response = await fetch(`http://localhost:3000/debates/${id}`, {
            method: 'PUT',
            body: JSON.stringify(updatedDebate),
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
          })
          const data = await response.json()
          this.posts = this.posts.map(post => (post.id === id ? data : post));
        } catch (error) {
          console.error(error)
        }
      },
      async getArguments() {
        try {
          const response = await fetch('http://localhost:3000/argumentos')
          const data = await response.json()
          this.deb_argumentss = data
        } catch (error) {
          console.error(error)
        }
      },
      async addArgument(argument) {
        const lastId = this.deb_argumentss.length > 0 ? this.deb_argumentss[this.deb_argumentss.length - 1].id : 0;
        const id = lastId + 1;
        const today = Date.now();
        argument.created_date = today;
        const newArgument = {...argument, id};
        try {
          const response = await fetch('http://localhost:3000/argumentos', {
            method: 'POST',
            body: JSON.stringify(newArgument),
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
          })
          const data = await response.json()
          this.deb_argumentss = [...this.deb_argumentss, data]
          this.getArguments();
        } catch (error) {
          console.error(error)
        }
      },
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0;
    width: 100%;
    padding: 0;
  }

  .small-container {
    margin: auto;
  }
</style>