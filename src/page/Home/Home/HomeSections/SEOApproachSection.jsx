import { useEffect, useRef } from 'react';
import { FaSearch, FaFileAlt, FaLink, FaChartLine, FaMobileAlt, FaTachometerAlt } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SEOApproachSection = () => {
  const timelineRef = useRef(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(0, seoSteps.length);

    sectionRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: -20 }, 
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <section id='strategy' className="relative py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          SEO Approach
        </h2>
        <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
          Follow our step-by-step strategy for effective SEO results, from initial research to continuous optimization.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-8 sm:left-10 top-0 h-full border-l-4 border-purple-600" ref={timelineRef}></div>

        {/* Timeline Items */}
        <div className="flex flex-col items-start ml-16 sm:ml-20 space-y-12">
          {seoSteps.map((step, index) => (
            <div
              key={index}
              ref={(el) => (sectionRefs.current[index] = el)}
              className="flex flex-col sm:flex-row items-start space-x-0 sm:space-x-4 opacity-0" 
            >
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-600 text-white text-lg font-bold">
                {`0${index + 1}`}
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-left text-white w-full">
                <div className="flex items-center space-x-2 mb-2">
                  {step.icon}
                  <h3 className="text-lg sm:text-xl font-semibold">{step.title}</h3>
                </div>
                <p className="text-gray-400 mb-4">{step.description}</p>
                {/* <button className="text-purple-500 hover:underline">
                  Change section
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Steps in the SEO approach with icons, descriptions, and estimated times
const seoSteps = [
  {
    icon: <FaSearch size={24} />,
    title: 'Keyword Research',
    description: 'Identify relevant keywords to target your audience effectively.',
    time: '1-2 days',
  },
  {
    icon: <FaFileAlt size={24} />,
    title: 'Content Optimization',
    description: 'Optimize your website content with keywords and quality information.',
    time: '3-4 days',
  },
  {
    icon: <FaLink size={24} />,
    title: 'Link Building',
    description: 'Develop high-quality backlinks to increase site authority.',
    time: '1 week',
  },
  {
    icon: <FaChartLine size={24} />,
    title: 'Analytics & Reporting',
    description: 'Monitor and refine strategy with data-driven insights.',
    time: 'Ongoing',
  },
  {
    icon: <FaMobileAlt size={24} />,
    title: 'Mobile Optimization',
    description: 'Ensure a seamless experience on mobile devices.',
    time: '2 days',
  },
  {
    icon: <FaTachometerAlt size={24} />,
    title: 'Page Speed Improvement',
    description: 'Optimize loading speed for better SEO rankings.',
    time: '1-3 days',
  },
];

export default SEOApproachSection;
