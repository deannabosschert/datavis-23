<template>
<section :id="category">
  <h2 class="nikeHeader">{{ title }}</h2>
  <div>
  <pie-chart
    title="tweeDingenEnzo"
  />
  </div>
  <article id="stats-1">
    <p class="nikeIntro">Nice. Dan heb je dus dezelfde voorkeur als..</p>
    <div>
    <h3>13% van de studenten in Information Design!</h3>
    <p>Zou je nog meer gemeen hebben met deze studenten dan alleen jullie lievelingsmerk?</p>
    <button class="nikeButton1" href="#nikeStats2">Let's find out!</button>
    </div>
  </article>
  <article>
  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">Reverse Message</button>
  <div>
    <line-chart
      title="drieDingenEnzo"
    />
  </div>
</article>
  <article>
  <div>
    <bar-chart
      title="dingenEnzo"
    />
  </div>
</article>
</section>
</template>

<script>
/*eslint 'no-console':0*/
import BarChart from './charts/bar-chart.js'
import PieChart from './charts/pie-chart.js'
import LineChart from './charts/line-chart.js'

export default {
  name: "category",
  components: {
    BarChart,
    PieChart,
    LineChart
  },
  data() {
    return {
      message: 'Hello Vue.js!'
    };
  },
  methods: {
   reverseMessage: function () {
     this.message = this.message.split('').reverse().join('')
   }
 },
  props: {
    title: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss"></style>
