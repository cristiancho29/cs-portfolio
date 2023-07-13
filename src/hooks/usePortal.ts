import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { createPortal } from 'react-dom'

export const usePortal = ({
  portalId,
  portalContent,
}: {
  portalId: string
  portalContent: ReactNode
}) => {
  const ref = useRef<Element | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>(`#${portalId}`)
    setMounted(true)
  }, [portalId])

  return mounted && ref.current && createPortal(portalContent, ref.current)
}
