export default function reducer(
  state,
  { type, payload: { title, completed, id, newTitle, newCompleted } }
) {
  switch (type) {
    case "add_task": {
      let taskId = state.length + 1;
      console.log(state);
      if (title === "") {
        return state;
      }
      console.log(state);
      let haveTask = false;
      state.forEach((task) => {
        if (task.title === title) {
          alert(`Task ${title} already exsists on your list`);
          haveTask = true;
        }
      });
      if (haveTask) {
        return state;
      }
      return [
        { userId: 1, id: taskId++, title: title, completed: completed },
        ...state,
      ];
    }

    case "remove_task": {
      return state.filter((s) => {
        console.log(s);
        return !(s.title === title && s.completed === true);
      });
    }
    case "edit-task": {
      return state.map((task) =>
        task.id === id
          ? { ...task, title: newTitle, completed: newCompleted }
          : task
      );
    }

    default: {
      throw Error("Unknown Action: " + type);
    }
  }
}
