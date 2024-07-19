'use client'

import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { useIsScrollTop } from '@/lib/hooks/useIsScrollTop'

const Header = () => {
  const isTop = useIsScrollTop()

  const boxWrapperClassName = cn(
    'leading-5 items-center flex px-4 py-2 min-h-6',
    'bg-white/50 dark:bg-zinc-900/50 rounded-lg backdrop-blur-lg',
    isTop ? 'border-none' : 'border'
  )

  return (
    <div className={`fixed inset-x-0 top-0 z-10 flex items-center justify-center`}>
      <header className="container flex items-center justify-between py-4 md:py-8 xl:py-10">
        <div className={cn(boxWrapperClassName, 'hidden space-x-6 sm:flex')}>
          <Link href="/" aria-label={siteMetadata.headerTitle}>
            <div className="flex items-center justify-between">
              <Logo className="size-6 fill-current text-black hover:text-primary-500 dark:text-white dark:hover:text-primary-400" />
            </div>
          </Link>
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
        <div className={cn(boxWrapperClassName, 'aspect-square px-1 py-1 sm:hidden')}>
          <MobileNav />
        </div>
        <div className={cn(boxWrapperClassName, 'space-x-4 sm:space-x-6')}>
          <SearchButton />
          <ThemeSwitch />
        </div>
      </header>
    </div>
  )
}

export default Header
