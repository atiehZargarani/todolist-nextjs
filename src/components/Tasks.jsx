"use client";

import { useState } from "react";

import AddTask from "./AddTaskModal";
import clsx from "clsx";
import { TrashIcon } from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { XCircleIcon } from "@heroicons/react/24/outline";

export default function Tasks() {
  const [addTaskModal, setAddTaskModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState([]);
  const [tasksList, setTasksList] = useState([
    {
      title: "task1",
      piority: "high",
      status: "completed",
      id: 1,
    },
    {
      title: "task2",
      piority: "low",
      status: "processing",
      id: 2,
    },
    {
      title: "task3",
      piority: "low",
      status: "failed",
      id: 3,
    },
  ]);

  const visibilityAddTaskModal = (value) => {
    setAddTaskModal(value);
    
  };

  const addTask = (newTask) => {

    setTasksList(() => [...tasksList, newTask]);
    visibilityAddTaskModal(false);
    console.log("show me ",newTask);
    
  };
  const openEditedModal = (id, title, piority, status) => {
    // console.log("show me task", task);

    setSelectedTask( {
      id,
      title,
      piority,
      status,
    });
    setAddTaskModal(true);
  };
  const editTask = (updatedFields) => {
    console.log("show me updatedFields",updatedFields);
    
    // Find the object by id
    const obj = tasksList.find((obj) => obj.id === updatedFields.id);

    // If object is found, update its properties
    if (obj) {
      Object.assign(obj, updatedFields); // Update the object with new properties
    }

    visibilityAddTaskModal(false)
  };

  const deleteTask = (id) => {
    // return tasksList.filter(obj => obj.id !== id);
    setTasksList(tasksList.filter((obj) => obj.id !== id));
  };

  const enumStatus = (status) => {
    switch (status) {
      case "completed":
        return <CheckCircleIcon className="size-7 text-green-700" />;
      case "processing":
        return <ArrowPathIcon className="size-6 text-yellow-600" />;
      case "failed":
        return <XCircleIcon className="size-7 text-red-800" />;

      default:
        break;
    }
  };

  return (
    <div className="my-10 px-6">
      {/* add task section */}

      <div className="flex justify-between items-center mb-6">
        <span className="text-violet-400  hover:text-violet-700">
          start managing your task
        </span>
        <button
          onClick={() => {
            visibilityAddTaskModal(true);
            setSelectedTask([])
          }}
          className="bg-violet-800 p-2 rounded-md text-sm hover:bg-violet-900"
        >
          add task
        </button>
      </div>

      {/* task list section  */}

      {tasksList.map((task, key) => {
        return (
          <div
            key={key}
            className=" p-3 rounded-lg my-2 flex items-center justify-between bg-black"
          >
            <div>
              <h3 className="text-violet-500  font-bold">{task.title}</h3>
              <span className="text-xs text-gray-500">piority : </span>
              <span
                className={clsx("text-xs", {
                  "text-red-800": task.piority == "high",
                  "text-yellow-500": task.piority == "low",
                })}
              >
                {task.piority}
              </span>
            </div>
            <div className="space-x-2 flex items-center">
              <span>{enumStatus(task.status)}</span>
              <button
                className="bg-blue-900 p-2 text-left rounded-md text-sm hover:bg-blue-700"
                onClick={() => {
                  openEditedModal(
                    task.id,
                    task.title,
                    task.piority,
                    task.status
                  );
                }}
              >
                <PencilIcon className="size-4" />
              </button>
              <button
                className="bg-red-900 p-2 text-left rounded-md text-sm hover:bg-red-700"
                onClick={() => {
                  deleteTask(task.id);
                }}
              >
                <TrashIcon className="size-4" />
              </button>
            </div>
          </div>
        );
      })}

      {/* add task modal */}

      {addTaskModal && (
        <AddTask
          visibilityAddTaskModal={visibilityAddTaskModal}
          addTask={addTask}
          editTask={editTask}
          selectedTask={selectedTask}
        />
      )}
    </div>
  );
}
