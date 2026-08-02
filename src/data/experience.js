// Professional experience data.
// Add new entries to this array – Experience.jsx maps through it automatically.

const experience = [
  {
    id: 1,
    role: 'Independent Full Stack Developer',
    organization: 'Personal Project',
    duration: '2026',
    employmentType: 'Independent Project',
    typeVariant: 'completed',        // 'active' | 'simulation' | 'completed'
    description:
      'Designed, developed, and deployed a full-stack MERN web application called Digital Tradition Hub to preserve and showcase cultural traditions, festivals, and heritage through modern technology.',
    responsibilities: [
      'Built a complete MERN Stack application from scratch.',
      'Designed a responsive and user-friendly interface.',
      'Implemented secure user authentication.',
      'Developed an Admin Dashboard for content management.',
      'Integrated MongoDB Atlas for cloud database management.',
      'Built REST APIs using Node.js and Express.js.',
      'Deployed the frontend on Vercel and backend on Render.',
      'Managed the project using Git and GitHub.',
    ],
    technologies: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB Atlas',
      'JavaScript',
      'REST APIs',
      'Git',
      'GitHub',
      'Vercel',
      'Render',
    ],
    buttons: [
      {
        id: 'live',
        label: 'View Live Project',
        url: 'https://digital-tradition-hub.vercel.app/',
        variant: 'primary',
        icon: 'external',
      },
      {
        id: 'github',
        label: 'View GitHub',
        url: 'https://github.com/Tanmaisutrave/Digital-Tradition-Hub',
        variant: 'secondary',
        icon: 'github',
      },
    ],
    skills: [],  // populated via 'technologies' for this entry
  },
  {
    id: 2,
    role: 'Data Analytics Virtual Experience Participant',
    organization: 'Deloitte Australia – Forage',
    duration: 'Completed',
    employmentType: 'Virtual Job Simulation',
    typeVariant: 'simulation',
    description:
      "Successfully completed Deloitte's Data Analytics Virtual Experience Program, gaining practical exposure to business-oriented data analysis and forensic technology through simulated real-world tasks.",
    responsibilities: [
      'Analyzed business datasets.',
      'Identified trends and meaningful insights.',
      'Applied analytical thinking to solve business problems.',
      'Improved data interpretation skills.',
      'Learned practical analytical workflows.',
    ],
    technologies: [],
    skills: [
      'Data Analysis',
      'Business Analytics',
      'Data Interpretation',
      'Problem Solving',
      'Analytical Thinking',
      'Forensic Technology',
    ],
    buttons: [
      {
        id: 'certificate',
        label: 'View Certificate',
        url: '',          // add external credential URL here when available
        variant: 'secondary',
        icon: 'award',
        disabled: false,  // image lightbox is now active
      },
    ],
    certificate: {
      image: '/virtual-internship.jpg',
      title: 'Deloitte Data Analytics Virtual Experience',
      issuer: 'Completed via Forage',
    },
  },
  {
    id: 3,
    role: 'GenAI Powered Data Analytics Virtual Experience Participant',
    organization: 'Tata Group – Forage',
    duration: 'Completed',
    employmentType: 'Virtual Job Simulation',
    typeVariant: 'simulation',
    description:
      "Successfully completed the GenAI Powered Data Analytics Virtual Experience Program by Tata Group through Forage. Worked on practical business scenarios involving exploratory data analysis, AI-assisted analytics, business reporting, and risk profiling. The simulation provided hands-on exposure to applying Generative AI techniques for analytical decision-making and business problem-solving.",
    responsibilities: [
      'Performed Exploratory Data Analysis (EDA) on business datasets.',
      'Conducted customer risk profiling using analytical techniques.',
      'Worked on AI-assisted delinquency prediction concepts.',
      'Generated business insights using data-driven analysis.',
      'Applied data storytelling techniques to communicate analytical findings.',
      'Learned practical applications of Generative AI in business analytics.',
      'Developed professional reporting and analytical thinking skills.',
    ],
    technologies: [],
    skills: [
      'Generative AI',
      'Data Analytics',
      'Exploratory Data Analysis',
      'Business Intelligence',
      'Risk Profiling',
      'Data Storytelling',
      'Business Reporting',
      'Analytical Thinking',
      'Problem Solving',
      'AI-assisted Analytics',
    ],
    buttons: [],   // certificate opens via lightbox; no external URL button needed
    certificate: {
      image: '/GenAI.jpeg',
      title: 'GenAI Powered Data Analytics Virtual Experience',
      issuer: 'Tata Group – Forage',
    },
  },
];

export default experience;
