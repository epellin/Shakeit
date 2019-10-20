<template>
  <div id="argument-post" class="m-auto">
    <div class="row">
      <p v-if="argumentss.length ==0">¡Sé el primero en escribir un argumento!</p>
      <section id='likeBox' class="col-12 col-md-6 my-1 px-0 pb-3 pb-sm-5">
        <h1 class="w-100">A FAVOR</h1>
        <article class="argument mb-3 mx-auto pt-3 pb-2" v-for="argument in argumentss" :key="argument.id" v-if=" argumentss.length >0 && debateId === argument.post_id && argument.type==='like'" v-bind:class="getClass(argument)">
          <h3 class="mx-auto">{{ argument.title}}</h3>
          <p class="mt-2 mb-1 mx-auto text-justify">{{ argument.description}}</p>
          <div id="votos">{{argument.ok_vote}} <a @click="addingOk(argument)"><img  class="icon mx-2" src="../assets/images/like.png" alt="icono para indicar voto a favor"></a><a @click="addingKo(argument)"><img class="icon mx-2" src="../assets/images/dislike.png" alt="icono para indicar voto en contra"></a>{{ argument.ko_vote}}</div>
          <!--Llamo a addingOk funcion de este archivo cuando hago click. Añado un voto y llamo a la funcion addVote:argument de la App(HTML) y le paso dos argumento el id y el argumento en si.-->
        </article>
        <button class="heartBeat mt-4 px-4 py-1" @click="sendInfo('like')">Añade tu comentario</button>
      </section>
      <section id='dislikeBox' class="col-12 col-md-6 my-1 px-0 pb-3 pb-sm-5">
        <h1 class="w-100">EN CONTRA</h1>
        <article class="argument mb-3 mx-auto pt-3 pb-2" v-for="argument in argumentss" :key="argument.id" v-if="debateId === argument.post_id && argument.type==='dislike'" v-bind:class="getClass(argument)">
          <h3 class="mx-auto">{{ argument.title}}</h3>
          <p class="mt-2 mb-1 mx-auto text-justify">{{ argument.description}}</p>
          <div>{{ argument.ok_vote}} <a @click="addingOk(argument)"><img  class="icon mx-2" src="../assets/images/like.png" alt="icono para indicar voto a favor"></a><a @click="addingKo(argument)"><img class="icon mx-2" src="../assets/images/dislike.png" alt="icono para indicar voto en contra"></a>{{ argument.ko_vote}}</div>
          <!--Llamo a addingOk funcion de este archivo cuando hago click. Añado un voto y llamo a la funcion addVote:argument de la App(HTML) y le paso dos argumento el id y el argumento en si.-->
        </article>
        <button class="heartBeat mt-4 px-4 py-1" @click="sendInfo('dislike')">Añade tu comentario</button>
      </section>
    </div>
  </div>
</template >

<script>
  import {eventBus} from "../main";

  export default {
    name: 'argument-post',
    props: {
      argumentss: Array,
      debateId: Number,
    },
    data() {
      return {
        formClass: 'invisible',
      }
    },
    methods: {
      addingOk(argument) {
        argument.ok_vote +=1;
        this.$emit('addVote:argument', argument.id, argument)
      },
      addingKo(argument) {
        argument.ko_vote +=1;
        this.$emit('addVote:argument', argument.id, argument)
      },
      getClass(argument){
        return {
          'like': argument.type === 'like',
          'dislike': argument.type === 'dislike',
        }
      },
      sendInfo(type) {
        eventBus.$emit('setVisibility', 'visible', this.debateId, type)
      },
    },
  }
</script>

<style scoped>
  #argument-post{ width: 90%; }

  #likeBox, #dislikeBox { background-color: rgba(255, 203, 101, 0.2); color: #ffffff; }

  .like, #likeBox button { background-color: #2696A1; border: 1px solid #2696A1;}

  .dislike, #dislikeBox button { background-color: #e08280; border: 1px solid #e08280;}

  .like>p { background-color: #a8d5d9; width: 95%;}

  .dislike>p { background-color: #edc4c4; width: 95%;}

  .argument { box-shadow: 5px 10px 8px #888888; width: 95%;}
  
  .argument p { color: #2c2c2c; padding: 1em 0.8em;}
  
  h1 { font-family: HoboStd; background-color: #FFCB65; width: 100%; font-size: 2em; }

  h3, #votos { font-family: Abadi;}

  .icon{ width: 5%; height: auto;}

  button {
    color: #ffffff;
    border-radius: .5em;
    font-weight: bold;
    font-size: 1em;
  }
  
  #argument-post section button:hover {
    color: #2c2c2c;
    background-color: white;
    border: 1px solid #2c2c2c;
    box-shadow: 0em 0em .5em .5em #2c2c2c;
  }

  .heartBeat:hover {
  -webkit-animation-name: heartBeat;
  animation-name: heartBeat;
  -webkit-animation-duration: 1.3s;
  animation-duration: 1.3s;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  }

  /*Animaciones */
  @-webkit-keyframes heartBeat {
  0% { -webkit-transform: scale(1); transform: scale(1);}
  14% { -webkit-transform: scale(1.3); transform: scale(1.3);}
  28% { -webkit-transform: scale(1); transform: scale(1);}
  42% {-webkit-transform: scale(1.3); transform: scale(1.3);}
  70% {-webkit-transform: scale(1); transform: scale(1);}
  }

  @keyframes heartBeat {
    0% { -webkit-transform: scale(1); transform: scale(1);}
    14% { -webkit-transform: scale(1.3); transform: scale(1.3);}
    28% { -webkit-transform: scale(1); transform: scale(1);}
    42% { -webkit-transform: scale(1.3); transform: scale(1.3);}
    70% { -webkit-transform: scale(1); transform: scale(1);}
  }

/*Media query*/
  @media screen and (min-width: 768px) {
    #likeBox { border-right: .5em solid #ffffff;}
    #dislikeBox { border-left: .5em solid #ffffff;}
  }
  @media screen and (min-width: 1200px) {
    .argument { width: 85%;}
  }
</style>