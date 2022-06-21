import React from 'react'

function Card({hidde,show,movise,toggle}) {
  return (
    <div onMouseEnter={(e)=>show(e)} 
    onMouseLeave={()=>hidde()}
     className='relative border-2 border-black m-4 w-max overflow-hidden transform transition-all  hover:scale-110'>
    <div className='m-2 h-full '>
    <img className='w-full h-full' src={movise && movise.backdrop_path}/>
    </div>
    <div className={`absolute w-full  ${toggle && "bottom-0"}`} >
      <h1 className='flex justify-center'>{movise.title}</h1>
      <div className='flex justify-around'>
        <span>reatin</span>
        <span>time</span>
      </div>
      <div className='flex justify-center m-4'>
        <p>
          disdlnknknlnklnnlkdnlkknlnkldnl
        </p>
      </div>
    </div>
    </div>
  )
}

export default Card