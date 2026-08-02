import { motion } from 'framer-motion';
import skills from '../data/skills';

// ─── Section content ──────────────────────────────────────────────────────────
const SUBTITLE =
  'A diverse technical skill set built through academic learning, hands-on projects, certifications, and continuous exploration of modern software development and data analytics technologies.';

const BANNER_TEXT =
  'I enjoy building modern web applications, analyzing data to uncover insights, and continuously learning emerging technologies that help solve real-world problems.';

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
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 },
  }),
};

const badgeStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
};

const badgeItem = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.28, ease: 'easeOut' } },
};

// ─── Skill badge pill ─────────────────────────────────────────────────────────
function SkillBadge({ label }) {
  return (
    <motion.span
      variants={badgeItem}
      whileHover={{ scale: 1.08, y: -2 }}
      transition={{ type: 'spring', stiffness: 340, damping: 18 }}
      className="inline-block px-3 py-1.5 rounded-full
                 bg-bg-secondary border border-border
                 font-body text-xs font-medium text-text-secondary
                 hover:border-accent-blue hover:text-accent-blue hover:bg-blue-50
                 transition-colors duration-200 cursor-default select-none"
    >
      {label}
    </motion.span>
  );
}

// ─── Skill category card ──────────────────────────────────────────────────────
function SkillCard({ category, icon: Icon, iconColor, iconBg, description, items, index }) {
  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      whileHover={{
        y: -6,
        boxShadow: '0 20px 48px -12px rgba(37,99,235,0.10), 0 6px 20px -4px rgba(15,23,42,0.07)',
      }}
      transition={{ type: 'spring', stiffness: 240, damping: 22 }}
      className="bg-card border border-border rounded-[20px] p-6 shadow-sm flex flex-col gap-4"
      aria-label={`${category} skills`}
    >
      {/* ── Card header ── */}
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div
          className={`w-11 h-11 rounded-xl ${iconBg} flex items-center justify-center flex-shrink-0`}
          aria-hidden="true"
        >
          <Icon size={20} className={iconColor} />
        </div>

        {/* Title + description */}
        <div>
          <h3 className="font-heading font-semibold text-base text-text-primary leading-snug">
            {category}
          </h3>
          <p className="font-body text-xs text-text-secondary mt-1 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="w-full h-px bg-border" aria-hidden="true" />

      {/* ── Skill badges ── */}
      <motion.div
        variants={badgeStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="flex flex-wrap gap-2"
      >
        {items.map((skill) => (
          <SkillBadge key={skill} label={skill} />
        ))}
      </motion.div>
    </motion.article>
  );
}

// ─── Skills Section ───────────────────────────────────────────────────────────
export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
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
          className="mb-12"
        >
          <p className="font-body text-sm font-semibold text-accent-blue uppercase tracking-widest mb-2">
            Expertise & Tools
          </p>
          <h2
            id="skills-heading"
            className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4"
          >
            Technical Skills
          </h2>
          <div className="w-12 h-1 bg-accent-blue rounded-full mb-5" aria-hidden="true" />
          <p className="font-body text-base text-text-secondary max-w-2xl leading-relaxed">
            {SUBTITLE}
          </p>
        </motion.div>

        {/* ── Professional banner ── */}
        <motion.div
          variants={fadeUp}
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12"
        >
          <div className="relative bg-card border border-border rounded-2xl px-7 py-5 shadow-sm overflow-hidden">
            {/* Subtle left accent bar */}
            <div
              className="absolute left-0 top-0 bottom-0 w-1 bg-accent-blue rounded-l-2xl"
              aria-hidden="true"
            />
            <p className="font-body text-sm leading-relaxed text-text-secondary pl-2">
              <span className="font-semibold text-text-primary">What I Work With — </span>
              {BANNER_TEXT}
            </p>
          </div>
        </motion.div>

        {/* ── Skills grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((cat, index) => (
            <SkillCard
              key={cat.id}
              index={index}
              category={cat.category}
              icon={cat.icon}
              iconColor={cat.iconColor}
              iconBg={cat.iconBg}
              description={cat.description}
              items={cat.items}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
