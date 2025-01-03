import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import caff from '../../../../assets/caff.png'
import med from '../../../../assets/med.png'
import toy from '../../../../../src/assets/toy.png'
import { Button } from 'antd'

const projectData = [
  {
    _id: 1,
    title: 'Play Toys',
    description:
      'A toy store is a retail business that sells toys, such as dolls or model cars, for children to play with. ',
    img: toy,
    clientCode: `https://github.com/hosainahmeed/play-toy-client`,
    serverCode: `https://github.com/hosainahmeed/play-toy-server`,
    liveSite: `https://playtoy-1c00b.firebaseapp.com`
  },
  {
    _id: 2,
    title: 'Cafe House',
    description:
      'A cafe, also known as a coffeehouse or coffee shop, is a place that serves coffee, tea, and light snacks, and is known for its casual social environment',
    img: caff,
    clientCode: `https://github.com/hosainahmeed/Caf-Canvas-client`,
    serverCode: `https://github.com/hosainahmeed/caff-canvas-server`,
    liveSite: `https://coffee-rush-15b08.web.app`
  },
  {
    _id: 3,
    title: 'Medical Center',
    description:
      'A dynamic medical center platform offering seamless access to patient records, doctor profiles, and appointment management with real-time updates and modern UI.',
    img: med,
    clientCode: `https://github.com/hosainahmeed/Docs-House-Client`,
    serverCode: `https://github.com/hosainahmeed/Docs-House-server`,
    liveSite: `https://docshouse-8de58.web.app`
  }
]

const Projects = React.forwardRef((props, ref) => {
  const [isInView, setIsInView] = useState(false)
  const projectsRef = useRef(null)

  const [hoverStates, setHoverStates] = useState(
    Array(projectData.length).fill(false)
  )

  const handleMouseInAnimation = index => {
    const newHoverStates = [...hoverStates]
    newHoverStates[index] = true
    setHoverStates(newHoverStates)
  }

  const handleMouseOutAnimation = index => {
    const newHoverStates = [...hoverStates]
    newHoverStates[index] = false
    setHoverStates(newHoverStates)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        } else {
          setIsInView(false)
        }
      },
      {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
      }
    )

    if (projectsRef.current) {
      observer.observe(projectsRef.current)
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current)
      }
    }
  }, [])

  return (
    <div
      id='projects'
      ref={el => {
        projectsRef.current = el
        if (typeof ref === 'function') ref(el)
        else if (ref) ref.current = el
      }}
      className={`projects-container transition-colors pb-4 duration-500 rounded-2xl px-4 ${
        isInView ? 'bg-[#1F1F1F] text-white' : 'bg-white text-black'
      }`}
    >
      <div className='w-full'>
        <div className='flex flex-col gap-6 text-center items-center'>
          <h3 className='mt-12 text-sm sm:text-base md:text-lg lg:text-xl font-semibold uppercase tracking-wider'>
            Works
          </h3>
          <h2 className='font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-6xl leading-tight'>
            Explore My Recent Work
          </h2>
          <p className='text-base  sm:text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto'>
            Here are my latest Works
          </p>
        </div>

        <div>
          {projectData.map((project, index) => (
            <div
              key={project._id}
              className='flex flex-col gap-6 items-start mt-12'
            >
              <div
                onMouseEnter={() => handleMouseInAnimation(index)}
                onMouseLeave={() => handleMouseOutAnimation(index)}
                className='w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[650px] relative rounded-xl bg-slate-500 overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02]'
              >
                <img
                  className='w-full h-full object-cover'
                  src={project.img}
                  alt={project.title}
                />
                <motion.div
                  initial={{ y: '100%' }}
                  animate={{ y: hoverStates[index] ? '0%' : '100%' }}
                  transition={{ duration: 0.5 }}
                  className='absolute bottom-0 w-full hidden md:flex items-start gap-4 flex-col bg-black bg-opacity-90 backdrop-blur-sm h-1/2 px-6 sm:px-8 md:px-10 lg:px-12 pt-6 sm:pt-8'
                >
                  <h3 className='text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold'>
                    {project.title}
                  </h3>
                  <p className='text-white text-sm sm:text-base md:text-lg lg:text-xl'>
                    {project.description}
                  </p>
                  <div className='flex gap-2'>
                    <Button className='text-white bg-black border-2 border-white hover:bg-white hover:text-black transition-colors duration-300 text-sm sm:text-base md:text-lg'>
                      <a href={project.liveSite} target='_blank'>
                        View Project
                      </a>
                    </Button>
                    <Button className='text-white bg-black border-2 border-white hover:bg-white hover:text-black transition-colors duration-300 text-sm sm:text-base md:text-lg'>
                      <a href={project.clientCode} target='_blank'>
                        Client side code
                      </a>
                    </Button>
                    <Button className='text-white bg-black border-2 border-white hover:bg-white hover:text-black transition-colors duration-300 text-sm sm:text-base md:text-lg'>
                      <a href={project.serverCode} target='_blank'>
                        Server side code
                      </a>
                    </Button>
                  </div>
                </motion.div>
              </div>

              <div className='w-full flex items-center justify-center'>
                <div className='grid grid-cols-2 gap-2 md:hidden'>
                  <Button className='text-white bg-black border-2 border-white hover:bg-white hover:text-black transition-colors duration-300 text-sm sm:text-base md:text-lg'>
                    <a href={project.liveSite} target='_blank'>
                      View Project
                    </a>
                  </Button>
                  <Button className='text-white bg-black border-2 border-white hover:bg-white hover:text-black transition-colors duration-300 text-sm sm:text-base md:text-lg'>
                    <a href={project.clientCode} target='_blank'>
                      Client side code
                    </a>
                  </Button>
                  <Button className='text-white bg-black border-2 border-white hover:bg-white hover:text-black transition-colors duration-300 text-sm sm:text-base md:text-lg'>
                    <a href={project.serverCode} target='_blank'>
                      Server side code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='w-full text-center mt-16'>
          {/* <Button
            className='bg-[#1F1F1F] border-2 px-6 sm:px-8 text-xl sm:text-2xl font-semibold py-4 sm:py-6 border-white text-white hover:bg-white hover:text-black transition-colors duration-300'
            color='primary'
            variant='flat'
          >
            <Link to='/allprojects'>All Projects</Link>
          </Button> */}
        </div>
      </div>
    </div>
  )
})

Projects.displayName = 'Projects'
export default Projects
