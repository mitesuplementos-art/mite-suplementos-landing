'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import * as gtag from '../lib/gtag'

export default function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!pathname) return

    // Track inicial
    const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '') + window.location.hash
    gtag.pageview(url)

    // Função para trackear hash changes
    const handleHashChange = () => {
      const urlWithHash = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '') + window.location.hash
      gtag.pageview(urlWithHash)
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [pathname, searchParams])

  return null
}
