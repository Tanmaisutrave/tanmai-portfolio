import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HiBriefcase,
  HiCalendar,
  HiChip,
  HiExternalLink,
  HiBadgeCheck,
  HiClock,
  HiLightningBolt,
  HiCheckCircle,
  HiX,
  HiZoomIn,
} from 'react-icons/hi';
import { HiMiniShieldCheck } from 'react-icons/hi2';
import { FaGithub } from 'react-icons/fa';
import { HiMiniTrophy } from 'react-icons/hi2';
import experience from '../data/experience';

// ─── Section meta ─────────────────────────────────────────────────────────────
const SUBTITLE =
  'A collection of practical development experience, hands-on projects, and industry simulations that demonstrate my technical abilities, problem-solving skills, and continuous learning mindset.';

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
  hidden: { opacity: 0, y: 36 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.14 },
  }),
};

const badgeVariant = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

const modalBackdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.22 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const modalPanel = {
  hidden: { opacity: 0, scale: 0.93, y: 16 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, scale: 0.95, y: 8, transition: { duration: 0.2 } },
};

// ─── Employment type badge ────────────────────────────────────────────────────
const TYPE_STYLES = {
  active:     'bg-blue-50 text-accent-blue border-blue-200',
  simulation: 'bg-violet-50 text-violet-700 border-violet-200',
  completed:  'bg-emerald-50 text-emerald-700 border-emerald-200',
};

const TYPE_ICONS = {
  active:     HiClock,
  simulation: HiLightningBolt,
  completed:  HiBadgeCheck,
};

function EmploymentBadge({ label, variant }) {
  const style = TYPE_STYLES[variant] || TYPE_STYLES.completed;
  const Icon  = TYPE_ICONS[variant]  || HiBadgeCheck;
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-body border ${style}`}>
      <Icon size={11} aria-hidden="true" />
      {label}
    </span>
  );
}

// ─── Technology / Skill pill ──────────────────────────────────────────────────
function Pill({ label, accent = false }) {
  return (
    <motion.span
      variants={badgeVariant}
      whileHover={{ scale: 1.07, y: -1 }}
      transition={{ type: 'spring', stiffness: 320, damping: 18 }}
      className={`inline-block px-3 py-1 rounded-lg text-xs font-medium font-body border
                  transition-colors duration-200 cursor-default select-none
                  ${accent
                    ? 'bg-blue-50 text-accent-blue border-blue-200 hover:bg-blue-100'
                    : 'bg-bg-secondary text-text-secondary border-border hover:border-accent-blue hover:text-accent-blue'
                  }`}
    >
      {label}
    </motion.span>
  );
}

// ─── Action button ────────────────────────────────────────────────────────────
const BUTTON_ICONS = {
  external: HiExternalLink,
  github:   FaGithub,
  award:    HiMiniTrophy,
};

function ActionButton({ label, url, variant, icon, disabled, onClick }) {
  const Icon = BUTTON_ICONS[icon] || HiExternalLink;

  const base      = `inline-flex items-center gap-2 px-4 py-2 rounded-xl font-body text-sm font-medium
                     transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2`;
  const primary   = 'bg-accent-blue text-white hover:bg-blue-700 shadow-sm shadow-blue-200';
  const secondary = 'border border-border text-text-secondary bg-background hover:border-accent-blue hover:text-accent-blue hover:bg-blue-50';
  const dis       = 'border border-border text-text-secondary/50 bg-bg-secondary cursor-not-allowed opacity-60';

  const cls = `${base} ${disabled ? dis : variant === 'primary' ? primary : secondary}`;

  // onClick handler → open lightbox internally (no external URL needed)
  if (onClick) {
    return (
      <motion.button
        type="button"
        onClick={onClick}
        whileHover={{ scale: 1.04, y: -1 }}
        whileTap={{ scale: 0.97 }}
        className={`${base} ${secondary}`}
        aria-label={label}
      >
        <Icon size={14} aria-hidden="true" />
        {label}
      </motion.button>
    );
  }

  if (disabled || !url) {
    return (
      <span className={cls} aria-disabled="true" role="button" tabIndex={-1}>
        <Icon size={14} aria-hidden="true" />
        {label}
        <span className="text-[10px] font-normal opacity-70">(Coming Soon)</span>
      </span>
    );
  }

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} – opens in new tab`}
      whileHover={{ scale: 1.04, y: -1 }}
      whileTap={{ scale: 0.97 }}
      className={cls}
    >
      <Icon size={14} aria-hidden="true" />
      {label}
    </motion.a>
  );
}

