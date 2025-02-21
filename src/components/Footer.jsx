import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

function Footer() {
  return (
    <div className='bg-[#030613] text-zinc-50 border-[#323333] border-t-2 '>
        <div className='flex flex-col gap-2 justify-center items-center mt-2'>
            <h1 className='text-lg '>Let's Connect</h1>
            <div className="logo flex text-xl   mb-4 gap-2">
            <FaXTwitter  />
            <FaInstagram />
            <FaLinkedin />
            <FaGithub />
            </div>
        </div>
    </div>
  )
}

export default Footer