export const NEW_ITEM = (state, item) => {
  state.tasksStatus.push({
    taskName: item,
    edit: false
  })
}

export const DELETE_ITEM = (state, item) => {
  let index = state.tasksStatus.indexOf(item);
  state.tasksStatus.splice(index, 1)
}
