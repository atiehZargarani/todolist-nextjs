"use client";

import { useState } from "react";
import AddTask from "./AddTask";

export default function TheHeader({ title, description }) {
  const [addTaskModal, setAddTaskModal] = useState(false);

  const visibilityAddTaskModal = (value) => {
    setAddTaskModal(value);
  };
  return (
    <div className="flex items-center justify-between px-10">
      <div className="">
        <h1 className="text-violet-500 font-bold text-lg">{title}</h1>
        <h3 className="text-violet-950 text-sm">{description}</h3>
      </div>
      <div>
        <button
          onClick={()=>{visibilityAddTaskModal(true)}}
          className="bg-violet-700 p-2 rounded-md text-sm"
        >
          add task
        </button>
      </div>

      {addTaskModal && <AddTask setAddTaskModal={setAddTaskModal}/>}
    </div>
  );
}
