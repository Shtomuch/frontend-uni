'use client'

import Link from 'next/link'
import { useState } from 'react'

var planetsData = [
  { id: 1, name: 'Меркурій', description: 'Найближча до Сонця', author: 'О. Коваль', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Mercury_in_true_color.jpg/300px-Mercury_in_true_color.jpg' },
  { id: 2, name: 'Венера', description: 'Щільна атмосфера CO₂', author: 'М. Іваненко', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/300px-Venus-real_color.jpg' },
  { id: 3, name: 'Земля', description: 'Наш дім', author: 'Редакція', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/300px-The_Earth_seen_from_Apollo_17.jpg' },
  { id: 4, name: 'Марс', description: 'Можливі давні океани', author: 'Л. Сагайдак', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/300px-OSIRIS_Mars_true_color.jpg' },
  { id: 5, name: 'Юпітер', description: 'Газовий гігант', author: 'Ю. Марченко', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Jupiter.jpg/300px-Jupiter.jpg' },
  { id: 6, name: 'Сатурн', description: 'Кільця з льоду та пилу', author: 'О. Коваль', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/300px-Saturn_during_Equinox.jpg' }
]

var accordionData = [
  { title: 'Меркурій', content: 'Найближча планета до Сонця. Має дуже тонку атмосферу.' },
  { title: 'Венера', content: 'Друга планета від Сонця. Щільна атмосфера CO₂ створює парниковий ефект.' },
  { title: 'Земля', content: 'Третя планета від Сонця. Єдина відома планета з життям.' },
  { title: 'Марс', content: 'Червона планета. Можливі давні океани та потенціал для колонізації.' }
]

export default function Planets() {
  const [searchText, setSearchText] = useState('')
  const [openAccordion, setOpenAccordion] = useState(-1)

  var filteredPlanets = planetsData.filter(function(planet) {
    return planet.name.toLowerCase().indexOf(searchText.toLowerCase()) >= 0
  })

  return (
    <>
      <header className="site-header">
        <div className="header-content">
          <div className="branding">
            <h1>Планети</h1>
          </div>
          <nav className="nav">
            <Link href="/">Головна</Link>
            <Link href="/stars">Зірки</Link>
            <Link href="/feedback">Зворотній зв'язок</Link>
          </nav>
        </div>
      </header>

      <main className="container">
        <div style={{position: 'sticky', top: '80px', float: 'left', width: '280px', marginRight: '20px', background: 'rgba(18, 24, 54, 0.95)', border: '1px solid var(--brand)', borderRadius: '12px', padding: '1rem', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)'}}>
          <h3 style={{marginBottom: '1rem', color: 'var(--brand)'}}>Короткий опис</h3>
          {accordionData.map(function(item, index) {
            return (
              <div key={index} className="accordion-item">
                <div
                  className="accordion-header"
                  onClick={function() {
                    setOpenAccordion(openAccordion === index ? -1 : index)
                  }}
                >
                  {item.title}
                </div>
                <div
                  className="accordion-content"
                  style={{maxHeight: openAccordion === index ? '200px' : '0'}}
                >
                  <div className="accordion-content-inner">
                    {item.content}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div style={{marginLeft: '300px'}}>
          <div style={{marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(18, 24, 54, 0.6)', padding: '1rem', borderRadius: '12px', border: '1px solid #2a335a'}}>
            <label style={{fontWeight: 500, color: 'var(--brand)'}}>Пошук</label>
            <input
              type="text"
              placeholder="Введіть назву планети..."
              value={searchText}
              onChange={function(e) {
                setSearchText(e.target.value)
              }}
              style={{flex: 1, padding: '0.75rem', borderRadius: '8px', border: '1px solid #2a335a', background: 'rgba(13, 21, 48, 0.8)', color: 'var(--text)', fontFamily: 'inherit'}}
            />
          </div>

          <div className="cards-grid">
            {filteredPlanets.map(function(planet) {
              return (
                <div key={planet.id} className="card">
                  <img src={planet.image} alt={planet.name} className="card-image" />
                  <div className="card-body">
                    <h3>{planet.name}</h3>
                    <p>{planet.description}. Автор: {planet.author}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>Лабораторна робота №5 · Варіант 7 · Next.js</p>
      </footer>
    </>
  )
}
