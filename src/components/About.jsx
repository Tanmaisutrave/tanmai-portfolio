import { motion } from 'framer-motion';
import {
  HiUser,
  HiAcademicCap,
  HiLocationMarker,
  HiLightBulb,
  HiBriefcase,
} from 'react-icons/hi';
import {
  HiMiniMapPin,
  HiMiniSparkles,
  HiMiniCheckBadge,
} from 'react-icons/hi2';
import { FiCode, FiZap } from 'react-icons/fi';

// ─── Static Content ───────────────────────────────────────────────────────────

const SUBTITLE =
  'Passionate about technology, driven by continuous learning, and committed to building innovative solutions that create meaningful impact.';

const ABOUT_PARAGRAPHS = [
  'I am Sutrave Tanmai, a Computer Science Engineering student at MLR Institute of Technology with a strong passion for Data Analytics, Full Stack Development, UI/UX Design, and Artificial Intelligence.',
  'I enjoy solving real-world problems by combining analytical thinking with modern technologies. Throughout my academic journey, I have worked on projects involving Python, SQL, Power BI, React, JavaScript, and Machine Learning, allowing me to strengthen both my technical and problem-solving skills.',
  'I believe in continuous learning and enjoy exploring new technologies while building practical, user-focused applications. My goal is to contribute to innovative organizations where I can apply my knowledge, collaborate with talented teams, and grow into a highly skilled software professional.',
];

// Professional Snapshot card rows
const SNAPSHOT = [
  {
    id: 'name',
    icon: HiUser,
    label: 'Name',
    value: 'Sutrave Tanmai',
  },
  {
    id: 'role',
    icon: HiAcademicCap,
    label: 'Current Role',
    value: 'Computer Science Engineering Student',
  },
  {
    id: 'spec',
    icon: FiCode,
    label: 'Specialization',
    value: 'Data Analytics · Full Stack · UI/UX · AI',
  },
  {
    id: 'cgpa',
    icon: HiMiniSparkles,
    label: 'Current CGPA',
    value: '9.02 / 10',
  },
  {
    id: 'location',
    icon: HiMiniMapPin,
    label: 'Location',
    value: 'Hyderabad, Telangana',
  },
  {
    id: 'availability',
    icon: HiMiniCheckBadge,
    label: 'Availability',
    value: 'Open to Internship Opportunities',
    highlight: true,   // renders value in accent blue
  },
];

// Core strengths chip list
const STRENGTHS = [
  { id: 1,  label: 'Problem Solving' },
  { id: 2,  label: 'Analytical Thinking' },
  { id: 3,  label: 'Team Collaboration' },
  { id: 4,  label: 'Fast Learner' },
  { id: 5,  label: 'Adaptability' },
  { id: 6,  label: 'Attention to Detail' },
  { id: 7,  label: 'Creative Thinking' },
  { id: 8,  label: 'Continuous Learning' },
];

// ─── Framer Motion Variants ───────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const chipVariant = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: 'easeOut' } },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

/** Single row inside the Professional Snapshot card */
function SnapshotRow({ icon: Icon, label, value, highlight }) {
  return (
    <div className="flex items-start gap-3 py-3 border-b border-border last:border-0">
      <div
        className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-50 border border-blue-100
                   flex items-center justify-center mt-0.5"
        aria-hidden="true"
      >
        <Icon size={15} className="text-accent-blue" />
      </div>
      <div className="min-w-0">
        <p className="font-body text-xs font-medium text-text-secondary uppercase tracking-wider">
          {label}
        </p>
        <p
          className={`font-body text-sm font-semibold mt-0.5 leading-snug
            ${highlight ? 'text-accent-blue' : 'text-text-primary'}`}
        >
          {value}
        </p>
      </div>
    </div>
  );
}

/** Strength chip pill */
function StrengthChip({ label }) {
  return (
    <motion.span
      variants={chipVariant}
      whileHover={{ scale: 1.06, y: -2 }}
      transition={{ type: 'spring', stiffness: 300, damping: 18 }}
      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full
                 bg-bg-secondary border border-border
                 font-body text-sm font-medium text-text-secondary
                 hover:border-accent-blue hover:text-accent-blue hover:bg-blue-50
                 transition-colors duration-200 cursor-default select-none"
    >
      <HiMiniSparkles size={12} className="text-accent-blue flex-shrink-0" aria-hidden="true" />
      {label}
    </motion.span>
  );
}

