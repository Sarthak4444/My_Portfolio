import React from 'react'

function NavBar() {
  return (
    <>
    <div className='flex flex-row overflow-hidden pointer-events-auto items-center justify-center relative gap-4 bg-[#14E956] rounded-2xl p-4'>
    <i className="fa-solid cursorCustom-Pointer fa-house text-[#081314] text-2xl"></i>
    <i className="fa-solid cursorCustom-Pointer fa-wrench text-[#081314] text-2xl"></i>
    <i className="fa-solid cursorCustom-Pointer fa-bars-progress text-[#081314] text-2xl"></i>
    <i className="fa-solid cursorCustom-Pointer fa-people-group text-[#081314] text-2xl"></i>
    <i className="fa-solid cursorCustom-Pointer fa-address-card text-[#081314] text-2xl"></i>
    <i className="fa-solid fa-caret-up absolute left-[18px] -bottom-[14px] block text-4xl"></i>
    </div>
    </>
  )
}

export default NavBar 