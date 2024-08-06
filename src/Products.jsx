import React, { useState } from 'react'

function Products({data}) {
    const [x, updateX]=useState(true);
    const handlingX=()=>{
        updateX(!x);
    }
  return (
    <>
    <div className='text-white'>{data.info}</div>
    <div className='text-white'>{data.title}</div>
    <div className={`${x===true?"text-blue-600":"text-red-600"}`}>
    <button onClick={handlingX} className='w-30 px-3 py-1 bg-green-500 rounded-md mb-2'>{x===true?"TrueClick":"FalseClick"}</button>
    </div>
    </>
  )
 
}

export default Products