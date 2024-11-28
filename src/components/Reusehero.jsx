import React from 'react'

const Reusehero = (props) => {
  return (
    <section className='h-80  bg-[#F1F1F3] text-center text-5xl'>
      <div className="w-11/12 bg-slate-200 pt-32 mx-auto h-full">
      <h2 className='text-[#FF9500] font-semibold'>{props.name}</h2>
      </div>
    </section>
  )
}

export default Reusehero

