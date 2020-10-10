<template>
<section :id="category">
  <h2 class="nikeHeader">{{ title }}</h2>
  <div>
    <bar-chart
      title="dingenEnzo"
    />
  </div>
  <article id="stats-1" active>
    <h2 class="nikeHeader">Nike</h2>
    <p class="nikeIntro">Nice. Dan heb je dus dezelfde voorkeur als..</p>
    <div class="container">
      <canvas id="myPieChart4" width="300px" height="300px"></canvas>
    </div>
    <h3>13% van de studenten in Information Design!</h3>
    <p>Zou je nog meer gemeen hebben met deze studenten dan alleen jullie lievelingsmerk?</p>
    <button class="nikeButton1" href="#nikeStats2">Let's find out!</button>
  </article>
</section>
</template>

<script>
/*eslint 'no-console':0*/
import BarChart from './charts/bar-chart.js'

export default {
  name: "category",
  components: {
    BarChart,
  },
  data() {
    return {
      results: []
    };
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
