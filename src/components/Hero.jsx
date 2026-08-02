import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import {
  FiDownload,
  FiArrowRight,
  FiMail,
  FiPhone,
  FiMapPin,
} from 'react-icons/fi';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import projects from '../data/projects';
import { certifications } from '../data/certificates';

// ─── Personal Data ────────────────────────────────────────────────────────────
const PERSONAL = {
  name: 'Sutrave Tanmai',
  greeting: "Hello, I'm",
  intro:
    'Computer Science Engineering student with a strong foundation in Data Analytics, Full Stack Development, UI/UX Design, and Artificial Intelligence. Passionate about building scalable applications, extracting insights from data, and creating intuitive digital experiences through modern technologies.',
  location: 'Hyderabad, Telangana, India',
  email: 'tanmaysutrave@gmail.com',
  phone: '+91 7730859903',
  linkedin: 'https://www.linkedin.com/in/tanmai-sutrave-45a462345',
  github: 'https://github.com/Tanmaisutrave',
  profileImage: '/image.jpg',
  resumePath: '/Resume.pdf',
};

// Titles cycled by the typing animation
const TYPING_SEQUENCE = [
  'Data Analyst',         2000,
  'Full Stack Developer', 2000,
  'UI/UX Designer',       2000,
  'AI & ML Engineer',     2000,
];

// ─── Auto-computed stats ──────────────────────────────────────────────────────
// These derive from the data files so they stay accurate automatically.
const totalProjects      = projects.reduce((sum, cat) => sum + cat.items.length, 0);
const totalCertifications = certifications.length;

const HIGHLIGHTS = [
  {
    label: 'Projects',
    value: `${totalProjects}+`,
    sub: 'Completed Projects',
  },
  {
    label: 'Certificates',
    value: `${totalCertifications}+`,
    sub: 'Professional Certifications',
  },
  {
    label: 'Experience',
    value: 'Fresher',
    sub: 'Open to Opportunities',
  },
  {
    label: 'Location',
    value: 'Hyderabad',
    sub: 'Telangana, India',
  },
];

// ─── Social Links ─────────────────────────────────────────────────────────────
const SOCIALS = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    icon: FaLinkedinIn,
    href: PERSONAL.linkedin,
    external: true,
  },
  {
    id: 'github',
    label: 'GitHub',
    icon: FaGithub,
    href: PERSONAL.github,
    external: true,
  },
  {
    id: 'email',
    label: 'Send Email',
    icon: FiMail,
    href: `mailto:${PERSONAL.email}`,
    external: false,
  },
  {
    id: 'phone',
    label: 'Call',
    icon: FiPhone,
    href: `tel:${PERSONAL.phone}`,
    external: false,
  },
];

// ─── Framer Motion Variants ───────────────────────────────────────────────────
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
  },
};

// Gentle floating animation for the profile photo
const floatAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

/** Single quick-highlight stat card */
function HighlightCard({ value, label, sub }) {
  return (
    <div className="flex flex-col items-center sm:items-start px-5 py-4 bg-bg-secondary border border-border rounded-xl min-w-[112px]">
      <span className="font-heading font-bold text-2xl text-text-primary leading-none">
        {value}
      </span>
      <span className="font-body text-xs font-semibold text-accent-blue mt-1 tracking-wide uppercase">
        {label}
      </span>
      <span className="font-body text-xs text-text-secondary mt-0.5">{sub}</span>
    </div>
  );
}

