export const addNewItem = ({
  commit
}, taskNames) => {
  commit('NEW_ITEM', taskNames);
};

export const deleteItem = ({
  commit
}, item) => {
  commit('DELETE_ITEM', item);
};
