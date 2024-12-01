import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import XIcon from '@mui/icons-material/X'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import heroImage from '../../../../assets/image/hosain.jpeg'
import { Link } from 'react-scroll'
import { Image } from 'antd'
import { Button } from '@mui/material'
import Marquee from 'react-fast-marquee'
import { GitHub } from '@mui/icons-material'
import resume from '../../../../../public/hosainali.pdf'
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.2
    }
  }
}

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

const skill = [
  'https://i.ibb.co/xfcZ1L3/95596-html-512x512.png',
  'https://i.ibb.co/bmjWMCR/free-css3-2038878-1720091.png',
  'https://i.ibb.co/SnSbD3K/107077-html-512x512.png',
  'https://i.ibb.co/fDJh3pT/Tailwind-CSS-Logo-svg.png',
  'https://i.ibb.co/fvknxwK/download-4-removebg-preview.png',
  'https://i.ibb.co/QNt6kkW/react-icon-0.png',
  'https://pulkitgangwar.gallerycdn.vsassets.io/extensions/pulkitgangwar/nextjs-snippets/1.0.2/1713018281951/Microsoft.VisualStudio.Services.Icons.Default',
  'https://iconape.com/wp-content/files/ro/370540/svg/ant-design-logo-icon-png-svg.png',
  'https://cdn.iconscout.com/icon/free/png-256/free-framer-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-vol-3-pack-logos-icons-3031011.png',
  'https://cdn.iconscout.com/icon/free/png-256/free-node-js-logo-icon-download-in-svg-png-gif-file-formats--nodejs-programming-language-pack-logos-icons-1174925.png?f=webp&w=256',
  'https://i.ibb.co/4YhcFR7/download-1.png',
  'https://i.ibb.co/bb39V2R/5858229-middle-removebg-preview.png',
  'https://cdn.iconscout.com/icon/free/png-256/free-adobe-xd-logo-icon-download-in-svg-png-gif-file-formats--logos-icons-1361791.png',
  'https://i.ibb.co/q9MchFj/logo-vercel.png',
  'https://i.ibb.co/SPCRhVJ/5968705.png',
  'https://cdn-icons-png.flaticon.com/256/25/25231.png',
  'https://cdn.iconscout.com/icon/free/png-256/free-firebase-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-7-pack-icons-282796.png',
  'https://cdn.iconscout.com/icon/free/png-256/free-postman-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-vol-5-pack-logos-icons-3030217.png?f=webp&w=256'
]

function HeroSection () {
  return (
    <motion.div
      id='home'
      className='grid grid-cols-12 gap-2 mt-12 md:mb-28'
      initial='hidden'
      animate='visible'
      variants={containerVariants}
    >
      <motion.div
        className='border-2 p-8 rounded-2xl bg-[#111] col-span-12 sm:col-span-5'
        variants={childVariants}
      >
        <div className='flex md:items-start flex-col items-center lg:flex-row justify-between gap-2'>
          <div className='border-2 p-2 rounded-full'>
            <div className='rounded-full w-28 h-28 brightness-125 overflow-hidden'>
              <Image
                preview={false}
                className='w-full h-full object-cover'
                src={heroImage}
                alt='Hosain ali'
              />
            </div>
          </div>
          <div className='text-white text-center flex flex-col gap-2 md:text-start'>
            <p className='text-sm'>Meet</p>
            <h1 className='text-4xl font-bold'>Md.Hosain Ali</h1>
            <p className='text-sm'>
              A passionate Front-End Developer dedicated to creating engaging
              user interfaces with React, Tailwind CSS, and modern web
              technologies.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className='border-2 p-8 rounded-2xl gap-2 bg-[#fff] flex flex-col col-span-12 sm:col-span-7'
        variants={childVariants}
      >
        <div className='w-full h-full text-white bg-[#111] flex items-center justify-center rounded-2xl px-6 py-2'>
          <span className='text-base font-semibold w-full'>
            <Marquee>
              <h1 className='text-xl tracking-wider'>
                I specialize in creating interactive and user-friendly web
                applications.
              </h1>
              <CheckCircleIcon sx={{ margin: '0px 20px' }}></CheckCircleIcon>
            </Marquee>
          </span>
        </div>
        <div className='w-full h-full border-2 bg-white flex items-center justify-center rounded-2xl'>
          <span className='text-base h-full font-semibold w-full '>
            <Marquee
              direction='right'
              gradient
              gradientColor='black'
              gradientWidth={150}
              className='rounded-lg h-full'
            >
              {skill.map((sk, idx) => (
                <img
                  className='w-12 h-12 ml-12 object-cover'
                  key={idx}
                  src={sk}
                  alt='skills Image'
                />
              ))}
            </Marquee>
          </span>
        </div>
      </motion.div>

      <motion.div
        className='border-2 p-8 rounded-2xl gap-2 flex md:flex-row flex-col justify-between items-center bg-[#fff] col-span-12 sm:col-span-8'
        variants={childVariants}
      >
        <div>
          <h1>
            <EmailIcon sx={{ fontSize: '20px', marginRight: '8px' }} /> Email :
            hosainahmed534745@gmail.com
          </h1>
          <h1>
            <PhoneIcon sx={{ fontSize: '20px', marginRight: '8px' }} /> Contact
            Number : +88 1795874829
          </h1>
          <h1>
            <LocationOnIcon sx={{ fontSize: '20px', marginRight: '8px' }} />{' '}
            Location : Dhaka, Bangladesh
          </h1>
        </div>
        <div className='flex gap-2'>
          <NavLink to={'https://www.facebook.com/jiku.ahamed.3'}>
            <FacebookIcon sx={{ fontSize: '40px' }} />
          </NavLink>
          <NavLink to={'https://www.linkedin.com/in/hosain~ahmed/'}>
            <LinkedInIcon sx={{ fontSize: '40px' }} />
          </NavLink>

          <NavLink to={'https://github.com/hosainahmeed'}>
            <GitHub sx={{ fontSize: '40px' }} />
          </NavLink>
          <Button style={{backgroundColor:'black',color:"white"}}>
            <NavLink
              to={
                'https://drive.google.com/file/d/1b1pBuCTHDJnIVzX3212IDlBr5bzcypWI/view?usp=sharing'
              }
            >
              See CV
            </NavLink>
          </Button>
          <Button>
            <a href={resume} download>
              Download resume
            </a>
          </Button>
        </div>
      </motion.div>

      <motion.div
        className='border-2 cardAnimate p-8 rounded-2xl bg-[#111] col-span-12 sm:col-span-4'
        variants={childVariants}
      >
        <Link smooth={true} duration={500} spy={true} offset={-70} to='contact'>
          <h1 className='text-3xl font-semibold text-white cursor-pointer'>
            Let’s <br /> work <span className='text-blue-600'>together.</span>
          </h1>
        </Link>
      </motion.div>
    </motion.div>
  )
}

export default HeroSection
