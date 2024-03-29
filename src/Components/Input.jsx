import React, { useRef } from 'react'
import { FaPlus } from "react-icons/fa6";

function Input(props) {
    const inputBox=useRef();
  return (
    <div className='p-3 flex justify-around '>
      <input type="text" ref={inputBox} placeholder='Enter your data'  className='border border-gray-500 focus:outline-none  p-3 w-[90%]'/>
      <div onClick={()=>{
        props.handler(inputBox.current.value);
        inputBox.current.value=" ";
         
      }} className='w-[50px] h-[50px] bg-[#e74c3c] text-white  cursor-pointer text-3xl rounded-[50%]  flex justify-center items-center '>
      <FaPlus  />
      </div>
    </div>
  )
}

export default Input
