import React from 'react'

export default function Form() {
  return (
    <div className="p-4 max-w-lg bg-white font-[sans-serif]">
      <h1 className="text-3xl text-gray-800 font-extrabold text-center">Contact us</h1>
      <form className="mt-8 space-y-4">
        <label htmlFor="name" className="block text-sm font-bold text-black">Name</label>
        <input id="name" type='text' placeholder='Name'
            className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500" />
        
        <label htmlFor="email" className="block text-sm font-bold text-black">Email</label>
        <input id="email" type='email' placeholder='Email'
            className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500" />
        <label htmlFor="message" className="block text-sm font-bold text-black">Message</label>
        <textarea id="message" placeholder='Message'
            className="w-full rounded-md px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm pt-3 outline-blue-500"></textarea>
        
        <button type='button'
            className="text-white bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full">Send</button>
      </form>
    </div>
  )
}