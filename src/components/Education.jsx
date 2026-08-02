import { motion } from 'framer-motion';
import {
  HiAcademicCap,
  HiCalendar,
  HiBookOpen,
  HiBadgeCheck,
  HiClock,
} from 'react-icons/hi';
import { HiMiniTrophy } from 'react-icons/hi2';
import education from '../data/education';

// ─── Section subtitle ─────────────────────────────────────────────────────────
const SUBTITLE =
  'My academic journey has provided a strong foundation in computer science, software development, and data analytics, enabling me to build practical solutions through continuous learning and hands-on projects.';

// ─── Framer Motion variants ───────────────────────────────────────────────────
const headingVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 },
  }),
};

// ─── Status Badge ─────────────────────────────────────────────────────────────
function StatusBadge({ status, type }) {
  const isActive = type === 'active';
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-body
        ${isActive
          ? 'bg-blue-50 text-accent-blue border border-blue-200'
          : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
        }`}
    >
      {isActive ? (
        <HiClock size={12} aria-hidden="true" />
      ) : (
        <HiBadgeCheck size={12} aria-hidden="true" />
      )}
      {status}
    </span>
  );
}

// ─── Institution Logo / Fallback Icon ─────────────────────────────────────────
function InstitutionLogo({ logo, name }) {
  if (logo) {
    return (
      <img
        src={logo}
        alt={`${name} logo`}
        className="w-12 h-12 rounded-xl object-contain border border-border bg-white p-1"
      />
    );
  }
  return (
    <div
      aria-hidden="true"
      className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100
                 flex items-center justify-center flex-shrink-0"
    >
      <HiAcademicCap size={24} className="text-accent-blue" />
    </div>
  );
}

// ─── Coursework Pill List ─────────────────────────────────────────────────────
function CourseworkList({ items }) {
  if (!items || items.length === 0) return null;
  return (
    <div className="mt-5 pt-5 border-t border-border">
      <div className="flex items-center gap-2 mb-3">
        <HiBookOpen size={15} className="text-accent-blue flex-shrink-0" aria-hidden="true" />
        <span className="font-body text-xs font-semibold text-text-secondary uppercase tracking-wider">
          Relevant Coursework
        </span>
      </div>
      <ul className="flex flex-wrap gap-2" role="list">
        {items.map((course) => (
          <li key={course}>
            <span className="inline-block px-3 py-1 bg-bg-secondary border border-border
                             rounded-lg text-xs font-medium text-text-secondary font-body
                             hover:border-accent-blue hover:text-accent-blue transition-colors duration-200">
              {course}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Single Education Card ────────────────────────────────────────────────────
function EducationCard({ item, index }) {
  return (
    <div className="relative flex gap-6 md:gap-8">

      {/* ── Timeline spine + dot ── */}
      <div className="flex flex-col items-center flex-shrink-0" aria-hidden="true">
        {/* Dot */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: index * 0.12 + 0.1, type: 'spring', stiffness: 200 }}
          className="relative z-10 w-4 h-4 rounded-full border-2 border-accent-blue bg-white mt-5 flex-shrink-0"
        >
          {/* Pulse ring for active entry */}
          {item.statusType === 'active' && (
            <span className="absolute inset-0 rounded-full bg-accent-blue/30 animate-ping" />
          )}
        </motion.div>

        {/* Vertical line (hidden on last item) */}
        <div className="flex-1 w-px bg-border mt-1" />
      </div>

      {/* ── Card ── */}
      <motion.article
        custom={index}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        whileHover={{
          y: -4,
          boxShadow: '0 12px 32px -8px rgba(37,99,235,0.10), 0 4px 16px -4px rgba(15,23,42,0.08)',
        }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        className="flex-1 bg-card border border-border rounded-2xl p-6 md:p-7 shadow-sm mb-8
                   cursor-default"
        aria-label={`${item.institution} – ${item.degree}`}
      >

        {/* ── Card Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">

          {/* Logo + institution name */}
          <div className="flex items-center gap-4">
            <InstitutionLogo logo={item.logo} name={item.institution} />
            <div>
              <h3 className="font-heading font-semibold text-lg text-text-primary leading-snug">
                {item.institution}
              </h3>
              <p className="font-body text-sm font-medium text-accent-blue mt-0.5">
                {item.degree}
              </p>
              {item.branch && (
                <p className="font-body text-sm text-text-secondary mt-0.5">
                  {item.branch}
                </p>
              )}
            </div>
          </div>

          {/* Status badge */}
          <div className="flex-shrink-0">
            <StatusBadge status={item.status} type={item.statusType} />
          </div>
        </div>

        {/* ── Meta row: duration + score ── */}
        <div className="flex flex-wrap gap-4 mt-5">
          {/* Duration */}
          <div className="flex items-center gap-2 text-text-secondary">
            <HiCalendar size={15} className="text-accent-blue flex-shrink-0" aria-hidden="true" />
            <span className="font-body text-sm">{item.duration}</span>
          </div>

          {/* Score */}
          <div className="flex items-center gap-2 text-text-secondary">
            <HiMiniTrophy size={15} className="text-accent-blue flex-shrink-0" aria-hidden="true" />
            <span className="font-body text-sm">
              <span className="font-semibold text-text-primary">{item.score}</span>
              <span className="ml-1 text-xs text-text-secondary">{item.scoreLabel}</span>
            </span>
          </div>
        </div>

        {/* ── Description ── */}
        <p className="font-body text-sm leading-relaxed text-text-secondary mt-4">
          {item.description}
        </p>

        {/* ── Coursework pills (B.Tech only) ── */}
        <CourseworkList items={item.coursework} />

      </motion.article>
    </div>
  );
}

// ─── Education Section ────────────────────────────────────────────────────────
export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="py-24 bg-bg-secondary"
    >
      <div className="max-w-container mx-auto px-6 lg:px-8">

        {/* ── Section Header ── */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-14"
        >
          <p className="font-body text-sm font-semibold text-accent-blue uppercase tracking-widest mb-2">
            Academic Background
          </p>
          <h2
            id="education-heading"
            className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4"
          >
            Education
          </h2>
          <div className="w-12 h-1 bg-accent-blue rounded-full mb-5" aria-hidden="true" />
          <p className="font-body text-base text-text-secondary max-w-2xl leading-relaxed">
            {SUBTITLE}
          </p>
        </motion.div>

        {/* ── Timeline ── */}
        <div className="max-w-3xl">
          {education.map((item, index) => (
            <EducationCard key={item.id} item={item} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
