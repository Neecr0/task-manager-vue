<template>
  <div>
    <input type="text" v-model="newItem" />
    <button @click="addNewItem">submit</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newItem: "",
    };
  },
  props: ["taskNames"],
  methods: {
    addNewItem() {
      this.$store.dispatch("addNewItem", this.newItem);
      this.newItem = "";
    },
  },
};
</script>

<style>
</style>