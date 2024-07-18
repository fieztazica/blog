import { allAuthors, Authors } from 'contentlayer/generated'
import { unstable_cache as cache } from 'next/cache'
import { coreContent } from 'pliny/utils/contentlayer'

const author = allAuthors.find((p) => p.slug === 'default') as Authors
const mainContent = coreContent(author)

const fallbackDiscordUser = {
  username: 'Fiezt',
  status: 'offline',
  avatar_url: mainContent.avatar!,
  discriminator: '0000',
}

export type DiscordUser = {
  username: string
  status: 'online' | 'offline' | 'idle' | 'dnd'
  avatar_url: string
  discriminator: string
}

export const getFieztDiscordStatus = cache(
  async () => {
    if (!process.env.DISCORD_WIDGET_URL) return fallbackDiscordUser
    const res = await fetch(`${process.env.DISCORD_WIDGET_URL}`)
    const response = await res.json()
    const user = (response.members as DiscordUser[]).shift() || fallbackDiscordUser
    return user
  },
  ['fiezt-discord-status'],
  {
    revalidate: 3600,
  }
)
