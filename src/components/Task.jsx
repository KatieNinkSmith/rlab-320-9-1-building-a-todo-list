import ActionButton from "./ActionButton";

function Task({ task, dispatch }) {
  return (
    <>
      <div>
        <b>Task: {task.title}</b>
      </div>
      <div>
        <b>Completed: {task.completed ? "Yes" : "No"}</b>
      </div>
      <div>
        <ActionButton
          type="remove_task"
          payload={{ title: task.title }}
          dispatch={dispatch}
          disabled={task.completed}
        >
          Delete
        </ActionButton>
        <ActionButton
          type="edit_task"
          payload={{ title: task.title, completed: task.completed }}
          dispatch={dispatch}
        >
          Edit
        </ActionButton>
        <br />
        <ActionButton
          type="submit"
          payload={{ title: task.title, completed: task.completed }}
          dispatch={dispatch}
        >
          Save
        </ActionButton>
      </div>
    </>
  );
}

export default Task;
