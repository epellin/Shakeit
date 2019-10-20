<template>
  <div id="debate-post" class=" fluid-container text-center">
    <article class="debate" v-for="post in posts" :key="post.id">
      <header class="debateHeader col-12">
        <h2>{{ post.title}}</h2>
        <p>{{ post.ok_vote}} <a @click="addingOk(post)"><img  class="icon mx-2" src="../assets/images/like.png" alt='icono para indicar voto a favor'></a><a @click="addingKo(post)"><img class="icon mx-2" src="../assets/images/dislike.png" alt='icono para indicar voto en contra'></a>{{ post.ko_vote}}</p>
      </header>
      <argument-post class="col-12"
        :argumentss="argumentss" :debateId="post.id" @addVote:argument="addVoteArgument"
      />
    </article>
  </div>
</template>

<script>
  import ArgumentPost from '@/components/DebateArgumentPost.vue';

  export default {
    name: 'debate-post',
    props: {
      posts: Array,
      argumentss: Array,
    },
    components: {
      ArgumentPost,
    },
    data() {
      return {
        post: Object,
        debateId: Number,
      }
    },
    methods: {
      addingOk(post) {
        post.ok_vote +=1;
        this.$emit('addVote:post', post.id, post)
      },
      addingKo(post) {
        post.ko_vote +=1;
        this.$emit('addVote:post', post.id, post)
      },
      async addVoteArgument(id, updatedArgument) {
        try {
          const response = await fetch(`http://localhost:3000/argumentos/${id}`, {
            method: 'PUT',
            body: JSON.stringify(updatedArgument),
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
          })
          const data = await response.json()
          this.argumentss = this.argumentss.map(argument => (argument.id === id ? data : argument))
        } catch (error) {
          console.error(error);
        }
      },
    },
  }
</script>

<style scoped>
  
  h2 { font-family: Trubble; }

  p { font-family: HoboStd; }
  
  #debate-post { width: 90%; display: inline-block;}
  
  .debateHeader {
    color: #ffffff;
    width: 90%;
    margin: 1.5em auto 0.5em auto;
    box-sizing: border-box;
    background-color: #494949;
    padding: 0.8em 0 0.1em 0;
  }

  .icon{ width: 1.5em; height: auto;}
  
  .debate{ margin: auto; box-sizing: border-box;}

/*Media query*/
  @media screen and (min-width: 768px) {
    .icon{ width: 1.8em;}
  }
  @media screen and (min-width: 992px) {
    #debate-post{ position: relative; top:7em;}
  }
  @media screen and (min-width: 1200px) {
    #debate-post{ width: 100%; max-width: 1200px;}
  }
</style>