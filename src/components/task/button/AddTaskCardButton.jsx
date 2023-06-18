import React from "react";
import { v4 as uuidv4 } from "uuid";

const AddTaskCardButton = ({ taskCardsList, setTaskCardsList }) => {
  const addTaskCard = () => {
    const taskCardId = uuidv4();
    // console.log(taskCardList);
    setTaskCardsList([
      ...taskCardsList,
      {
        id: taskCardId,
        draggableId: `item-${taskCardId}`,
      },
    ]);
  };
  return (
    <div className="addTaskCardsButtonArea">
      <button className="addTaskCardsButton" onClick={addTaskCard}>
        +
      </button>
    </div>
  );
};

export default AddTaskCardButton;
