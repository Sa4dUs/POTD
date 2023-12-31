import type { Metadata } from 'next'
import localFont from "next/font/local"
import './globals.css'
import { AppProvider } from '@/components/AppContext'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const pokemon = localFont({
  src: [
    {
      path: '../../public/fonts/pokemon_pixel_font.ttf',
      weight: '400'
    },
  ],
  variable: '--font-pokemon'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={pokemon.variable}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}
