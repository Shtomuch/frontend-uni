'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
  const [snowflakes, setSnowflakes] = useState<Array<{id: number, left: number, size: number, duration: number, delay: number, horizontalMove: number}>>([])

  useEffect(() => {
    var id = 0
    var interval = setInterval(function() {
      var newSnowflake = {
        id: id++,
        left: Math.random() * 100,
        size: 40 + Math.random() * 30,
        duration: 8 + Math.random() * 5,
        delay: 0,
        horizontalMove: 200 + Math.random() * 300
      }
      setSnowflakes(function(prev) {
        return [...prev, newSnowflake]
      })

      setTimeout(function() {
        setSnowflakes(function(prev) {
          return prev.filter(function(s) {
            return s.id !== newSnowflake.id
          })
        })
      }, newSnowflake.duration * 1000)
    }, 800)

    return function() {
      clearInterval(interval)
    }
  }, [])

  return (
    <>
      <header className="site-header">
        <div className="header-content">
          <div className="branding">
            <h1>Orionpedia</h1>
            <p style={{color: 'var(--muted)', fontSize: '0.9rem'}}>Онлайн енциклопедія про космос</p>
          </div>
          <nav className="nav">
            <Link href="/planets">Планети</Link>
            <Link href="/stars">Зірки</Link>
            <Link href="/feedback">Зворотній зв'язок</Link>
          </nav>
        </div>
      </header>

      {snowflakes.map(function(flake) {
        return (
          <div
            key={flake.id}
            style={{
              position: 'fixed',
              top: '-20px',
              left: flake.left + '%',
              fontSize: flake.size + 'px',
              color: '#fff',
              opacity: 0.8,
              pointerEvents: 'none',
              zIndex: 1000,
              animation: 'fall-' + flake.id + ' ' + flake.duration + 's linear forwards'
            }}
          >
            *
            <style jsx>{`
              @keyframes fall-${flake.id} {
                to {
                  transform: translateY(100vh) translateX(${flake.horizontalMove}px);
                }
              }
            `}</style>
          </div>
        )
      })}

      <main className="container">
        <section className="block">
          <h2>Мета енциклопедії</h2>
          <p>Ця енциклопедія створена, щоб зробити космос ближчим кожному. Ми пояснюємо складні речі просто, підтримуємо актуальність матеріалів і надаємо посилання на джерела.</p>
          <ul style={{marginTop: '1rem', paddingLeft: '2rem'}}>
            <li>Збирати перевірені статті</li>
            <li>Оновлювати матеріали</li>
            <li>Додавати якісні ілюстрації</li>
          </ul>
        </section>

        <section className="block">
          <h2>Загальна інформація</h2>
          <table style={{width: '100%', borderCollapse: 'collapse', marginTop: '1rem'}}>
            <thead>
              <tr style={{background: '#16204a'}}>
                <th style={{padding: '0.75rem', border: '1px solid #2a335a', textAlign: 'left'}}>Розділ</th>
                <th style={{padding: '0.75rem', border: '1px solid #2a335a', textAlign: 'left'}}>Опис</th>
                <th style={{padding: '0.75rem', border: '1px solid #2a335a', textAlign: 'left'}}>Автор</th>
                <th style={{padding: '0.75rem', border: '1px solid #2a335a', textAlign: 'left'}}>Досвід</th>
                <th style={{padding: '0.75rem', border: '1px solid #2a335a', textAlign: 'left'}}>Освіта</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{padding: '0.75rem', border: '1px solid #2a335a'}}>Планети</td>
                <td style={{padding: '0.75rem', border: '1px solid #2a335a'}}>Будова, атмосфера, супутники</td>
                <td style={{padding: '0.75rem', border: '1px solid #2a335a'}}>О. Коваль</td>
                <td style={{padding: '0.75rem', border: '1px solid #2a335a'}}>5 років</td>
                <td style={{padding: '0.75rem', border: '1px solid #2a335a'}}>Астрономія</td>
              </tr>
              <tr>
                <td style={{padding: '0.75rem', border: '1px solid #2a335a'}}>Зірки</td>
                <td style={{padding: '0.75rem', border: '1px solid #2a335a'}}>Класифікація та еволюція</td>
                <td style={{padding: '0.75rem', border: '1px solid #2a335a'}}>М. Іваненко</td>
                <td style={{padding: '0.75rem', border: '1px solid #2a335a'}}>8 років</td>
                <td style={{padding: '0.75rem', border: '1px solid #2a335a'}}>Фізика</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>

      <footer className="footer">
        <p>Лабораторна робота №5 · Варіант 7 · Next.js</p>
      </footer>
    </>
  )
}
