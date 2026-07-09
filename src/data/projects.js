export const projects = [
  {
    id: 1,
    title: "BDNCart — Full-Stack E-Commerce Platform",
    description:
      "A production-grade e-commerce platform with product catalog, cart management, order processing, user authentication, and an admin dashboard — containerized with Docker.",
    longDescription:
      "Built end-to-end with TypeScript across React (frontend) and Node.js/Express (backend). Features JWT authentication, role-based admin panel, PostgreSQL for data persistence, and Docker Compose for seamless containerized deployment. Designed for scalability with clean API architecture and responsive UI.",
    techStack: ["React", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Docker"],
    category: ["Full-Stack", "React", "TypeScript", "Backend", "Node.js"],
    githubUrl: "https://github.com/riadhasanmitul/bdncart",
    liveUrl: null,
    featured: true,
  },
  {
    id: 2,
    title: "TaskFlow — Project Management REST API",
    description:
      "A RESTful backend API for team task management with JWT authentication, role-based access control, and structured project/task hierarchy.",
    longDescription:
      "Architected a scalable REST API handling multi-tenant workspaces, JWT auth with refresh token rotation, and clean controller-service-repository architecture using Node.js and PostgreSQL.",
    techStack: ["Node.js", "Express.js", "PostgreSQL", "JWT", "REST API"],
    category: ["Backend", "Node.js"],
    githubUrl: "https://github.com/riadhasanmitul",
    liveUrl: null,
    featured: false,
  },
  {
    id: 3,
    title: "CropSense — IoT Smart Agriculture System",
    description:
      "IoT-based system monitoring soil moisture, temperature, and humidity using sensors, with a real-time dashboard and automated irrigation triggers.",
    longDescription:
      "Integrated sensor nodes with an MQTT broker, built a real-time Node.js data pipeline, and created a responsive React dashboard to visualize farm telemetry in real time.",
    techStack: ["Python", "IoT", "MQTT", "React", "Node.js"],
    category: ["IoT", "Python"],
    githubUrl: "https://github.com/riadhasanmitul",
    liveUrl: null,
    featured: false,
  },
  {
    id: 4,
    title: "StudyLens — ML Academic Performance Predictor",
    description:
      "Machine learning model predicting student academic performance using historical data, with feature engineering, model comparison, and a Flask web interface.",
    longDescription:
      "Applied data preprocessing, compared Random Forest vs Logistic Regression achieving 87% accuracy, and deployed via Flask for real-time predictions. Covers the full ML pipeline from raw data to web-served results.",
    techStack: ["Python", "scikit-learn", "Pandas", "Flask", "ML"],
    category: ["Machine Learning", "Python"],
    githubUrl: "https://github.com/riadhasanmitul",
    liveUrl: null,
    featured: false,
  },
  {
    id: 5,
    title: "DevConnect — Developer Social Network",
    description:
      "A social networking platform for developers to share projects, follow peers, and post articles with real-time feed updates and profile customization.",
    longDescription:
      "Built with TypeScript on both frontend (React) and backend (Express), featuring a follow/feed system, JWT sessions, and PostgreSQL with optimized queries for feed aggregation.",
    techStack: ["TypeScript", "React", "Express.js", "PostgreSQL", "REST API"],
    category: ["Full-Stack", "TypeScript"],
    githubUrl: "https://github.com/riadhasanmitul",
    liveUrl: null,
    featured: false,
  },
];

export const projectCategories = [
  "All",
  "Full-Stack",
  "Backend",
  "React",
  "Node.js",
  "Python",
  "Machine Learning",
  "IoT",
  "TypeScript",
];
