<template>
  <form class="switchBetween" @change="onSwitch">
    <input
      type="radio"
      id="nike"
      class="switchBetween_radio"
      name="switchBetween-input"
      value="nike"
      checked
    />
    <label for="nike" class="switchBetween_label">
     Nike
    </label>
    <input
      type="radio"
      id="adidas"
      class="switchBetween_radio"
      name="switchBetween-input"
      value="adidas"
    />
    <label for="adidas" class="switchBetween_label">
      Adidas
    </label>

    <input
      type="radio"
      id="idgaf"
      class="switchBetween_radio"
      name="switchBetween-input"
      value="idgaf"
    />
    <label for="idgaf" class="switchBetween_label">
      Idgaf
    </label>
  </form>
</template>

<script>
export default {
  methods: {
    onSwitch(event) {
      if (event.target.value === "nike") {
        return this.$emit("nike-click")
      }
      else if (event.target.value === "adidas") {
        return this.$emit("adidas-click")
      }
      else if (event.target.value === "idgaf") {
        return this.$emit("idgaf-click")
      }
    }
  }
}
</script>

<style>
.switchBetween {
  display: flex;
  padding: 2px;
  border-radius: 10px;
  /* max-width: 50vw; */
  justify-content: center;
  margin: 2rem;
  /* margin-left: 25vw;
  margin-right: 25vw; */
  /* background-color: blue; */
}

.switchBetween_label {
  padding: 1.2rem;
  border-radius: 5px;
  background: white;
  text-align: center;
  align-self: center;
  /* max-width: 12.5vw; */
  font-weight: 600;
  margin-left: 2rem;
}

.switchBetween_radio:checked + .switchBetween_label {
  background: #174e49;
  color: white;
}

input[type="radio"] {
  visibility: hidden;
}
</style>
