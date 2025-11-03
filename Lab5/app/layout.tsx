import './globals.css'

export const metadata = {
  title: 'Orionpedia — Онлайн енциклопедія про космос',
  description: 'Тематична онлайн енциклопедія про космос. Лабораторна робота №5'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  )
}
