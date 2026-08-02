import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { HiArrowUp, HiMail } from 'react-icons/hi';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import contact from '../data/contact';

// ─── Footer nav links ─────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: 'Home',       to: 'home'         },
  { label: 'About',      to: 'about'        },
  { label: 'Experience', to: 'experience'   },
  { label: 'Projects',   to: 'projects'     },
  { label: 'Skills',     to: 'skills'       },
  { label: 'Resume',     to: 'resume'       },
  { label: 'Contact',    to: 'contact'      },
];

const SCROLL_DURATION = 500;
const SCROLL_OFFSET   = -72;

// ─── Social links ─────────────────────────────────────────────────────────────
const SOCIALS = [
  {
    id: 'github',
    label: 'GitHub',
    icon: FaGithub,
    href: contact.github,
    external: true,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    icon: FaLinkedinIn,
    href: contact.linkedin,
    external: true,
  },
  {
    id: 'email',
    label: 'Email',
    icon: HiMail,
    href: `mailto:${contact.email}`,
    external: false,
  },
];

// ─── Back-to-Top Button ───────────────────────────────────────────────────────
function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="back-to-top"
          initial={{ opacity: 0, scale: 0.8, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 16 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed bottom-6 right-6 z-40"
        >
          <Link
            to="home"
            smooth
            duration={SCROLL_DURATION}
            offset={SCROLL_OFFSET}
            aria-label="Back to top"
          >
            <motion.button
              type="button"
              whileHover={{ scale: 1.12, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full bg-accent-blue text-white shadow-lg shadow-blue-300
                         flex items-center justify-center
                         hover:bg-blue-700 transition-colors duration-200
                         focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2"
              aria-hidden="true"
            >
              <HiArrowUp size={20} />
            </motion.button>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <footer
        role="contentinfo"
        className="bg-background border-t border-border"
      >
        <div className="max-w-container mx-auto px-6 lg:px-8 py-12">

          {/* ── Top row ── */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 mb-10">

            {/* Brand block */}
            <div className="max-w-xs">
              <Link
                to="home"
                smooth
                duration={SCROLL_DURATION}
                offset={SCROLL_OFFSET}
                className="font-heading font-bold text-xl text-text-primary cursor-pointer
                           hover:text-accent-blue transition-colors duration-200"
                aria-label="Go to top"
              >
                Sutrave Tanmai
              </Link>
              <p className="font-body text-sm text-text-secondary mt-2 leading-relaxed">
                Computer Science Engineering Student passionate about Full Stack Development,
                Data Analytics, and Artificial Intelligence.
              </p>

              {/* Social icons */}
              <div className="flex gap-3 mt-4" aria-label="Social media links">
                {SOCIALS.map(({ id, label, icon: Icon, href, external }) => (
                  <motion.a
                    key={id}
                    href={href}
                    aria-label={label}
                    whileHover={{ scale: 1.12, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="w-9 h-9 rounded-full border border-border bg-background
                               flex items-center justify-center text-text-secondary
                               hover:border-accent-blue hover:text-accent-blue hover:bg-blue-50
                               transition-all duration-200
                               focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2"
                  >
                    <Icon size={15} aria-hidden="true" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div>
              <p className="font-body text-xs font-semibold text-text-secondary uppercase tracking-wider mb-4">
                Quick Links
              </p>
              <nav aria-label="Footer navigation">
                <ul className="grid grid-cols-2 gap-x-10 gap-y-2" role="list">
                  {NAV_LINKS.map(({ label, to }) => (
                    <li key={to}>
                      <Link
                        to={to}
                        smooth
                        duration={SCROLL_DURATION}
                        offset={SCROLL_OFFSET}
                        className="font-body text-sm text-text-secondary cursor-pointer
                                   hover:text-accent-blue transition-colors duration-200
                                   focus:outline-none focus:underline"
                        tabIndex={0}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Contact info */}
            <div>
              <p className="font-body text-xs font-semibold text-text-secondary uppercase tracking-wider mb-4">
                Contact
              </p>
              <ul className="space-y-2" role="list">
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="font-body text-sm text-text-secondary hover:text-accent-blue
                               transition-colors duration-200 break-all"
                  >
                    {contact.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${contact.phone}`}
                    className="font-body text-sm text-text-secondary hover:text-accent-blue
                               transition-colors duration-200"
                  >
                    {contact.phone}
                  </a>
                </li>
                <li>
                  <span className="font-body text-sm text-text-secondary">
                    {contact.location}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* ── Divider ── */}
          <div className="w-full h-px bg-border mb-6" aria-hidden="true" />

          {/* ── Bottom row ── */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <p className="font-body text-xs text-text-secondary">
              &copy; {year} Sutrave Tanmai. All Rights Reserved.
            </p>
            <p className="font-body text-xs text-text-secondary">
              Designed &amp; Developed with{' '}
              <span aria-label="love" role="img"></span>
              {' '}using React &amp; Tailwind CSS.
            </p>
          </div>

        </div>
      </footer>

      {/* Floating Back-to-Top button */}
      <BackToTop />
    </>
  );
}
