<template>
<main id="home">
  <div class="all">
    <h2>Waar gaat je voorkeur naar uit?</h2>
    <SwitchBetween class="choices" @nike-click="choice = 'nike'" @adidas-click="choice = 'adidas'" @idgaf-click="choice = 'idgaf'" />

    <div v-if="choice === 'nike'">
      <Nike title="Nike" category="nike" brand="Nike" voorkeur="een visje" branditem="de geliefde Nike-joggers"/>
    </div>

    <div v-if="choice === 'adidas'">
      <Adidas title="Adidas" category="adidas" brand="Adidas" voorkeur="een techkech" branditem="de welbekende Adidas-jacks"/>
    </div>

    <div v-if="choice === 'idgaf'">
      <Idgaf title="Idgaf" category="idgaf" brand="Geen" voorkeur="geen van beide" branditem="unbranded uhh.. jacks/joggers?"/>
    </div>
  </div>
</main>
</template>

<script>
import SwitchBetween from "@/components/switchBetween.vue";
import Nike from "@/components/nike.vue";
import Adidas from "@/components/adidas.vue";
import Idgaf from "@/components/idgaf.vue";

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
    Nike,
    Adidas,
    Idgaf
  }
};
</script>

<style lang="scss">
</style>
