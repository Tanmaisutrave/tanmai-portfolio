import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HiExternalLink,
  HiChevronDown,
  HiChevronUp,
  HiCheckCircle,
  HiCollection,
  HiPresentationChartBar,
  HiChartBar,
  HiGlobe,
} from 'react-icons/hi';
import { HiMiniSparkles, HiMiniSquares2X2 } from 'react-icons/hi2';
import { FaGithub } from 'react-icons/fa';
import { SiFigma, SiKaggle } from 'react-icons/si';
import projects from '../data/projects';

// ─── Section content ──────────────────────────────────────────────────────────
const SUBTITLE =
  'A collection of full-stack applications, data analytics solutions, and creative projects built through hands-on development, continuous learning, and real-world problem solving.';

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
    transition: { duration: 0.52, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};

const badgeStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
};

const badgeItem = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.25, ease: 'easeOut' } },
};

const sectionExpand = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.22, ease: 'easeIn' },
  },
};

// ─── Tech badge ───────────────────────────────────────────────────────────────
function TechBadge({ label }) {
  return (
    <motion.span
      variants={badgeItem}
      whileHover={{ scale: 1.08, y: -2 }}
      transition={{ type: 'spring', stiffness: 340, damping: 18 }}
      className="inline-block px-3 py-1 rounded-full
                 bg-blue-50 border border-blue-200 text-accent-blue
                 font-body text-xs font-medium
                 hover:bg-blue-100 transition-colors duration-200
                 cursor-default select-none"
    >
      {label}
    </motion.span>
  );
}

