import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { getFieztDiscordStatus } from '@/lib/custom/discord'
import { cn } from '@/lib/utils'
import Image from './Image'

const DiscordStatus = async () => {
  const user = await getFieztDiscordStatus()
  const statusColor =
    user.status === 'dnd'
      ? 'bg-[#ED4245]'
      : user.status === 'idle'
        ? 'bg-[#FAA61A]'
        : user.status === 'online'
          ? 'bg-[#3BA55C]'
          : 'bg-[#747F8D]'

  const Avatar = () => (
    <div className="relative h-6 sm:h-8">
      <Image
        alt={`Fiezt's Discord Avatar`}
        src={user.avatar_url}
        height={64}
        width={64}
        className="size-6 rounded-full sm:size-8"
        priority
      />
      <div className="absolute -bottom-[2px] -right-[2px] rounded-full bg-zinc-900 p-[2px] sm:-bottom-1 sm:-right-1">
        <span className="relative flex size-2 sm:size-3">
          <span
            className={cn(
              'absolute inline-flex h-full w-full rounded-full opacity-75',
              statusColor,
              user.status === 'online' && 'animate-ping'
            )}
          ></span>
          <span
            className={cn('relative inline-flex size-2 rounded-full sm:size-3', statusColor)}
          ></span>
        </span>
      </div>
    </div>
  )

  return (
    <div className="flex items-center space-x-2" title={`Fiezt's Discord Status`}>
      <Avatar />
      <span>
        <span className="font-medium">{user.username}</span>
        <span className="text-zinc-500">#{user.discriminator}</span>
      </span>
    </div>
  )
}

export default function Footer() {
  return (
    <footer>
      <div className="mt-16">
        <div className="flex flex-col-reverse justify-center sm:flex-row sm:justify-between">
          <div className="mb-2 flex flex-col items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 sm:flex-row">
            <div className="flex justify-center gap-2">
              <div>{siteMetadata.author}</div>
              <div>{` • `}</div>
              <div>{`© ${new Date().getFullYear()}`}</div>
            </div>
            <div className="hidden sm:flex">{` • `}</div>
            <Link href="/">{siteMetadata.title}</Link>
          </div>
          <div className="mb-2 flex flex-wrap justify-center gap-4">
            <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
            <SocialIcon kind="github" href={siteMetadata.github} size={6} />
            <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
            <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
            <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
            <SocialIcon kind="x" href={siteMetadata.x} size={6} />
            <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-center sm:flex-row sm:justify-between sm:text-start">
          <div className="mb-2 text-sm text-zinc-500 dark:text-zinc-400 sm:mb-8">
            <DiscordStatus />
          </div>
          <div className="mb-8 text-sm text-zinc-500 dark:text-zinc-400">
            <Link href="https://github.com/fieztazica/blog">Site source</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
