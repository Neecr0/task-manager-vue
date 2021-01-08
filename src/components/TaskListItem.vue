<template>
  <draggable group="items" @start="drag = true" @end="drag = false">
    <div class="card">
      <input
        v-if="taskNames.edit"
        v-model="taskNames.taskName"
        @blur="
          taskNames.edit = false;
          $emit('update');
        "
        @keyup.enter="
          taskNames.edit = false;
          $emit('update');
        "
        v-focus
      />
      <div v-else @click="taskNames.edit = true">
        {{ taskNames.taskName }}
        <button type="button" class="close" @click="deleteItem">
          <span>&times;</span>
        </button>
      </div>
    </div>
  </draggable>
</template>

<script>
import draggable from "vuedraggable";
export default {
  props: ["taskNames"],
  components: { draggable },

  data() {
    return {
      editedTask: null,
    };
  },

  methods: {
    deleteItem() {
      this.$store.dispatch("deleteItem", this.item);
    },
  },

  directives: {
    focus: {
      inserted(el) {
        el.focus();
      },
    },
  },
};
</script>

<style>
</style>