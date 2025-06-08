interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Online Asset Management',
    description: `Online Asset Management (OAM) is an online platform for managing assets among company staffs. This project is associated with NashTech Vietnam's Rookie2Engineer Program. 📦`,
    imgSrc: '/static/images/projects/oam-screenshot.png',
    href: 'https://github.com/fieztazica/online-asset-management/',
  },
  {
    title: 'ProfioApp',
    description: `The application aimed at providing efficient and professional solutions for transportation management 🚛`,
    imgSrc: '/static/images/projects/cms-login.png',
    href: 'https://github.com/HutechCJ/ProfioApp/',
  },
  {
    title: 'Playody',
    description: `A music player web application built with Next.js and Supabase, featuring a modern design and responsive layout. It allows users to play, pause, and skip tracks, as well as view their playlists. 🎧`,
    imgSrc: '/static/images/projects/playody-screenshot.webp',
    href: 'https://github.com/fieztazica/playody/',
  },
  {
    title: 'SupaChat',
    description: `A real-time chat application built with Next.js and Supabase, featuring user authentication, message sending, and chat room management. It provides a modern and responsive design for seamless user experience. 💬`,
    imgSrc: '/static/images/projects/supachat-screenshot.png',
    href: 'https://github.com/fieztazica/supachat/',
  },
  {
    title: 'DJ Hoot',
    description: `A Discord music bot that allows users to play music from YouTube, Spotify, and SoundCloud in their Discord voice channels. 🎵`,
    imgSrc: '/static/images/projects/djhoot-screenshot.png',
    href: 'https://github.com/Owlvernyte/Hoot/',
  },
  {
    title: 'Next.js ShadcnUI Extended',
    description: `A Next.js template that extends the ShadcnUI library with additional components and features, providing a solid foundation for building modern web applications. 🚀`,
    imgSrc: '/static/images/projects/nextjs-shadcnui-extended-screenshot.png',
    href: 'https://github.com/fieztazica/nextjs-shadcnui-extended/',
  },
  {
    title: 'Pair Legends',
    description: `My first project at college. A pikachu connect like game but with LoL characters. Where players can connect pairs of identical cards to clear the board. It features a simple and intuitive interface, making it easy for players to enjoy the game. 🎮`,
    imgSrc: '/static/images/projects/pair-legends-screenshot.png',
    href: 'https://github.com/fieztazica/pairLegends/',
  },
]

export default projectsData
