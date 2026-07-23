export const personalInfo = {
  name: "Jayanthan P.",
  title: "Computer Science & Business Systems Student",
  subtitle: "2nd-year B.Tech CSBS student passionate about software development, Python, Java, full-stack web development, AI-assisted applications, and analytical problem solving.",
  location: "Karur, Tamil Nadu, India",
  college: "VSB Engineering College",
  degree: "B.Tech Computer Science and Business Systems (CSBS)",
  cgpa: "6.55",
  year: "2nd Year (Present)",
  phone: "7845531308",
  email: "jayanthanparamjyothy07@gmail.com",
  github: "https://github.com/jayanthan07-tam",
  linkedin: "https://www.linkedin.com/in/jayanthan-p-5795aa385",
  resumePath: "/resume.pdf",
  bio: `I am a detail-oriented 2nd-year B.Tech Computer Science and Business Systems (CSBS) student at VSB Engineering College, Karur. I possess a strong foundation in Python, Java, and full-stack web development. I have hands-on experience designing interactive web applications, voice-activated AI assistants, desktop GUI programs, and database-backed CRUD systems. I enjoy solving complex problems, building real-world software, and exploring emerging tech.`
};

export const skillsData = [
  {
    category: "Programming Languages",
    icon: "Code2",
    skills: [
      { name: "Python", level: "Core", tag: "Primary" },
      { name: "Java", level: "OOP & JDBC", tag: "Core" },
      { name: "JavaScript", level: "ES6+", tag: "Frontend" },
      { name: "C", level: "Foundational", tag: "Basics" },
      { name: "HTML5 & CSS3", level: "Semantic UI", tag: "Styling" }
    ]
  },
  {
    category: "Web Technologies",
    icon: "Globe",
    skills: [
      { name: "HTML5", level: "Semantic Markup" },
      { name: "CSS3", level: "Flexbox / Grid / Animations" },
      { name: "JavaScript", level: "DOM & Async API" },
      { name: "Web APIs", level: "REST Integrations" },
      { name: "React", level: "Component UI" },
      { name: "Tailwind CSS", level: "Utility-First" }
    ]
  },
  {
    category: "Databases",
    icon: "Database",
    skills: [
      { name: "MySQL", level: "Relational Queries & Schemas" },
      { name: "SQLite", level: "Embedded App DB" },
      { name: "JDBC", level: "Java Database Connector" }
    ]
  },
  {
    category: "Frameworks & Libraries",
    icon: "Cpu",
    skills: [
      { name: "Tkinter", level: "Desktop GUIs" },
      { name: "SpeechRecognition", level: "Voice Processing" },
      { name: "Pyttsx3", level: "Offline Text-to-Speech" },
      { name: "Pygame", level: "Game Logic & Graphics" }
    ]
  },
  {
    category: "Tools & Platforms",
    icon: "Wrench",
    skills: [
      { name: "Git", level: "Version Control" },
      { name: "GitHub", level: "Code Hosting & Projects" },
      { name: "VS Code", level: "Primary IDE" }
    ]
  },
  {
    category: "Soft Skills",
    icon: "UserCheck",
    skills: [
      { name: "Problem Solving" },
      { name: "Teamwork & Collaboration" },
      { name: "Technical Communication" },
      { name: "Adaptability" },
      { name: "Quick Learning" },
      { name: "Time Management" }
    ]
  }
];