// ─── Organisation icon ────────────────────────────────────────────────────────
function OrgIcon({ variant }) {
  const bg   = variant === 'active' ? 'bg-accent-blue' : variant === 'simulation' ? 'bg-violet-600' : 'bg-emerald-600';
  const Icon = variant === 'simulation' ? HiChip : HiBriefcase;
  return (
    <div className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center flex-shrink-0`} aria-hidden="true">
      <Icon size={20} className="text-white" />
    </div>
  );
}

// ─── Certificate Lightbox Modal ───────────────────────────────────────────────
function CertificateModal({ cert, onClose }) {
  // Close on ESC key
  const handleKey = useCallback((e) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="backdrop"
        variants={modalBackdrop}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
        aria-modal="true"
        role="dialog"
        aria-label="Certificate preview"
      >
        {/* Panel – stop click propagating to backdrop */}
        <motion.div
          key="panel"
          variants={modalPanel}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()}
          className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full p-4 md:p-6"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close certificate preview"
            className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-bg-secondary border border-border
                       flex items-center justify-center text-text-secondary
                       hover:bg-red-50 hover:border-red-200 hover:text-red-500
                       transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-blue"
          >
            <HiX size={18} aria-hidden="true" />
          </button>

          {/* Certificate image */}
          <div className="overflow-hidden rounded-xl border border-border bg-bg-secondary">
            <img
              src={cert.image}
              alt={`${cert.title} certificate`}
              className="w-full h-auto object-contain max-h-[70vh]"
              draggable={false}
            />
          </div>

          {/* Footer meta */}
          <div className="flex items-center justify-between mt-4 gap-4 flex-wrap">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-violet-100 flex items-center justify-center flex-shrink-0">
                <HiMiniShieldCheck size={16} className="text-violet-600" aria-hidden="true" />
              </div>
              <div>
                <p className="font-heading font-semibold text-sm text-text-primary leading-tight">
                  {cert.title}
                </p>
                <p className="font-body text-xs text-text-secondary">{cert.issuer}</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold
                             bg-emerald-50 text-emerald-700 border border-emerald-200 font-body">
              <HiBadgeCheck size={12} aria-hidden="true" />
              Verified Completion
            </span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Inline Certificate Preview Panel ────────────────────────────────────────
function CertificatePanel({ cert, onOpen }) {
  return (
    <motion.div
      variants={fadeUp}
      custom={0.15}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="flex flex-col gap-3"
    >
      {/* Image card */}
      <motion.button
        type="button"
        onClick={onOpen}
        aria-label="Click to preview certificate"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.99 }}
        transition={{ type: 'spring', stiffness: 280, damping: 22 }}
        className="relative group block w-full rounded-2xl overflow-hidden border border-border shadow-sm
                   bg-bg-secondary cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent-blue"
      >
        <img
          src={cert.image}
          alt={`${cert.title} certificate preview`}
          className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
          draggable={false}
        />
        {/* Hover overlay with zoom hint */}
        <div className="absolute inset-0 bg-text-primary/0 group-hover:bg-text-primary/10
                        transition-colors duration-300 rounded-2xl
                        flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300
                          w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center">
            <HiZoomIn size={18} className="text-text-primary" aria-hidden="true" />
          </div>
        </div>
      </motion.button>

      {/* Certificate meta card */}
      <div className="bg-bg-secondary border border-border rounded-xl p-4 flex items-start gap-3">
        <div className="w-9 h-9 rounded-lg bg-violet-100 flex items-center justify-center flex-shrink-0 mt-0.5">
          <HiMiniShieldCheck size={17} className="text-violet-600" aria-hidden="true" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-heading font-semibold text-sm text-text-primary leading-snug">
            {cert.title}
          </p>
          <p className="font-body text-xs text-text-secondary mt-0.5">{cert.issuer}</p>
          <span className="inline-flex items-center gap-1 mt-2 px-2.5 py-0.5 rounded-full
                           bg-emerald-50 text-emerald-700 border border-emerald-200
                           font-body text-[10px] font-semibold">
            <HiBadgeCheck size={10} aria-hidden="true" />
            Verified Completion
          </span>
        </div>
      </div>

      {/* View Certificate button */}
      <motion.button
        type="button"
        onClick={onOpen}
        whileHover={{ scale: 1.03, y: -1 }}
        whileTap={{ scale: 0.97 }}
        aria-label="Open certificate in full view"
        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl
                   border border-border text-text-secondary bg-background font-body text-sm font-medium
                   hover:border-accent-blue hover:text-accent-blue hover:bg-blue-50
                   transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2"
      >
        <HiMiniTrophy size={15} aria-hidden="true" />
        View Certificate
      </motion.button>
    </motion.div>
  );
}

// ─── Single Experience Card ───────────────────────────────────────────────────
function ExperienceCard({ item, index, isLast }) {
  const [modalOpen, setModalOpen] = useState(false);

  const hasTech        = item.technologies?.length > 0;
  const hasSkills      = item.skills?.length > 0;
  const hasCertificate = Boolean(item.certificate);

  return (
    <>
      {/* Certificate modal – rendered at root level via AnimatePresence */}
      {hasCertificate && modalOpen && (
        <CertificateModal
          cert={item.certificate}
          onClose={() => setModalOpen(false)}
        />
      )}

      <div className="relative flex gap-6 md:gap-8">

        {/* ── Timeline spine ── */}
        <div className="flex flex-col items-center flex-shrink-0" aria-hidden="true">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.14 + 0.05, type: 'spring', stiffness: 220 }}
            className="relative z-10 w-4 h-4 rounded-full border-2 border-accent-blue bg-white mt-6 flex-shrink-0"
          >
            {item.typeVariant === 'active' && (
              <span className="absolute inset-0 rounded-full bg-accent-blue/30 animate-ping" />
            )}
          </motion.div>
          {!isLast && <div className="flex-1 w-px bg-border mt-1" />}
        </div>

        {/* ── Card ── */}
        <motion.article
          custom={index}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          whileHover={{
            y: -5,
            boxShadow: '0 16px 40px -10px rgba(37,99,235,0.10), 0 4px 16px -4px rgba(15,23,42,0.08)',
          }}
          transition={{ type: 'spring', stiffness: 240, damping: 22 }}
          className="flex-1 bg-card border border-border rounded-2xl p-6 md:p-7 shadow-sm mb-8"
          aria-label={`${item.role} at ${item.organization}`}
        >

          {/* ── Card header ── */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="flex items-start gap-4">
              <OrgIcon variant={item.typeVariant} />
              <div>
                <h3 className="font-heading font-semibold text-lg leading-snug text-text-primary">
                  {item.role}
                </h3>
                <p className="font-body text-sm font-medium text-accent-blue mt-0.5">
                  {item.organization}
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 sm:pt-1">
              <EmploymentBadge label={item.employmentType} variant={item.typeVariant} />
            </div>
          </div>

          {/* ── Duration ── */}
          <div className="flex items-center gap-2 mt-4 text-text-secondary">
            <HiCalendar size={14} className="text-accent-blue flex-shrink-0" aria-hidden="true" />
            <span className="font-body text-sm">{item.duration}</span>
          </div>

          {/* ── Two-column layout when certificate exists ── */}
          <div className={hasCertificate ? 'grid grid-cols-1 lg:grid-cols-2 gap-8 mt-5' : 'mt-4'}>

            {/* Left / main content column */}
            <div className={hasCertificate ? '' : 'mt-0'}>

              {/* Description */}
              <p className="font-body text-sm leading-relaxed text-text-secondary">
                {item.description}
              </p>

              {/* Responsibilities */}
              {item.responsibilities?.length > 0 && (
                <div className="mt-5 pt-5 border-t border-border">
                  <p className="font-body text-xs font-semibold text-text-secondary uppercase tracking-wider mb-3">
                    Key Responsibilities
                  </p>
                  <ul className="space-y-2" role="list">
                    {item.responsibilities.map((r, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <HiCheckCircle size={15} className="text-accent-blue flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="font-body text-sm text-text-secondary leading-relaxed">{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              {hasTech && (
                <div className="mt-5 pt-5 border-t border-border">
                  <div className="flex items-center gap-2 mb-3">
                    <HiChip size={14} className="text-accent-blue flex-shrink-0" aria-hidden="true" />
                    <p className="font-body text-xs font-semibold text-text-secondary uppercase tracking-wider">
                      Technologies Used
                    </p>
                  </div>
                  <motion.div variants={stagger} initial="hidden" whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }} className="flex flex-wrap gap-2">
                    {item.technologies.map((tech) => <Pill key={tech} label={tech} accent />)}
                  </motion.div>
                </div>
              )}

              {/* Skills Gained */}
              {hasSkills && (
                <div className="mt-5 pt-5 border-t border-border">
                  <div className="flex items-center gap-2 mb-3">
                    <HiBadgeCheck size={14} className="text-accent-blue flex-shrink-0" aria-hidden="true" />
                    <p className="font-body text-xs font-semibold text-text-secondary uppercase tracking-wider">
                      Skills Gained
                    </p>
                  </div>
                  <motion.div variants={stagger} initial="hidden" whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }} className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => <Pill key={skill} label={skill} />)}
                  </motion.div>
                </div>
              )}

              {/* Action buttons (non-certificate) */}
              {item.buttons?.length > 0 && !hasCertificate && (
                <div className="mt-6 pt-5 border-t border-border flex flex-wrap gap-3">
                  {item.buttons.map((btn) => (
                    <ActionButton key={btn.id} {...btn} />
                  ))}
                </div>
              )}
            </div>

            {/* Right column – certificate panel (only renders when data has certificate) */}
            {hasCertificate && (
              <div className="lg:border-l lg:border-border lg:pl-8">
                <p className="font-body text-xs font-semibold text-text-secondary uppercase tracking-wider mb-4">
                  Certificate
                </p>
                <CertificatePanel
                  cert={item.certificate}
                  onOpen={() => setModalOpen(true)}
                />
              </div>
            )}
          </div>

        </motion.article>
      </div>
    </>
  );
}

// ─── Experience Section ───────────────────────────────────────────────────────
export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-24 bg-background"
    >
      <div className="max-w-container mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-14"
        >
          <p className="font-body text-sm font-semibold text-accent-blue uppercase tracking-widest mb-2">
            Work & Projects
          </p>
          <h2
            id="experience-heading"
            className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4"
          >
            Professional Experience
          </h2>
          <div className="w-12 h-1 bg-accent-blue rounded-full mb-5" aria-hidden="true" />
          <p className="font-body text-base text-text-secondary max-w-2xl leading-relaxed">
            {SUBTITLE}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl">
          {experience.map((item, index) => (
            <ExperienceCard
              key={item.id}
              item={item}
              index={index}
              isLast={index === experience.length - 1}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
