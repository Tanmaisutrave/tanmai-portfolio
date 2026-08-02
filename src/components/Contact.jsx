import { motion } from 'framer-motion';
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiBriefcase,
  HiArrowRight,
} from 'react-icons/hi';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import contact from '../data/contact';

// ─── Section copy ─────────────────────────────────────────────────────────────
const HERO_TITLE    = "Let's Build Something Great Together";
const HERO_SUBTITLE = "Whether you're looking for a Full Stack Developer, Data Analyst, AI/ML Enthusiast, or someone passionate about solving real-world problems through technology, I'd be happy to connect. I'm always open to discussing internships, full-time opportunities, freelance work, collaborations, and innovative projects.";
const LEFT_DESC     = "Thank you for taking the time to explore my portfolio. I'm passionate about building impactful software, developing intelligent AI solutions, and transforming data into meaningful insights. I enjoy solving challenging problems, continuously learning new technologies, and collaborating on projects that create real-world value. If you have an opportunity, project, or simply want to connect, I'd love to hear from you.";
const CLOSING_MSG   = "Always excited to work on meaningful projects, learn from experienced professionals, and contribute with dedication, curiosity, and strong problem-solving skills. Let's connect and create something impactful together.";

// ─── Opportunity cards ────────────────────────────────────────────────────────
const OPPORTUNITIES = [
  { id: 1, emoji: '💼', label: 'Software Development Internships' },
  { id: 2, emoji: '📊', label: 'Data Analytics & Business Intelligence' },
  { id: 3, emoji: '🤖', label: 'Artificial Intelligence & Machine Learning' },
  { id: 4, emoji: '🌐', label: 'Full Stack Development' },
];

// ─── Contact info cards ───────────────────────────────────────────────────────
const CONTACT_CARDS = [
  {
    id: 'email',
    icon: HiMail,
    iconBg: 'bg-blue-50',
    iconColor: 'text-accent-blue',
    label: 'Email',
    value: contact.email,
    href: `mailto:${contact.email}`,
    external: false,
  },
  {
    id: 'phone',
    icon: HiPhone,
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    label: 'Phone',
    value: contact.phone,
    href: `tel:${contact.phone}`,
    external: false,
  },
  {
    id: 'location',
    icon: HiLocationMarker,
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
    label: 'Location',
    value: contact.location,
    href: null,
    external: false,
  },
  {
    id: 'available',
    icon: HiBriefcase,
    iconBg: 'bg-violet-50',
    iconColor: 'text-violet-600',
    label: 'Available For',
    value: 'Internships · Entry-Level · Freelance · Collaborations',
    href: null,
    external: false,
  },
];

// ─── Framer Motion variants ───────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