/** Social icon button with tooltip */
function SocialButton({ label, icon: Icon, href, external }) {
  const linkProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <div className="relative group">
      <motion.a
        href={href}
        aria-label={label}
        {...linkProps}
        whileHover={{ scale: 1.12, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center w-10 h-10 rounded-full border border-border
                   bg-background text-text-secondary
                   hover:border-accent-blue hover:text-accent-blue hover:bg-blue-50
                   transition-colors duration-200
                   focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2"
      >
        <Icon size={17} aria-hidden="true" />
      </motion.a>

      {/* Tooltip */}
      <span
        role="tooltip"
        className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2
                   whitespace-nowrap rounded-md bg-text-primary text-white
                   font-body text-xs px-2.5 py-1
                   opacity-0 group-hover:opacity-100 transition-opacity duration-150"
      >
        {label}
        <span
          className="absolute left-1/2 -translate-x-1/2 top-full
                     border-4 border-transparent border-t-text-primary"
          aria-hidden="true"
        />
      </span>
    </div>
  );
}

// ─── Hero Component ───────────────────────────────────────────────────────────
export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero – Personal Introduction"
      className="min-h-screen flex items-center bg-background pt-[72px]"
    >
      <div className="max-w-container mx-auto px-6 lg:px-8 w-full py-16 lg:py-24">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-14 lg:gap-10">

          {/* ── Left Column ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl"
          >
            {/* Greeting */}
            <motion.p
              variants={itemVariants}
              className="font-body text-base font-medium text-accent-blue tracking-widest uppercase mb-3"
            >
              {PERSONAL.greeting}
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="font-heading font-extrabold text-[clamp(2.4rem,6vw,3.75rem)] leading-tight text-text-primary"
            >
              {PERSONAL.name}
            </motion.h1>

            {/* Typing Animation – Professional Title */}
            <motion.div
              variants={itemVariants}
              className="mt-3 h-9 flex items-center justify-center lg:justify-start"
              aria-live="polite"
              aria-label="Professional title"
            >
              <span className="font-body text-xl font-medium text-text-secondary">
                <TypeAnimation
                  sequence={TYPING_SEQUENCE}
                  wrapper="span"
                  speed={55}
                  deletionSpeed={70}
                  repeat={Infinity}
                  cursor
                />
              </span>
            </motion.div>

            {/* Location badge */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-1.5 mt-4 text-text-secondary"
            >
              <FiMapPin size={14} aria-hidden="true" className="text-accent-blue flex-shrink-0" />
              <span className="font-body text-sm">{PERSONAL.location}</span>
            </motion.div>

            {/* Introduction */}
            <motion.p
              variants={itemVariants}
              className="font-body text-base leading-relaxed text-text-secondary mt-6 max-w-xl"
            >
              {PERSONAL.intro}
            </motion.p>

            {/* Quick Highlight Cards */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-3 mt-8"
            >
              {HIGHLIGHTS.map((h) => (
                <HighlightCard key={h.label} {...h} />
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-3 mt-8"
            >
              {/* Primary – Download Resume */}
              <motion.a
                href={PERSONAL.resumePath}
                download
                aria-label="Download resume PDF"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary shadow-sm shadow-blue-200"
              >
                <FiDownload size={16} aria-hidden="true" />
                Download Resume
              </motion.a>

              {/* Secondary – View Projects */}
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="projects"
                  smooth
                  duration={500}
                  offset={-72}
                  className="btn-secondary cursor-pointer"
                  role="button"
                  tabIndex={0}
                  aria-label="Scroll to projects section"
                >
                  View Projects
                  <FiArrowRight size={15} aria-hidden="true" />
                </Link>
              </motion.div>

              {/* Outline – Contact Me */}
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="contact"
                  smooth
                  duration={500}
                  offset={-72}
                  className="inline-flex items-center gap-2 px-6 py-3
                             border-2 border-accent-blue text-accent-blue
                             font-body font-medium text-sm rounded-lg
                             hover:bg-blue-50 transition-all duration-200
                             focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2
                             cursor-pointer"
                  role="button"
                  tabIndex={0}
                  aria-label="Scroll to contact section"
                >
                  Contact Me
                </Link>
              </motion.div>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-3 mt-7"
              aria-label="Social media links"
            >
              {SOCIALS.map((s) => (
                <SocialButton key={s.id} {...s} />
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right Column – Profile Photo ── */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="flex-shrink-0 flex items-center justify-center"
          >
            {/* Floating wrapper */}
            <motion.div animate={floatAnimation} className="relative">

              {/* ── Decorative background blobs ── */}
              {/* Large soft circle behind the photo */}
              <div
                aria-hidden="true"
                className="absolute -inset-8 rounded-full bg-[#EFF6FF] -z-20"
              />
              {/* Smaller accent circle, offset bottom-right */}
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-[#DBEAFE] -z-10"
              />
              {/* Top-left accent dot */}
              <div
                aria-hidden="true"
                className="absolute -top-3 -left-3 w-12 h-12 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] -z-10"
              />

              {/* ── Outer decorative ring ── */}
              <div
                aria-hidden="true"
                className="absolute -inset-2 rounded-full border-2 border-dashed border-blue-200/60"
              />

              {/* ── Inner white border ring (sits between outer ring and image) ── */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full ring-4 ring-white ring-offset-4 ring-offset-[#EFF6FF]"
              />

              {/* ── Profile image ── */}
              <motion.img
                src={PERSONAL.profileImage}
                alt="Sutrave Tanmai"
                width={420}
                height={420}
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="relative z-10
                           w-[260px] h-[260px]
                           sm:w-[340px] sm:h-[340px]
                           lg:w-[400px] lg:h-[400px]
                           xl:w-[420px] xl:h-[420px]
                           rounded-full
                           object-cover object-center
                           border-[4px] border-white
                           shadow-[0_24px_64px_-12px_rgba(37,99,235,0.22),0_8px_28px_-6px_rgba(15,23,42,0.14)]"
                loading="eager"
                decoding="async"
                draggable={false}
              />

            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
