'use client'

import { Transition } from '@headlessui/react'
import LoadingPage from 'app/loading'
import React from 'react'

function useIsClient() {
  const [isClient, setIsClient] = React.useState(false)

  React.useEffect(() => {
    setIsClient(true)
  }, [])

  return isClient
}

function Ready({ children }: React.PropsWithChildren) {
  const isClient = useIsClient()
  return (
    <>
      <Transition show={!isClient}>
        <Transition.Child leave="ease-out duration-400" leaveFrom="opacity-100" leaveTo="opacity-0">
          <LoadingPage className="min-h-dvh" />
        </Transition.Child>
      </Transition>
      <Transition appear show={isClient}>
        <Transition.Child
          enter="ease-out duration-1000"
          enterFrom="translate-y-full"
          enterTo="translate-y-0"
        >
          {children}
        </Transition.Child>
      </Transition>
    </>
  )
}

export default Ready
