import React from 'react'
import { FaPlus } from 'react-icons/fa'

function AddForm({ addEvent }) {
    return (
        <div className="fixed bg-gray-400/80 w-full h-full">
            <div className='lg:w-1/4 md:w-1/2 p-4 w-full my-20 container mx-auto border bg-white rounded'>
                <h1 className='text-center text-2xl'>Form Tambah Kegiatan</h1>
                <div className='px-10 py-5'>
                    <form onSubmit={addEvent}>
                        <div className='relative'>
                            <label htmlFor='eventName'>Nama Kegiatan <span className='text-red-500'>*</span></label>
                            <input type='text' name='eventName' className='w-full flex-1 bg-gray-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring ring-blue-300 dark:ring-blue-500 rounded outline-none transition duration-100 px-3 py-2' required />
                        </div>
                        <div className='relative mt-5'>
                            <label htmlFor='date'>Tanggal Kegiatan <span className='text-red-500'>*</span></label>
                            <input type='date' name='date' className='w-full flex-1 bg-gray-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring ring-blue-300 dark:ring-blue-500 rounded outline-none transition duration-100 px-3 py-2' required />
                        </div>
                        <div className='flex justify-end items-center relative mt-5'>
                            <button type='submit' className='inline-block bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 focus-visible:ring ring-blue-300 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-4 py-3'><FaPlus /></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddForm