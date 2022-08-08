<template>
  <div>
    <h1>Vuex Counter</h1>
    <div class="number">
      <h2>
        {{ counter }}
      </h2>
    </div>

    <div class="textField">
      <button @click="minusCount(parseInt(value))">-</button>
      <input type="number" placeholder="Enter number" v-model="value" />
      <button @click="addToCount(parseInt(value))">+</button>
    </div>
    <button class="btn" @click="addRandomNumber">
        Add By Random Number
    </button>
  </div>
</template>

<script>
import { mapState, mapMutations , mapActions} from "vuex";
export default {
  name: "Counter",
  data() {
    return {
      value: 1,
    };
  },
  computed: {
    ...mapState(["counter"]),
  },
  methods: {
    ...mapMutations(["addToCount", "minusCount"]),
    ...mapActions(['addRandomNumber'])
  },
};
</script>


<style scoped>
.number > h2 {
  font-size: 60px;
}
.textField button {
  border-radius: 100%;
  width: 2rem;
  height: 2rem;
  border: none;
  cursor: pointer;
  font-weight: 700;
}
input {
  margin: 0 0.5rem;
  padding: 0.4rem;
  text-align: center;
}
.btn{
    border-radius: 0.5rem;
    width: auto;
    background-color: #41B983;
    margin-top: 1rem;
    color: white;
    cursor: pointer;
    padding: 0.3rem;
    border: none;
}
</style>