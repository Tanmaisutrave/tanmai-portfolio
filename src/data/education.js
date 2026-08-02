// Education data – add / edit entries here; the Education component maps through this array.
const education = [
  {
    id: 1,
    institution: 'MLR Institute of Technology',
    degree: 'Bachelor of Technology (B.Tech)',
    branch: 'Computer Science Engineering',
    duration: '2024 – 2028',
    score: '9.02 / 10',
    scoreLabel: 'Current CGPA',
    status: 'Currently Pursuing',
    statusType: 'active',          // 'active' | 'completed'
    description:
      'Currently pursuing a Bachelor of Technology in Computer Science Engineering with a strong academic record. Building expertise in software development, data analytics, full-stack web development, and problem-solving through academic coursework and practical projects.',
    coursework: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming (Java)',
      'Database Management Systems (SQL)',
      'Software Engineering',
      'Operating Systems',
      'Web Development',
    ],
    logo: null,   // place a logo file in /public/logos/ and set the path here
  },
  {
    id: 2,
    institution: 'Narayana Junior College',
    degree: 'Intermediate (MPC)',
    branch: null,
    duration: '2022 – 2024',
    score: '913 / 1000',
    scoreLabel: 'Score',
    status: 'Completed',
    statusType: 'completed',
    description:
      'Completed Intermediate education with a strong academic performance, developing analytical thinking, logical reasoning, and mathematical foundations that support advanced studies in computer science and engineering.',
    coursework: [],
    logo: null,
  },
  {
    id: 3,
    institution: 'Vasavi High School',
    degree: 'Secondary School Certificate (SSC)',
    branch: null,
    duration: '(Update year)',
    score: '10 / 10',
    scoreLabel: 'CGPA',
    status: 'Completed',
    statusType: 'completed',
    description:
      'Successfully completed secondary education with excellent academic performance, demonstrating consistency, discipline, and a strong learning foundation across all subjects.',
    coursework: [],
    logo: null,
  },
];

export default education;
