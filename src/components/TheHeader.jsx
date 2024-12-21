import Image from "next/image";

export default function TheHeader({title,description}) {
  return (
  
  <div className="flex items-center justify-between px-10">
     <div className="">
   <h1 className="text-violet-500 font-bold text-lg">{title}</h1>
   <h3 className="text-violet-950 text-sm">{description}</h3>
   </div>
   <div>
    <button className="bg-green-800 p-2 rounded-md text-sm">add task</button>
   </div>
  </div>

  );
}
