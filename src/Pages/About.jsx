import React from 'react';

const skills = [
  { name: 'HTML', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Redux Toolkit', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
  { name: 'Axios', img: 'https://camo.githubusercontent.com/2ac485b6967b7c38e2b416b2b1e3c2812a79e146eb37a74bced4305a55e282a4/68747470733a2f2f6178696f732d687474702e636f6d2f6173736574732f6c6f676f2e737667' },
  { name: 'React Query', img: 'https://seeklogo.com/images/R/react-query-logo-1340EA4CE9-seeklogo.com.png' },
  { name: 'Bootstrap', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg' },
  { name: 'Tailwind CSS', img: 'https://img.icons8.com/?size=48&id=4PiNHtUJVbLs&format=png' },
];

const testimonials = [
  {
    title: 'HTML & CSS',
    text: 'I create beautiful and responsive layouts with clean HTML5 and modern CSS3 using Flexbox and Grid.',
  },
  {
    title: 'JavaScript',
    text: 'I handle dynamic interfaces with ES6+ syntax and build smooth user experiences.',
  },
  {
    title: 'React & Libraries',
    text: 'I build scalable apps using React, Redux Toolkit, Axios, and React Query for better performance.',
  },
];

const About = () => {
  return (
    <div className="bg-white text-black px-5 py-16 font-['Montserrat']">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* ABOUT SECTION */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-orange-500">Hey, I’m Ameer Hamza <span className="inline-block animate-wave origin-[70%_70%]">👋</span></h2>
            <p className="text-lg text-gray-700">
              I'm a <span className="font-semibold text-orange-500">React Developer</span> who specializes in building fast,
              scalable, and modern web interfaces using React, Tailwind CSS, Redux, and more.
            </p>
            <a
              href="https://your-resume-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-all duration-300 shadow-md"
            >
              View Resume
            </a>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="../src/assets/About.png"
              alt="Developer Illustration"
              className="w-72 h-72 md:w-80 md:h-80 rounded-xl object-cover shadow-lg"
            />
          </div>
        </div>

        {/* SKILLS SECTION */}
        <div className="text-center space-y-10">
          <h2 className="text-3xl font-bold text-orange-500">My Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center p-4 bg-[#fef2e8] rounded-xl hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <img src={skill.img} alt={skill.name} className="w-14 h-14 mb-2" />
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* TESTIMONIALS SECTION */}
        <div className="text-center space-y-10">
          <h2 className="text-3xl font-bold text-orange-500">What I Can Do</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-[#fff3eb] border-t-4 border-orange-400 rounded-xl shadow-lg p-6 text-left"
              >
                <h3 className="text-xl font-semibold text-orange-500 mb-2">{t.title}</h3>
                <p className="text-gray-700 italic">“{t.text}”</p>
              </div>
            ))}
          </div>
        </div>

      </div>
      <style jsx>{`
        .animate-wave {
          display: inline-block;
          animation: wave 2.5s infinite;
          transform-origin: 70% 70%;
        }
        @keyframes wave {
          0% { transform: rotate(0deg); }
          15% { transform: rotate(15deg); }
          30% { transform: rotate(-10deg); }
          45% { transform: rotate(15deg); }
          60% { transform: rotate(-10deg); }
          75% { transform: rotate(15deg); }
          100% { transform: rotate(0deg); }
        }
      `}</style>
    </div>
  );
};

export default About;
