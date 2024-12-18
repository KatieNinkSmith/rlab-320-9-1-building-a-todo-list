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
      </div>
    </>
  );
}

export default Task;
