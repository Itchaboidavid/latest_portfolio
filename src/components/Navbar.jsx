import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { NAVIGATION_LINKS } from '../constants';
import { FaBars } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    const handleLink = (e, href) => {
        e.preventDefault();

        const targetElement = document.querySelector(href);

        if(targetElement) {
            const offset = -85;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY + offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
        }
        setIsMobileMenuOpen(false);
    }

  return (
    <div>
        <nav className='fixed left-0 right-0 top-0 lg:top-4 z-50'>
            <div className='mx-auto hidden max-w-2xl items-center justify-center rounded-lg border border-stone-50/30 bg-black/20 py-3 backdrop-blur-lg lg:flex'>
                <div className='flex justify-between items-center gap-6'>
                    <div>
                        <a href="#hero"><img src={logo} width={25} alt='logo' onClick={(e) => handleLink(e, '#hero')}/> </a>
                    </div>
                    <div>
                        <ul className='flex items-center gap-4'>
                            {NAVIGATION_LINKS.map((item, index) => <li key={index} >
                                 <a href={item.href} className='text-sm hover:text-yellow-400 hover:border-b hover:pb-2 hover:border-yellow-400' onClick={(e) => handleLink(e,item.href)}>
                                   {item.label}
                                 </a>
                               </li>)}
                        </ul>
                    </div>
                </div>
            </div>

            {/* MOBILE MENU */}
            <div className='rounded-lg backdrop-blur-md py-2 px-4 lg:hidden'>
                <div className='flex items-center justify-between py-1 px-3 md:py-3 md:px-6'>
                    <div>
                        <a href="#hero" onClick={(e) => handleLink(e, '#hero')}>
                            <img src={logo} alt="logo" width={25} />
                        </a>
                    </div>
                    <div className='flex items-center'>
                        <button className='focus:outline-none lg:hidden' onClick={toggleMobileMenu}>
                            {isMobileMenuOpen ? (<FaTimes className="m-2 h-6 w-5"/>) : (<FaBars className="m-2 h-6 w-5"/>)}
                        </button>
                    </div>
                </div>
                {isMobileMenuOpen && (
                    <ul className='flex flex-col space-y-4 backdrop-blur-md py-2'>
                        {NAVIGATION_LINKS.map((link, index) => (<li key={index}><a href={link.href} className='block w-full text-center uppercase font-semibold' onClick={(e) => handleLink(e,link.href)}>{link.label}</a></li>))}
                    </ul>
                )}
            </div>
        </nav>
    </div>
  )
}

export default Navbar