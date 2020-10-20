import {
  Radar
} from 'vue-chartjs'

export default {
  extends: Radar,
  props: {
    data: ['data', 'options'],
    title: {
      type: String,
      required: true
    }
  },
  components: {
    Radar
  },
  mounted() {
    this.renderRadarChart()
  },
  methods: {
    /*eslint 'no-console':0*/
    renderRadarChart() {
      this.renderChart({
        labels: ['Nike', 'Adidas', 'Geen', 'Anders'],
        datasets: [{
          label: '2020',
          data: [11, 5, 5, 62],
          backgroundColor: [
            'rgba(0,81,186,0.25)'
          ],
          borderColor: [
            'rgba(0,81,186,1)'
          ],
          borderWidth: 0.75
        }, {
          label: '2019',
          data: [10, 9, 3, 55],
          backgroundColor: [
            'rgba(226,20,45,0.25)'
          ],
          borderColor: [
            'rgba(226,20,45,1)'
          ],
          borderWidth: 0.75
        }]

      }, {
        responsive: true,
        title: {
          display: true,
          text: this.title
        },
        maintainAspectRatio: false,
        scale: {
          angleLines: {
            display: false
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 10,
            stepSize: 10
          }
        }
      })
    }
  }
}
