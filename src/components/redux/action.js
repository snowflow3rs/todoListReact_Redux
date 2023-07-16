export const addToDo = (payload) => {
  return {
    type: "addToDo",
    payload,
  };
};
export const searchFilter = (payload) => {
  return {
    type: "searchFilter",
    payload,
  };
};
export const filterStatus = (payload) => {
  return {
    type: "filterStatus",
    payload,
  };
};
export const filterPriority = (payload) => {
  return {
    type: "filterPriority",
    payload,
  };
};
