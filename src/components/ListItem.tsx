import React, { useState } from "react";
import "./ListItem.css";
import LabelIcon from "@mui/icons-material/Label";
import Button from "./Button";
import { TaskDetail } from "./List";
import AddEditModal from "./AddEditModal";

type ListItemProps = {
  index: number;
  updateTasks: (updatedTasks: TaskDetail[]) => void;
  tasks: TaskDetail[];
};

const ListItem: React.FC<ListItemProps> = ({
  index,
  updateTasks,
  tasks,
}: ListItemProps): JSX.Element => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleEdit = (): void => {
    setShowModal(!showModal);
  };
  const updateShowModal = (): void => {
    setShowModal(false);
  };
  const handleDelete = (): void => {
    const copyTasks = [...tasks];
    copyTasks.splice(index, 1);
    updateTasks(copyTasks);
  };
  return (
    <div className="ListItem_container">
      <div className="ListItem_taskContainer">
        <div className="ListItem_label">
          <LabelIcon />
          <div className="ListItem_taskDetails">
            <div className="ListItem_taskText">{tasks[index].taskText}</div>
            <div className="ListItem_taskTime">{tasks[index].taskTime}</div>
          </div>
        </div>
      </div>
      <div className="ListItem_buttonContainer">
        <Button buttonText={"Edit"} isPrimary={true} onClick={handleEdit} />
        <Button
          buttonText={"Delete"}
          isPrimary={false}
          onClick={handleDelete}
        />
      </div>
      {showModal && (
        <AddEditModal
          tasks={tasks}
          updateTasks={updateTasks}
          updateShowModal={updateShowModal}
          isAdding={false}
          index={index}
        />
      )}
    </div>
  );
};

export default ListItem;
