"use client";

import { useState } from "react";
import clsx from "clsx";
import { ArrowPathIcon } from '@heroicons/react/24/outline';

export default function Taskslist() {
  const [tasks, setTasks] = useState([
    {
      title: "task1",
      piority: "high",
      status: "complete",
    },
    {
      title: "task2",
      piority: "low",
      status: "process",
    },
  ]);
  return (
    <div className="my-10 px-10">
      {tasks.map((task, key) => {
        return (
          <div key={key} className="border border-gray-400 p-3 rounded-lg my-2 flex items-center justify-between">
            <div>
            <h3 className="text-violet-500">{task.title}</h3>
            <span className="text-xs text-gray-500">piority : </span>
            <span
              className={clsx("text-xs", {
                "text-red-700": task.piority == "high",
                "text-yellow-400": task.piority == "low",
              })}
            >
              {task.piority}
            </span>
            </div>
            <div className="space-x-2">
                <button>delete <ArrowPathIcon/></button>
                <button>edit</button>
                <span>status</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
