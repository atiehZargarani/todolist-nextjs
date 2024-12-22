export default function AddTask({ visibilityAddTaskModal ,addTask}) {
  let task = {
    title: null,
    piority: "high",
    status:"processing"
  };

  return (
    
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="pt-0 pb-5 border w-96 shadow-lg rounded-md bg-gray-200">
        <div className="mb-4 text-center bg-violet-500 py-2 rounded-t-md">
          <h3 className="text-2xl font-bold text-white">add task</h3>
        </div>
          <div className="mt-2 px-2 py-3 space-y-4 text-left px-5">
          <div className="flex items-center justify-between">
              <label className="text-violet-900 mx-2" htmlFor="task-title">title </label>
              <input
                id="task-title"
                onChange={(event) => {
                    task.title=event.target.value
                }}
                className="border w-full text-zinc-800 text-sm bg-gray-100 focus:outline-none p-1 rounded-md"
              /></div>
              <div className="flex items-center justify-between">
              <label className="text-violet-900 mx-2" htmlFor="task-piority">piority </label>
              <select className="w-full py-1 bg-gray-100  px-2 py-3 text-zinc-800 border rounded-md" onChange={(event) => {
                  task.piority=event.target.value
                }}>
                <option value={"high"}>high</option>
                <option value={"low"}>low</option>
              </select>
              </div>
            
          </div>
          <div className="flex justify-between mt-4 px-5">
            {/* Using useRouter to dismiss modal*/}
            <button
              onClick={() => {
                visibilityAddTaskModal(false);
              }}
              className="px-4 py-1 bg-violet-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Close
            </button>
            <button onClick={()=>{addTask(task)}
            } className="px-4 py-1 bg-green-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-gray-300">
              add
            </button>
          </div>
        </div>
      </div>
   
  );
}
