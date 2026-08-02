// Certifications & Achievements data
// Structure:
//   achievements – notable awards and recognitions
//   certifications – professional courses and credentials
// Certificates.jsx maps through both arrays automatically.

export const achievements = [
  {
    id: 'ach-1',
    title: 'Winner – Data Analytics Workshop Carnival 2.0',
    organization: 'Centre for Innovation & Entrepreneurship (CIE)',
    organizationSub: 'MLR Institute of Technology',
    type: 'Achievement',
    status: 'Winner',
    description:
      'Secured the Winner position in the Data Analytics domain during Workshop Carnival 2.0 conducted by the Centre for Innovation and Entrepreneurship (CIE), MLR Institute of Technology. Demonstrated strong analytical thinking, data interpretation, problem-solving abilities, and presentation skills while working on real-world analytical challenges. Recognized for innovation, teamwork, and outstanding overall performance throughout the event.',
    skills: [
      'Data Analytics',
      'Analytical Thinking',
      'Problem Solving',
      'Data Interpretation',
      'Presentation Skills',
      'Team Collaboration',
    ],
  },
];

export const certifications = [
  {
    id: 'cert-1',
    title: 'Introduction to Microsoft Excel',
    subtitle: null,
    organization: 'Microsoft | Simplilearn SkillUp',
    type: 'Professional Certification',
    completedDate: null,
    description:
      'Successfully completed a professional course covering Microsoft Excel fundamentals including spreadsheet management, formulas, charts, reporting, and basic data analysis techniques.',
    skills: [
      'Microsoft Excel',
      'Spreadsheet Management',
      'Reporting',
      'Data Analysis',
    ],
  },
  {
    id: 'cert-2',
    title: 'Data Science & Analytics',
    subtitle: null,
    organization: 'HP LIFE',
    type: 'Professional Certification',
    completedDate: null,
    description:
      'Successfully completed a professional course covering data science concepts, analytical methodologies, business problem-solving, and data-driven decision making.',
    skills: [
      'Data Science',
      'Analytics',
      'Business Intelligence',
      'Problem Solving',
    ],
  },
  {
    id: 'cert-3',
    title: 'Microsoft Applied Skills',
    subtitle: 'Generate Reports with AI Research Agents',
    organization: 'Microsoft',
    type: 'Applied Skills Certification',
    completedDate: null,
    description:
      'Successfully earned the Microsoft Applied Skills certification by demonstrating practical knowledge of AI-powered research agents for information gathering, report generation, prompt engineering, AI-assisted content creation, and business productivity.',
    skills: [
      'Generative AI',
      'Prompt Engineering',
      'AI Research',
      'Business Productivity',
      'Microsoft AI',
    ],
  },
  {
    id: 'cert-4',
    title: 'TCS iON Career Edge – Young Professional',
    subtitle: null,
    organization: 'TCS iON',
    type: 'Professional Development Program',
    completedDate: 'May 2026 – June 2026',
    description:
      'Completed a professional development program focused on workplace readiness, communication skills, interview preparation, resume writing, business etiquette, IT foundations, problem-solving, and Artificial Intelligence fundamentals.',
    skills: [
      'Communication',
      'Interview Preparation',
      'Resume Writing',
      'Business Etiquette',
      'Problem Solving',
      'Artificial Intelligence',
    ],
  },
];

// Default export keeps backward compatibility if anything imports the file directly
const certificates = { achievements, certifications };
export default certificates;
