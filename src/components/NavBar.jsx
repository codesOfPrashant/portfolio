import { useEffect, useState } from 'react'
import { navLinks } from '../constants';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== 'undefined' && window.matchMedia ? window.matchMedia('(min-width: 768px)').matches : true
  );

  useEffect(()=>{
    const handleScroll = () => {
        const isScrolled = window.scrollY >10 
        setScrolled(isScrolled);
    }
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)
  },[])

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(min-width: 768px)');
    const handler = (e) => setIsDesktop(e.matches);
    if (mq.addEventListener) mq.addEventListener('change', handler);
    else mq.addListener(handler);
    setIsDesktop(mq.matches);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', handler);
      else mq.removeListener(handler);
    }
  }, []);

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
            onMouseEnter={()=>setHovered(true)}
            onMouseLeave={()=>setHovered(false)}
            className='md:w-65 md:h-16 w-50 h-12 cta-wrapper'
            >
                <div className='cta-button group'>
                    <div className='bg-circle'/>
                    <p className='text' style={isDesktop && !hovered ? { color: '#111' } : {}}>
                      Download CV&nbsp;
                    </p>
                    <div className='arrow-wrapper'>
                        <img src="/images/arrow-down.svg" alt='arrow' className='hidden md:block'/>
                    </div>
                </div>
            </a>
        </div>
    </header>
  )
}

export default NavBar