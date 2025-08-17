import React from 'react'

const Border = ({data}) => {
  return (
      <div className="relative px-4 py-2 font-bold uppercase text-white orbitron-regular text-sm
            before:content-[''] before:absolute before:top-0 before:left-0 before:w-2.5 before:h-2.5 before:border-t-1 before:border-l-1 before:border-white
            after:content-[''] after:absolute after:top-0 after:right-0 after:w-2.5 after:h-2.5 after:border-t-1 after:border-r-1 after:border-white
            ">
        {data}
        <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-white"></span>
        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-white"></span>
    </div>
  )
}

export default Border
