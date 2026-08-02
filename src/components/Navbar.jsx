import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { HiMenu, HiX } from 'react-icons/hi';

// Navigation links – order matches the page layout
const NAV_LINKS = [
  { label: 'Home',         to: 'home'         },
  { label: 'About',        to: 'about'        },
  { label: 'Education',    to: 'education'    },
  { label: 'Experience',   to: 'experience'   },
  { label: 'Skills',       to: 'skills'       },
  { label: 'Projects',     to: 'projects'     },
  { label: 'Certificates', to: 'certificates' },
  { label: 'Resume',       to: 'resume'       },
  { label: 'Contact',      to: 'contact'      },
];

const SCROLL_OFFSET   = -72;
const SCROLL_DURATION = 500;

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  // Solid background + blur after 20px scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile drawer on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Main navigation"
        className={`max-w-container mx-auto px-6 lg:px-8 flex items-center justify-between
                    transition-all duration-300 ${scrolled ? 'h-[60px]' : 'h-[72px]'}`}
      >

        {/* ── Brand / Logo ── */}
        <Link
          to="home"
          smooth
          duration={SCROLL_DURATION}
          offset={SCROLL_OFFSET}
          className="flex items-center gap-3 cursor-pointer select-none group"
          aria-label="Go to top"
        >
          {/* Circular profile photo – always visible */}
          <div className="relative flex-shrink-0">
            {/* Blue glow ring – appears on hover */}
            <div
              aria-hidden="true"
              className="absolute -inset-0.5 rounded-full bg-accent-blue/0
                         group-hover:bg-accent-blue/20 blur-sm
                         transition-all duration-300"
            />
            <img
              src="/image.jpg"
              alt="Tanmai Sutrave"
              width={42}
              height={42}
              className="relative w-[42px] h-[42px] rounded-full
                         object-cover object-center
                         border-2 border-white shadow-md
                         group-hover:scale-105
                         transition-transform duration-200"
              loading="eager"
              decoding="async"
              draggable={false}
            />
          </div>

          {/* Name + subtitle */}
          <div className="flex flex-col leading-tight">
            {/* Name – always visible */}
            <span className="font-heading font-bold text-[18px] text-text-primary
                             group-hover:text-accent-blue transition-colors duration-200">
              Tanmai Sutrave
            </span>
            {/* Subtitle – hidden on mobile, visible on desktop */}
            <span className="hidden lg:block font-body text-[12px] font-medium
                             text-text-secondary tracking-[0.04em]
                             group-hover:text-accent-blue/70 transition-colors duration-200">
              Software Engineer&nbsp;|&nbsp;Data Analyst&nbsp;|&nbsp;AI &amp; ML
            </span>
          </div>
        </Link>

        {/* ── Desktop nav links ── */}
        <ul className="hidden lg:flex items-center gap-0.5" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth
                duration={SCROLL_DURATION}
                offset={SCROLL_OFFSET}
                spy
                activeClass="!text-accent-blue !bg-blue-50"
                className="font-body text-sm font-medium text-text-secondary
                           px-3 py-2 rounded-lg cursor-pointer
                           hover:text-text-primary hover:bg-bg-secondary
                           transition-all duration-200
                           focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2"
                tabIndex={0}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ── Mobile hamburger ── */}
        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((p) => !p)}
          className="lg:hidden p-2 rounded-lg text-text-secondary
                     hover:text-text-primary hover:bg-bg-secondary
                     transition-colors duration-200
                     focus:outline-none focus:ring-2 focus:ring-accent-blue"
        >
          {menuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
        </button>
      </nav>

      {/* ── Mobile drawer ── */}
      <div
        id="mobile-menu"
        aria-hidden={!menuOpen}
        className={`lg:hidden overflow-hidden transition-all duration-300
                    bg-white/95 backdrop-blur-md border-b border-border ${
                      menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    }`}
      >
        <ul className="px-6 py-4 flex flex-col gap-1" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth
                duration={SCROLL_DURATION}
                offset={SCROLL_OFFSET}
                spy
                activeClass="text-accent-blue bg-blue-50"
                onClick={() => setMenuOpen(false)}
                className="font-body text-sm font-medium text-text-secondary
                           block px-4 py-3 rounded-lg cursor-pointer
                           hover:text-text-primary hover:bg-bg-secondary
                           transition-all duration-200
                           focus:outline-none focus:ring-2 focus:ring-accent-blue"
                tabIndex={menuOpen ? 0 : -1}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
