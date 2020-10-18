// source: https://github.com/apertureless/vue-chartjs/blob/develop/src/examples/ScatterExample.js
import {
  Scatter
} from "vue-chartjs"

/*eslint 'no-console':0*/

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
    const adidasData = [{
        "ID/persoon": 1,
        "lievelingsmerk": "Adidas",
        "slaapkamergrootte": 11,
        "kledingstukken": 78
      },
      {
        "ID/persoon": 2,
        "lievelingsmerk": "Adidas",
        "slaapkamergrootte": 16,
        "kledingstukken": 20
      },
      {
        "ID/persoon": 3,
        "lievelingsmerk": "Adidas",
        "slaapkamergrootte": 22,
        "kledingstukken": 80
      },
      {
        "ID/persoon": 4,
        "lievelingsmerk": "Adidas",
        "slaapkamergrootte": 24,
        "kledingstukken": 50
      },
      {
        "ID/persoon": 5,
        "lievelingsmerk": "Adidas",
        "slaapkamergrootte": 28,
        "kledingstukken": 25
      }
    ]

    const andersData = [{
        "ID/persoon": 6,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 7,
        "kledingstukken": 40
      },
      {
        "ID/persoon": 7,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 7,
        "kledingstukken": 40
      },
      {
        "ID/persoon": 8,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 8,
        "kledingstukken": 25
      },
      {
        "ID/persoon": 9,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 9,
        "kledingstukken": 20
      },
      {
        "ID/persoon": 10,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 10,
        "kledingstukken": 60
      },
      {
        "ID/persoon": 12,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 10,
        "kledingstukken": 80
      },
      {
        "ID/persoon": 13,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 10,
        "kledingstukken": 130
      },
      {
        "ID/persoon": 14,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 10,
        "kledingstukken": 40
      },
      {
        "ID/persoon": 15,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 11.5,
        "kledingstukken": 80
      },
      {
        "ID/persoon": 16,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 12,
        "kledingstukken": 40
      },
      {
        "ID/persoon": 17,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 12,
        "kledingstukken": 70
      },
      {
        "ID/persoon": 18,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 12,
        "kledingstukken": 100
      },
      {
        "ID/persoon": 19,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 12,
        "kledingstukken": 20
      },
      {
        "ID/persoon": 20,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 12,
        "kledingstukken": 25
      },
      {
        "ID/persoon": 21,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 12,
        "kledingstukken": 60
      },
      {
        "ID/persoon": 22,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 13,
        "kledingstukken": 125
      },
      {
        "ID/persoon": 23,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 14,
        "kledingstukken": 45
      },
      {
        "ID/persoon": 24,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 14,
        "kledingstukken": 200
      },
      {
        "ID/persoon": 25,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 14,
        "kledingstukken": 120
      },
      {
        "ID/persoon": 26,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 15,
        "kledingstukken": 120
      },
      {
        "ID/persoon": 27,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 15,
        "kledingstukken": 40
      },
      {
        "ID/persoon": 28,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 15,
        "kledingstukken": 45
      },
      {
        "ID/persoon": 29,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 15,
        "kledingstukken": 200
      },
      {
        "ID/persoon": 30,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 15,
        "kledingstukken": 150
      },
      {
        "ID/persoon": 31,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 15,
        "kledingstukken": 75
      },
      {
        "ID/persoon": 32,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 15.6,
        "kledingstukken": 70
      },
      {
        "ID/persoon": 33,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 16,
        "kledingstukken": 30
      },
      {
        "ID/persoon": 34,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 16,
        "kledingstukken": 40
      },
      {
        "ID/persoon": 35,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 16,
        "kledingstukken": 100
      },
      {
        "ID/persoon": 36,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 17,
        "kledingstukken": 100
      },
      {
        "ID/persoon": 37,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 17.5,
        "kledingstukken": 275
      },
      {
        "ID/persoon": 38,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 17.6,
        "kledingstukken": 25
      },
      {
        "ID/persoon": 39,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 18,
        "kledingstukken": 20
      },
      {
        "ID/persoon": 40,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 18,
        "kledingstukken": 200
      },
      {
        "ID/persoon": 41,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 18,
        "kledingstukken": 80
      },
      {
        "ID/persoon": 42,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 20,
        "kledingstukken": 150
      },
      {
        "ID/persoon": 43,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 20,
        "kledingstukken": 10
      },
      {
        "ID/persoon": 44,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 20,
        "kledingstukken": 30
      },
      {
        "ID/persoon": 45,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 20,
        "kledingstukken": 60
      },
      {
        "ID/persoon": 46,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 20,
        "kledingstukken": 60
      },
      {
        "ID/persoon": 47,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 20,
        "kledingstukken": 200
      },
      {
        "ID/persoon": 48,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 20,
        "kledingstukken": 100
      },
      {
        "ID/persoon": 49,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 20,
        "kledingstukken": 80
      },
      {
        "ID/persoon": 50,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 20,
        "kledingstukken": 90
      },
      {
        "ID/persoon": 51,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 22,
        "kledingstukken": 200
      },
      {
        "ID/persoon": 52,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 22,
        "kledingstukken": 100
      },
      {
        "ID/persoon": 53,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 22.5,
        "kledingstukken": 70
      },
      {
        "ID/persoon": 54,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 22.5,
        "kledingstukken": 89
      },
      {
        "ID/persoon": 55,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 24,
        "kledingstukken": 100
      },
      {
        "ID/persoon": 56,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 24,
        "kledingstukken": 40
      },
      {
        "ID/persoon": 57,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 24,
        "kledingstukken": 100
      },
      {
        "ID/persoon": 59,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 25,
        "kledingstukken": 140
      },
      {
        "ID/persoon": 60,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 25,
        "kledingstukken": 150
      },
      {
        "ID/persoon": 61,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 25,
        "kledingstukken": 60
      },
      {
        "ID/persoon": 62,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 26,
        "kledingstukken": 30
      },
      {
        "ID/persoon": 63,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 32,
        "kledingstukken": 300
      },
      {
        "ID/persoon": 64,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 35,
        "kledingstukken": 70
      },
      {
        "ID/persoon": 65,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 36,
        "kledingstukken": 60
      },
      {
        "ID/persoon": 66,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 50,
        "kledingstukken": 200
      },
      {
        "ID/persoon": 68,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 52,
        "kledingstukken": 60
      },
      {
        "ID/persoon": 69,
        "lievelingsmerk": "Anders",
        "slaapkamergrootte": 56,
        "kledingstukken": 300
      }
    ]

    const geenData = [{
        "ID/persoon": 70,
        "lievelingsmerk": "Geen",
        "slaapkamergrootte": 7.4,
        "kledingstukken": 60
      },
      {
        "ID/persoon": 71,
        "lievelingsmerk": "Geen",
        "slaapkamergrootte": 10,
        "kledingstukken": 50
      },
      {
        "ID/persoon": 72,
        "lievelingsmerk": "Geen",
        "slaapkamergrootte": 19,
        "kledingstukken": 100
      },
      {
        "ID/persoon": 73,
        "lievelingsmerk": "Geen",
        "slaapkamergrootte": 20,
        "kledingstukken": 90
      },
      {
        "ID/persoon": 74,
        "lievelingsmerk": "Geen",
        "slaapkamergrootte": 40,
        "kledingstukken": 100
      }
    ]
    const nikeData = [{
        "ID/persoon": 75,
        "lievelingsmerk": "Nike",
        "slaapkamergrootte": 8,
        "kledingstukken": 100
      },
      {
        "ID/persoon": 76,
        "lievelingsmerk": "Nike",
        "slaapkamergrootte": 19,
        "kledingstukken": 200
      },
      {
        "ID/persoon": 77,
        "lievelingsmerk": "Nike",
        "slaapkamergrootte": 20,
        "kledingstukken": 40
      },
      {
        "ID/persoon": 78,
        "lievelingsmerk": "Nike",
        "slaapkamergrootte": 20,
        "kledingstukken": 50
      },
      {
        "ID/persoon": 79,
        "lievelingsmerk": "Nike",
        "slaapkamergrootte": 20,
        "kledingstukken": 50
      },
      {
        "ID/persoon": 80,
        "lievelingsmerk": "Nike",
        "slaapkamergrootte": 23,
        "kledingstukken": 40
      },
      {
        "ID/persoon": 81,
        "lievelingsmerk": "Nike",
        "slaapkamergrootte": 24,
        "kledingstukken": 20
      },
      {
        "ID/persoon": 82,
        "lievelingsmerk": "Nike",
        "slaapkamergrootte": 32,
        "kledingstukken": 80
      },
      {
        "ID/persoon": 83,
        "lievelingsmerk": "Nike",
        "slaapkamergrootte": 48,
        "kledingstukken": 100
      },
      {
        "ID/persoon": 84,
        "lievelingsmerk": "Nike",
        "slaapkamergrootte": 21,
        "kledingstukken": 30
      },
      {
        "ID/persoon": 85,
        "lievelingsmerk": "Nike",
        "slaapkamergrootte": 25,
        "kledingstukken": 60
      }
    ]

    this.renderChart({
      datasets: [{
          label: 'Nike',
          fill: false,
          borderColor: 'rgba(226,20,45,1)',
          backgroundColor: 'rgba(226,20,45,0.7)',
          labels: ["Nike-liefhebber 1", "Nike-liefhebber 2", "Nike-liefhebber 3", "Nike-liefhebber 4", "Nike-liefhebber 5"],
          data: [{
            x: nikeData[0].slaapkamergrootte,
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
          labels: ["Adidas-liefhebber 1", "Adidas-liefhebber 2", "Adidas-liefhebber 3", "Adidas-liefhebber 4", "Adidas-liefhebber 5"],
          // for brand=adidas
          data: [{
            x: adidasData[0].slaapkamergrootte,
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
          labels: ["Iemand zonder favoriet merk 1", "Iemand zonder favoriet merk 2", "Iemand zonder favoriet merk 3", "Iemand zonder favoriet merk 4", "Iemand zonder favoriet merk 5"],
          data: [{
            x: geenData[0].slaapkamergrootte,
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
          labels: ["Liefhebber van ander merk 1", "Liefhebber van ander merk 2", "Liefhebber van ander merk 3", "Liefhebber van ander merk 4", "Liefhebber van ander merk 5"],
          data: [{
            x: andersData[0].slaapkamergrootte,
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
            suggestedMin: 0,
            suggestedMax: 15,
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
            suggestedMin: 10,
            suggestedMax: 300,
            stepSize: 25
          }
        }]
      },
      tooltips: {
      callbacks: {
          label: function(tooltipItem, data) {
              var label = data.datasets[tooltipItem.datasetIndex].labels[tooltipItem.index] || ''
              if (label) {
                  label += ': '
              }
              let tooltipLabel = label + tooltipItem.xLabel + 'm² kamerruimte' + ', voor ' + tooltipItem.yLabel + ' kledingstukken'
              return tooltipLabel
          }
      }
  }

    })
  }

}
