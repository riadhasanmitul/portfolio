import "./App.css";
import Chatbot from "./components/chatbot/Chatbot";
import ScrollProgress from "./components/layout/ScrollProgress";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Timeline from "./components/sections/Timeline";
import Achievements from "./components/sections/Achievements";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
