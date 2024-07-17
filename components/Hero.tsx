import Image from 'next/image'
import React from 'react'
import CustomLink from './Link'

function Hero() {
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
          <h1 className="mb-2 text-3xl font-extrabold leading-9 tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Hello, I'm Đạt! 👋
          </h1>
          <p className="mb-4 text-lg text-zinc-500 dark:text-zinc-400">
            I am a fresher in Software Engineering.
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
