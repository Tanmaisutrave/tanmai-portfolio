// Projects data – Projects.jsx maps through this array automatically.
// Structure: array of category objects, each containing an array of project objects.
// Add new categories or projects here without touching the component.
//
// Each project's `buttons` array controls exactly which buttons appear on the card.
// Shape: { id, label, href, variant: 'primary' | 'secondary', icon: 'external' | 'github' | 'figma' }
// Omit githubUrl / liveUrl fields in favour of the buttons array for full control.

const projects = [
  {
    id: 'cat-1',
    category: 'Full Stack Web Development',
    categoryDescription:
      'Building secure, scalable, and responsive web applications using modern frontend and backend technologies with real-world business functionality.',
    items: [
      {
        id: 'proj-1',
        title: 'Student Auction System',
        type: 'Full Stack MERN Web Application',
        featured: false,
        description:
          'Developed a secure campus-based online auction platform that enables students to buy and sell books, gadgets, accessories, and other items through real-time bidding. The platform features role-based authentication, live bidding, automated winner selection, and an administrative approval system to ensure a transparent and secure marketplace.',
        sections: [
          {
            id: 'features',
            label: 'Key Features',
            items: [
              'Developed a responsive full-stack web application using React.js, Node.js, Express.js, and MongoDB.',
              'Implemented JWT-based authentication with role-based access control for Students and Administrators.',
              'Built a real-time bidding system using Socket.io for instant bid updates.',
              'Designed an Admin Dashboard to approve or reject auction listings and monitor platform activities.',
              'Created a Student Dashboard to manage auctions, bids, wallet balance, and notifications.',
              'Implemented automatic auction closure and highest bidder selection after auction expiry.',
              'Added virtual wallet management with transaction history for secure bidding.',
              'Developed search, filtering, image upload, and auction countdown timer features.',
              'Built secure RESTful APIs with bcrypt password encryption.',
              'Designed a responsive user interface using Tailwind CSS with reusable React components.',
            ],
          },
        ],
        techStack: [
          'React.js', 'Tailwind CSS', 'Node.js', 'Express.js',
          'MongoDB', 'JWT', 'Socket.io', 'Axios', 'bcrypt', 'REST API', 'GitHub',
        ],
        buttons: [
          { id: 'live',   label: 'Live Demo', href: 'https://campusbidx.vercel.app/',                       variant: 'primary',   icon: 'external' },
          { id: 'github', label: 'GitHub',    href: 'https://github.com/Tanmaisutrave/campusbidx',          variant: 'secondary', icon: 'github'   },
        ],
      },
      {
        id: 'proj-2',
        title: 'AI Study Planner',
        type: 'Full Stack Web Application',
        featured: true,
        description:
          'Developed a full-stack AI-powered Study Planner that helps students generate personalized study schedules based on subjects, deadlines, difficulty levels, and learning priorities. The application provides every user with a secure personal workspace to manage subjects, tasks, study plans, and daily progress while automatically generating optimized study schedules using intelligent prioritization logic. Built using a responsive modern dashboard, secure authentication, RESTful APIs, and MySQL database integration, the project demonstrates full-stack development, database design, and scalable application architecture.',
        sections: [
          {
            id: 'key-features',
            label: 'Key Features',
            items: [
              'Developed a complete full-stack web application using modern frontend and backend technologies.',
              'Implemented secure JWT Authentication with Signup, Login, and Logout functionality.',
              'Created personalized dashboards with complete user-specific data privacy.',
              'Built Subject Management with custom priorities and difficulty levels.',
              'Developed Task Management with deadlines, estimated study hours, and completion tracking.',
              'Implemented an intelligent Study Schedule Generator that prioritizes study sessions based on deadlines, priorities, and subject difficulty.',
              'Designed an automatically generated daily study timeline.',
              'Created an interactive analytics dashboard displaying completed tasks, pending tasks, productivity insights, and progress statistics.',
              'Ensured complete user-specific data isolation so each user can access only their own information.',
              'Designed a premium responsive dashboard with smooth animations and modern UI.',
            ],
          },
          {
            id: 'database',
            label: 'Database Design',
            items: [
              'Designed a normalized relational MySQL database including: Users, Subjects, Tasks, Study Schedule, and Performance Tracking.',
              'Implemented Primary Keys, Foreign Keys, and table Relationships.',
              'Applied optimized SQL Queries for performance.',
              'Enforced Data Integrity across all tables.',
            ],
          },
          {
            id: 'backend',
            label: 'Backend Features',
            items: [
              'RESTful API Architecture with Express.js backend.',
              'JWT Authentication and Authorization middleware.',
              'bcrypt Password Encryption for secure credential storage.',
              'Full CRUD Operations across all resources.',
              'User-specific APIs ensuring data isolation.',
              'Centralized MySQL Database Connection management.',
            ],
          },
          {
            id: 'frontend',
            label: 'Frontend Features',
            items: [
              'Responsive Dashboard layout for all screen sizes.',
              'Dynamic Data Rendering using Fetch API integration.',
              'Interactive Forms with validation.',
              'Dashboard Cards, Progress Indicators, and Analytics Charts via Chart.js.',
              'Modern User Interface with smooth transitions.',
            ],
          },
          {
            id: 'outcomes',
            label: 'Learning Outcomes',
            items: [
              'Designed and implemented a complete full-stack application from scratch.',
              'Applied database normalization, relationships, and SQL optimization techniques.',
              'Built secure authentication and authorization workflows.',
              'Developed scalable REST APIs integrated with a responsive frontend.',
              'Implemented intelligent scheduling logic for personalized study planning.',
              'Improved understanding of scalable web application architecture and user-centric design principles.',
            ],
          },
        ],
        techStack: [
          'HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Express.js',
          'MySQL', 'JWT', 'Chart.js', 'REST API', 'bcrypt',
        ],
        buttons: [
          { id: 'live',   label: 'Live Demo', href: '', variant: 'primary',   icon: 'external' }, // add URL when deployed
          { id: 'github', label: 'GitHub',    href: '', variant: 'secondary', icon: 'github'   }, // add URL when available
        ],
      },
    ],
  },

  // ── Data Analytics ───────────────────────────────────────────────────────────
  {
    id: 'cat-3',
    category: 'Data Analytics',
    categoryDescription:
      'Transforming raw data into actionable insights through data cleaning, visualization, statistical analysis, dashboard development, and business intelligence.',
    items: [
      {
        id: 'proj-4',
        title: 'NYC Taxi Analysis',
        type: 'Data Analytics & Interactive Dashboard',
        featured: true,
        featuredLabel: 'Featured Analytics Project',
        description:
          'Analyzed real-world New York City taxi trip data to understand urban mobility, passenger behavior, travel demand, and fare patterns. The project focused on transforming raw transportation data into meaningful business insights through exploratory data analysis, visualization, and an interactive web dashboard. The analysis demonstrates how data can be used to understand city movement, optimize transportation services, and identify demand trends that influence operational decision-making.',
        sections: [
          {
            id: 'insights',
            label: 'Key Insights',
            items: [
              'Demand Analysis – Taxi demand is not evenly distributed throughout the day, with significant peaks during evening hours, especially around 6 PM.',
              'Weekend vs Weekday Analysis – Weekday taxi demand is considerably higher due to office commuters, while weekends show a more balanced distribution.',
              'Short vs Long Trip Analysis – Most taxi trips are short-distance journeys, indicating that taxis primarily serve urban transportation needs.',
              'Demand vs Fare Relationship – Periods of higher demand generally correspond to increased fare values, demonstrating demand-driven pricing behavior.',
            ],
          },
          {
            id: 'tools',
            label: 'Tools & Technologies',
            items: [
              'Python – core language for data processing and analysis.',
              'Pandas & NumPy – data manipulation and numerical computation.',
              'Matplotlib – data visualization and chart generation.',
              'Scikit-learn – statistical analysis and pattern recognition.',
              'HTML5, CSS3, JavaScript – interactive dashboard frontend.',
              'Kaggle Dataset – real-world NYC taxi trip data source.',
              'Vercel – dashboard deployment and hosting.',
            ],
          },
          {
            id: 'outcome',
            label: 'Project Outcome',
            items: [
              'Successfully transformed raw transportation data into meaningful visual insights through statistical analysis and interactive dashboard development.',
              'Improved understanding of urban transportation patterns and real-world data interpretation.',
              'Demonstrated end-to-end data analytics workflow from raw data to deployed interactive dashboard.',
            ],
          },
          {
            id: 'learning',
            label: 'Learning Outcomes',
            items: [
              'Performed exploratory data analysis on large real-world datasets.',
              'Applied data cleaning and preprocessing techniques.',
              'Identified meaningful travel patterns through visualization.',
              'Built an interactive analytics dashboard.',
              'Improved business insight generation from transportation datasets.',
              'Strengthened analytical thinking and data storytelling skills.',
            ],
          },
        ],
        techStack: [
          'Python', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn',
          'HTML', 'CSS', 'JavaScript', 'Data Analysis', 'Dashboard', 'Visualization',
        ],
        buttons: [
          { id: 'dashboard',    label: 'View Dashboard',    href: 'https://nyc-taxi-anaylsis.vercel.app',                                       variant: 'primary',   icon: 'dashboard'    },
          { id: 'presentation', label: 'View Presentation', href: 'https://docs.google.com/presentation/d/1rQBhqPy8bOmYjVJkFq6NkXqRYCVlKkFr',  variant: 'outline',   icon: 'presentation' },
          { id: 'github',       label: 'GitHub',            href: 'https://github.com/Tanmaisutrave/nyc-taxi-behavior-analysis',                 variant: 'secondary', icon: 'github'       },
        ],
      },
      {
        id: 'proj-5',
        title: 'COVID-19 Analytics Dashboard & Data Storytelling Platform',
        type: 'Data Analytics | Interactive Dashboard | Data Storytelling',
        featured: true,
        featuredLabel: 'Featured Project',
        description:
          'Developed an end-to-end COVID-19 analytics platform that analyzes global pandemic trends from January 2020 to July 2020. The project combines an interactive analytics dashboard with a modern data storytelling website, transforming complex pandemic data into meaningful insights through visualizations, animations, and narrative-driven explanations. The platform demonstrates the complete data analytics workflow, including data exploration, visualization, dashboard development, storytelling, and responsive web deployment.',
        sections: [
          {
            id: 'key-features',
            label: 'Key Features',
            items: [
              'Developed a complete COVID-19 analytics platform combining dashboard development and interactive storytelling.',
              'Built an interactive Streamlit dashboard containing multiple analytical visualizations.',
              'Designed a responsive storytelling website using Next.js and React.',
              'Organized pandemic insights into an engaging narrative structure.',
              'Embedded animated visualizations explaining global spread and country rankings.',
              'Created responsive layouts optimized for desktop and mobile devices.',
              'Integrated project resources including dashboard, GitHub repository, and presentation links.',
              'Deployed the dashboard on Render and the storytelling website on Vercel.',
            ],
          },
          {
            id: 'analytics',
            label: 'Analytics Included',
            items: [
              'Global COVID-19 Spread Analysis.',
              'Growth Trend Analysis.',
              'Daily Cases Analysis.',
              'Country Comparison.',
              'Recovery Rate Analysis.',
              'Global Case Distribution.',
              'Interactive Visualizations.',
              'Animated Trend Exploration.',
            ],
          },
          {
            id: 'storytelling',
            label: 'Data Storytelling Highlights',
            items: [
              'Narrative-driven presentation of analytical findings.',
              'Interactive user experience.',
              'Animated explanations for complex data.',
              'Smooth scrolling storytelling interface.',
              'Modern responsive design.',
              'Easy-to-understand visualization flow.',
            ],
          },
          {
            id: 'learning',
            label: 'Learning Outcomes',
            items: [
              'Applied real-world data analytics techniques.',
              'Built interactive dashboards using Python and Streamlit.',
              'Improved skills in data visualization and storytelling.',
              'Learned how to communicate insights beyond traditional dashboards.',
              'Developed responsive frontend applications using Next.js and React.',
              'Strengthened end-to-end project development skills from analysis to deployment.',
            ],
          },
        ],
        techStack: [
          'Python', 'Pandas', 'NumPy', 'Matplotlib', 'Plotly', 'Streamlit',
          'Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Framer Motion',
          'Data Analytics', 'Data Storytelling', 'Dashboard Development',
        ],
        buttons: [
          { id: 'analytics',     label: 'Analytics Dashboard',   href: 'https://covid19-analytics-dashboard.onrender.com/', variant: 'primary',   icon: 'dashboard' },
          { id: 'storytelling',  label: 'Storytelling Website',  href: 'https://covid19-data-storytelling.vercel.app/',     variant: 'secondary', icon: 'globe'     },
          { id: 'github',        label: 'GitHub',                href: 'https://github.com/Tanmaisutrave/covid19-data-storytelling', variant: 'outline', icon: 'github' },
        ],
      },
      {
        id: 'proj-6',
        title: 'Zomato Sales Analysis Dashboard',
        type: 'Business Intelligence Dashboard | Power BI Analytics',
        featured: true,
        featuredLabel: 'Featured BI Project',
        description:
          'Developed an interactive Business Intelligence dashboard using Microsoft Power BI to transform raw restaurant and order data into meaningful business insights. The dashboard enables users to analyze sales performance, customer ordering behavior, restaurant ratings, cuisine trends, and operational metrics through interactive visualizations and dynamic reports. The project demonstrates the complete BI workflow, including data cleaning, transformation, data modeling, DAX calculations, KPI development, dashboard design, and business storytelling.',
        sections: [
          {
            id: 'key-features',
            label: 'Key Features',
            items: [
              'Built a professional multi-page Power BI dashboard.',
              'Designed an Executive Business Overview for high-level performance monitoring.',
              'Created Sales and Revenue Analysis with KPI tracking.',
              'Developed Restaurant Performance Analysis dashboards.',
              'Visualized Restaurant Rating Insights.',
              'Analyzed Top Cities and Cuisine Trends.',
              'Built Order Trend Analysis for customer ordering behavior.',
              'Implemented Dynamic KPI Cards.',
              'Added Interactive Filters and Slicers.',
              'Used DAX Measures for advanced business calculations.',
              'Performed Power Query transformations for data preparation.',
            ],
          },
          {
            id: 'modules',
            label: 'Dashboard Modules',
            items: [
              'Executive Dashboard – Business performance overview, KPI summary, top-performing cities, popular cuisines, and revenue insights.',
              'Restaurant Analysis Dashboard – Restaurant ratings, cuisine popularity, pricing trends, restaurant performance, and vegetarian vs non-vegetarian analysis.',
              'Order Analysis Dashboard – Monthly sales trends, yearly order analysis, average order value, day-wise ordering behavior, and interactive filtering.',
            ],
          },
          {
            id: 'skills',
            label: 'Skills Demonstrated',
            items: [
              'Business Intelligence.',
              'Data Analytics.',
              'Dashboard Development.',
              'Data Cleaning & Transformation.',
              'Data Modeling.',
              'KPI Development.',
              'Interactive Reporting.',
              'Business Storytelling.',
              'Analytical Thinking.',
            ],
          },
        ],
        techStack: [
          'Power BI', 'Power Query', 'DAX', 'Business Intelligence',
          'Data Modeling', 'Data Cleaning', 'Dashboard Design',
          'KPI Development', 'Interactive Reporting', 'Data Visualization',
        ],
        buttons: [
          { id: 'github',    label: 'GitHub',              href: 'https://github.com/Tanmaisutrave/Zomato-Sales-Analysis-Dashboard', variant: 'primary',   icon: 'github'    },
          { id: 'live',      label: 'Live Dashboard',      href: '',                                                                  variant: 'secondary', icon: 'dashboard' },
        ],
      },
    ],
  },

  // ── Artificial Intelligence & Machine Learning ───────────────────────────────
  {
    id: 'cat-4',
    category: 'Artificial Intelligence & Machine Learning',
    categoryDescription:
      'Developing intelligent systems that combine Artificial Intelligence, Machine Learning, Data Analytics, and Explainable AI to solve real-world business problems through scalable and data-driven solutions.',
    items: [
      {
        id: 'proj-7',
        title: 'AI Candidate Discovery & Ranking System',
        subtitle: 'India.Runs Data & AI Challenge 2026',
        type: 'Artificial Intelligence | Machine Learning | Explainable AI | Data Analytics',
        featured: true,
        featuredLabel: '🏆 Flagship AI Project',
        description:
          'Developed an end-to-end AI-powered Candidate Discovery & Ranking System as part of the India.Runs Data & AI Challenge 2026. The system intelligently analyzes and ranks more than 100,000 candidate profiles using multiple hiring signals instead of relying solely on traditional keyword matching. The solution combines AI skill matching, professional experience, career history, recruiter engagement, GitHub activity, behavioral intelligence, and Explainable AI (XAI) to identify the Top 100 most relevant AI and Machine Learning candidates. A complete interactive Streamlit dashboard was also developed to visualize rankings, candidate insights, analytics, and transparent selection reasoning.',
        sections: [
          {
            id: 'key-features',
            label: 'Key Features',
            items: [
              'Built a Hybrid AI Candidate Ranking Engine.',
              'Implemented Explainable AI (XAI) with transparent ranking justifications.',
              'Developed a multi-signal candidate evaluation system.',
              'Built an interactive Streamlit analytics dashboard.',
              'Created a Candidate Explorer for detailed profile insights.',
              'Generated Top 100 ranked candidate reports.',
              'Developed ranking analytics and score distribution visualizations.',
              'Built a complete automated candidate ranking pipeline.',
            ],
          },
          {
            id: 'signals',
            label: 'Ranking Signals',
            items: [
              'AI & Machine Learning Skills.',
              'Professional Experience.',
              'Career History.',
              'Current Job Title Relevance.',
              'Recruiter Response Rate.',
              'Interview Completion Rate.',
              'GitHub Activity.',
              'Product Company Experience.',
              'Profile Completeness.',
              'Skill Assessment Scores.',
              'Open to Work Status.',
              'Notice Period.',
            ],
          },
          {
            id: 'dashboard',
            label: 'Dashboard Highlights',
            items: [
              'Candidate Explorer.',
              'Explainable AI Insights.',
              'Ranking Analytics.',
              'Candidate Score Distribution.',
              'Top Candidate Rankings.',
              'Rank vs Score Analysis.',
              'CSV Export for Submission.',
            ],
          },
          {
            id: 'impact',
            label: 'Project Impact',
            items: [
              'Processed more than 100,000 candidate profiles.',
              'Ranked the Top 100 AI/ML candidates.',
              'Generated transparent AI-based ranking explanations.',
              'Eliminated dependence on simple keyword matching.',
              'Designed a scalable AI-powered hiring workflow.',
            ],
          },
          {
            id: 'contributions',
            label: 'My Contributions',
            items: [
              'Independently designed and developed the complete solution.',
              'Problem Analysis & Data Processing Pipeline.',
              'Feature Engineering.',
              'AI Ranking Algorithm & Multi-Signal Scoring Engine.',
              'Explainable AI Reasoning.',
              'Streamlit Dashboard Development.',
              'Analytics & Visualization.',
              'Documentation & GitHub Repository Management.',
            ],
          },
          {
            id: 'skills',
            label: 'Skills Demonstrated',
            items: [
              'Artificial Intelligence & Machine Learning.',
              'Explainable AI (XAI).',
              'Python, Pandas, NumPy.',
              'Data Analytics & Feature Engineering.',
              'Candidate Ranking Systems.',
              'Streamlit & Plotly.',
              'Problem Solving & Dashboard Development.',
            ],
          },
        ],
        techStack: [
          'Python', 'Machine Learning', 'Artificial Intelligence', 'Explainable AI',
          'Pandas', 'NumPy', 'Sentence Transformers', 'Streamlit', 'Plotly',
          'Feature Engineering', 'Data Analytics', 'GitHub',
        ],
        buttons: [
          { id: 'live',   label: 'Live Demo', href: 'https://indiaruns-ai-challenge-zfhv3zgvlcxqhfwxog3pzb.streamlit.app/', variant: 'primary',   icon: 'external' },
          { id: 'github', label: 'GitHub',    href: 'https://github.com/Tanmaisutrave/IndiaRuns-AI-Challenge',               variant: 'secondary', icon: 'github'   },
        ],
      },
    ],
  },

  // ── Data Engineering & Open Data ─────────────────────────────────────────────
  {
    id: 'cat-5',
    category: 'Data Engineering & Open Data',
    categoryDescription:
      'Building reliable data pipelines by collecting, processing, cleaning, validating, and publishing real-world datasets using APIs, automation, and modern data engineering practices.',
    items: [
      {
        id: 'proj-8',
        title: 'US Healthcare Providers Dataset 2026',
        type: 'Data Engineering | API Integration | Open Data Publishing',
        featured: true,
        featuredLabel: 'Featured Data Engineering Project',
        description:
          'Developed and published the US Healthcare Providers Dataset 2026 by collecting and processing real-world healthcare provider information from the CMS National Plan and Provider Enumeration System (NPPES) Registry API v2.1. The project demonstrates a complete data engineering workflow, including REST API integration, JSON parsing, data cleaning, preprocessing, validation, and documentation. The resulting structured dataset contains over 25,000 healthcare provider records across multiple U.S. cities and is suitable for healthcare analytics, business intelligence, SQL practice, machine learning, and academic research.',
        sections: [
          {
            id: 'key-features',
            label: 'Key Features',
            items: [
              'Collected real-world healthcare provider data from the official CMS NPI Registry API.',
              'Retrieved and processed thousands of records through REST API requests.',
              'Converted nested JSON responses into a structured CSV dataset using Pandas.',
              'Cleaned, standardized, validated, and deduplicated the data.',
              'Created a comprehensive Data Dictionary for improved dataset usability.',
              'Documented the complete data collection and preprocessing workflow in Jupyter Notebook.',
              'Published the dataset on Kaggle and maintained version control on GitHub.',
            ],
          },
          {
            id: 'dataset',
            label: 'Dataset Information',
            items: [
              'Records – 25,965+ Healthcare Providers.',
              'Features – 15 Structured Columns.',
              'Source – CMS NPI Registry API v2.1.',
              'Format – CSV.',
              'Coverage – Multiple major cities across the United States.',
            ],
          },
          {
            id: 'highlights',
            label: 'Project Highlights',
            items: [
              'Built a production-quality healthcare dataset using an official government API.',
              'Processed and structured over 25,000 healthcare provider records.',
              'Delivered a clean, analysis-ready dataset with documentation and metadata.',
              'Published the dataset on Kaggle for public access and GitHub for version control.',
              'Designed the dataset for analytics, business intelligence, machine learning, and educational research.',
            ],
          },
          {
            id: 'skills',
            label: 'Skills Demonstrated',
            items: [
              'API Integration & REST API Development.',
              'Data Engineering & Data Collection.',
              'Data Cleaning & Preprocessing.',
              'JSON Parsing.',
              'Dataset Documentation.',
              'Exploratory Data Analysis.',
              'Open Data Publishing.',
              'Git Version Control.',
            ],
          },
        ],
        techStack: [
          'Python', 'Pandas', 'REST API', 'Requests', 'JSON',
          'Jupyter Notebook', 'Data Engineering', 'Data Cleaning',
          'Open Data', 'Kaggle', 'GitHub',
        ],
        buttons: [
          { id: 'kaggle', label: 'View Kaggle Dataset', href: 'https://www.kaggle.com/datasets/tanmaysutrave/us-healthcare-providers-dataset-2026', variant: 'primary',   icon: 'kaggle' },
          { id: 'github', label: 'GitHub',              href: 'https://github.com/Tanmaisutrave/US-Healthcare-Providers-Dataset-2026',              variant: 'secondary', icon: 'github' },
        ],
      },
      {
        id: 'proj-9',
        title: 'Bhagavad Gita Complete Dataset (700 Verses)',
        type: 'Data Engineering | Web Scraping | Open Dataset',
        featured: true,
        featuredLabel: 'Featured Open Data Project',
        description:
          'Developed and published the Bhagavad Gita Complete Dataset (700 Verses), a comprehensive structured dataset created by collecting and processing publicly available verse-level information through a custom Python web scraping pipeline. The project demonstrates an end-to-end data engineering workflow, including web scraping, HTML parsing, structured data extraction, preprocessing, validation, exploratory data analysis, and open dataset publishing. The final dataset covers all 18 chapters and 700 verses of the Bhagavad Gita, including Sanskrit text, transliteration, English translation, word meanings, commentary, speaker information, and verse metadata. The dataset is available in both CSV and JSON formats and has been published on Kaggle for educational, research, NLP, and AI applications.',
        sections: [
          {
            id: 'key-features',
            label: 'Key Features',
            items: [
              'Scraped and processed all 700 verses across 18 chapters.',
              'Extracted Sanskrit text, transliteration, English translation, word meanings, commentary, speaker information, and verse metadata.',
              'Performed data cleaning, preprocessing, and validation using Pandas.',
              'Exported the dataset in both CSV and JSON formats.',
              'Conducted Exploratory Data Analysis (EDA) with meaningful visualizations.',
              'Published the cleaned dataset on Kaggle for public access.',
              'Documented the complete workflow with a professional GitHub repository.',
            ],
          },
          {
            id: 'dataset',
            label: 'Dataset Information',
            items: [
              'Dataset – Bhagavad Gita Complete Dataset.',
              'Verses – 700 across all 18 Chapters.',
              'Formats – CSV and JSON.',
              'Domain – Religious Text, Natural Language Processing, Educational Research.',
              'Coverage – Complete Bhagavad Gita.',
            ],
          },
          {
            id: 'highlights',
            label: 'Project Highlights',
            items: [
              'Built a complete structured dataset from publicly available web content.',
              'Processed all 700 verses with rich metadata.',
              'Created structured CSV and JSON datasets.',
              'Implemented a complete web scraping and validation pipeline.',
              'Performed exploratory data analysis with multiple visualizations.',
              'Published the dataset on Kaggle with full documentation.',
              'Maintained a well-documented GitHub repository for reproducibility.',
            ],
          },
          {
            id: 'skills',
            label: 'Skills Demonstrated',
            items: [
              'Web Scraping & HTML Parsing.',
              'Data Engineering & Data Collection.',
              'Data Cleaning, Preprocessing & Validation.',
              'Exploratory Data Analysis (EDA) & Data Visualization.',
              'Open Dataset Publishing.',
              'Git Version Control.',
            ],
          },
        ],
        techStack: [
          'Python', 'BeautifulSoup', 'Requests', 'Pandas', 'Matplotlib',
          'Jupyter Notebook', 'Web Scraping', 'Data Engineering',
          'EDA', 'Open Data', 'GitHub', 'Kaggle',
        ],
        buttons: [
          { id: 'kaggle', label: 'View Kaggle Dataset', href: 'https://www.kaggle.com/datasets/tanmaysutrave/bhagavad-gita-complete-dataset-700-verses', variant: 'primary',   icon: 'kaggle' },
          { id: 'github', label: 'GitHub',              href: 'https://github.com/Tanmaisutrave/BhagavadGita-Dataset',                                    variant: 'secondary', icon: 'github' },
        ],
      },
    ],
  },

  // ── UI/UX Design ─────────────────────────────────────────────────────────────
  {
    id: 'cat-2',
    category: 'UI/UX Design',
    categoryDescription:
      'Designing intuitive, user-centered, and visually engaging digital experiences through research, wireframing, prototyping, and modern interface design.',
    items: [
      {
        id: 'proj-3',
        title: 'Life Goals Visualization App',
        type: 'UI/UX Design Case Study',
        featured: true,
        featuredLabel: 'Featured Design Project',   // custom label for design projects
        description:
          'Designed a modern UI/UX solution that helps users visualize, organize, and track their personal life goals across multiple domains through an intuitive and engaging interface. The application focuses on improving motivation and productivity by combining goal tracking, progress visualization, and personalized insights into a clean and user-friendly digital experience. The complete design process was carried out in Figma, starting from user flow planning and wireframing to high-fidelity interface design and interactive prototyping.',
        sections: [
          {
            id: 'key-features',
            label: 'Key Features',
            items: [
              'Personalized Goal Tracking across multiple life domains.',
              'Fitness Dashboard with Progress Analytics.',
              'Career Growth Monitoring.',
              'Travel Planning and Progress Tracking.',
              'Personal Growth Insights.',
              'Interactive Analytics Dashboard.',
              'User Profile with Achievements.',
              'Progress Tracking System.',
            ],
          },
          {
            id: 'design-focus',
            label: 'Design Focus',
            items: [
              'Clean and minimal interface.',
              'Consistent visual design system.',
              'User-centered experience.',
              'Easy navigation.',
              'Accessibility-first approach.',
              'Data visualization for motivation.',
              'Responsive mobile-first interface.',
            ],
          },
          {
            id: 'design-process',
            label: 'Design Process',
            items: [
              'User Flow Planning.',
              'Information Architecture.',
              'Wireframing.',
              'High-Fidelity UI Design.',
              'Interactive Prototyping.',
              'Design System Creation.',
            ],
          },
          {
            id: 'skills',
            label: 'Skills Demonstrated',
            items: [
              'User Experience Design.',
              'User Interface Design.',
              'Wireframing.',
              'Prototyping.',
              'Visual Design.',
              'Information Architecture.',
              'Design Thinking.',
              'Interaction Design.',
            ],
          },
        ],
        techStack: [
          'Figma', 'UI Design', 'UX Design', 'Wireframing',
          'Prototyping', 'Design System', 'User Research', 'Interactive Design',
        ],
        buttons: [
          {
            id: 'prototype',
            label: 'View Figma Prototype',
            href: 'https://www.figma.com/proto/UvTfD8l6ZAwIEfCCQ8QIKE/Life-Goals-Visualization-App?node-id=22-33&p=f&viewport=231%2C207%2C0.1&t=853DAAukCsXvQu8n-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=22%3A33&page-id=22%3A32',
            variant: 'primary',
            icon: 'figma',
          },
          // No GitHub button – design-only project
        ],
      },
    ],
  },
];

export default projects;
