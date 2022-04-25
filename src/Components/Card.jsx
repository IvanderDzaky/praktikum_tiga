import React from 'react'
import { FaClock, FaEdit } from 'react-icons/fa'

function Card({ eventName, date, openEditForm, index }) {
    return (
        <>
            <div className='lg:w-1/4 md:w-1/2 p-4 w-full' onClick={() => openEditForm(eventName, date, index)}>
                <div className='border bg-gray-200 dark:bg-gray-900 transition-all ease-in-out duration-300 rounded px-5 py-5'>
                    <h2 className='title-font text-lg'>{eventName}</h2>
                    <div className='flex text-sm justify-between mt-2'>
                        <div className='flex items-center'>
                            <FaClock />
                            <p className='mx-1'>{date}</p>
                        </div>
                        |
                        <div className='flex items-center'>
                            <FaEdit />
                            <p className='mx-1'>Edit Event</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card