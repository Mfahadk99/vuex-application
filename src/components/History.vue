<template>
  <div class="container">
    <h3>History</h3>
    <div class="display">
      <p
        v-for="(item, index) in history"
        :key="index"
        :class="activeIndexes(parseInt(value)).includes(index) && 'bold'"
      >
        {{ item }}
      </p>
    </div>
    <input type="number" placeholder="Search by index" v-model="value" />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "HistoryComponent",
  data() {
    return {
      value: 0,
    };
  },
  computed: {
    ...mapState(["history"]),
    ...mapGetters(["activeIndexes"]),
  },
};
</script>


<style scoped>
.container {
  margin-top: 7rem;
  margin-bottom: 7rem;
}
.display {
  display: flex;
  flex-wrap: wrap;
  width: 25rem;
  margin: 0 auto;
  justify-content: center;
}

.display p {
  margin: 1rem;
}
input {
  text-align: center;
  margin-top: 2rem;
}
.bold {
  font-weight: 900;
}
</style>