// Skills data – Skills.jsx maps through this array automatically.
// Add / remove categories or skills here without touching the component.

import {
  FiCode,
  FiMonitor,
  FiServer,
  FiDatabase,
  FiBarChart2,
  FiPenTool,
  FiTool,
  FiCpu,
} from 'react-icons/fi';

const skills = [
  {
    id: 1,
    category: 'Programming Languages',
    icon: FiCode,
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50',
    description:
      'Strong programming foundation for software development, problem solving, and application design.',
    items: ['Python', 'Java', 'C', 'JavaScript'],
  },
  {
    id: 2,
    category: 'Frontend Development',
    icon: FiMonitor,
    iconColor: 'text-violet-600',
    iconBg: 'bg-violet-50',
    description:
      'Building responsive, interactive, and user-friendly web interfaces.',
    items: ['HTML5', 'CSS3', 'React.js', 'Tailwind CSS', 'Bootstrap', 'Responsive Design'],
  },
  {
    id: 3,
    category: 'Backend Development',
    icon: FiServer,
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-50',
    description:
      'Developing scalable server-side applications and REST APIs.',
    items: ['Node.js', 'Express.js', 'REST APIs', 'Authentication'],
  },
  {
    id: 4,
    category: 'Databases',
    icon: FiDatabase,
    iconColor: 'text-orange-500',
    iconBg: 'bg-orange-50',
    description:
      'Managing structured and NoSQL databases for modern applications.',
    items: ['MySQL', 'MongoDB', 'MongoDB Atlas'],
  },
  {
    id: 5,
    category: 'Data Analytics',
    icon: FiBarChart2,
    iconColor: 'text-cyan-600',
    iconBg: 'bg-cyan-50',
    description:
      'Analyzing data to generate meaningful insights and interactive dashboards.',
    items: [
      'Power BI',
      'Microsoft Excel',
      'SQL',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Plotly',
      'Data Cleaning',
      'Data Visualization',
    ],
  },
  {
    id: 6,
    category: 'UI / UX Design',
    icon: FiPenTool,
    iconColor: 'text-pink-600',
    iconBg: 'bg-pink-50',
    description:
      'Designing intuitive and user-centered digital experiences.',
    items: ['Figma', 'Wireframing', 'Prototyping', 'User Interface Design'],
  },
  {
    id: 7,
    category: 'Developer Tools',
    icon: FiTool,
    iconColor: 'text-slate-600',
    iconBg: 'bg-slate-100',
    description:
      'Tools and platforms used for development, deployment, and collaboration.',
    items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Vercel', 'Render'],
  },
  {
    id: 8,
    category: 'Technical Competencies',
    icon: FiCpu,
    iconColor: 'text-indigo-600',
    iconBg: 'bg-indigo-50',
    description:
      'Technologies and tools I actively use to design, develop, analyze, and deploy modern applications.',
    items: [
      'Python', 'Java', 'JavaScript', 'C',
      'HTML5', 'CSS3', 'React.js', 'Tailwind CSS', 'Bootstrap',
      'Node.js', 'Express.js', 'MongoDB', 'MySQL',
      'Power BI', 'Excel', 'Pandas', 'NumPy', 'Matplotlib', 'Plotly',
      'Figma', 'Git', 'GitHub', 'Postman', 'Vercel', 'Render',
      'REST APIs', 'JWT Authentication', 'Chart.js',
      'BeautifulSoup', 'Requests', 'Streamlit',
      'TypeScript', 'Next.js', 'Framer Motion',
    ],
  },
];

export default skills;
