export default function reducer(
  state,
  { type, payload: { title, completed } }
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
    case "edit_task": {
      return state.map((task) => {
        if (task.title === title) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      });
    }

    default: {
      throw Error("Unknown Action: " + type);
    }
  }
}
