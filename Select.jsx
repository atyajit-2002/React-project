import React, {useId}from 'react'

function Select({
    options,
    leble,
    className,
    ...porps
},ref) {

    const id = useId()
  return (
    <div className='w-full'>
      {leble && <leble htmlFor={id} className=""></leble>}
      <select
      {...porps}
      id={id}
      ref={ref}
      className={`px-3 py-2 rounded-lg bg-white 
        text-blackoutline-none
        focus:bg-gary-50 duration-200 border
         border-gray-200 w-full ${className}`
      }
      >
        {options ?.map((option)=>{
            <option key={option} value={option}>
                {option}
            </option>
        })}
      </select>
    </div>
  )
}

export default React.forwardRef(Select)