// ─── Contact info card ────────────────────────────────────────────────────────
function ContactCard({ item, index }) {
  const Icon = item.icon;
  const inner = (
    <div className="flex items-start gap-4">
      <div
        className={`w-10 h-10 rounded-xl ${item.iconBg} flex items-center justify-center flex-shrink-0`}
        aria-hidden="true"
      >
        <Icon size={18} className={item.iconColor} />
      </div>
      <div className="min-w-0">
        <p className="font-body text-[10px] font-semibold text-text-secondary uppercase tracking-wider">
          {item.label}
        </p>
        <p className="font-body text-sm font-medium text-text-primary mt-0.5 leading-snug break-words">
          {item.value}
        </p>
      </div>
    </div>
  );

  const cls = `bg-card border border-border rounded-2xl p-5 shadow-sm
               transition-all duration-200 cursor-default`;

  if (item.href) {
    return (
      <motion.a
        href={item.href}
        custom={index}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        whileHover={{ y: -4, boxShadow: '0 12px 32px -8px rgba(37,99,235,0.10)' }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        className={`${cls} hover:border-accent-blue/40 block`}
        aria-label={item.label}
        {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -4, boxShadow: '0 12px 32px -8px rgba(37,99,235,0.10)' }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className={cls}
    >
      {inner}
    </motion.div>
  );
}

// ─── Opportunity pill ─────────────────────────────────────────────────────────
function OpportunityPill({ emoji, label, index }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ scale: 1.03, y: -2 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="flex items-center gap-3 px-4 py-3 bg-bg-secondary border border-border rounded-xl
                 hover:border-accent-blue hover:bg-blue-50 transition-colors duration-200 cursor-default"
    >
      <span className="text-lg flex-shrink-0" aria-hidden="true">{emoji}</span>
      <span className="font-body text-sm font-medium text-text-secondary">{label}</span>
    </motion.div>
  );
}

// ─── Contact Section ──────────────────────────────────────────────────────────
export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-24 bg-bg-secondary"
    >
      <div className="max-w-container mx-auto px-6 lg:px-8">

        {/* ── Section Hero Header ── */}
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm font-semibold text-accent-blue uppercase tracking-widest mb-3">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-5 max-w-2xl mx-auto leading-tight"
          >
            {HERO_TITLE}
          </h2>
          <div className="w-12 h-1 bg-accent-blue rounded-full mb-6 mx-auto" aria-hidden="true" />
          <p className="font-body text-base text-text-secondary max-w-2xl mx-auto leading-relaxed">
            {HERO_SUBTITLE}
          </p>
        </motion.div>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ── Left column ── */}
          <motion.div
            variants={fadeUp}
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="flex flex-col gap-8"
          >
            {/* Get In Touch block */}
            <div>
              <h3 className="font-heading font-bold text-2xl text-text-primary mb-4">
                Get In Touch
              </h3>
              <p className="font-body text-sm leading-[1.9] text-text-secondary">
                {LEFT_DESC}
              </p>
            </div>

            {/* Contact info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CONTACT_CARDS.map((item, i) => (
                <ContactCard key={item.id} item={item} index={i} />
              ))}
            </div>

            {/* Social links row */}
            <div className="flex flex-wrap gap-3">
              {/* LinkedIn */}
              <motion.a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile – opens in new tab"
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl
                           bg-[#0A66C2] text-white font-body text-sm font-medium
                           hover:bg-[#004182] shadow-sm transition-colors duration-200
                           focus:outline-none focus:ring-2 focus:ring-[#0A66C2] focus:ring-offset-2"
              >
                <FaLinkedinIn size={15} aria-hidden="true" />
                LinkedIn
              </motion.a>
              {/* GitHub */}
              <motion.a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile – opens in new tab"
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl
                           bg-text-primary text-white font-body text-sm font-medium
                           hover:bg-slate-700 shadow-sm transition-colors duration-200
                           focus:outline-none focus:ring-2 focus:ring-text-primary focus:ring-offset-2"
              >
                <FaGithub size={15} aria-hidden="true" />
                GitHub
              </motion.a>
              {/* Email */}
              <motion.a
                href={`mailto:${contact.email}`}
                aria-label="Send email"
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl
                           border border-border text-text-secondary bg-background font-body text-sm font-medium
                           hover:border-accent-blue hover:text-accent-blue hover:bg-blue-50
                           transition-all duration-200
                           focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2"
              >
                <HiMail size={15} aria-hidden="true" />
                Email
              </motion.a>
            </div>
          </motion.div>

          {/* ── Right column ── */}
          <motion.div
            variants={fadeUp}
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="flex flex-col gap-6"
          >
            {/* Open to Opportunities card */}
            <div className="bg-card border border-border rounded-2xl p-7 shadow-sm">

              {/* Card header */}
              <div className="flex items-center gap-3 mb-2">
                <span className="relative flex h-3 w-3" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
                <h3 className="font-heading font-bold text-lg text-text-primary">
                  Open to Opportunities
                </h3>
              </div>
              <p className="font-body text-xs text-emerald-600 font-medium mb-6">
                Currently available for internships &amp; entry-level roles
              </p>

              {/* Opportunity pills */}
              <div className="flex flex-col gap-3 mb-6">
                {OPPORTUNITIES.map((o, i) => (
                  <OpportunityPill key={o.id} {...o} index={i} />
                ))}
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-border mb-6" aria-hidden="true" />

              {/* Professional message */}
              <p className="font-body text-sm leading-relaxed text-text-secondary mb-6">
                {CLOSING_MSG}
              </p>

              {/* Action buttons */}
              <div className="flex flex-col gap-3">
                {/* Primary – Send Email */}
                <motion.a
                  href={`mailto:${contact.email}`}
                  aria-label="Send me an email"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5
                             bg-accent-blue text-white font-body font-semibold text-sm rounded-xl
                             hover:bg-blue-700 shadow-md shadow-blue-200
                             transition-colors duration-200
                             focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2"
                >
                  <HiMail size={17} aria-hidden="true" />
                  Send Email
                  <HiArrowRight size={15} className="ml-auto" aria-hidden="true" />
                </motion.a>

                {/* Secondary – LinkedIn */}
                <motion.a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile – opens in new tab"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5
                             border border-border text-text-secondary bg-background font-body font-semibold text-sm rounded-xl
                             hover:border-[#0A66C2] hover:text-[#0A66C2] hover:bg-blue-50
                             transition-all duration-200
                             focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2"
                >
                  <FaLinkedinIn size={15} aria-hidden="true" />
                  LinkedIn Profile
                </motion.a>

                {/* Outline – GitHub */}
                <motion.a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub portfolio – opens in new tab"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5
                             border-2 border-text-primary text-text-primary bg-background font-body font-semibold text-sm rounded-xl
                             hover:bg-slate-50 hover:border-slate-600
                             transition-all duration-200
                             focus:outline-none focus:ring-2 focus:ring-text-primary focus:ring-offset-2"
                >
                  <FaGithub size={15} aria-hidden="true" />
                  GitHub Portfolio
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
