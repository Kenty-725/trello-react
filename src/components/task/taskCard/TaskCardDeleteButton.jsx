import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const TaskCardDeleteButton = ({
  taskCardsList,
  setTaskCardsList,
  taskCard,
}) => {
  const taskCardDelete = (id) => {
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id));
  };
  return (
    <div>
      <button
        className="taskCardDeleteButton"
        onClick={() => {
          taskCardDelete(taskCard.id);
        }}
      >
        <FontAwesomeIcon icon={faCircleXmark} />
      </button>
    </div>
  );
};

export default TaskCardDeleteButton;
