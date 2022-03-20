import React from 'react'

function SideShopCard({ product, qty, price, onAdd, onRemove }) {
    return (
        <div>
            <div className='flex justify-between border-b-2 mb-2'>
                <div className='text-lg py-2'>
                    <p>{product}</p>
                </div>
                <div className='text-lg py-2'>
                    <div className='flex flex-row space-x-2 w-full items-center rounded-lg'>
                        <button type='button' onClick={onAdd} className='focus:outline-none bg-pink-700 hover:bg-pink-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center'>
                            <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 6v6m0 0v6m0-6h6m-6 0H6' />
                            </svg>
                        </button>
                        <p>{qty} x {price}</p>
                        <button type='button' onClick={onRemove} className='focus:outline-none bg-pink-700 hover:bg-pink-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center'>
                            <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M18 12H6' />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideShopCard