export default function AddTask({ setAddTaskModal ,handleTaskList}) {
  let task = {
    title: null,
    piority: "high",
    status:"processing"
  };

  return (
    
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="p-8 border w-96 shadow-lg rounded-md bg-white">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900">add task</h3>
        
          <div className="mt-2 px-7 py-3">
            <div className="text-black">
              <label htmlFor="task-title">title</label>
              <input
                id="task-title"
                onChange={(event) => {
                    task.title=event.target.value
                }}
              />
              <label htmlFor="task-piority">piority</label>
              <select onChange={(event) => {
                  task.piority=event.target.value
                }}>
                <option value={"high"}>high</option>
                <option value={"low"}>low</option>
              </select>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            {/* Using useRouter to dismiss modal*/}
            <button
              onClick={() => {
                setAddTaskModal(false);
              }}
              className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Close
            </button>
            <button onClick={()=>{handleTaskList(task)}
            } className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300">
              submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
