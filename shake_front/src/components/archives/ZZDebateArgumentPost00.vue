<!--<template >
  <div class="argument">
    <h2>Debate id: {{this.argument.content}}</h2>
-->
      <!--<p>{{argument.content}}</p>
      <p>{{argument.ok_vote}} <img class="icon" src="../img/ok.png"><img class="icon" src="../img/ko.png"> {{argument.ko_vote}}</p>-->
  <!--</div>
</template>

<script>
export default {
  name: 'DebateArgumentPost',
  props: ['argument'],
  data () {
    return {
		msg: '' 
	}
  }
}
</script>-->

<!--arguments: [
      { content: 'argumento 1', ok_vote: 9, ko_vote: 4, debate_id: 2, debate_vote: 1 },
      { content: 'argumento 2', ok_vote: 2, ko_vote: 3, debate_id: 2, debate_vote: 0 },
      { content: 'argumento 3', ok_vote: 9, ko_vote: 1, debate_id: 2, debate_vote: 1 }
    ]
-->
<template>
  <div class="hello">
    <p> {{ this.msg }} </p>
  </div>
</template>

<script>
export default {
  name: "ExampleComponent",
  data() {
    return {
      msg: "¡¡Esto es pan comido!!"
    };
  }
};
</script>