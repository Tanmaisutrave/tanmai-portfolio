import { motion } from 'framer-motion';
import {
  HiDownload,
  HiEye,
  HiAcademicCap,
  HiCode,
  HiBriefcase,
  HiDocumentText,
  HiBadgeCheck,
  HiSparkles,
} from 'react-icons/hi';

// ─── Resume file path (served from /public) ───────────────────────────────────
const RESUME_PATH = '/Resume.pdf';

// ─── Section copy ─────────────────────────────────────────────────────────────
const SUBTITLE =
  'Explore my professional journey, technical expertise, academic background, projects, and achievements through my latest resume.';

const DESCRIPTION =
  'My resume provides a comprehensive overview of my academic background, technical skills, professional experience, projects, certifications, and achievements. It reflects my passion for software development, data analytics, artificial intelligence, and continuous learning.';

// ─── Highlight cards ──────────────────────────────────────────────────────────
const HIGHLIGHTS = [
  {
    id: 'academic',
    icon: HiAcademicCap,
    iconBg: 'bg-blue-50',
    iconColor: 'text-accent-blue',
    label: 'Academic Excellence',
    lines: ['B.Tech Computer Science Engineering', 'CGPA: 9.02'],
  },
  {
    id: 'tech',
    icon: HiCode,
    iconBg: 'bg-violet-50',
    iconColor: 'text-violet-600',
    label: 'Technical Expertise',
    lines: ['Full Stack Development', 'Data Analytics', 'Artificial Intelligence', 'UI/UX Design'],
  },
  {
    id: 'projects',
    icon: HiBriefcase,
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    label: 'Projects',
    lines: ['10+ Academic & Professional Projects'],
  },
  {
    id: 'certs',
    icon: HiBadgeCheck,
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
    label: 'Certifications',
    lines: ['Industry Certifications', 'Workshop Winner', 'Microsoft Applied Skills'],
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

// ─── Highlight card ───────────────────────────────────────────────────────────
function HighlightCard({ item, index }) {
  const Icon = item.icon;
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{ y: -4, boxShadow: '0 12px 32px -8px rgba(37,99,235,0.10), 0 4px 12px -4px rgba(15,23,42,0.07)' }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className="bg-card border border-border rounded-2xl p-5 shadow-sm flex items-start gap-4"
    >
      <div
        className={`w-10 h-10 rounded-xl ${item.iconBg} flex items-center justify-center flex-shrink-0`}
        aria-hidden="true"
      >
        <Icon size={19} className={item.iconColor} />
      </div>
      <div>
        <p className="font-body text-[10px] font-semibold text-text-secondary uppercase tracking-wider mb-1">
          {item.label}
        </p>
        {item.lines.map((line) => (
          <p key={line} className="font-body text-sm text-text-primary font-medium leading-snug">
            {line}
          </p>
        ))}
      </div>
    </motion.div>
  );
}

// ─── Resume Section ───────────────────────────────────────────────────────────
export default function Resume() {
  return (
    <section
      id="resume"
      aria-labelledby="resume-heading"
      className="py-24 bg-bg-secondary"
    >
      <div className="max-w-container mx-auto px-6 lg:px-8">

        {/* ── Section Header ── */}
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-14"
        >
          <p className="font-body text-sm font-semibold text-accent-blue uppercase tracking-widest mb-2">
            My Resume
          </p>
          <h2
            id="resume-heading"
            className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4"
          >
            Resume
          </h2>
          <div className="w-12 h-1 bg-accent-blue rounded-full mb-5" aria-hidden="true" />
          <p className="font-body text-base text-text-secondary max-w-2xl leading-relaxed">
            {SUBTITLE}
          </p>
        </motion.div>

        {/* ── Two-column CTA layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ── Left – information + highlights ── */}
          <motion.div
            variants={fadeUp}
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {/* Document icon + heading */}
            <div className="flex items-center gap-4 mb-5">
              <div
                className="w-12 h-12 rounded-xl bg-accent-blue flex items-center justify-center flex-shrink-0"
                aria-hidden="true"
              >
                <HiDocumentText size={22} className="text-white" />
              </div>
              <h3 className="font-heading font-bold text-xl text-text-primary">
                Professional Resume
              </h3>
            </div>

            {/* Description */}
            <p className="font-body text-sm leading-relaxed text-text-secondary mb-8">
              {DESCRIPTION}
            </p>

            {/* Highlight cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {HIGHLIGHTS.map((item, i) => (
                <HighlightCard key={item.id} item={item} index={i} />
              ))}
            </div>
          </motion.div>

          {/* ── Right – action buttons + availability card ── */}
          <motion.div
            variants={fadeUp}
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="flex flex-col gap-6"
          >
            {/* Action card */}
            <div className="bg-card border border-border rounded-2xl p-7 shadow-sm flex flex-col gap-5">

              {/* Card header */}
              <div className="pb-4 border-b border-border">
                <p className="font-body text-xs font-semibold text-text-secondary uppercase tracking-wider mb-1">
                  Quick Access
                </p>
                <p className="font-heading font-bold text-lg text-text-primary">
                  Download or View Resume
                </p>
                <p className="font-body text-xs text-text-secondary mt-1">
                  PDF format · Always up to date
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">

                {/* Primary – Download */}
                <motion.a
                  href={RESUME_PATH}
                  download="Sutrave_Tanmai_Resume.pdf"
                  aria-label="Download resume PDF"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5
                             bg-accent-blue text-white font-body font-semibold text-sm rounded-xl
                             hover:bg-blue-700 shadow-md shadow-blue-200
                             transition-colors duration-200
                             focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2"
                >
                  <HiDownload size={18} aria-hidden="true" />
                  Download Resume
                </motion.a>

                {/* Secondary – View */}
                <motion.a
                  href={RESUME_PATH}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View resume in new browser tab"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5
                             border-2 border-accent-blue text-accent-blue bg-background font-body font-semibold text-sm rounded-xl
                             hover:bg-blue-50
                             transition-all duration-200
                             focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2"
                >
                  <HiEye size={18} aria-hidden="true" />
                  View Resume
                </motion.a>
              </div>

              {/* File info row */}
              <div className="flex items-center gap-2 pt-1">
                <HiDocumentText size={14} className="text-text-secondary flex-shrink-0" aria-hidden="true" />
                <span className="font-body text-xs text-text-secondary">
                  Sutrave_Tanmai_Resume.pdf · PDF Document
                </span>
                <span className="ml-auto inline-flex items-center gap-1 font-body text-[10px] font-semibold
                                 text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                  <HiBadgeCheck size={10} aria-hidden="true" />
                  Latest Version
                </span>
              </div>
            </div>

            {/* Availability card */}
            <motion.div
              whileHover={{ y: -4, boxShadow: '0 12px 32px -8px rgba(37,99,235,0.10), 0 4px 12px -4px rgba(15,23,42,0.07)' }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="bg-card border border-border rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200
                             flex items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                >
                  <HiSparkles size={18} className="text-emerald-600" />
                </div>
                <div>
                  <p className="font-heading font-bold text-sm text-text-primary">
                    Currently Seeking Opportunities
                  </p>
                  <p className="font-body text-sm text-text-secondary mt-1 leading-relaxed">
                    Open to internships and entry-level opportunities in Software Development,
                    Data Analytics, Artificial Intelligence, and Full Stack Development.
                  </p>
                  {/* Status indicator */}
                  <div className="flex items-center gap-2 mt-3">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                    </span>
                    <span className="font-body text-xs font-semibold text-emerald-700">
                      Available for Opportunities
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

          </motion.div>
          {/* end right column */}
        </div>
        {/* end grid */}

      </div>
    </section>
  );
}
