<template>
  <div id="app" class="container-fluid">
    <task-board />
  </div>
</template>

<script>
import TaskBoard from "./components/TaskBoard.vue";
export default {
  components: { TaskBoard },
};
</script>

<style>
@import "./assets/bootstrap.min.css"; ;
</style>
