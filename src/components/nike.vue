<template>
<section :id="category">
  <h2 class="nikeHeader">{{ title }}</h2>
  <div>
    <pie-chart
      title="tweeDingenEnzo"
    />
  </div>
  <div>
    <line-chart
      title="drieDingenEnzo"
    />
  </div>
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