// ─── About Section ────────────────────────────────────────────────────────────

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-24 bg-background"
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
            Who I Am
          </p>
          <h2
            id="about-heading"
            className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4"
          >
            About Me
          </h2>
          <div className="w-12 h-1 bg-accent-blue rounded-full mb-5" aria-hidden="true" />
          <p className="font-body text-base text-text-secondary max-w-2xl leading-relaxed">
            {SUBTITLE}
          </p>
        </motion.div>

        {/* ── Two-Column Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ── Left Column – About Text ── */}
          <motion.div
            variants={fadeUp}
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* ── Profile photo ── */}
            <motion.div
              className="flex justify-center lg:justify-start mb-8"
              variants={fadeUp}
              custom={0.08}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="relative">
                {/* Soft glow ring */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-1.5 rounded-full bg-blue-100/70 blur-sm"
                />
                {/* Dashed outer ring */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-3 rounded-full border-2 border-dashed border-blue-200/50"
                />
                <img
                  src="/image.jpg"
                  alt="Sutrave Tanmai"
                  width={180}
                  height={180}
                  className="relative z-10 w-[180px] h-[180px] rounded-full
                             object-cover object-center
                             border-4 border-white
                             shadow-[0_12px_40px_-8px_rgba(37,99,235,0.20),0_4px_16px_-4px_rgba(15,23,42,0.10)]"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
              </div>
            </motion.div>

            {/* Decorative quote mark */}
            <div
              className="font-heading text-7xl leading-none text-blue-100 select-none mb-2"
              aria-hidden="true"
            >
              "
            </div>

            <div className="space-y-5">
              {ABOUT_PARAGRAPHS.map((para, i) => (
                <motion.p
                  key={i}
                  variants={fadeUp}
                  custom={0.1 + i * 0.1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="font-body text-base leading-[1.85] text-text-secondary"
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-border my-8" aria-hidden="true" />

            {/* ── Core Expertise ── */}
            <motion.div
              variants={fadeUp}
              custom={0.45}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="font-body text-xs font-semibold text-text-secondary uppercase tracking-widest mb-4">
                Core Expertise
              </p>
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="flex flex-wrap gap-2"
              >
                {[
                  'Full Stack Development',
                  'Data Analytics',
                  'Business Intelligence',
                  'Artificial Intelligence',
                  'Machine Learning',
                  'Data Engineering',
                  'UI/UX Design',
                  'Python Development',
                  'SQL & Database Design',
                  'Power BI',
                  'React.js',
                  'Node.js',
                  'Express.js',
                  'MongoDB',
                  'MySQL',
                  'Git & GitHub',
                  'REST APIs',
                  'Problem Solving',
                  'Data Visualization',
                  'Responsive Web Design',
                  'Analytical Thinking',
                ].map((tag) => (
                  <motion.span
                    key={tag}
                    variants={chipVariant}
                    whileHover={{ scale: 1.07, y: -2 }}
                    transition={{ type: 'spring', stiffness: 320, damping: 18 }}
                    className="inline-flex items-center px-3 py-1.5 rounded-full
                               bg-bg-secondary border border-border
                               font-body text-xs font-medium text-text-secondary
                               hover:border-accent-blue hover:text-accent-blue hover:bg-blue-50
                               transition-colors duration-200 cursor-default select-none"
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* ── Right Column – Cards ── */}
          <div className="flex flex-col gap-6">

            {/* Professional Snapshot Card */}
            <motion.div
              variants={fadeUp}
              custom={0.2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              whileHover={{
                y: -4,
                boxShadow: '0 16px 40px -10px rgba(37,99,235,0.10), 0 4px 16px -4px rgba(15,23,42,0.08)',
              }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="bg-card border border-border rounded-2xl p-6 shadow-sm"
            >
              {/* Card header */}
              <div className="flex items-center gap-3 mb-1 pb-4 border-b border-border">
                <div
                  className="w-9 h-9 rounded-xl bg-accent-blue flex items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                >
                  <HiUser size={18} className="text-white" />
                </div>
                <h3 className="font-heading font-semibold text-base text-text-primary">
                  Professional Snapshot
                </h3>
              </div>

              {/* Snapshot rows */}
              <div className="mt-1">
                {SNAPSHOT.map((row) => (
                  <SnapshotRow key={row.id} {...row} />
                ))}
              </div>
            </motion.div>

            {/* Core Strengths Card */}
            <motion.div
              variants={fadeUp}
              custom={0.3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              whileHover={{
                y: -4,
                boxShadow: '0 16px 40px -10px rgba(37,99,235,0.10), 0 4px 16px -4px rgba(15,23,42,0.08)',
              }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="bg-card border border-border rounded-2xl p-6 shadow-sm"
            >
              {/* Card header */}
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-border">
                <div
                  className="w-9 h-9 rounded-xl bg-accent-blue flex items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                >
                  <FiZap size={17} className="text-white" />
                </div>
                <h3 className="font-heading font-semibold text-base text-text-primary">
                  Core Strengths
                </h3>
              </div>

              {/* Chips */}
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-wrap gap-2"
              >
                {STRENGTHS.map((s) => (
                  <StrengthChip key={s.id} label={s.label} />
                ))}
              </motion.div>
            </motion.div>

          </div>
          {/* end right column */}
        </div>
        {/* end grid */}

      </div>
    </section>
  );
}
