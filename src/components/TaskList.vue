<template>
  <div>
    <h4 class="heading text-center">{{ taskStatus.taskStatus }}</h4>
    <task-list-item
      class="cards cards-list"
      v-for="taskNames in taskStatus.listItems"
      :taskNames="taskNames"
      :key="taskNames._id"
      :taskList="taskStatus.listItems"
    />
    <task-list-item-add />
  </div>
</template>

<script>
import TaskListItem from "@/components/TaskListItem.vue";
import TaskListItemAdd from "@/components/TaskListItemAdd.vue";

export default {
  props: ["taskStatus"],
  components: { TaskListItem, TaskListItemAdd },
};
</script>

<style>
</style>