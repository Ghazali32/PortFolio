import { Github, Linkedin, Mail } from "lucide-react";
import photo from "../assets/photo.jpeg";

const projects = [
  {
    title: "Blog It",
    description:
      "A dynamic blogging platform with a serverless backend using Cloudflare Workers in TypeScript and PostgreSQL.",
    link: "https://github.com/Ghazali32/Blogging_Website-Frontend",
    DeploymentLink: "https://blogit-ghazali-hussain-s-projects.vercel.app/",
  },
  {
    title: "LearnWise",
    description:
      "A course-selling website developed using MERN stack technology with user authentication and admin panel.",
    link: "https://github.com/Ghazali32/Learn-Wise/tree/master",
  },
  {
    title: "Payment App",
    description:
      "An end-to-end payment app facilitating peer-to-peer transactions with user authentication.",
    link: "https://github.com/Ghazali32/PaymentApp-EndToEnd",
  },
  {
    title: "Newsify",
    description:
      "A Flutter news app built with clean architecture for offline article storage.",
    link: "https://github.com/Ghazali32/Newsify",
  },
];


const experiences = [
  {
    company: "The Tech Ravens",
    position: "SDE Intern",
    period: "July 2024 - Present",
    description: [
      "Engineered and implemented new features and enhancements for a web application utilizing React and Redux.",
      "Developed and debugged two React Native applications, integrating Firebase Authentication for secure user access.",
      "Implemented a notification panel in the aforementioned applications using Firebase Cloud Messaging and Node.js.",
      "Refactored existing backend code in Node.js and successfully redeployed the application on AWS EC2 for improved performance.",
    ],
  },
];

const educations = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Jamia Hamdard University",
    period: "August 2021 - May 2025",
    description:
      "Studied core computer science subjects, including algorithms, data structures, and software engineering principles.",
  },
];

export default function Portfolio() {

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <main>
        <section id="hero" className="bg-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center">
            <div className="lg:w-1/2">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Hi, I'm Ghazali Hussain</span>
                <span className="mt-1 block text-indigo-600">
                  Software Developer
                </span>
              </h1>
              <p className="mt-5 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl">
                I create beautiful and functional applications across web and
                mobile platforms using modern technologies.
              </p>
            </div>
            <div className="lg:w-1/3 lg:ml-20 flex flex-col items-center mb-8 lg:mb-0">
              <img
                src={photo} // Replace with your actual image URL
                alt="Ghazali Hussain"
                className="rounded-full shadow-lg object-cover w-40 h-40 sm:w-48 sm:h-48 md:w-80 md:h-80" // Responsive sizing
              />
              <section
                id="contact"
                className="bg-gray-100 mt-4 py-4 px-4 rounded-2xl shadow-lg"
              >
                <div className="flex justify-center space-x-8">
                  <a
                    href="https://github.com/Ghazali32"
                    className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                    aria-label="GitHub Profile"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ghazali-hussain-693790220"
                    className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a
                    href="mailto:shazebansari2536@gmail.com"
                    className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                    aria-label="Email"
                  >
                    <Mail className="h-6 w-6" />
                  </a>
                </div>
              </section>
            </div>
          </div>
        </section>

        <section id="about" className="bg-gray-50">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-8 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900">About Me</h2>
            <div className="border-b mt-6 pb-4 text-gray-500">
              <p>
                I’m a passionate developer with a keen eye for design and a love
                for creating intuitive user experiences. With expertise in
                modern technologies such as React, Next.js, React Native, and
                Flutter, I strive to build efficient and scalable applications
                for both web and mobile platforms that address real-world
                challenges.
              </p>
            </div>
          </div>
        </section>
        <section id="education" className="bg-gray-50 ">
          <div className="max-w-7xl  mx-auto py-12 px-4 sm:px-6 lg:pt-4 lg:pb-8 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900">Education</h2>
            <div className="mt-6 space-y-8">
              {educations.map((edu, index) => (
                <div key={index} className="border-b pb-4">
                  <div className="flex items-start justify-between">
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-medium text-gray-900">
                        {edu.degree}
                      </h3>
                      <h4 className="text-sm text-gray-500">
                        {edu.institution}
                      </h4>
                    </div>
                    <div className="text-sm text-gray-500">{edu.period}</div>
                  </div>
                  <div className="mt-2 text-sm text-gray-700">
                    <p>{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="bg-white">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900">Skills</h2>
            <div className="mt-6 space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Programming Languages
                </h3>
                <div className="mt-2 flex flex-wrap gap-4">
                  {["Java", "C", "C++", "JavaScript", "TypeScript", "Dart"].map(
                    (skill, index) => (
                      <span
                        key={index}
                        className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium cursor-pointer hover:bg-indigo-200 hover:text-indigo-900 transition duration-200"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Frontend Development
                </h3>
                <div className="mt-2 flex flex-wrap gap-4">
                  {[
                    "React JS",
                    "Next JS",
                    "Flutter",
                    "React-Native",
                    "HTML",
                    "CSS",
                    "Tailwind CSS",
                  ].map((skill, index) => (
                    <span
                      key={index}
                      className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium cursor-pointer hover:bg-indigo-200 hover:text-indigo-900 transition duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Backend Development
                </h3>
                <div className="mt-2 flex flex-wrap gap-4">
                  {[
                    "Node.js",
                    "Express JS",
                    "Serverless Backends",
                    "MongoDB",
                    "Postgres SQL",
                    "Firebase",
                    "AWS",
                    "Cloudflare",
                  ].map((skill, index) => (
                    <span
                      key={index}
                      className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium cursor-pointer hover:bg-indigo-200 hover:text-indigo-900 transition duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Tools & Technologies
                </h3>
                <div className="mt-2 flex flex-wrap gap-4">
                  {["Postman", "GitHub", "JSON", "JWT", "REST APIs"].map(
                    (skill, index) => (
                      <span
                        key={index}
                        className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium cursor-pointer hover:bg-indigo-200 hover:text-indigo-900 transition duration-200"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="bg-white">
          <div className="max-w-7xl mx-auto py-12 px-6 sm:px-6 lg:py-16 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Experience
            </h2>
            <div className="mt-6 space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="border-b pb-4">
                  <div className="flex items-start justify-between">
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-medium text-gray-900">
                        {exp.position}
                      </h3>
                      <h4 className="text-sm text-gray-500">{exp.company}</h4>
                    </div>
                    <div className="text-sm text-gray-500">{exp.period}</div>
                  </div>
                  <div className="mt-2 text-sm text-gray-700">
                    <ul className="list-disc list-inside space-y-1">
                      {exp.description.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="bg-gray-50">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900">Projects</h2>
            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:bg-indigo-100 cursor-pointer"
                >
                  <h3 className="text-lg font-medium text-gray-900 hover:text-indigo-600">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-gray-500">{project.description}</p>
                  <div className="mt-4 flex space-x-4">
                    {project.DeploymentLink && (
                      <a
                        href={project.DeploymentLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:underline"
                      >
                        View Deployment
                      </a>
                    )}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:underline"
                    >
                      View Repository
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-gray-50">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900">Contact</h2>
            <div className="mt-6 flex space-x-6">
              <a
                href="https://github.com/Ghazali32"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/ghazali-hussain-693790220"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:shazebansari2536@gmail.com"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Email</span>
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Ghazali Hussain. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
