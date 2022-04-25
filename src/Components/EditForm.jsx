import React, { useState, useEffect } from 'react'
import { FaCheck, FaTrashAlt } from 'react-icons/fa'

function EditForm({ editEvent, deleteEvent, eventName, date, index }) {
    const [eventNameValue, setEventNameValue] = useState(eventName)
    const [dateValue, setDateValue] = useState(date)
    const [indexValue, setIndexValue] = useState(index)

    useEffect(() => {
        setEventNameValue(eventName)
        setDateValue(date)
        setIndexValue(index)
    }, [eventName, date, index])

    const changeEventName = (event) => {
        setEventNameValue(event.target.value)
    }

    const changeDate = (event) => {
        setDateValue(event.target.value)
    }

    const changeIndex = (event) => {
        setIndexValue(event.target.value)
    }

    return (
        <div className='fixed bg-gray-400/80 w-full h-full'>
            <div className='lg:w-1/4 md:w-1/2 p-4 w-full my-20 container mx-auto border bg-white rounded'>
                <h1 className='text-center text-2xl'>Form Ubah Kegiatan</h1>
                <div className='px-10 py-5'>
                    <form onSubmit={editEvent}>
                        <input hidden name='index' value={indexValue} readOnly />
                        <div className='relative'>
                            <label htmlFor='eventName'>Nama Kegiatan <span className='text-red-500'>*</span></label>
                            <input type='text' value={eventNameValue} onChange={changeEventName} name='eventName' className='w-full flex-1 bg-gray-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring ring-blue-300 dark:ring-blue-500 rounded outline-none transition duration-100 px-3 py-2' />
                        </div>
                        <div className='relative mt-5'>
                            <label htmlFor='date'>Tanggal Kegiatan <span className='text-red-500'>*</span></label>
                            <input type='date' value={dateValue} onChange={changeDate} name='date' className='w-full flex-1 bg-gray-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring ring-blue-300 dark:ring-blue-500 rounded outline-none transition duration-100 px-3 py-2' />
                        </div>
                        <div className='flex justify-end items-center relative mt-5'>
                            <button type='submit' className='inline-block bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 focus-visible:ring ring-blue-300 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-4 py-3'><FaCheck /></button>
                            <button type='submit' onClick={(event) => deleteEvent(event, index)} className='inline-block ml-3 bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 focus-visible:ring ring-blue-300 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-4 py-3'><FaTrashAlt /></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditForm