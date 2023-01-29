import { Inter, Roboto_Mono, Lora, Nunito_Sans, Josefin_Sans } from '@next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'optional',
})

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'optional',
})

export const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'optional',
})

export const nunito_sans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-nunito-sans',
  display: 'optional',
})

export const josefin_sans = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-josefin-sans',
  display: 'optional',
})
