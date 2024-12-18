export default function reducer(
  state,
  { type, payload: { title, completed } }
) {
  switch (type) {
    case "add_task": {
      if (title === "") {
        return state;
      }
      let haveTask = false;
      state.forEach((task) => {
        if (task.title === title) {
          alert(`Task ${title} already exsists on your list`);
        }
        haveTask = true;
      });
      if (haveTask) {
        return state;
      }
      return [
        { title: title, userId: 1, id: state.length + 1, completed: completed },
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
      return state.map((task) =>
        task.id === payload.id
          ? { ...task, title: payload.title, completed: payload.completed }
          : task
      );
    }
    default: {
      throw Error("Unknown Action: " + type);
    }
  }
}
