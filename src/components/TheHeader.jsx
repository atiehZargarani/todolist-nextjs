
export default function TheHeader({ title, description, taskList }) {


  return (

    <div className="text-center bg-violet-800 rounded-t-xl py-3">
    <h1 className="text-gray-200 font-bold text-2xl">{title}</h1>
    <h3 className="text-gray-300 text-sm">{description}</h3>

</div>

  );
}
