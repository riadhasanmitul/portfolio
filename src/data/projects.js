export const projects = [
  {
    id: 1,
    title: "BDNCart — Full-Stack E-Commerce Platform",
    description:
      "A production-grade e-commerce platform with product catalog, cart management, order processing, user authentication, and an admin dashboard — containerized with Docker.",
    longDescription:
      "Built end-to-end with TypeScript across React (frontend) and Node.js/Express (backend). Features JWT authentication, role-based admin panel, PostgreSQL for data persistence, and Docker Compose for seamless containerized deployment. Designed for scalability with clean API architecture and responsive UI.",
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Docker",
    ],
    category: [
      "Full-Stack",
      "React",
      "TypeScript",
      "Backend",
      "Node.js",
      "PostgreSQL",
      "Frontend",
    ],
    githubUrl: "https://github.com/riadhasanmitul/bdncart",
    liveUrl: null,
    featured: true,
  },
  {
    id: 2,
    title: "Flood Detection — IoT Smart Flood Detection System",
    description:
      "An IoT-based smart flood detection system that monitors water level, temperature, and humidity in real time, providing automated alerts through a responsive dashboard.",
    longDescription:
      "Developed an IoT-based flood detection system using sensor nodes to monitor water level, temperature, and humidity. Integrated sensors with an MQTT broker, built a Node.js backend for real-time data processing, and created a responsive React dashboard to visualize live sensor data and trigger automated flood alerts.",
    techStack: ["IoT", "React Native", "C++ (Arduino)"],
    category: ["IoT", "C++", "React"],
    githubUrl: "https://github.com/riadhasanmitul/IOT-Project",
    liveUrl: null,
    featured: false,
  },
  {
    id: 3,
    title: "Developer Portfolio",
    description:
      "A modern, responsive portfolio website showcasing projects, technical skills, and professional experience.",
    longDescription:
      "Designed and developed a personal portfolio using React, TypeScript, and Tailwind CSS. Built reusable UI components, implemented responsive layouts, smooth animations, and optimized performance to create a fast, accessible, and professional web experience.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    category: ["Frontend", "React"],
    githubUrl: "https://github.com/riadhasanmitul/portfolio",
    liveUrl: "null",
    featured: false,
  },
  {
  id: 4,
  title: "Diabetes Readmission Prediction",
  description:
    "A machine learning system that predicts whether diabetic patients will be readmitted to the hospital within 30 days.",
  longDescription:
    "Developed an end-to-end machine learning pipeline using the Diabetes 130-US Hospitals dataset. Performed data preprocessing, feature engineering, class imbalance handling with SMOTE and ADASYN, and trained multiple classification models including Random Forest, XGBoost, and Gradient Boosting. Evaluated models using accuracy, precision, recall, F1-score, and ROC-AUC, while applying SHAP and LIME for model interpretability and explainable AI.",
  techStack: [
    "Python",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "XGBoost",
    "SHAP",
    "LIME",
    "Matplotlib"
  ],
  category: ["Machine Learning", "Healthcare"],
  githubUrl: "null",
  liveUrl: "null",
  featured: true,
},
{
  id: 5,
  title: "Customer Segmentation",
  description:
    "An unsupervised machine learning project that segments customers based on purchasing behavior.",
  longDescription:
    "Implemented customer segmentation using K-Means and DBSCAN clustering algorithms. Conducted data preprocessing, feature scaling, exploratory data analysis, and cluster visualization to identify meaningful customer groups for targeted marketing and business insights.",
  techStack: [
    "Python",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "Matplotlib"
  ],
  category: ["Machine Learning", "Data Science"],
  githubUrl: "null",
  liveUrl: "null",
  featured: false,
},
{
  id: 6,
  title: "Facial Image Recognition",
  description:
    "A deep learning project for recognizing human faces from digital images.",
  longDescription:
    "Built a facial image recognition system using convolutional neural networks (CNNs). The project includes image preprocessing, feature extraction, model training, and evaluation to accurately classify and recognize faces under different conditions.",
  techStack: [
    "Python",
    "TensorFlow",
    "Keras",
    "OpenCV",
    "NumPy"
  ],
  category: ["Deep Learning", "Computer Vision"],
  githubUrl: "null",
  liveUrl: "null",
  featured: false,
},
{
  id: 7,
  title: "Personalized Learning Path Recommender",
  description:
    "A graph-based recommendation system that suggests personalized learning paths for students.",
  longDescription:
    "Developed a recommendation system using Neo4j knowledge graphs to recommend courses based on learner interests, prerequisites, and skill levels. Implemented graph modeling, Cypher queries, and graph embedding concepts to generate structured learning paths with improved recommendation quality.",
  techStack: [
    "Python",
    "Neo4j",
    "Cypher",
    "PyKEEN",
    "Graph Embeddings"
  ],
  category: ["Recommendation System", "Graph ML"],
  githubUrl: "null",
  liveUrl: "null",
  featured: false,
},
];

export const projectCategories = [
  "All",
  "Full-Stack",
  "Backend",
  "React",
  "Node.js",
  "Machine Learning",
  "IoT",
];
