'use client'
import { useCallback, useRef } from 'react'

export const useIntersectionObserver = ({
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
