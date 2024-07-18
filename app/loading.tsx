import React from 'react'
import Loading from '@/data/loading.svg'
import { cn } from '@/lib/utils'

function LoadingPage({ className }: { className?: string }) {
  return (
    <div className={cn('flex w-full flex-col items-center justify-center', className)}>
      <div className="flex flex-col items-center justify-center py-32">
        <Loading className="size-16 animate-spin fill-primary-500" />
        <p className="mt-2 text-sm text-zinc-500">Just a moment...</p>
      </div>
    </div>
  )
}

export default LoadingPage
