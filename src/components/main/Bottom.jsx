import React from 'react'
import Logo from "../../assets/hightlight/poster.jpg"
import Button from '../button'

const Bottom = () => {
  return (
    <div className='w-full pt-20 px-[1rem] md:px-0'>
      <div className='lg:grid lg:grid-cols-3 max-w-[66rem] mx-auto lg:gap-10'>
        <img src={Logo} className='rounded-xl order-1 md:order-2 w-full' alt="" />
        <div className='col-span-2 py-5 md:py-20 order-2 md:order-1 text-center'>
          <p className='text-2xl md:text-4xl w-full font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#ec008c] to-[#00b2d8]'>
            Kelezatan Rahasia di Setiap Gigitan!</p>
          <p className='md:text-2xl w-full font-semibold text-slate-600'>
            "Tingkatkan level kelezatanmu dengan sajian yang selalu membuatmu kembali lagi dan lagi. Temukan rahasia di balik setiap gigitan, sensasi yang membuat lidahmu bergoyang! Yuk, nikmati dan rasakan sendiri kenikmatannya."
          </p>
          <Button text='Yu, cobain sekarang!' />
        </div>
      </div>
    </div>
  )
}

export default Bottom