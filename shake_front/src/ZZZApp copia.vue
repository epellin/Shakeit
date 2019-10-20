<!--<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <DebateArgumentPost
      :argument=arguments
      v-for="argument in arguments"
      v-bind:key="argument.id"
      v-bind:argument="argument"
    ></DebateArgumentPost>
  </div>
</template>

<script>
import DebateArgumentPost from './components/DebateArgumentPost.vue'

export default {
  name: 'app',
  components: {
    DebateArgumentPost
  },
  data () {
    return {
      arguments: [
      { id:1, content: 'argumento 1', ok_vote: 9, ko_vote: 4, debate_id: 2, debate_vote: 1 },
      { id:2, content: 'argumento 2', ok_vote: 2, ko_vote: 3, debate_id: 2, debate_vote: 0 },
      { id:3, content: 'argumento 3', ok_vote: 9, ko_vote: 1, debate_id: 2, debate_vote: 1 }
    ]    
    }
  }
}
</script>-->

<!--
  debates: [
      { id: 1, title: 'debate 1', description: 'descripción 1', ok_vote: 9, ko_vote: 1 },
      { id: 2, title: 'debate 2', description: 'descripción 2', ok_vote: 8, ko_vote: 2 },
      { id: 3, title: 'debate 3', description: 'descripción 3', ok_vote: 7, ko_vote: 3 }
    ]
  -->

<template>
  <div id="app" class="small-container">
    <h1>Debates</h1>
    <debate-post :posts="posts" />
    <argument-form @add:argument="addArgument"/>
    <!--addVote:argument es la funcion a la q llamo desde el componente. Y hace que se ejecute la funcion addVoteArgument de este archivo, con los parametros q le paso desde el componente. Recorro la lista de argumentos y el que coincida con el id lo sustituyo con el argumento actualizado q he modificado en el componente y he pasado como parametro.-->
    <argument-post 
      :argumentss="argumentss"
      @addVote:argument="addVoteArgument"
    />
  </div>
</template>

<script>
  import DebatePost from '@/components/DebatePost.vue';
  import DebateForm from '@/components/DebateForm.vue';
  import ArgumentPost from '@/components/DebateArgumentPost.vue';
  import ArgumentForm from '@/components/ArgumentForm.vue';

  export default {
    name: "App",
    components: {
      DebatePost,
      DebateForm,
      ArgumentPost,
      ArgumentForm,
    },
    data() {
      return {
        posts: [
          {
            id: 1,
            title: 'Titulo debate 1',
            ok_vote: 5,
            ko_vote: 4,
            arguments: 'Listado',
          },
          {
            id: 2,
            title: 'Titulo debate 2',
            ok_vote: 5,
            ko_vote: 4,
            arguments: 'Listado',
          },
          {
            id: 3,
            title: 'Titulo debate 3',
            ok_vote: 5,
            ko_vote: 4,
            arguments: 'Listado',
          },
        ],
        argumentss: [
          {
            id: 1,
            title: 'Argumento 1',
            description: 'blablablablablablablablablablablablablablablablablablablablablablablabla',
            ok_vote: 5,
            ko_vote: 4,
          },
          {
            id: 2,
            title: 'Argumento 2',
            description: 'blablablablablablablablablablablablablablablablablablablablablablablabla',
            ok_vote: 5,
            ko_vote: 4,
          },
          {
            id: 3,
            title: 'Argumento 3',
            description: 'blablablablablablablablablablablablablablablablablablablablablablablabla',
            ok_vote: 4,
            ko_vote: 4,
          },
        ],
      }
    },
    methods:{
      addPost(post) {
        const lastId = this.posts.length > 0 ? this.posts[this.posts.length - 1].id : 0;
        const id = lastId + 1;
        const newPost = {...post, id};

        this.posts = [...this.posts, newPost];
      },
      addArgument(argument) {
        const lastId = this.argumentss.length > 0 ? this.argumentss[this.argumentss.length - 1].id : 0;
        const id = lastId + 1;
        const newArgument = {...argument, id};

        this.argumentss = [...this.argumentss, newArgument];
      },
      addVoteDebate(id, updatedDebate) {
        this.posts = this.posts.map(argument =>
          post.id === id ? updatedDebate : post
        )
      },
      addVoteArgument(id, updatedArgument) {
        this.argumentss = this.argumentss.map(argument =>
          argument.id === id ? updatedArgument : argument
        )
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
    margin-top: 60px;
  }

  .small-container {
    max-width: 680px;
  }
</style>