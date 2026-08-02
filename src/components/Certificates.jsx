import { motion } from 'framer-motion';
import {
  HiAcademicCap,
  HiBadgeCheck,
  HiLightningBolt,
} from 'react-icons/hi';
import {
  HiMiniTrophy,
  HiMiniSparkles,
  HiMiniShieldCheck,
} from 'react-icons/hi2';
import { achievements, certifications } from '../data/certificates';

// ─── Section content ──────────────────────────────────────────────────────────
const SUBTITLE =
  'A collection of professional certifications, technical achievements, and continuous learning experiences that reflect my commitment to expanding my technical expertise and professional skills.';

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
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.09 },
  }),
};

const badgeStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } },
};

const badgeItem = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.25, ease: 'easeOut' } },
};

// ─── Skill badge pill ─────────────────────────────────────────────────────────
function SkillBadge({ label }) {
  return (
    <motion.span
      variants={badgeItem}
      whileHover={{ scale: 1.07, y: -2 }}
      transition={{ type: 'spring', stiffness: 340, damping: 18 }}
      className="inline-block px-3 py-1 rounded-full
                 bg-bg-secondary border border-border
                 font-body text-xs font-medium text-text-secondary
                 hover:border-accent-blue hover:text-accent-blue hover:bg-blue-50
                 transition-colors duration-200 cursor-default select-none"
    >
      {label}
    </motion.span>
  );
}

