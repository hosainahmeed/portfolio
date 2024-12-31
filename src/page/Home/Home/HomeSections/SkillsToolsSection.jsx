import SectionHeader from '../../../../Component/Utils/SectionHeader'

function SkillsToolsSection() {
  const skills = {
    frontend: [
      {title: 'Html-5', img: "https://i.ibb.co/xfcZ1L3/95596-html-512x512.png"},
      {title: 'CSS-3', img: "https://i.ibb.co/bmjWMCR/free-css3-2038878-1720091.png"},
      {title: 'Bootstrap', img: "https://i.ibb.co/SnSbD3K/107077-html-512x512.png"},
      {title: 'Tailwind CSS', img: "https://i.ibb.co/fDJh3pT/Tailwind-CSS-Logo-svg.png"},
      {title: 'MUI', img: "https://i.ibb.co/fvknxwK/download-4-removebg-preview.png"},
      {title: 'React', img: "https://i.ibb.co/QNt6kkW/react-icon-0.png"},
      {title: 'Next.js', img: "https://pulkitgangwar.gallerycdn.vsassets.io/extensions/pulkitgangwar/nextjs-snippets/1.0.2/1713018281951/Microsoft.VisualStudio.Services.Icons.Default"},
      {title: 'Ant design', img: "https://iconape.com/wp-content/files/ro/370540/svg/ant-design-logo-icon-png-svg.png"},
      {title: 'Framer Motion', img: "https://www.ejable.com/wp-content/uploads/2022/04/Framer-Motion-1200x1159.webp"},
    ],
    backend: [
      {title: 'Node.js', img: 'https://cdn.iconscout.com/icon/free/png-256/free-node-js-logo-icon-download-in-svg-png-gif-file-formats--nodejs-programming-language-pack-logos-icons-1174925.png?f=webp&w=256'},
      {title: 'Express.js', img: 'https://i.ibb.co/4YhcFR7/download-1.png'},
      {title: 'MongoDB', img: 'https://i.ibb.co/bb39V2R/5858229-middle-removebg-preview.png'}
    ],
    tools: [
      {title: 'Vercel', img: 'https://i.ibb.co/q9MchFj/logo-vercel.png'},
      {title: 'Figma', img: 'https://i.ibb.co/SPCRhVJ/5968705.png'},
      {title: 'GitHub', img: 'https://cdn-icons-png.flaticon.com/256/25/25231.png'},
      {title: 'Firebase', img: 'https://cdn.iconscout.com/icon/free/png-256/free-firebase-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-7-pack-icons-282796.png'},
      {title: 'Postman', img: 'https://cdn.iconscout.com/icon/free/png-256/free-postman-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-vol-5-pack-logos-icons-3030217.png?f=webp&w=256'},
    ]
  }

  const renderSkills = category => (
    <div className="grid cardAnimate grid-cols-2 sm:grid-cols-2 md:grid-cols-3 skills-container">
      {category.map((skill, idx) => (
        <div key={idx} className="flex flex-col items-center justify-center p-4">
          <img src={skill.img} alt={skill.title} className="w-12 h-12 object-cover" />
          <h1 className="text-xl md:text-2xl lg:text-3xl p-4 text-white">{skill.title}</h1>
        </div>
      ))}
    </div>
  )

  return (
    <div id="skills" className="my-28 px-4 md:px-8">
      <SectionHeader head="Skills" subHead="See what my Skills" />
      <div className="space-y-8">
        <div>
          <h2 className="text-lg md:text-xl font-bold mb-4 text-white">Frontend</h2>
          {renderSkills(skills.frontend)}
        </div>
        <div>
          <h2 className="text-lg md:text-xl font-bold mb-4 text-white">Backend</h2>
          {renderSkills(skills.backend)}
        </div>
        <div>
          <h2 className="text-lg md:text-xl font-bold mb-4 text-white">Tools</h2>
          {renderSkills(skills.tools)}
        </div>
      </div>
    </div>
  )
}

export default SkillsToolsSection
