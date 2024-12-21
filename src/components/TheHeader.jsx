import Image from "next/image";

export default function Home({title,description}) {
  return (
  <header>
   <div className="text-center">
   <h1 className="text-violet-500 font-bold text-lg">{title}</h1>
   <h3 className="text-violet-950 text-sm">{description}</h3>
   </div>
  </header>
  );
}