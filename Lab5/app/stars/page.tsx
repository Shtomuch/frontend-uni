import Link from 'next/link'

var starsData = [
  { id: 1, name: 'Сонце', description: 'Найближча зірка', author: 'Редакція', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg/300px-The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg' },
  { id: 2, name: 'Бетельгейзе', description: 'Червоний надгігант в Оріоні', author: 'Л. Сагайдак', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Betelgeuse_captured_by_ALMA.jpg/300px-Betelgeuse_captured_by_ALMA.jpg' },
  { id: 3, name: 'Сіріус', description: 'Найяскравіша на нічному небі', author: 'Ю. Марченко', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Sirius_A_and_B_artwork.jpg/300px-Sirius_A_and_B_artwork.jpg' },
  { id: 4, name: 'Полярна зірка', description: 'Орієнтир на півночі', author: 'М. Іваненко', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Polaris_system.jpg/300px-Polaris_system.jpg' },
  { id: 5, name: 'Ригель', description: 'Блакитний надгігант сузірʼя Оріон', author: 'Редакція', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Rigel_Star_System.jpg/300px-Rigel_Star_System.jpg' },
  { id: 6, name: 'Вега', description: 'Головна зірка Ліри', author: 'О. Коваль', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Vega_-_Star_with_Debris_Disk.jpg/300px-Vega_-_Star_with_Debris_Disk.jpg' }
]

export default function Stars() {
  return (
    <>
      <header className="site-header">
        <div className="header-content">
          <div className="branding">
            <h1>Зірки</h1>
          </div>
          <nav className="nav">
            <Link href="/">Головна</Link>
            <Link href="/planets">Планети</Link>
            <Link href="/feedback">Зворотній зв'язок</Link>
          </nav>
        </div>
      </header>

      <main className="container">
        <h2>Найяскравіші зірки Всесвіту</h2>
        <div className="cards-grid">
          {starsData.map(function(star) {
            return (
              <div key={star.id} className="card">
                <img src={star.image} alt={star.name} className="card-image" />
                <div className="card-body">
                  <h3>{star.name}</h3>
                  <p>{star.description}. Автор: {star.author}</p>
                </div>
              </div>
            )
          })}
        </div>
      </main>

      <footer className="footer">
        <p>Лабораторна робота №5 · Варіант 7 · Next.js</p>
      </footer>
    </>
  )
}
