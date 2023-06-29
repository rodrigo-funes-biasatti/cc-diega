'use client'

import './globals.css'
import Header from './components/Header'
import ListOfCurrencys from './components/ListOfCurrency'

export const metadata = {
  title: 'Diega salary',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <ListOfCurrencys />
        {children}
      </body>
    </html>
  )
}
