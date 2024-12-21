"use client";

import { useState } from "react";

export default function Taskslist() {
  const [tasks, setTasks] = useState([
    {
      title: "task1",
      piority: "high",
      status: "complete",
    },
  ]);
  return (
    <div className="my-10">
      {tasks.map((task, key) => {
        return <div key={key}>{task.title}</div>;
      })}
    </div>
  );
}
