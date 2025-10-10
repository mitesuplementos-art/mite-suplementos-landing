'use client'

import { useEffect } from 'react'
import * as gtag from '../lib/gtag'

export default function Analytics() {
  useEffect(() => {
    // Track inicial
    gtag.pageview(window.location.href)

    // Track hash changes
    const handleHashChange = () => {
      gtag.pageview(window.location.href)
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  return null
}
