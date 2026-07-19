import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { episodes, getEmbedUrl } from '../data/episodes'
import QualitySwitcher from '../components/QualitySwitcher'
import './Episode.css'

function Episode() {
  const { id } = useParams()
  const episode = episodes.find((ep) => ep.id === Number(id))

  const availableQualities = episode
    ? Object.keys(episode.qualities)
    : []
  const defaultQuality = availableQualities.includes('1080p')
    ? '1080p'
    : availableQualities[0] || '480p'

  const [quality, setQuality] = useState(defaultQuality)

  useEffect(() => {
    setQuality(defaultQuality)
  }, [id, defaultQuality])

  if (!episode) {
    return (
      <div className="episode-page">
        <div className="episode-not-found">
          <h2>Episode not found</h2>
          <Link to="/" className="back-link">← Back to episodes</Link>
        </div>
      </div>
    )
  }

  const embedUrl = getEmbedUrl(episode.qualities[quality])

  return (
    <div className="episode-page">
      <nav className="episode-nav">
        <Link to="/" className="back-button">← All Episodes</Link>
        <h1 className="nav-title">Off Campus</h1>
        <div className="nav-spacer" />
      </nav>

      <div className="episode-content">
        <div className="episode-info">
          <h2>{episode.title}</h2>
          {episode.description && <p>{episode.description}</p>}
        </div>

        <QualitySwitcher
          qualities={episode.qualities}
          currentQuality={quality}
          onQualityChange={setQuality}
        />

        <div className="video-container">
          {embedUrl && (
            <iframe
              key={embedUrl}
              src={embedUrl}
              title={episode.title}
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Episode
