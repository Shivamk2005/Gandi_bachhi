import { useState, useEffect } from 'react'
import { episodes, getEmbedUrl } from './data/episodes'
import './App.css'

const QUALITY_ORDER = ['480p', '720p', '1080p']

function App() {
  const [selectedId, setSelectedId] = useState(episodes[0]?.id ?? null)
  const [quality, setQuality] = useState('1080p')
  const [showGreeting, setShowGreeting] = useState(false)

  const selected = episodes.find((ep) => ep.id === selectedId)

  const currentUrl = selected
    ? getEmbedUrl(selected.qualities[quality])
    : ''

  useEffect(() => {
    if (!currentUrl) return
    setShowGreeting(true)
    const timer = setTimeout(() => setShowGreeting(false), 2500)
    return () => clearTimeout(timer)
  }, [currentUrl])

  const handleEpisodeChange = (id) => {
    setSelectedId(id)
    const ep = episodes.find((e) => e.id === id)
    if (ep) {
      const available = Object.keys(ep.qualities)
      const defaultQ = available.includes('1080p') ? '1080p' : available[0]
      setQuality(defaultQ)
    }
  }

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h1>Off Campus</h1>
          <p>Episodes</p>
        </div>
        <nav className="episode-list">
          {episodes.map((ep) => (
            <button
              key={ep.id}
              className={`episode-item ${ep.id === selectedId ? 'active' : ''}`}
              onClick={() => handleEpisodeChange(ep.id)}
            >
              <span className="episode-number">{String(ep.id).padStart(2, '0')}</span>
              <span className="episode-title">{ep.title}</span>
            </button>
          ))}
        </nav>
      </aside>

      <main className="player-area">
        {selected ? (
          <>
            <div className="player-header">
              <h2>{selected.title}</h2>
              {selected.description && <p>{selected.description}</p>}
              <div className="quality-controls">
                {QUALITY_ORDER.filter((q) => selected.qualities[q]).map((q) => (
                  <button
                    key={q}
                    className={`quality-btn ${q === quality ? 'active' : ''}`}
                    onClick={() => setQuality(q)}
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
            <div className="video-wrapper">
              {currentUrl && (
                <iframe
                  key={currentUrl}
                  src={currentUrl}
                  title={selected.title}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              )}
            </div>
            {showGreeting && (
              <div className="greeting-toast">
                Hello Tanishaaaaaaaaaaaaaaaaaaaaa ji 😁
              </div>
            )}
          </>
        ) : (
          <div className="empty-state">
            <p>Select an episode to start watching.</p>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