export const projectsData = [
  {
    id: "ultron",
    title: "Ultron – AI Desktop Assistant",
    category: "Python & AI",
    github: "https://github.com/jayanthan07-tam/Ultron",
    liveDemo: null,
    technologies: ["Python", "SpeechRecognition", "Pyttsx3", "Web APIs"],
    shortDesc: "A voice-activated Python AI desktop assistant built to automate daily desktop workflows and enhance human-computer interaction.",
    features: [
      "Voice input parsing and real-time speech recognition",
      "Text-to-speech synthesis engine (Pyttsx3) for voice feedback",
      "Automated web search commands and system desktop tasks",
      "Modular Python script architecture for API-driven responses"
    ],
    featured: true,
    gradient: "from-cyan-500/20 to-blue-600/20",
    borderGlow: "hover:border-cyan-400/50"
  },
  {
    id: "ecommerce",
    title: "E-Commerce Web Platform",
    category: "Web Dev",
    github: "https://github.com/jayanthan07-tam/ecommerce",
    liveDemo: null,
    technologies: ["JavaScript", "HTML5", "CSS3"],
    shortDesc: "An interactive front-end e-commerce interface supporting dynamic product listings, browsing, and cart management.",
    features: [
      "Dynamic product catalog rendering with responsive layout",
      "Interactive client-side shopping cart state management",
      "Clean HTML5/CSS3 structured layouts rendering across devices",
      "Vanilla JavaScript event handlers for seamless user actions"
    ],
    featured: true,
    gradient: "from-indigo-500/20 to-purple-600/20",
    borderGlow: "hover:border-indigo-400/50"
  },
  {
    id: "voting",
    title: "Online Voting System",
    category: "Web Dev",
    github: "https://github.com/jayanthan07-tam/voting-site",
    liveDemo: null,
    technologies: ["HTML5", "CSS3", "JavaScript"],
    shortDesc: "A web-based voting portal interface enabling users to view candidate profiles and submit votes securely online.",
    features: [
      "Candidate showcase UI with clear visual hierarchy",
      "Interactive voting forms with real-time field validation",
      "Client-side vote capture logic using custom JavaScript",
      "Mobile-friendly responsive UI layout"
    ],
    featured: true,
    gradient: "from-blue-500/20 to-cyan-600/20",
    borderGlow: "hover:border-blue-400/50"
  },
  {
    id: "crud-student",
    title: "CRUD Student Management System",
    category: "Java & DB",
    github: "https://github.com/jayanthan07-tam/CURD",
    liveDemo: null,
    technologies: ["Java", "MySQL", "JDBC"],
    shortDesc: "A Java database application implementing complete Create, Read, Update, and Delete operations connected to a MySQL database.",
    features: [
      "Full CRUD operations for managing student records",
      "Java Database Connectivity (JDBC) backend integration",
      "Structured MySQL relational database schemas and optimized SQL queries",
      "Reliable error handling and data persistence"
    ],
    featured: true,
    gradient: "from-emerald-500/20 to-teal-600/20",
    borderGlow: "hover:border-emerald-400/50"
  },
  {
    id: "library",
    title: "Library Management System",
    category: "Python & AI",
    github: "https://github.com/jayanthan07-tam/LIBRARY-MANAGEMENT-SYSTEM",
    liveDemo: null,
    technologies: ["Python", "Tkinter", "SQLite"],
    shortDesc: "A GUI-driven desktop library management application designed to track book inventories, student member records, and borrowing operations.",
    features: [
      "Graphical user interface built using Python Tkinter",
      "Book issue and return management workflows",
      "Instant inventory search and member lookup",
      "Embedded SQLite database for local data persistence"
    ],
    featured: true,
    gradient: "from-amber-500/20 to-orange-600/20",
    borderGlow: "hover:border-amber-400/50"
  },
  {
    id: "command-area",
    title: "Adaptation of Command Area (Agricultural Research)",
    category: "Research / Other",
    github: "https://github.com/jayanthan07-tam/Adaptation-of-Existing-Command-Area-in-Response-to-Shifting-of-Agricultural",
    liveDemo: null,
    technologies: ["Python", "Data Analysis", "Research"],
    shortDesc: "An analytical project evaluating shifts in agricultural practices and water command area adaptation strategies.",
    features: [
      "Data analysis of shifting crop patterns and irrigation needs",
      "Systematic evaluation of water distribution efficiency",
      "Structured project documentation and findings"
    ],
    featured: false,
    gradient: "from-slate-500/20 to-gray-600/20",
    borderGlow: "hover:border-slate-400/50"
  },
  {
    id: "mini-project-01",
    title: "Mini Project 01",
    category: "Research / Other",
    github: "https://github.com/jayanthan07-tam/Mini-Project-01",
    liveDemo: null,
    technologies: ["Python / Web", "Git"],
    shortDesc: "Foundational technical exploration project demonstrating fundamental software development principles.",
    features: [
      "Clean modular code structure",
      "Version controlled repository with Git",
      "Practice implementation of core computer science concepts"
    ],
    featured: false,
    gradient: "from-slate-500/20 to-gray-600/20",
    borderGlow: "hover:border-slate-400/50"
  }
];

export const educationData = [
  {
    institution: "VSB Engineering College",
    location: "Karur, Tamil Nadu",
    degree: "Bachelor of Technology (B.Tech)",
    department: "Computer Science and Business Systems (CSBS)",
    status: "2nd Year (Present)",
    cgpa: "6.55",
    highlights: [
      "Core curriculum combining Computer Science algorithms, software development, and modern business analytics",
      "Active participant in technical coding events, workshops, and team projects",
      "Focus on Python, Java, Database Management, and Web Technologies"
    ]
  }
];

export const certificationsData = [
  {
    title: "Python Foundation Certification",
    issuer: "Python Institute / Authorized Provider",
    status: "Completed",
    badge: "Verified",
    color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
    description: "Certified foundation in Python programming concepts, data structures, control flow, functions, and file handling."
  },
  {
    title: "Full-Stack Web Development Course",
    issuer: "Details to be updated upon completion",
    status: "In Progress / Upcoming",
    badge: "Upcoming",
    color: "from-slate-800/40 to-slate-900/40 border-slate-700/50",
    description: "Ongoing learning in modern web frameworks, frontend architectures, and backend API integration."
  },
  {
    title: "Java Programming & JDBC",
    issuer: "Details to be updated upon completion",
    status: "In Progress / Upcoming",
    badge: "Upcoming",
    color: "from-slate-800/40 to-slate-900/40 border-slate-700/50",
    description: "Advanced object-oriented programming concepts and relational database persistence."
  }
];

export const eventsData = [
  {
    title: "EXPLOIT-X E2 CTF Competition",
    type: "Cybersecurity & CTF",
    organizer: "Technical College Community",
    status: "Participation Details to be Updated",
    date: "Upcoming / Scheduled",
    description: "Participation planned in hands-on Capture The Flag cybersecurity challenges, vulnerability analysis, and problem solving."
  },
  {
    title: "Technical Seminars & Hands-on Workshops",
    type: "Skill Enhancement",
    organizer: "VSB Engineering College, Karur",
    status: "Attended",
    date: "2nd Year Academic Session",
    description: "Attended departmental technical seminars focusing on emerging software technologies, coding standards, and industry practices."
  }
];

export const achievementsData = {
  message: "Academic & competitive accomplishments will be updated as new hackathon results and competition certifications are earned.",
  note: "Currently focused on strengthening core software skills and building impactful open-source projects."
};
