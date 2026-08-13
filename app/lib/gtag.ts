export const GA_TRACKING_ID = 'G-9NBVCE5J5Y'

export type EventValue =
  | string
  | number
  | boolean
  | null
  | EventValue[]
  | { [key: string]: EventValue }

export type EventParams = Record<string, EventValue>

type GtagArguments =
  | ['js', Date]
  | ['config', string, EventParams?]
  | ['event', string, EventParams?]

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: GtagArguments) => void
  }
}

export function trackEvent(eventName: string, params: EventParams = {}) {
  if (typeof window === 'undefined') return

  window.gtag?.('event', eventName, params)
}