// ─── Collapsible accordion section ───────────────────────────────────────────
// Generic – works for Key Features, Database Design, Backend, Frontend, etc.
function AccordionSection({ section, projectId }) {
  const [open, setOpen] = useState(false);
  const panelId = `${projectId}-${section.id}`;

  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="w-full flex items-center justify-between px-4 py-3
                   bg-bg-secondary hover:bg-blue-50 transition-colors duration-200
                   focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent-blue"
      >
        <span className="font-body text-xs font-semibold text-text-secondary uppercase tracking-wider">
          {section.label}
        </span>
        <span className="text-text-secondary flex-shrink-0" aria-hidden="true">
          {open ? <HiChevronUp size={16} /> : <HiChevronDown size={16} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            key="panel"
            variants={sectionExpand}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="overflow-hidden"
          >
            <ul className="px-4 py-3 space-y-2 border-t border-border" role="list">
              {section.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <HiCheckCircle
                    size={14}
                    className="text-accent-blue flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="font-body text-xs text-text-secondary leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Icon map for project buttons ────────────────────────────────────────────
const BUTTON_ICON_MAP = {
  external:     HiExternalLink,
  github:       FaGithub,
  figma:        SiFigma,
  dashboard:    HiChartBar,
  presentation: HiPresentationChartBar,
  globe:        HiGlobe,
  kaggle:       SiKaggle,
};

// ─── Project action button ────────────────────────────────────────────────────
function ProjectButton({ href, label, icon, variant }) {
  const Icon = BUTTON_ICON_MAP[icon] || HiExternalLink;

  const base = `inline-flex items-center gap-2 px-4 py-2 rounded-xl
                font-body text-sm font-medium transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2`;

  const primary   = 'bg-accent-blue text-white hover:bg-blue-700 shadow-sm shadow-blue-200';
  const secondary = `border border-border text-text-secondary bg-background
                     hover:border-accent-blue hover:text-accent-blue hover:bg-blue-50`;
  const outline   = `border-2 border-accent-blue text-accent-blue bg-background
                     hover:bg-blue-50 transition-all duration-200`;
  const disabled  = 'border border-border text-text-secondary/40 bg-bg-secondary cursor-not-allowed opacity-60';

  const variantClass = variant === 'primary' ? primary
                     : variant === 'outline'  ? outline
                     : secondary;

  if (!href) {
    return (
      <span
        className={`${base} ${disabled}`}
        aria-disabled="true"
        role="button"
        tabIndex={-1}
        title="Coming Soon"
      >
        <Icon size={15} aria-hidden="true" />
        {label}
        <span className="font-body text-[10px] opacity-70">(Coming Soon)</span>
      </span>
    );
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} – opens in new tab`}
      whileHover={{ scale: 1.04, y: -1 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${variantClass}`}
    >
      <Icon size={15} aria-hidden="true" />
      {label}
    </motion.a>
  );
}

// ─── Single project card ──────────────────────────────────────────────────────
function ProjectCard({ project, index, categoryLabel }) {
  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      whileHover={{
        y: -6,
        boxShadow: '0 20px 48px -12px rgba(37,99,235,0.12), 0 6px 20px -4px rgba(15,23,42,0.08)',
      }}
      transition={{ type: 'spring', stiffness: 240, damping: 22 }}
      className="bg-card border border-border rounded-[20px] overflow-hidden shadow-sm flex flex-col"
      aria-label={project.title}
    >
      <div className="flex flex-col flex-1 p-6 gap-4">

        {/* ── Badge row: category + type + featured ── */}
        <div className="flex flex-wrap gap-2">
          {/* Category */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full
                           bg-blue-50 border border-blue-200
                           font-body text-[11px] font-semibold text-accent-blue">
            <HiMiniSquares2X2 size={11} aria-hidden="true" />
            {categoryLabel}
          </span>

          {/* Type */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full
                           bg-bg-secondary border border-border
                           font-body text-[11px] font-medium text-text-secondary">
            {project.type}
          </span>

          {/* Additional Badges – if provided */}
          {project.extraBadges?.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full
                         bg-bg-secondary border border-border
                         font-body text-[11px] font-medium text-text-secondary"
            >
              {badge}
            </span>
          ))}

          {/* Featured badge – only shown when project.featured is true */}
          {project.featured && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full
                             bg-amber-50 border border-amber-200
                             font-body text-[11px] font-semibold text-amber-700">
              <HiMiniSparkles size={11} aria-hidden="true" />
              {project.featuredLabel || 'Featured Project'}
            </span>
          )}
        </div>

        {/* ── Title ── */}
        <h3 className="font-heading font-bold text-xl text-text-primary leading-snug">
          {project.title}
        </h3>

        {/* ── Subtitle – only rendered when present ── */}
        {project.subtitle && (
          <p className="font-body text-sm font-semibold text-accent-blue -mt-1">
            {project.subtitle}
          </p>
        )}

        {/* ── Description ── */}
        <p className="font-body text-sm leading-relaxed text-text-secondary">
          {project.description}
        </p>

        {/* ── Accordion sections (Key Features, Database Design, etc.) ── */}
        {project.sections?.length > 0 && (
          <div className="flex flex-col gap-2">
            {project.sections.map((section) => (
              <AccordionSection
                key={section.id}
                section={section}
                projectId={project.id}
              />
            ))}
          </div>
        )}

        {/* ── Tech badges ── */}
        <motion.div
          variants={badgeStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-wrap gap-2"
        >
          {project.techStack.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </motion.div>

        {/* ── Buttons – driven entirely by the project's buttons array ── */}
        {project.buttons?.length > 0 && (
          <div className="mt-auto pt-4 border-t border-border flex flex-wrap gap-3">
            {project.buttons.map((btn) => (
              <ProjectButton
                key={btn.id}
                href={btn.href}
                label={btn.label}
                icon={btn.icon}
                variant={btn.variant}
              />
            ))}
          </div>
        )}

      </div>
    </motion.article>
  );
}

// ─── Category section ─────────────────────────────────────────────────────────
function CategorySection({ category, categoryDescription, items, catIndex }) {
  return (
    <motion.div
      variants={fadeUp}
      custom={catIndex * 0.1}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      className="mb-16 last:mb-0"
    >
      {/* Category header */}
      <div className="flex items-start gap-4 mb-8">
        <div
          className="w-10 h-10 rounded-xl bg-accent-blue flex items-center justify-center flex-shrink-0 mt-0.5"
          aria-hidden="true"
        >
          <HiCollection size={18} className="text-white" />
        </div>
        <div>
          <h3 className="font-heading font-bold text-xl text-text-primary">
            {category}
          </h3>
          <p className="font-body text-sm text-text-secondary mt-1 leading-relaxed max-w-2xl">
            {categoryDescription}
          </p>
        </div>
      </div>

      {/* Project cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {items.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            categoryLabel={category}
          />
        ))}
      </div>
    </motion.div>
  );
}

// ─── Projects Section ─────────────────────────────────────────────────────────
export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
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
            Work & Builds
          </p>
          <h2
            id="projects-heading"
            className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4"
          >
            Projects
          </h2>
          <div className="w-12 h-1 bg-accent-blue rounded-full mb-5" aria-hidden="true" />
          <p className="font-body text-base text-text-secondary max-w-2xl leading-relaxed">
            {SUBTITLE}
          </p>
        </motion.div>

        {/* Categories */}
        {projects.map((cat, i) => (
          <CategorySection
            key={cat.id}
            category={cat.category}
            categoryDescription={cat.categoryDescription}
            items={cat.items}
            catIndex={i}
          />
        ))}

      </div>
    </section>
  );
}
