<template>
<div :id="category">

  <section>
    <h2 class="brandHeader">{{ title }}</h2>

    <article id="stats-1">
      <p class="intro">Nice. Dan heb je dus dezelfde voorkeur als..</p>
      <pie-chart title="Favoriete merk onder ID20-studenten" />
      <div>
        <h3>{{ piechartpercentage }}% van de studenten in Information Design!</h3>
        <p>Zou je nog meer gemeen hebben met deze studenten dan alleen {{ introbrand }} lievelingsmerk?</p>
        <a class="button1" @click="[showStats2 = !showStats2, reverseButton1()]" href="#" v-scroll-to="'#stats-2'">{{ button1 }}</a>
      </div>
    </article>
  </section>


  <section id="stats-2" v-if="showStats2">
    <transition name="fade">
      <article class="stats-2">
        <div class="text">
          <h3>Waar en wie zijn we?</h3>
          <p>Zou je als {{ brand }}-liefhebber ook meer voorkeur kunnen hebben voor een bepaalde CMD-richting? Hebben jullie misschien een gedeelde passie in iets?</p>
          <p>Het ziet er naar uit dat je in de visual-track zowel Adidas- als Nikeliefhebbers tegen zal komen, terwijl in de techtrack de voorkeur vooral uit zal gaan naar Adidas.</p>
          <p>Gebaseerd op je keuze, ga ik er vanuit dat je {{ voorkeur }} bent.. </p>
          <a class="button2" v-on:click="[showStats3 = !showStats3, reverseButton2()]" href="#" v-scroll-to="'#stats-3'">{{ button2 }}</a>
        </div>
        <div class="radar-charts">
          <radar-chart-2019 title="CMD-voorkeuren 2019" class="radar-chart-1" />
          <radar-chart-2020 title="CMD-voorkeuren 2020" class="radar-chart-2" />
        </div>
      </article>
    </transition>
  </section>


  <section id="stats-3" v-if="showStats3">
    <transition name="fade">
      <article class="stats-3">
        <div class="scatter-chart">
          <scatter-chart title="Verhouding kleding/kastruimte ID20-studenten" class="scatter" />
        </div>
        <div class="text">
          <h3>Verhouding kleding/space</h3>
          <p>Sommigen van ons hebben aangegeven best wel veel kleding te bezitten. Kunnen we die kleding wel kwijt? Of baseren we de inhoud van onze kledingkast op de ruimte die we hebben?</p>
          <p>Misschien maakt het wel uit of iemand gek is van de typerende kledingstukken van een bepaald merk; ligt bijvoorbeeld jouw kledingkast vol met {{ branditem }}?</p>
          <p>Het ziet er in ieder geval naar uit dat de datapunten vrij geclustered zitten, wat een correlatie aantoont tussen opbergruimte en kledingbezit. Meer ruimte voor troep = meer troep, maar wel alleen binnen ID natuurlijk!</p>
          <a class="button3" v-on:click="[showStats4 = !showStats4, reverseButton3()]" href="#" v-scroll-to="'#stats-4'">{{ button3 }}</a>
        </div>
      </article>
    </transition>
  </section>


  <section id="stats-4" v-if="showStats4">
    <transition name="fade">
      <article class="stats-4">
        <div class="text">
          <h3>Maakt je merk gelukkig?</h3>
          <p>Hierbij is gekeken naar het cijfer dat de gemiddelde merk-liefhebber antwoordde op de vraag "Hoe tevreden ben je met je leven?".</p>
          <p>Hiernaast zie je de gemiddeld gegeven cijfers, berekend over 't aantal responses binnen het desbetreffende merk.</p>
          <p>Ik denk dat je {{ happinessquote }} </p>
          <a class="button4" v-on:click="[showStats5 = !showStats5, reverseButton4()]" href="#" v-scroll-to="'#stats-5'">{{ button4 }}</a>
        </div>
        <div class="bar-chart">
          <bar-chart title="Happiness-rating per favoriet merk" class="bar" />
        </div>
      </article>
    </transition>
  </section>


  <section id="stats-5" v-if="showStats5">
    <transition name="fade">
      <article class="stats-5">
        <div class="text">
          <h3>Wat deden we vorig jaar dan?</h3>
          <p>Is dit jaar eigenlijk representatief voor de gemiddelde verdeling van de merkgebondenheid?</p>
          <p>Hmm.. zo te zien zijn we dit jaar flink minder van de Adidasjes, en neigen we hoe dan ook wat meer naar andere merken.</p>
          <p>Om dan te zeggen dat deze 'conclusies' leidend zijn, daar is de sample überhaupt wat klein voor geweest. Bovenstaande insights laten vooral zien hoe alles in relatie tot déze groep in dít jaar staat, en dat is wat nu relevant is.</p>
        </div>
        <div class="radar-chart-amount">
          <radar-chart-amount title="Favoriete merken per jaar" class="radar-amount"/>
        </div>
      </article>
    </transition>
  </section>

