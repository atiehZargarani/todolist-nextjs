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
  const [tasksList, setTasksList] = useState([
    {
      title: "task1",
      piority: "high",
      status: "completed",
    },
    {
      title: "task2",
      piority: "low",
      status: "processing",
    },
    {
      title: "task3",
      piority: "low",
      status: "failed",
    },
  ]);

  const visibilityAddTaskModal = (value) => {
    setAddTaskModal(value);
  };

  const addTask = (newTask) => {
    setTasksList(() => [...tasksList, newTask]);
    visibilityAddTaskModal(false);
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
    <div className="my-10 px-10">
      {/* add task section */}

      <div className="flex justify-between items-center">
        <span>start managing your task</span>
        <button
          onClick={() => {
            visibilityAddTaskModal(true);
          }}
          className="bg-violet-700 p-2 rounded-md text-sm"
        >
          add task
        </button>
      </div>

      {/* task list section  */}

      {tasksList.map((task, key) => {
        return (
          <div
            key={key}
            className="border border-gray-400 p-3 rounded-lg my-2 flex items-center justify-between"
          >
            <div>
              <h3 className="text-violet-500">{task.title}</h3>
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
              <button className="bg-red-900 p-2 text-left rounded-md text-sm hover:bg-red-700">
                <TrashIcon className="size-4" />
              </button>
              <button className="bg-blue-900 p-2 text-left rounded-md text-sm hover:bg-blue-700">
                <PencilIcon className="size-4" />
              </button>
              <span>{enumStatus(task.status)}</span>
            </div>
          </div>
        );
      })}

      {/* add task modal */}

      {addTaskModal && (
        <AddTask
          visibilityAddTaskModal={visibilityAddTaskModal}
          addTask={addTask}
        />
      )}
    </div>
  );
}
