import React, { useState } from "react";
import { TaskDetail } from "./List";
import "./AddEditModal.css";
import CancelIcon from "@mui/icons-material/Cancel";

type AddEditModalProps = {
  tasks: TaskDetail[];
  updateTasks: (updatedTasks: TaskDetail[]) => void;
  isAdding: boolean;
  index?: number;
  updateShowModal: () => void;
};

const AddEditModal: React.FC<AddEditModalProps> = ({
  tasks,
  updateTasks,
  isAdding,
  index,
  updateShowModal,
}: AddEditModalProps): JSX.Element => {
  const [task, setTask] = useState<TaskDetail>({ taskText: "", taskTime: "" });
  const [isInvalid, setIsInvalid] = useState<boolean>(true);
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (!isInvalid) {
      setIsInvalid(true);
    }
    const target = event.target;
    const value = target.value;
    const name = target.name;
    if (name === "taskText") {
      setTask({ ...task, taskText: value });
    } else {
      setTask({ ...task, taskTime: value });
    }
  };
  const handleSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    if (task.taskText !== "" && task.taskTime !== "") {
      if (isAdding) {
        const updatedTasks = [...tasks, task].sort(function compare(a, b) {
          var dateA = new Date(a.taskTime).valueOf();
          var dateB = new Date(b.taskTime).valueOf();
          return dateA - dateB;
        });
        updateTasks(updatedTasks);
      } else {
        if (typeof index !== "undefined") {
          const clonedTasks = [...tasks];
          clonedTasks[index] = task;
          clonedTasks.sort(function compare(a, b) {
            var dateA = new Date(a.taskTime).valueOf();
            var dateB = new Date(b.taskTime).valueOf();
            return dateA - dateB;
          });
          updateTasks(clonedTasks);
        }
      }
      updateShowModal();
    } else {
      setIsInvalid(false);
    }
  };
  return (
    <div className="Modal_container">
      <form onSubmit={handleSubmit} className="Modal_form">
        <div className="Modal_item">
          <label className="Modal_label">What's the task</label>
          <input
            type="text"
            name="taskText"
            value={task.taskText}
            onChange={handleInputChange}
            className="Modal_input"
          />
        </div>
        <div className="Modal_item">
          <label className="Modal_label">Time of task</label>
          <input
            type="date"
            name="taskTime"
            value={task.taskTime}
            onChange={handleInputChange}
            className="Modal_input"
          />
        </div>
        <input
          type="submit"
          value={isAdding ? "Add Task" : "Edit Task"}
          className="Modal_button"
        />
        {!isInvalid && (
          <div className="Modal_errorLabel">Please fill all the fields</div>
        )}
        <div onClick={updateShowModal} className="Modal_closeButton">
          <CancelIcon />
        </div>
      </form>
    </div>
  );
};

export default AddEditModal;
