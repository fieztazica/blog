interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Online Asset Management',
    description: `Online Asset Management (OAM) is an online platform for managing assets among company staffs. This project is associated with NashTech Vietnam's Rookie2Engineer Program.`,
    imgSrc: '/static/images/projects/oam-screenshot.png',
    href: 'https://github.com/fieztazica/online-asset-management/',
  },
  {
    title: 'ProfioApp',
    description: `The application aimed at providing efficient and professional solutions for transportation management 🚛`,
    imgSrc: '/static/images/projects/cms-login.png',
    href: 'https://github.com/HutechCJ/ProfioApp/',
  },
]

export default projectsData
