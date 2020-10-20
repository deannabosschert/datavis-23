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
        labels: ['Dataviz/ID', 'Frontend', 'Design Research', 'UX', 'Interaction Design', 'Visual Design'],
        datasets: [{
          label: 'Nike',
          data: [2, 5, 0, 3, 4, 6],
          backgroundColor: [
            'rgba(226,20,45,0.25)'
          ],
          borderColor: [
            'rgba(226,20,45,1)'
          ],
          borderWidth: 0.75
        }, {
          label: 'Adidas',
          data: [0, 1, 1, 1, 1, 3],
          backgroundColor: [
            'rgba(0,81,186,0.25)'
          ],
          borderColor: [
            'rgba(0,81,186,1)'
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
            // display: false,
            suggestedMin: 0,
            suggestedMax: 8,
            stepSize: 1
          }
        }
      })
    }
  }
}
