import React, { useState } from "react";
import ListItem from "./ListItem";
import Button from "./Button";
import "./List.css";
import AddEditModal from "./AddEditModal";
import NewList from "../NewList.png";

export type TaskDetail = {
  taskText: string;
  taskTime: string;
};

const List = (): JSX.Element => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [tasks, setTasks] = useState<TaskDetail[]>([
    { taskText: "Hey", taskTime: "2022-06-01" },
  ]);
  const updateTasks = (updatedTasks: TaskDetail[]): void => {
    setTasks(updatedTasks);
  };
  const handleAdd = (): void => {
    setShowModal(true);
  };
  const updateShowModal = (): void => {
    setShowModal(false);
  };
  return (
    <div>
      <div className="List_itemList">
        {tasks.length > 0 ? (
          tasks.map((task, index) => {
            return (
              <ListItem
                updateTasks={updateTasks}
                index={index}
                tasks={tasks}
                key={index}
              />
            );
          })
        ) : (
          <div className="List_newList">
            <img src={NewList} alt="Create a new List" />
            <div className="List_newListText">
              Don't have any item on the list? Let's <span>create one</span>
            </div>
          </div>
        )}
      </div>
      <div className="List_addButton">
        <Button buttonText={"Add task"} isPrimary={true} onClick={handleAdd} />
      </div>
      {showModal && (
        <AddEditModal
          tasks={tasks}
          updateTasks={updateTasks}
          isAdding={true}
          updateShowModal={updateShowModal}
        />
      )}
    </div>
  );
};

export default List;
