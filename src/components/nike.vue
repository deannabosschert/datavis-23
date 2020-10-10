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
    <button class="nikeButton1" href="#stats-2" @click="show1 = !show1">Let's find out!</button>
    </div>
  </article>
  <transition name="fade">
  <article v-if="show1" id="stats-2">
    <h3>1 nog meer stats!</h3>
  <div>
    <line-chart
      title="drieDingenEnzo"
    />
  </div>
  <button class="nikeButton1" href="#stats-3" @click="show2 = !show2">nog meer dingen</button>
</article>
</transition>
<transition name="fade">
<article v-if="show2" id="stats-3">
  <h3>2 nog meer stats!</h3>
<div>
  <bar-chart
    title="dingenEnzo"
  />
</div>
</article>
</transition>
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
      show1: false,
      show2: false
    };
  },
  methods: {
   showSecond: function () {
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
