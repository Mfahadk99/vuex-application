<template>
  <div>
    <Component2 />
  </div>
</template>

<script>
import Component2 from "./Component2.vue";
export default {
  name: "Component1",
  components: {
    Component2,
  },
};
</script>