import {
  Scatter
} from 'vue-chartjs'

export default {
  extends: Scatter,
  props: {
    data: ['data', 'options'],
    title: {
      type: String,
      required: true
    }
  },
  components: {
    Scatter
  },
  mounted() {
    this.renderScatterChart()
  },
  methods: {
    renderScatterChart() {
      this.renderChart({
        xLabels: ["January", "February", "March", "April", "May", "June", "July"],
         yLabels: ['Request Added', 'Request Viewed', 'Request Accepted', 'Request Solved', 'Solving Confirmed'],
         datasets: [{
          data: [{
            x: -10,
            y: 0
          }, {
            x: 0,
            y: 10
          }, {
            x: 10,
            y: 5
          }, {
            x: 5,
            y: 8
          }],
          label: this.title
        },
        {
          data: [{
            x: -5,
            y: 2
          }, {
            x: 4,
            y: 5
          }, {
            x: 3,
            y: 3
          }, {
            x: 2,
            y: 9
          }],
          label: 'tweeeeee'
        }]
      }, {
        responsive: true,
        title: {
          display: true,
          text: 'Favoriete merk onder ID20-studenten'
        }      })
    }
  }
}
