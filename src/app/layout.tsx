'use client'

import './globals.css'
import Header from './components/Header/Header'
import { MateContext } from './components/contexts/MateContext'
import { Mate } from './types/Mate'
import { useState } from 'react'

export const metadata = {
  title: 'Foreing salary',
  description: 'Calculá el sueldo de tu amigo que trabaja para el exterior'
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [mate, setMate] = useState<Mate>();

  return (
    <html lang="en">
      <body>
        <MateContext.Provider value={{ mate, setMate }}>
          <Header />
          {children}
        </MateContext.Provider>
      </body>
    </html>
  )
}
