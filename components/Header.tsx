'use client'

import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import { useEffect, useState } from 'react'

function useIsScrollTop() {
  const [isTop, setIsTop] = useState(true)
  useEffect(() => {
    function onScroll() {
      setIsTop(window.scrollY <= 0)
    }
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return isTop
}

const Header = () => {
  const isTop = useIsScrollTop()

  return (
    <div className={`fixed inset-x-0 top-0 flex items-center justify-center`}>
      <header className="container flex items-center justify-between py-4 md:py-8 xl:py-10">
        <div
          className={`hidden min-h-6 items-center space-x-6 rounded-lg px-4 py-2 leading-5 backdrop-blur-lg sm:flex ${isTop ? 'border-none' : 'border'} 2xl:ml-2`}
        >
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="hidden font-medium text-zinc-900 hover:text-primary-500 dark:text-zinc-100 dark:hover:text-primary-400
              sm:block"
              >
                {link.title}
              </Link>
            ))}
        </div>
        <div
          className={`flex aspect-square min-h-6 items-center rounded-lg px-1 leading-5 backdrop-blur-lg sm:hidden ${isTop ? 'border-none' : 'border'}`}
        >
          <MobileNav />
        </div>
        <div
          className={`flex min-h-6 items-center space-x-4 rounded-lg ${isTop ? 'border-none' : 'border'} px-4 py-2 leading-5 backdrop-blur-lg sm:space-x-6 2xl:-mr-2`}
        >
          <Link href="/" aria-label={siteMetadata.headerTitle}>
            <div className="flex items-center justify-between">
              <Logo className="size-6 fill-current text-black hover:text-primary-500 dark:text-white dark:hover:text-primary-400" />
            </div>
          </Link>
          <SearchButton />
          <ThemeSwitch />
        </div>
      </header>
    </div>
  )
}

export default Header
