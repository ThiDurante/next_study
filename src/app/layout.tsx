import { ReactNode } from 'react';

export const metadata = {
  title: {
    default: 'Next13 Study',
    template: '%s | Next13 Study',
  }
}

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="en">
      <head/>
      <body>
      {children}
      </body>
    </html>
  )
}