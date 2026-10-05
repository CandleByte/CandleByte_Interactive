import { useState, useEffect } from 'react';

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window, scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled
                ? 'bg-bg-dark/90 backdrop-blur border-b border-border'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                <a href="#top" className="font-tech text-base uppercase tracking-widest text-ice">
                    CandleByte
                </a>

                <div className="flex items-center gap-8">
                    <a href="#games" className="font-tech text-base uppercase tracking-wider text-muted hover:text-ice transition-colors">
                        Games
                    </a>
                    <a href="#mission" className="font-tech text-base uppercase tracking-wider text-muted hover:text-ice transition-colors">
                        Mission
                    </a>
                    <a href="#team" className="font-tech text-base uppercase tracking-wider text-muted hover:text-ice transition-colors">
                        Team
                    </a>
                </div>

            </div>
        </nav>
    );
}