import { Roboto } from 'next/font/google';
import './globals.css';

import { ThemeProvider } from './material-tailwind';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider>
      <html className={roboto.className} >
        <body>
          <nav>
          </nav>
          {children}
        </body>
      </html>
    </ThemeProvider>
  )
}
