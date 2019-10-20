<template>
  <div id="debate-post">
    <article clas="debate" v-for="post in posts" :key="post.id">
      <h2>{{ post.title}}</h2>
      <p>{{ post.ok_vote}} <a @click="addingOk(post)"><img  class="icon" src="../assets/like.png"></a><a @click="addingKo(post)"><img class="icon" src="../assets/dislike.png"></a>{{ post.ko_vote}}</p>
    </article>
  </div>
</template>

<script>
  export default {
    name: 'debate-post',
    props: {
      posts: Array,
    },
    methods: {
      addingOk(post) {
        post.ok_vote +=1;
        this.$emit('addVote:post', post.id, post)
      },
      addingKo(post) {
        post.ko_vote +=1;
        this.$emit('addVote:post', post.id, post)
      }
    },
  }
</script>

<style scoped>
  * {
    color: red;
  }

  img{
    width: 30%;
    height: auto;
  }
  .icon{
      width: 5%;
      height: auto;
      margin: 0 1em;
  }
</style>