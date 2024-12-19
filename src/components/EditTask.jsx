import React from "react";
import ActionButton from "./ActionButton";
import TextInput from "./TextInput";

function EditTask() {
  return (
    <div>
      <TextInput state={title} setState={setTitle} />
      <br />
      <div>
        Completed:
        <CheckboxInput state={completed} setState={setCompleted} />
      </div>
      <br />
      <ActionButton
        type="submit"
        payload={{ title: task.title, completed: task.completed }}
        dispatch={dispatch}
      >
        Save
      </ActionButton>
    </div>
  );
}

export default EditTask;
