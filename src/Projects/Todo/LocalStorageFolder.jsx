const storageAddress = "todo-list";

export const getData = () => {
  const rawTodo = localStorage.getItem(storageAddress);

  if (!rawTodo || rawTodo === "undefined") return [];

  try {
    return JSON.parse(rawTodo);
  } catch (e) {
    console.error("Error parsing todo list from localStorage:", e);
    return [];
  }
};

export const setData = (tasks) => {
  try {
    localStorage.setItem(storageAddress, JSON.stringify(tasks));
  } catch (e) {
    console.error("Error saving todo list to localStorage:", e);
  }
};
