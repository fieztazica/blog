'use client'

import Image from 'next/image'
import React from 'react'
import CustomLink from './Link'
import { Transition } from '@headlessui/react'
import { cn } from '@/lib/utils'
import { greetings } from '@/data/langs/greetings'

function Hero() {
  const [greeting, setGreeting] = React.useState(greetings[0])
  const [isShowing, setIsShowing] = React.useState(true)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsShowing(false)
      setTimeout(() => {
        setIsShowing(true)
        setGreeting(greetings[(greetings.indexOf(greeting) + 1) % greetings.length])
      }, 500)
    }, 5000)
    return () => clearInterval(interval)
  }, [greeting])

  return (
    <div className="-mt-24 flex min-h-dvh w-full flex-col justify-center lg:-mt-32">
      <div className="mb-16 px-1">
        <CustomLink href="/about">
          <div
            className={
              'border-mine-shaft-200 dark:border-mine-shaft-700 flex w-full justify-center rounded-lg border-2 bg-cover bg-center bg-no-repeat px-16 py-24'
            }
            style={{
              backgroundImage: `url('/static/images/bg.gif')`,
            }}
          >
            <Image
              src="/static/images/bumping.gif"
              alt="Fiezt bumping gif"
              width={1280}
              height={720}
              sizes="33vw"
              className="h-full w-64 max-w-64"
            />
          </div>
        </CustomLink>
      </div>
      <div className="divide-y divide-zinc-200 dark:divide-zinc-700">
        <div>
          <h1
            className={cn(
              'mb-2 text-3xl font-extrabold leading-9 tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'
            )}
          >
            <span>👋 </span>
            <Transition appear show={isShowing} as={React.Fragment}>
              <Transition.Child
                as={React.Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="scale-0 opacity-0"
                enterTo="scale-100 opacity-95"
                leave="transition ease-in duration-200 transform"
                leaveFrom="scale-100 opacity-95"
                leaveTo="scale-0 opacity-0"
              >
                <span>{greeting}!</span>
              </Transition.Child>
            </Transition>
          </h1>

          <p className="mb-4 text-lg text-zinc-500 dark:text-zinc-400">
            I'm <b>Đạt</b>, a fresher in <b>Software Engineering</b>.
          </p>
          <CustomLink
            className="text-xl font-medium text-primary-500 underline hover:text-primary-600"
            href="mailto:tiendat.dev@outlook.com"
          >
            Contact me 📧
          </CustomLink>
        </div>
      </div>
    </div>
  )
}

export default Hero
