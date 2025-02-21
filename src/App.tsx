import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const projects = [
    {
      title: "Project 1",
      description: "A full-stack web application built with React and Node.js",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&auto=format&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Project 2",
      description: "Mobile-first e-commerce platform",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Project 3",
      description: "AI-powered data analytics dashboard",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Project 4",
      description: "Real-time chat application",
      image: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1470&auto=format&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Project 5",
      description: "Blockchain-based voting system",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1470&auto=format&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Project 6",
      description: "IoT home automation system",
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=1470&auto=format&fit=crop",
      github: "#",
      demo: "#"
    }
  ];

  const achievements = [
    {
      title: "Best Developer Award",
      description: "Recognized as the top developer at XYZ Tech Conference 2023",
      icon: "🏆"
    },
    {
      title: "Open Source Contributor",
      description: "Made 500+ contributions to various open source projects",
      icon: "⭐"
    },
    {
      title: "Tech Speaker",
      description: "Delivered 20+ technical talks at international conferences",
      icon: "🎤"
    }
  ];

  const skills = [
    "React", "Node.js", "TypeScript", "Python",
    "AWS", "Docker", "GraphQL", "MongoDB",
    "Next.js", "TailwindCSS", "Git", "CI/CD"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center"
            >
              <span className="text-2xl font-bold text-orange-600">Portfolio</span>
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-orange-600">Home</a>
              <a href="#projects" className="text-gray-700 hover:text-orange-600">Projects</a>
              <a href="#achievements" className="text-gray-700 hover:text-orange-600">Achievements</a>
              <a href="#skills" className="text-gray-700 hover:text-orange-600">Skills</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600">Contact</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-orange-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Home</a>
              <a href="#projects" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Projects</a>
              <a href="#achievements" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Achievements</a>
              <a href="#skills" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Skills</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Contact</a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-10 bg-gradient-to-r from-orange-50 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Hi, I'm <span className="text-orange-600">Ankit</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Full Stack Developer | Open Source Contributor | Tech Speaker
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#contact" className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors">
                Contact Me
              </a>
              <a href="#projects" className="border-2 border-orange-600 text-orange-600 px-6 py-3 rounded-lg hover:bg-orange-600 hover:text-white transition-colors">
                View Projects
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-12"
          >
            My <span className="text-orange-600">Projects</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex space-x-4">
                    <a href={project.github} className="text-orange-600 hover:text-orange-700">
                      <Github size={20} />
                    </a>
                    <a href={project.demo} className="text-orange-600 hover:text-orange-700">
                      View Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-12"
          >
            My <span className="text-orange-600">Achievements</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-12"
          >
            My <span className="text-orange-600">Skills</span>
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-12"
          >
            Get In <span className="text-orange-600">Touch</span>
          </motion.h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="text-orange-600" />
                      <span>john.doe@example.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Github className="text-orange-600" />
                      <a href="#" className="hover:text-orange-600">github.com/Ankit</a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Linkedin className="text-orange-600" />
                      <a href="#" className="hover:text-orange-600">linkedin.com/in/Ankit</a>
                    </div>
                  </div>
                </div>
                <div>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Name</label>
                      <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email</label>
                      <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Message</label>
                      <textarea rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <span className="text-2xl font-bold text-orange-500">Portfolio</span>
              <p className="mt-2 text-gray-400">© 2024 Ankit. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;