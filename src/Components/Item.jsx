import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

function Item(props) {
  let [done, setDone] = useState(false);

  return (
    <div
      onClick={() => setDone(!done)}
      className={` w-full border-b p-3 flex justify-between cursor-pointer select-none items-center `}
    >
      <div>
        <span className="pr-2 text-[14px] text-slate-500">{props.time}</span>
        <span className={`text-[19px] ${done === true ? "line-through" : ""}`}>
          {props.item}
        </span>
      </div>
      {/* right side  */}
      <div onClick={()=> props.removehandler(props.id)}>
        <FaTrashAlt className="text-[#e74c3c]" />
      </div>
    </div>
  );
}

export default Item;
