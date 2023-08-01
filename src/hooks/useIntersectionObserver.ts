'use client'
import { useCallback, useRef, useState } from 'react'

const useIntersectionObserver = ({
  options,
  cb,
}: {
  options: IntersectionObserverInit
  cb: IntersectionObserverCallback
}) => {
  const observer = useRef<IntersectionObserver | null>(null)
  return useCallback(
    (node: any) => {
      if (!node) {
        if (observer) {
          observer.current?.disconnect()
        }
        return
      }
      observer.current = new window.IntersectionObserver(cb, options)
      observer.current.observe(node)
    },
    [cb, options]
  )
}

export const useIntersectionObserverState = (options: IntersectionObserverInit) => {
  const [hidden, setHidden] = useState(true)
  const cbRef = useIntersectionObserver({
    options: options,
    cb: (entries) => {
      entries.forEach((entry) => {
        hidden && setHidden(!entry.isIntersecting)
      })
    },
  })
  return { hidden, cbRef }
}
