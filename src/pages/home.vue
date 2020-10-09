<template>
  <main id="home">
    <h1>Dataviz</h1>
    <SwitchBetween
      @nike-click="choice = 'nike'"
      @adidas-click="choice = 'adidas'"
      @idgaf-click="choice = 'idgaf'"
    />

    <div v-if="choice === 'nike'">
      <Nike title="nike" category="nike" />
    </div>

    <div v-if="choice === 'adidas'">
      <Adidas title="adidas" category="adidas" />
    </div>

    <div v-if="choice === 'idgaf'">
      <Idgaf title="idgaf" category="idgaf" />
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

<style>
body {
  background-color: #fbf3e4;
}

h1 {
  font-size: 3rem;
}

h2 {
  font-size: 2rem;
  font-variant: small-caps;
  display: flex;
  justify-content: space-around;
}

h3 {
  background-color: #a31a1a;
  color: #ffffff;
  font-size: 1em;
  font-weight: 450;
  padding: 1rem;
  margin-left: -1rem;
  margin-right: -1rem;
  letter-spacing: 0.1px;
}
p {
  color: #ffffff;
}
section {
  background-color: #b63232;
  max-width: 20vw;
  border-radius: 5px;
  box-shadow: 10px 10px 3px -4px rgba(0, 0, 0, 0.21);
  padding: 0rem 1rem 1rem 1rem;
  margin: 0.5rem;
}

.content {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.images {
  max-width: inherit;
  max-height: inherit;
  object-fit: cover;
  margin-top: -1rem;
}

#home {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  align-content: center;
  margin-left: 3rem;
  margin-right: 3rem;
}
</style>
