<template>
<main id="home">
  <div class="all">
    <h2>Waar gaat je voorkeur naar uit?</h2>
    <SwitchBetween class="choices" @nike-click="choice = 'nike'" @adidas-click="choice = 'adidas'" @geen-click="choice = 'geen'" />

    <div v-if="choice === 'nike'">
      <BrandChoice title="Nike" category="nike" piechartpercentage="13" introbrand="Nike als" brand="Nike" voorkeur="een visje" branditem="de geliefde Nike-joggers"/>
    </div>

    <div v-if="choice === 'adidas'">
      <BrandChoice title="Adidas" category="adidas" piechartpercentage="6" introbrand="Adidas als" brand="Adidas" voorkeur="een techkech" branditem="de welbekende Adidas-jacks"/>
    </div>

    <div v-if="choice === 'geen'">
      <BrandChoice title="Geen merk" category="geen" piechartpercentage="6" introbrand="het ontbreken van een" brand="Geen" voorkeur="niet te plaatsen" branditem="uhh.. unbranded jacks/joggers?"/>
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
      choice: "nike"
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
