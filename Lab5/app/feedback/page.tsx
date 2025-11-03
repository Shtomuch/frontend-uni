'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Feedback() {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <>
      <header className="site-header">
        <div className="header-content">
          <div className="branding">
            <h1>Зворотній зв'язок</h1>
          </div>
          <nav className="nav">
            <Link href="/">Головна</Link>
            <Link href="/planets">Планети</Link>
            <Link href="/stars">Зірки</Link>
          </nav>
        </div>
      </header>

      <main className="container">
        <div className="form-wrapper">
          <h2>Форма зворотнього зв'язку</h2>
          <form className="form-grid" style={{marginTop: '2rem'}}>
            <div className="form-field">
              <label>Прізвище та ім'я *</label>
              <input type="text" required />
            </div>
            <div className="form-field">
              <label>E-mail *</label>
              <input type="email" required />
            </div>
            <div className="form-field">
              <label>Вік *</label>
              <input type="number" min="1" max="120" required />
            </div>
            <div className="form-field">
              <label>Освіта *</label>
              <select required>
                <option>повна</option>
                <option>неповна</option>
                <option>вища</option>
                <option>професійна</option>
              </select>
            </div>
            <div className="form-field form-field-full">
              <label>Мета зворотнього зв'язку *</label>
              <select required>
                <option>співпраця</option>
                <option>скарга на порушення права власності</option>
                <option>пропозиція</option>
                <option>наявність помилки</option>
              </select>
            </div>
            <div className="form-field form-field-full" style={{position: 'relative'}}>
              <label>Детально</label>
              <textarea
                rows={6}
                maxLength={500}
                onMouseEnter={function() {
                  setShowTooltip(true)
                }}
                onMouseLeave={function() {
                  setShowTooltip(false)
                }}
                onFocus={function() {
                  setShowTooltip(true)
                }}
                onBlur={function() {
                  setShowTooltip(false)
                }}
                style={{
                  borderColor: showTooltip ? 'var(--brand)' : '#2a335a',
                  background: showTooltip ? 'rgba(26, 42, 94, 0.6)' : 'rgba(13, 21, 48, 0.8)',
                  boxShadow: showTooltip ? '0 0 12px rgba(122, 162, 255, 0.3)' : 'none'
                }}
              />
              {showTooltip && (
                <div style={{
                  position: 'absolute',
                  top: '0',
                  right: '-320px',
                  background: 'var(--brand)',
                  color: 'var(--dark-blue)',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  width: '280px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                  fontWeight: 500
                }}>
                  Ваша думка для нас важлива! Конкретизуйте мету звернення, будь ласка
                </div>
              )}
            </div>
            <div className="form-field form-field-full">
              <label style={{flexDirection: 'row', alignItems: 'center', gap: '0.5rem'}}>
                <input type="checkbox" required style={{width: 'auto'}} />
                Згода на обробку інформації
              </label>
            </div>
            <div className="form-field form-field-full" style={{display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1rem'}}>
              <button type="submit" className="btn">Надіслати</button>
              <button type="reset" className="btn" style={{background: 'transparent', color: 'var(--brand)'}}>Очистити</button>
            </div>
          </form>
        </div>
      </main>

      <footer className="footer">
        <p>Лабораторна робота №5 · Варіант 7 · Next.js</p>
      </footer>
    </>
  )
}
