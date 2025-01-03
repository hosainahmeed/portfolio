import { useForm } from 'react-hook-form'
import SettingsPhoneSharpIcon from '@mui/icons-material/SettingsPhoneSharp'
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp'
import MailSharpIcon from '@mui/icons-material/MailSharp'
import SectionHeader from '../../../../Component/Utils/SectionHeader'
import toast from 'react-hot-toast'
const contactInfo = [
  {
    label: 'Address',
    info: 'Mirpur, Dhaka 1216',
    icon: <LocationOnSharpIcon></LocationOnSharpIcon>
  },
  {
    label: 'Email',
    info: 'hosainahmed534745@gmail .com',
    icon: <MailSharpIcon></MailSharpIcon>
  },
  {
    label: 'Phone',
    info: '+880 179587-4829',
    icon: <SettingsPhoneSharpIcon></SettingsPhoneSharpIcon>
  }
]

function ContactSection () {
  const {
    register,
    handleSubmit,
    formState: { errors }
    // reset,
  } = useForm()

  const onSubmit = data => {
    toast.success('massage success')
  }

  return (
    <>
      <div id='contact' className='md:mt-28 md:bg-black md:px-12 md:pt-12 md:pb-1'>
        <SectionHeader
          subHead={
            'Are You Ready to kickstart your project with a touch of magic?'
          }
          head={'I Wants To Hear From You'}
        ></SectionHeader>
        <div className='md:my-28 px-2 flex md:flex-row flex-col gap-2 items-start'>
          <div className='w-full md:w-1/2 h-full flex-shrink-0 flex px-2 md:px-12 py-2 bg-white shadow-md rounded-lg p-2 flex-col gap-2'>
            <h1 className='flex-1 text-2xl font-semibold'>Contact me</h1>
            <h1>
              I'm always excited to collaborate on projects, discuss innovative
              ideas, or simply connect with like-minded individuals. Whether you
              have a question, want to work together, or just want to say hi –
              feel free to reach out!
            </h1>
            <div className='divider'></div>
            {contactInfo.map((info, idx) => (
              <div key={idx}>
                <div className='flex flex-col md:flex-row items-start justify-start gap-2 mr-2'>
                  <div className='flex'>
                    <h1>{info.icon}</h1>
                    <h2>{info.label}</h2>
                  </div>
                  <h2>{info.info}</h2>
                </div>
              </div>
            ))}
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='w-full md:w-1/2 mx-auto p-4 flex-shrink-0 bg-white shadow-md rounded-lg'
          >
            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>Name</label>
              <input
                type='text'
                {...register('name', { required: 'Name is required' })}
                className='w-full p-2 border border-gray-300 bg-white rounded'
              />
              {errors.name && (
                <p className='text-red-500 text-sm'>{errors.name.message}</p>
              )}
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Email
              </label>
              <input
                type='email'
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: 'Invalid email address'
                  }
                })}
                className='w-full p-2 border border-gray-300 bg-white rounded'
              />
              {errors.email && (
                <p className='text-red-500 text-sm'>{errors.email.message}</p>
              )}
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Message
              </label>
              <textarea
                {...register('message', { required: 'Message is required' })}
                className='w-full p-2 border border-gray-300 bg-white rounded'
                rows='4'
              ></textarea>
              {errors.message && (
                <p className='text-red-500 text-sm'>{errors.message.message}</p>
              )}
            </div>

            <button
              type='submit'
              className='w-full bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-600 transition duration-200'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ContactSection
