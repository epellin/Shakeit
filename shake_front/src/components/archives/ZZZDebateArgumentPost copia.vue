<template>
  <div id="argument-post">
    <article clas="argument" v-for="argument in argumentss" :key="argument.id">
      <h3>{{ argument.title}}</h3>
      <p>{{ argument.description}}</p>
      <p>{{ argument.ok_vote}} <a @click="addingOk(argument)"><img  class="icon" src="../assets/like.png"></a><a @click="addingKo(argument)"><img class="icon" src="../assets/dislike.png"></a>{{ argument.ko_vote}}</p>
      <!--Llamo a addingOk funcion de este archivo cuando hago click. Añado un voto y llamo a la funcion addVote:argument de la App(HTML) y le paso dos argumento el id y el argumento en si.-->
    </article>
  </div>
</template >

<script>
  export default {
    name: 'argument-post',
    props: {
      argumentss: Array,
    },
    methods: {
      addingOk(argument) {
        argument.ok_vote +=1;
        this.$emit('addVote:argument', argument.id, argument)
      },
      addingKo(argument) {
        argument.ko_vote +=1;
        this.$emit('addVote:argument', argument.id, argument)
      }
    },
  }
  //<img  class="icon" src="../assets/like.png"></a>
</script>

<style scoped>
  * {
    color: blue;
  }
  img{
    width: 20%;
    height: auto;
  }
  .icon{
      width: 5%;
      height: auto;
      margin: 0 0.5em;
  }
</style>