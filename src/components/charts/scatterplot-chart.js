// source: https://github.com/apertureless/vue-chartjs/blob/develop/src/examples/ScatterExample.js
import {
  Scatter
} from "vue-chartjs";
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
    this.renderChart({
      datasets: [{
          label: 'Nike',
          fill: false,
          borderColor: 'rgba(226,20,45,1)',
          backgroundColor: 'rgba(226,20,45,0.7)',
          data: [{
            x: -2,
            y: 4
          }, {
            x: -1,
            y: 1
          }, {
            x: 0,
            y: 0
          }, {
            x: 1,
            y: 1
          }, {
            x: 2,
            y: 4
          }]
        },
        {
          label: 'Adidas',
          fill: false,
          borderColor: 'rgba(0,81,186,1)',
          backgroundColor: 'rgba(0,81,186,0.7)',
          data: [{
            x: -2,
            y: -4
          }, {
            x: -1,
            y: -1
          }, {
            x: 0,
            y: 1
          }, {
            x: 1,
            y: -1
          }, {
            x: 2,
            y: -4
          }]
        },
        {
          label: 'Geen',
          fill: false,
          borderColor: 'rgba(232,208,30,1)',
          backgroundColor: 'rgba(232,208,30,0.6)',
          data: [{
            x: -8,
            y: -1
          }, {
            x: 2,
            y: 3
          }, {
            x: 0,
            y: 8
          }, {
            x: 5,
            y: -2
          }, {
            x: 7,
            y: -3
          }]
        },
        {
          label: 'Anders',
          fill: false,
          borderColor: 'rgba(119,136,153,1)',
          backgroundColor: 'rgba(119,136,153,0.6)',
          data: [{
            x: -4,
            y: -2
          }, {
            x: -6,
            y: -6
          }, {
            x: 3,
            y: 7
          }, {
            x: 5,
            y: -3
          }, {
            x: 1,
            y: -2
          }]
        }
      ]
    }, {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        text: this.title
      },
      scales: {
        yAxes: [{
          id: 'left-y-axis',
          type: 'linear',
          position: 'left',
          scaleLabel: {
            display: true,
            labelString: 'Grootte slaapkamer',
            fontSize: 15,
          },
          ticks: {
            suggestedMin: -5,
            suggestedMax: 10,
            stepSize: 2,
            // Include m²-sign in the ticks
            callback: function(value) {
              return value + 'm²'
            }
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Hoeveelheid kledingstukken in bezit',
            fontSize: 15,
          },
          ticks: {
            suggestedMin: -5,
            suggestedMax: 10,
            stepSize: 2
          }
        }]
      }
    })
  }

}
