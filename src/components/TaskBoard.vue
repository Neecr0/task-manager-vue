<template>
  <div>
    <draggable v-bind="dragOptions">
      <task-list
        style="float: left"
        v-for="(taskStatus, index) in tasksStatus"
        :key="index"
        :taskStatus="taskStatus"
      />
    </draggable>
  </div>
</template>

<script>
import TaskList from "./TaskList.vue";
import draggable from "vuedraggable";
export default {
  components: { TaskList, draggable },
  computed: {
    tasksStatus() {
      return this.$store.state.tasksStatus;
    },
    dragOptions() {
      return {
        swapThreshold: 1,
        animation: "200",
        ghostClass: "ghost",
        group: "lists",
      };
    },
  },
};
</script>

<style>
</style>
