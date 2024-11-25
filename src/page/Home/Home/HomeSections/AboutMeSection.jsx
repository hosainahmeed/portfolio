import SectionHeader from '../../../../Component/Utils/SectionHeader'
import { motion } from 'framer-motion'
import { Button } from '@mui/material'
import { Link } from 'react-scroll'
import { ConfigProvider, Modal, Popover, Space } from 'antd'
import { useState } from 'react'
import { createStyles, useTheme } from 'antd-style'
import { FaArrowRight } from 'react-icons/fa'
//books cover
import img1 from '../../../../assets/image/Hobbies/Reading/rk.jpg'
import img2 from '../../../../assets/image/Hobbies/Reading/boighor.jpg'
import img3 from '../../../../assets/image/Hobbies/Reading/boshu.jpg'
import img4 from '../../../../assets/image/Hobbies/Reading/javed.jpg'
import img5 from '../../../../assets/image/Hobbies/Reading/mur.jpg'
import img6 from '../../../../assets/image/Hobbies/Reading/arnold.jpg'
import riding from '../../../../assets/image/Hobbies/Riding/riding.png'
import { MdAdsClick } from 'react-icons/md'
import Timelines from '../../../../Component/Utils/Timelines'
import Marquee from 'react-fast-marquee'

const useStyle = createStyles(({ token }) => ({
  'my-modal-body': {
    background: token.blue1,
    padding: token.paddingSM
  },
  'my-modal-mask': {
    boxShadow: `inset 0 0 15px #fff`
  },
  'my-modal-header': {
    borderBottom: `1px dotted ${token.colorPrimary}`
  },
  'my-modal-footer': {
    color: token.colorPrimary
  },
  'my-modal-content': {
    border: '1px solid #333'
  }
}))

const booksCollection = [
  {
    id: 1,
    name: 'R K Narayan',
    image: img1
  },
  {
    id: 2,
    name: 'মরিসাকি বইঘর',
    image: img2
  },
  {
    id: 3,
    name: 'প্রতিভা বসু',
    image: img3
  },
  {
    id: 4,
    name: 'Javed Akhter',
    image: img4
  },
  {
    id: 5,
    name: 'Haruki Murakami',
    image: img5
  },
  {
    id: 6,
    name: 'Arnold',
    image: img6
  }
]

function AboutMeSection () {
  const [isModalOpen, setIsModalOpen] = useState([false, false])
  const { styles } = useStyle()
  const token = useTheme()
  const toggleModal = (idx, target) => {
    setIsModalOpen(p => {
      p[idx] = target
      return [...p]
    })
  }
  const classNames = {
    mask: styles['my-modal-mask'],
    header: styles['my-modal-header'],
    footer: styles['my-modal-footer'],
    content: styles['my-modal-content']
  }
  const modalStyles = {
    header: {
      borderLeft: `5px solid ${token.colorPrimary}`,
      borderRadius: 0,
      paddingInlineStart: 5
    },
    mask: {
      backdropFilter: 'blur(10px)'
    },
    footer: {
      borderTop: '1px solid #333'
    },
    content: {
      boxShadow: '0 0 30px #999'
    }
  }

  return (
    <div id='about' className=' mx-auto px-4 py-8'>
      <SectionHeader head='About Me' />
      <div className='grid grid-cols-1 md:grid-cols-6 gap-1 mt-8 md:mb-28'>
        {/* Image Section */}
        <div className='bg-[#111] md:col-span-2 p-4 order-1 md:order-1 rounded-lg'>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className='w-full h-full rounded-lg overflow-hidden'
          >
            <img
              src='https://avatars.githubusercontent.com/u/136603250?v=4'
              alt='Hosain Ali'
              className='rounded-lg w-full h-96 object-cover hover:scale-105 transition-transform duration-300 ease-in-out'
            />
          </motion.div>
        </div>
        {/* About Text Section */}
        <div className=' bg-[#111]  text-center md:text-start flex md:items-start justify-around flex-col md:col-span-4 p-2 md:p-4 order-2 md:order-2 rounded-lg'>
          <h1 className='text-2xl text-white md:text-3xl font-semibold mb-4'>
            I am Md. Hosain Ali - a Front-End Developer from Bangladesh
          </h1>
          <p className='text-white mb-4 leading-relaxed'>
            I am passionate about creating engaging user experiences through
            dynamic web applications. I enjoy working with React, Tailwind CSS,
            and modern web development tools. Currently, I am learning and
            building projects to strengthen my expertise as a front-end
            developer.
          </p>
          <Link smooth={true} to='contact'>
            <button className='mt-4 bg-white px-6 py-2 rounded-md'>
              Contact me
            </button>
          </Link>
        </div>
        {/* Education Section */}
        <div className='bg-[#111] text-white md:col-span-4 p-4 order-4 md:order-3 rounded-lg overflow-hidden'>
          <h1 className='text-xl font-semibold mb-4'>Education</h1>
          <Marquee speed={50} pauseOnHover={true}>
            <h1 className='p-4 md:p-12 border-2 rounded-full mx-12 flex items-center animate-pulse bg-blue-700 text-yellow-500'>
              Start <FaArrowRight />
            </h1>
            <Timelines></Timelines>
          </Marquee>
        </div>
        {/* Hobbies Section */}
        <div className='bg-[#111] text-white md:col-span-2 p-4 order-3 md:order-4 rounded-lg'>
          <h1 className='text-xl font-semibold'>Hobbies</h1>
          <div className='w-full flex items-center justify-center h-full'>
            <Space>
              <Popover title={'Click to see all books'}>
                <Button
                  className='flex flex-col'
                  type='secondary'
                  color='#111'
                  onClick={() => toggleModal(0, true)}
                >
                  Reading Books
                  <MdAdsClick className='text-2xl animate-pulse'></MdAdsClick>
                </Button>
              </Popover>
              <Popover title={'Click to see my rides'}>
                <Button
                  className='flex flex-col'
                  type='primary'
                  color='#fff'
                  onClick={() => toggleModal(1, true)}
                >
                  Riding Bicycle
                  <MdAdsClick className='text-2xl animate-pulse'></MdAdsClick>
                </Button>
              </Popover>
            </Space>
          </div>

          <Modal
            title='Books Collections..'
            open={isModalOpen[0]}
            onOk={() => toggleModal(0, false)}
            onCancel={() => toggleModal(0, false)}
            footer='continue...'
            classNames={classNames}
            styles={modalStyles}
          >
            <div className='grid grid-cols-2 gap-2 md:grid-cols-3'>
              {booksCollection.map(book => (
                <motion.div
                  key={book.id}
                  className='relative border-2 fill-black border-black p-2 overflow-hidden'
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.img
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0.6 }}
                    src={book.image}
                    className='w-full h-full object-contain md:object-cover'
                    alt={book.name}
                  />
                  <motion.div
                    className='absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center text-white'
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className='bg-white w-full flex items-center justify-center'>
                      <h1 className='text-lg text-black font-semibold'>
                        {book.name}
                      </h1>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </Modal>

          <ConfigProvider
            modal={{
              classNames,
              styles: modalStyles
            }}
          >
            <Modal
              title='In this Year'
              open={isModalOpen[1]}
              onOk={() => toggleModal(1, false)}
              onCancel={() => toggleModal(1, false)}
              footer="I'm doing my best to create the best life I can for myself."
            >
              <img src={riding} alt='' />
            </Modal>
          </ConfigProvider>
        </div>
      </div>
    </div>
  )
}

export default AboutMeSection
