import ListItems from "./ListItems";

const Accordion=({open,setOpen,title})=>{

    const showitems=()=>{
    setOpen();
    }

    return(
    <div className="mt-5 shadow-md rounded-md border border-gray-400 px-4 py-2 w-64">
      <div className="flex justify-between">
      <h1>{title}</h1>
      <button onClick={showitems} className="bg-black text-white px-2 rounded-md">Show
      </button>
      </div>
      {open && <ListItems/>}
    </div>
    )
}
export default Accordion;
