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
          borderColor: '#f87979',
          backgroundColor: '#f87979',
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
          borderColor: '#7acbf9',
          backgroundColor: '#7acbf9',
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
          borderColor: 'green',
          backgroundColor: 'green',
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
            }]},
            {
              label: 'Anders',
              fill: false,
              borderColor: 'yellow',
              backgroundColor: 'yellow',
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
      }
    })
  }

}
