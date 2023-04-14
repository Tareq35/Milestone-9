import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/quiz-buzz-logo.png';
import './Header.css'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='lg:flex relative justify-between px-3 bg-orange-200 items-center py-2'>

            <div className='flex'>
                <div onClick={() => setOpen(!open)} className='h-6 w-6 pt-1 lg:hidden'>
                    {
                        open ? <XMarkIcon /> : <Bars3Icon />
                    }
                </div>
                <img className='w-12 top' src={logo} alt="" />
                <h2 className='text-3xl font-bold text-neutral-700'>Quiz<span className='text-green-600'>Buzz</span></h2>
            </div>

            <ul className={`w-48 lg:w-auto z-10 flex flex-col lg:flex-row text-left absolute lg:static duration-500 ease-in ${open ? 'top-[59px] left-0 p-6 lg:p-0 rounded bg-white lg:bg-transparent' : 'top-[-120px] lg:block'}`}>

                <NavLink className='font-semibold text-lg mr-4 lg:mb-0 mb-3' to="/">Home</NavLink>

                <NavLink className='font-semibold text-lg mr-4 lg:mb-0 mb-3' to="/statistics">Statistics</NavLink>

                <NavLink className='font-semibold text-lg mr-4 lg:mb-0 mb-3' to="/blog">Blog</NavLink>
            </ul>
        </div>
    );
};

export default Header;