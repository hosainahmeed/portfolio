// import { useEffect, useState } from 'react'
// import { gsap } from 'gsap'
// import { motion } from 'framer-motion'

// const Loader = ({ enterWord }) => {
//   const [displayedText, setDisplayedText] = useState('')
//   const fullText = 'welcome to my place.😊'

//   useEffect(() => {
//     const typingInterval = setInterval(() => {
//       if (displayedText.length < fullText.length) {
//         setDisplayedText(prev => prev + fullText[displayedText.length])
//       } else {
//         clearInterval(typingInterval)
//       }
//     }, 30)

//     return () => clearInterval(typingInterval)
//   }, [displayedText, fullText])

//   useEffect(() => {
//     const TIMELINE_PRELOAD = gsap.timeline()

//     TIMELINE_PRELOAD.fromTo(
//       '.logo-image',
//       { opacity: 0, y: '10%' },
//       { opacity: 1, y: '0', duration: 1.5, ease: 'power2.out' }
//     )
//       .to('.logo-image', { opacity: 0, delay: 0.2, ease: 'power2.out' })
//       .to('.vertical-line', { height: '0', duration: 1, ease: 'power2.out' })
//   }, [])

//   return (
//     <div className='fixed top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center'>
//       <motion.h1
//         className='text-white text-4xl text-center mb-12'
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1, ease: 'easeOut' }}
//       >
//         {displayedText}
//       </motion.h1>

//       <div className='relative'>
//         <motion.div
//           initial={{ rotate: 0 }}
//           animate={{ rotate: [0, 360] }}
//           onClick={enterWord}
//           transition={{
//             duration: 2,
//             repeat: Infinity,
//             ease: 'linear'
//           }}
//           className='border-2 cursor-pointer p-2 border-dotted rounded-full
//            w-48 h-48 flex items-center justify-center text-white'
//         ></motion.div>
//         <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
//           {displayedText === fullText && (
//             <motion.button
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
//               whileHover={{ scale: 1.1, backgroundColor: '#f0f0f0' }}
//               whileTap={{ scale: 0.95 }}
//               className='text-white'
//             >
//               Enter
//             </motion.button>
//           )}
//         </div>
//       </div>
//       <motion.div
//         className='vertical-line bg-white h-40 w-1 mt-10'
//         initial={{ height: '100%' }}
//         animate={{ height: '0%' }}
//         transition={{ duration: 1.5, delay: 0.7, ease: 'easeInOut' }}
//       />
//     </div>
//   )
// }

// export default Loader

import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

function Loader ({ setLoading }) {
  useEffect(() => {
    function heroTextDestroy (element) {
      let herotextSplit = element.textContent.split('')
      element.innerHTML = ''

      herotextSplit.forEach(letter => {
        let span = document.createElement('span')
        span.textContent = letter
        let newText = element.appendChild(span)
        newText.style.color = 'red'
      })

      let spans = element.querySelectorAll('span')
      let tl = gsap.timeline()

      tl.fromTo(
        spans,
        {
          y: 100,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
          stagger: 0.1,
          color: '#393737'
        }
      )
    }

    const herotextElements = document.querySelectorAll('.introtext')
    herotextElements.forEach(heroTextDestroy)
  }, [])

  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => {
        if (prevCount < 100) {
          return prevCount + 1
        } else if (prevCount === 100) {
          setLoading(false)
          clearInterval(interval)
          return prevCount
        } else {
          clearInterval(interval)
          return prevCount
        }
      })
    }, 15)

    return () => clearInterval(interval)
  }, [])

  // const magicboxSize = count === 100 ? "w-screen h-screen" : `w-[${(count / 100) * 300}px] h-[${(count / 100) * 2}px]`;

  return (
    <div className='w-full h-screen flex items-center justify-center relative'>
      <div className='text-center'>
        <h1 className='text-[14vw] md:text-[8vw] leading-none font-sans uppercase text-[#fff] font-bold'>
          Hosain Ali
        </h1>
        <h1 className='mt-4 text-white'>Ready _{count}%</h1>
      </div>
      <div
        style={{
          width: count === 100 ? '100vw' : `${(count / 100) * 300}px`,
          height: count === 10 ? '100vh' : '2px'
        }}
        className={`bg-[#393737] transition-all duration-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
      ></div>
    </div>
  )
}

export default Loader
