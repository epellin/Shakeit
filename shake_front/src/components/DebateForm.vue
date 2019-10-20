<template>
  <div id="debate-form" class="fluid-container text-center py-4"> 
    <form @submit.prevent="handleSubmit" class="row w-100 w-md-75 w-lg-50">
      <label class="col-12 text-center">Titulo del debate</label>
      <input 
        :class="{ 'has-error': submitting && invalidTitle }"
        v-model="post.title" 
        type="text"
        @focus= "clearStatus"
        @keypress= "clearStatus"
      />
      <label class="col-12 text-center">Votos del debate</label>
      <input 
        v-model="post.votes" 
        :class="{ 'has-error': submitting && invalidVotes }"
        type="text"
        @focus= "clearStatus"
      />
      <p v-if="error && submitting" class="error-message">
        ❗Por favor, rellena los campos requeridos.
      </p>
      <p v-if="success" class="success-message">
        ✅ Debate añadido satisfactoriamente
      </p>

      <button>Añadir debate</button>
    </form>
  </div>
</template>
<!--Utilizamos v-model para que sea bidireccional la actualización de datos-->

<script>
  export default {
    name: 'debate-form',
    data() {
      return {
        submitting: false,
        error: false,
        success: false,
        post: {
          title: '',
          votes: '',
        },
      }
    },
    methods: {
      handleSubmit(){
        this.submitting = true
        this.clearStatus()

        if (this.invalidTitle || this.invalidVotes) {
          this.error = true
          return
        }

        this.$emit('add:post', this.post)

        this.post = {
          title:'',
          votes: '',
        }
        this.error = false
        this.success = true
        this.submitting = false
      },
      clearStatus(){
        this.success = false
        this.error = false
      }
    },
    computed: {
      invalidTitle() {
        return this.post.title === ''
      },
      invalidVotes() {
        return this.post.votes === ''
      },
    },
  }
  //Se recomienda usar add:post en vez de add-post en la doc oficial
</script>

<style scoped>
  form {
    margin-bottom: 2rem;
  }
  [class*="-message"] {
    font-weight: 500;
  }
  .error-message {
    color: #d33c40;
  }
  .success-message {
    color: #32a95d;
  }
</style>