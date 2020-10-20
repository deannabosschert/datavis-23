<template>
  <form class="switchBetween" @change="onSwitch">
    <input
      type="radio"
      id="nike"
      class="switchBetween_radio"
      name="switchBetween-input"
      value="nike"
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
      id="geen"
      class="switchBetween_radio"
      name="switchBetween-input"
      value="geen"
    />
    <label for="geen" class="switchBetween_label">
      Geen
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
      else if (event.target.value === "geen") {
        return this.$emit("geen-click")
      }
    }
  }
}
</script>

<style lang="scss">
.switchBetween {
  display: flex;
  padding: 2px;
  border-radius: 10px;
  justify-content: center;
}

.switchBetween_label {
  padding: 1.2rem;
  border-radius: 5px;
  background: white;
  box-shadow: 3px 3px 2px 2px $something-purple-dark;
  text-align: center;
  align-self: center;
  font-weight: 600;
}

.switchBetween_radio:checked + .switchBetween_label {
  background: black;
  color: white;
  box-shadow: 3px 3px 2px 2px black;

}

input[type="radio"] {
  visibility: hidden;
}
</style>
