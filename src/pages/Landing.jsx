import { Link } from 'react-router-dom'
import { episodes } from '../data/episodes'
import './Landing.css'

function Landing() {
  return (
    <div className="landing">
      <header className="landing-header">
        <h1>Off Campus</h1>
        <p>All Episodes</p>
      </header>
      <div className="episode-grid">
        {episodes.map((ep, index) => (
          <Link to={`/episode/${ep.id}`} key={ep.id} className="episode-card">
            <div className="card-number">{String(index + 1).padStart(2, '0')}</div>
            <div className="card-content">
              <h2>{ep.title}</h2>
              <p>{ep.description}</p>
            </div>
            <div className="card-action">
              <span>Watch Now →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Landing
