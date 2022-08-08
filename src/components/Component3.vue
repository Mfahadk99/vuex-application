<template>
  <div>
    <Component4 />
    <History/>
  </div>
</template>

<script>
import Component4 from "./Component4.vue";
import History from "./History.vue";
export default {
  name: "Component3",
  components: {
    Component4,
    History
  },
};
</script>