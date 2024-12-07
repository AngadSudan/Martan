import React from 'react'

function Button({classname,text}) {
  return (
    <button className={`w-fit text-sm font-medium px-2 bg-[#46D993] text-black rounded-lg ${classname} `}>
        {text}
    </button>
  )
}

export default Button