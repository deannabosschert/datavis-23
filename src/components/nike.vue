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
    <a class="nikeButton1" @click="showStats2 = !showStats2" href="#" v-scroll-to="'#stats-2'">Let's find out!</a>
    </div>
  </article>
  <transition name="fade">
  <article id="stats-2" v-if="showStats2">
    <h3>1 nog meer stats!</h3>
  <div>
    <line-chart
      title="drieDingenEnzo"
    />
  </div>
  <a class="nikeButton1" v-on:click="showStats3 = !showStats3" href="#" v-scroll-to="'#stats-3'">nog meer dingen</a>
</article>
</transition>
<transition name="fade">
<article v-if="showStats3">
  <h3 id="stats-3">2 nog meer stats!</h3>
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
      showStats2: false,
      showStats3: false
    };
  },
  methods: {

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
