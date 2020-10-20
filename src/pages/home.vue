<template>
<main id="home">
  <div class="all">
    <h2>Waar gaat je voorkeur naar uit?</h2>
    <SwitchBetween class="choices" @nike-click="choice = 'nike'" @adidas-click="choice = 'adidas'" @geen-click="choice = 'geen'" />

    <div v-if="choice === 'nike'">
      <BrandChoice title="Nike" category="nike" piechartpercentage="13" introbrand="Nike als" brand="Nike" voorkeur="een visje" branditem="de geliefde Nike-joggers" happinessquote="best wel prima zit zo dan! Only happy thoughts <3"/>
    </div>

    <div v-if="choice === 'adidas'">
      <BrandChoice title="Adidas" category="adidas" piechartpercentage="6" introbrand="Adidas als" brand="Adidas" voorkeur="een techkech" branditem="de welbekende Adidas-jacks" happinessquote="misschien voortaan beter voor een ander merk kunt gaan.. anything other than Adidas in ieder geval 🧐"/>
    </div>

    <div v-if="choice === 'geen'">
      <BrandChoice title="Geen merk" category="geen" piechartpercentage="6" introbrand="het ontbreken van een" brand="Geen" voorkeur="niet te plaatsen" branditem="uhh.. unbranded jacks/joggers?" happinessquote="best wel prima zit zo dan! Misschien één Nike-petje in huis halen om nét wat extra zonnestralen naar binnen te halen? 🌞"/>
    </div>
  </div>
</main>
</template>

<script>
import SwitchBetween from "@/components/switchBetween.vue";
import BrandChoice from "@/components/brandChoice.vue";

export default {
  name: "home",
  data() {
    return {
      choice: ""
    };
  },
  methods: {},
  components: {
    SwitchBetween,
    BrandChoice
  }
};
</script>

<style lang="scss">
</style>
