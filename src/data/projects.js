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
