import React from 'react'
import Item from './Item'

function Box(props) {
    const item=props.data.map((singledata,index)=>{
        return <Item removehandler={props.removehandler} key={index} id={index} item={singledata.item} time={singledata.time} />
    })
  return (
    <div className='p-3'>
      {/* <Item/>
      <Item/>
      <Item/>
      <Item/> */}
      {item}
    </div>
  )
}

export default Box
