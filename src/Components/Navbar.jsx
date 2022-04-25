import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <header className='text-gray-400 bg-gray-900 body-font'>
                <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
                    <NavLink to='/'>
                        <span className='flex title-font font-medium items-center text-white mb-4 md:mb-0 ml-3 text-xl'>Vander Nih Bosss</span>
                    </NavLink>
                    <nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center'>
                        <NavLink to='/' className='mr-5 hover:text-white'>Soal 1</NavLink>
                        <NavLink to='/soal2' className='mr-5 hover:text-white'>Soal 2</NavLink>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Navbar