// ─── Type badge ───────────────────────────────────────────────────────────────
function TypeBadge({ label, variant = 'default' }) {
  const styles = {
    achievement: 'bg-amber-50 border-amber-200 text-amber-700',
    applied:     'bg-violet-50 border-violet-200 text-violet-700',
    default:     'bg-blue-50 border-blue-200 text-accent-blue',
  };

  const key = label.toLowerCase().includes('achievement') ? 'achievement'
            : label.toLowerCase().includes('applied')     ? 'applied'
            : 'default';

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full
                      text-[11px] font-semibold font-body border ${styles[key]}`}>
      <HiMiniSparkles size={10} aria-hidden="true" />
      {label}
    </span>
  );
}

// ─── Achievement Card ─────────────────────────────────────────────────────────
function AchievementCard({ item, index }) {
  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      whileHover={{
        y: -6,
        boxShadow: '0 20px 48px -12px rgba(245,158,11,0.12), 0 6px 20px -4px rgba(15,23,42,0.08)',
      }}
      transition={{ type: 'spring', stiffness: 240, damping: 22 }}
      className="bg-card border border-border rounded-[20px] p-6 shadow-sm flex flex-col gap-4"
      aria-label={item.title}
    >
      {/* ── Header ── */}
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200
                     flex items-center justify-center flex-shrink-0"
          aria-hidden="true"
        >
          <HiMiniTrophy size={22} className="text-amber-600" />
        </div>

        {/* Title block */}
        <div className="flex-1 min-w-0">
          <h3 className="font-heading font-bold text-base text-text-primary leading-snug">
            {item.title}
          </h3>
          <p className="font-body text-sm font-medium text-amber-600 mt-0.5">
            {item.organization}
          </p>
          {item.organizationSub && (
            <p className="font-body text-xs text-text-secondary mt-0.5">
              {item.organizationSub}
            </p>
          )}
        </div>
      </div>

      {/* ── Badges row ── */}
      <div className="flex flex-wrap gap-2">
        <TypeBadge label={item.type} />
        {/* Winner / status badge */}
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full
                         bg-amber-50 border border-amber-200
                         text-[11px] font-semibold font-body text-amber-700">
          <HiMiniTrophy size={10} aria-hidden="true" />
          {item.status}
        </span>
        {/* Verified badge */}
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full
                         bg-emerald-50 border border-emerald-200
                         text-[11px] font-semibold font-body text-emerald-700">
          <HiMiniShieldCheck size={10} aria-hidden="true" />
          Verified
        </span>
      </div>

      {/* ── Divider ── */}
      <div className="w-full h-px bg-border" aria-hidden="true" />

      {/* ── Description ── */}
      <p className="font-body text-sm leading-relaxed text-text-secondary">
        {item.description}
      </p>

      {/* ── Skills ── */}
      <div>
        <p className="font-body text-[10px] font-semibold text-text-secondary uppercase tracking-wider mb-2">
          Skills Demonstrated
        </p>
        <motion.div
          variants={badgeStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-wrap gap-2"
        >
          {item.skills.map((s) => (
            <SkillBadge key={s} label={s} />
          ))}
        </motion.div>
      </div>
    </motion.article>
  );
}

// ─── Certification Card ───────────────────────────────────────────────────────
function CertificationCard({ item, index }) {
  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      whileHover={{
        y: -6,
        boxShadow: '0 20px 48px -12px rgba(37,99,235,0.10), 0 6px 20px -4px rgba(15,23,42,0.08)',
      }}
      transition={{ type: 'spring', stiffness: 240, damping: 22 }}
      className="bg-card border border-border rounded-[20px] p-6 shadow-sm flex flex-col gap-4"
      aria-label={item.title}
    >
      {/* ── Header ── */}
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100
                     flex items-center justify-center flex-shrink-0"
          aria-hidden="true"
        >
          <HiAcademicCap size={22} className="text-accent-blue" />
        </div>

        {/* Title block */}
        <div className="flex-1 min-w-0">
          <h3 className="font-heading font-bold text-base text-text-primary leading-snug">
            {item.title}
          </h3>
          {item.subtitle && (
            <p className="font-body text-xs font-semibold text-accent-blue mt-0.5">
              {item.subtitle}
            </p>
          )}
          <p className="font-body text-sm font-medium text-text-secondary mt-0.5">
            {item.organization}
          </p>
          {item.completedDate && (
            <p className="font-body text-xs text-text-secondary mt-0.5">
              {item.completedDate}
            </p>
          )}
        </div>
      </div>

      {/* ── Badges row ── */}
      <div className="flex flex-wrap gap-2">
        <TypeBadge label={item.type} />
        {/* Completed badge */}
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full
                         bg-emerald-50 border border-emerald-200
                         text-[11px] font-semibold font-body text-emerald-700">
          <HiBadgeCheck size={10} aria-hidden="true" />
          Completed
        </span>
        {/* Verified badge */}
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full
                         bg-slate-50 border border-slate-200
                         text-[11px] font-semibold font-body text-slate-600">
          <HiMiniShieldCheck size={10} aria-hidden="true" />
          Verified
        </span>
      </div>

      {/* ── Divider ── */}
      <div className="w-full h-px bg-border" aria-hidden="true" />

      {/* ── Description ── */}
      <p className="font-body text-sm leading-relaxed text-text-secondary">
        {item.description}
      </p>

      {/* ── Skills ── */}
      <div className="mt-auto">
        <p className="font-body text-[10px] font-semibold text-text-secondary uppercase tracking-wider mb-2">
          Skills
        </p>
        <motion.div
          variants={badgeStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-wrap gap-2"
        >
          {item.skills.map((s) => (
            <SkillBadge key={s} label={s} />
          ))}
        </motion.div>
      </div>
    </motion.article>
  );
}

// ─── Section group header ─────────────────────────────────────────────────────
function GroupHeader({ emoji, title, count }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="text-2xl" role="img" aria-label={title}>
        {emoji}
      </span>
      <div>
        <h3 className="font-heading font-bold text-xl text-text-primary">
          {title}
        </h3>
      </div>
      <span className="ml-auto font-body text-xs font-semibold text-text-secondary
                       bg-bg-secondary border border-border px-2.5 py-1 rounded-full">
        {count} {count === 1 ? 'item' : 'items'}
      </span>
    </div>
  );
}

// ─── Certificates Section ─────────────────────────────────────────────────────
export default function Certificates() {
  return (
    <section
      id="certificates"
      aria-labelledby="certificates-heading"
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
            Credentials & Recognition
          </p>
          <h2
            id="certificates-heading"
            className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4"
          >
            Certifications & Achievements
          </h2>
          <div className="w-12 h-1 bg-accent-blue rounded-full mb-5" aria-hidden="true" />
          <p className="font-body text-base text-text-secondary max-w-2xl leading-relaxed">
            {SUBTITLE}
          </p>
        </motion.div>

        {/* ── Achievements ── */}
        {achievements.length > 0 && (
          <motion.div
            variants={fadeUp}
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mb-14"
          >
            <GroupHeader emoji="🏆" title="Achievements" count={achievements.length} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {achievements.map((item, i) => (
                <AchievementCard key={item.id} item={item} index={i} />
              ))}
            </div>
          </motion.div>
        )}

        {/* ── Divider between groups ── */}
        {achievements.length > 0 && certifications.length > 0 && (
          <div className="w-full h-px bg-border mb-14" aria-hidden="true" />
        )}

        {/* ── Professional Certifications ── */}
        {certifications.length > 0 && (
          <motion.div
            variants={fadeUp}
            custom={0.15}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <GroupHeader emoji="📜" title="Professional Certifications" count={certifications.length} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {certifications.map((item, i) => (
                <CertificationCard key={item.id} item={item} index={i} />
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
