import React from 'react'

function Contact() {
  return (
    <div className='bg-skills text-zinc-50 '>
        <div className="flex flex-col justify-center items-center ">
            <h1 className="text-3xl font-bold mt-1">Get in Touch</h1>
            <p className="text-xl mt-2 leading-tight">Let's discuss your next project</p>
        </div>

        <form action="" className=' w-[50%] px-40 py-15 mx-auto flex flex-col gap-4'>
            <label htmlFor="">
                <p className='text-lg mb-2'>Name</p>
                <input 
                className=' bg-[#374050] w-full rounded-lg p-1'
                type="text" name="name" id="name" placeholder='' />
            </label>

            <label htmlFor="">
                <p className='text-lg mb-2'>Email</p>
                <input 
                className=' bg-[#374050] w-full rounded-lg p-1'
                type="email" name="email" id="email" placeholder='' />
            </label>

            <label htmlFor="">
                <p className='text-lg mb-2'>Message</p>

                <textarea
                rows="4" cols="50"
                className=' bg-[#374050] w-full rounded-lg p-1'
                name="message" id="message"></textarea>
            </label>

            <button className='bg-blue-500 py-1 px-4 cursor-pointer hover:bg-blue-300 transition-all delay-75 rounded-md font-semibold'>Send Message</button>
        </form>
    </div>
  )
}   

export default Contact