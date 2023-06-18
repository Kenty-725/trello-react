import React from "react";
import { v4 as uuidv4 } from "uuid";

const TaskAddInput = ({ inputText, setInputText, taskList, setTaskList }) => {
  const handleSubmit = (e) => {
    const taskId = uuidv4();
    e.preventDefault();
    if (!inputText) {
      return;
    }
    setTaskList([
      ...taskList,
      {
        id: taskId,
        draggableId: `task-${taskList.length}`,
        text: inputText,
      },
    ]);
    setInputText("");
    console.log(taskList);
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="taskAddInput"
          type="text"
          placeholder="add a task"
          value={inputText}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default TaskAddInput;
