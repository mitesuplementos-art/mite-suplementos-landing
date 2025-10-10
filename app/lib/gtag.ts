export const GA_TRACKING_ID = 'G-9NBVCE5J5Y'

// Registra visualização de página
export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}
