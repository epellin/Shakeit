<template>
  <div id="argument-form"  class="fluid-container text-center py-4" v-bind:class= "formClass">
    <!-- the submit event will no longer reload the page -->
    <form @submit.prevent="handleSubmitArgument" class="row d-flex justify-content-center">
      <div class="row">
        <label class="col-12 mx-auto text-center">Título del argumento</label><br/>
        <input class="col-10 mx-auto "
          :class="{ 'has-error': submitting && invalidArgumentTitle }"
          v-model="argument.title" 
          type="text"
          @focus= "clearStatus"
          @keypress= "clearStatus"
        />        
      </div>
      <div class="row">
        <label class="col-12 text-center pt-3">Descripción del argumento</label><br/>
        <textarea class="col-10 mx-auto"
          rows='4' cols='14'
          v-model="argument.description" 
          :class="{ 'has-error': submitting && invalidDescription }"
          type="text"
          @focus= "clearStatus"
        />
      </div>
      <p v-if="error && submitting" class="error-message">
        ❗Por favor, rellena los campos requeridos.
      </p>
      <p v-if="success" class="success-message">
        ✅ Debate añadido satisfactoriamente
      </p>
      <button class="col-10 col-sm-5 mx-auto my-3 my-md-5">Añadir argumento</button>
    </form>
  </div>
</template>
<!--Utilizamos v-model para que sea bidireccional la actualización de datos-->

<script>
  import {eventBus} from "../main";

  export default {
    name: 'argument-form',
    data() {
      return {
        formClass:'invisible',
        post_id: Number,
        argType: String,
        submitting: false,
        error: false,
        success: false,
        argument: {
          title: '',
          description: '',
          type: '',
          post_id: 0,
          ko_vote: 0,
          ok_vote: 0,
        },
      }
    },
    created() {
      eventBus.$on('setVisibility', (visibility, debateId, type) => {
          this.formClass = visibility;
          this.post_id = debateId;
          this.argType = type;
      });
    },
    methods: {
      handleSubmitArgument(){
        this.submitting = true
        this.clearStatus()

        if (this.invalidArgumentTitle || this.invalidDescription) {
          this.error = true
          return
        }
        this.argument.type = this.argType;
        this.argument.post_id = this.post_id;

        this.$emit('add:argument', this.argument)

        this.argument = {
          title:'',
          description: '',
          type: '',
          post_id: 0,
          ko_vote: 0,
          ok_vote: 0,
        }
        this.error = false
        this.success = true
        this.submitting = false

        this.formClass = 'invisible';
      },
      clearStatus(){
        this.success = false
        this.error = false
      },
    },
    computed: {
      invalidArgumentTitle() {
        return this.argument.title === ''
      },
      invalidDescription() {
        return this.argument.description === ''
      },
    },

  }
  //Se recomienda usar add:post en vez de add-post en la doc oficial
</script>

<style scoped>
  form {
    margin-bottom: 2rem;
    background-color: #333333;
    color: #ffffff;
    width: 75%;
    max-width: 630px;
    padding: 1em;
    margin: auto;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .visible {
    position: fixed;
    top:0;
    width: 100%;
    height: 100%;
    display: block;
    background-color: rgba(51,51,51,0.5);
  }
  .invisible {display: none;}

  [class*="-message"] {font-weight: 500;}

  .error-message { color: #d33c40;}

  .success-message { color: #32a95d;}

  label { display: inline-block;}

  input, textarea { display: inline-block; clear:both;}

/*Media query*/
  @media screen and (min-width: 992px) {
    form{ width: 50%;}
  }
</style>