import React from 'react'

export const Key = ({text}) => {
  return (
    <div className="truncate h-12 w-[50px] border-2 border-white" >
        <div className="w-auto">
            <p className=" text-white ">{text}</p>
        </div>
    </div>
  )
}

