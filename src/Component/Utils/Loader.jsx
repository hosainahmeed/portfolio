import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { motion } from 'framer-motion'

const Loader = ({ enterWord }) => {
  const [displayedText, setDisplayedText] = useState('')
  const fullText = 'welcome to my place.😊'

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (displayedText.length < fullText.length) {
        setDisplayedText(prev => prev + fullText[displayedText.length])
      } else {
        clearInterval(typingInterval)
      }
    }, 30)

    return () => clearInterval(typingInterval)
  }, [displayedText, fullText])

  useEffect(() => {
    const TIMELINE_PRELOAD = gsap.timeline()

    TIMELINE_PRELOAD.fromTo(
      '.logo-image',
      { opacity: 0, y: '10%' },
      { opacity: 1, y: '0', duration: 1.5, ease: 'power2.out' }
    )
      .to('.logo-image', { opacity: 0, delay: 0.2, ease: 'power2.out' })
      .to('.vertical-line', { height: '0', duration: 1, ease: 'power2.out' })
  }, [])

  return (
    <div className='fixed top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center'>
      <motion.h1
        className='text-white text-4xl text-center mb-12'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {displayedText}
      </motion.h1>

      <div className='relative'>
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, 360] }}
          onClick={enterWord}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear'
          }}
          className='border-2 cursor-pointer p-2 border-dotted rounded-full
           w-48 h-48 flex items-center justify-center text-white'
        ></motion.div>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          {displayedText === fullText && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
              whileHover={{ scale: 1.1, backgroundColor: '#f0f0f0' }}
              whileTap={{ scale: 0.95 }}
              className='text-white'
            >
              Enter
            </motion.button>
          )}
        </div>
      </div>
      <motion.div
        className='vertical-line bg-white h-40 w-1 mt-10'
        initial={{ height: '100%' }}
        animate={{ height: '0%' }}
        transition={{ duration: 1.5, delay: 0.7, ease: 'easeInOut' }}
      />
    </div>
  )
}

export default Loader
