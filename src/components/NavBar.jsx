import React, { useEffect, useState } from 'react'
import { navLinks } from '../constants';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(()=>{
    const handleScroll = () => {
        const isScrolled = window.scrollY >10 
        setScrolled(isScrolled);
    }
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)
  },[])
  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
        <div className='inner'>
            <a className='logo' href='#hero'>
                Prashant Kumar
            </a>
            <nav className='desktop'>
                <ul>
                    {navLinks.map(({link,name})=>(
                        <li key={name} className='group'>
                            <a href={link}>
                                <span>
                                    {name}
                                </span>
                                <span className='underline'/>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <a 
            onClick={(e)=>{
                e.preventDefault();
                const resumeUrl = (import.meta.env.VITE_RESUME || import.meta.env.RESUME || '').trim();
                if(!resumeUrl){
                  console.warn('RESUME url missing in env (VITE_RESUME or RESUME)');
                  return;
                }
                window.open(resumeUrl, '_blank', 'noopener,noreferrer');
            }}
            className='md:w-65 md:h-16 w-50 h-12 cta-wrapper'
            >
                <div className='cta-button group'>
                    <div className='bg-circle'/>
                    <p className='text'>Download CV&nbsp;</p>
                    <div className='arrow-wrapper'>
                        <img src="/images/arrow-down.svg" alt='arrow'/>
                    </div>
                </div>
            </a>
        </div>
    </header>
  )
}

export default NavBar