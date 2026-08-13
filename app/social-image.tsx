import { ImageResponse } from 'next/og'

export const socialImageAlt =
  'MITE Suplementos — entrega grátis em Fortaleza e Eusébio'

export const socialImageSize = {
  width: 1200,
  height: 630,
}

export function createSocialImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: 'center',
          background: '#050505',
          color: '#ffffff',
          display: 'flex',
          height: '100%',
          justifyContent: 'center',
          padding: '70px',
          position: 'relative',
          width: '100%',
        }}
      >
        <div
          style={{
            background: '#97E622',
            borderRadius: '999px',
            height: '330px',
            opacity: 0.12,
            position: 'absolute',
            right: '-60px',
            top: '-80px',
            width: '330px',
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '980px',
            width: '100%',
          }}
        >
          <div
            style={{
              color: '#97E622',
              display: 'flex',
              fontSize: 28,
              fontWeight: 800,
              letterSpacing: 2,
              marginBottom: 28,
              textTransform: 'uppercase',
            }}
          >
            MITE Suplementos
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 68,
              fontWeight: 900,
              letterSpacing: -2,
              lineHeight: 1.05,
            }}
          >
            Suplementos em Fortaleza e Eusébio
          </div>
          <div
            style={{
              color: '#d4d4d8',
              display: 'flex',
              fontSize: 30,
              lineHeight: 1.35,
              marginTop: 28,
            }}
          >
            Atendimento on-line e entrega grátis.
          </div>
        </div>
      </div>
    ),
    socialImageSize,
  )
}