</div>
</template>

<script>
/*eslint 'no-console':0*/
import BarChart from './charts/bar-chart.js'
import PieChart from './charts/pie-chart.js'
import RadarChart2019 from './charts/radar-chart-2019.js'
import RadarChart2020 from './charts/radar-chart-2020.js'
import RadarChartAmount from './charts/radar-chart-amount.js'
import ScatterChart from './charts/scatterplot-chart.js'

export default {
  name: "category",
  components: {
    BarChart,
    PieChart,
    RadarChart2019,
    RadarChart2020,
    RadarChartAmount,
    ScatterChart
  },
  data() {
    return {
      showStats2: false,
      showStats3: false,
      showStats4: false,
      showStats5: false,
      button1: "Let's find out!",
      button2: "Ik wil meer weten",
      button3: "meer kekke insights",
      button4: "gooi meer stats!"
    };
  },
  methods: {
    reverseButton1() {
      let buttonDing = document.querySelector(".button1");
      if (this.button1 === "Let's find out!") {
        this.button1 = this.button1.replace(/out/i, 'less');
        buttonDing.classList.add("selectedButton");
        return
      } else if (this.button1 === "Let's find less!") {
        this.button1 = this.button1.replace(/less/i, 'out');
        buttonDing.classList.remove("selectedButton");
        return
      }
    },
    reverseButton2() {
      let buttonDing2 = document.querySelector(".button2");
      if (this.button2 === "Ik wil meer weten") {
        this.button2 = this.button2.replace(/meer/i, 'minder');
        buttonDing2.classList.add("selectedButton");
        return
      } else if (this.button2 === "Ik wil minder weten") {
        this.button2 = this.button2.replace(/minder/i, 'meer');
        buttonDing2.classList.remove("selectedButton");
        return
      }
    },
    reverseButton3() {
      let buttonDing3 = document.querySelector(".button3");
      if (this.button3 === "meer kekke insights") {
        this.button3 = this.button3.replace(/meer/i, 'minder');
        buttonDing3.classList.add("selectedButton");
        return
      } else if (this.button3 === "minder kekke insights") {
        this.button3 = this.button3.replace(/minder/i, 'meer');
        buttonDing3.classList.remove("selectedButton");
        return
      }
    },
    reverseButton4() {
      let buttonDing4 = document.querySelector(".button4");
      if (this.button4 === "gooi meer stats!") {
        this.button4 = this.button4.replace(/meer/i, 'minder');
        buttonDing4.classList.add("selectedButton");
        return
      } else if (this.button4 === "gooi minder stats!") {
        this.button4 = this.button4.replace(/minder/i, 'meer');
        buttonDing4.classList.remove("selectedButton");
        return
      }
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
    },
    brand: {
      type: String,
      required: true
    },
    voorkeur: {
      type: String,
      required: true
    },
    branditem: {
      type: String,
      required: true
    },
    piechartpercentage: {
      type: String,
      required: true
    },
    introbrand: {
      type: String,
      required: true
    },
    happinessquote: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss"></style>
