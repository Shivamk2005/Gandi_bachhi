function QualitySwitcher({ qualities, currentQuality, onQualityChange }) {
  const qualityOptions = Object.keys(qualities).sort(
    (a, b) => {
      const order = { '480p': 1, '720p': 2, '1080p': 3 }
      return (order[a] || 99) - (order[b] || 99)
    }
  )

  return (
    <div className="quality-switcher">
      {qualityOptions.map((q) => (
        <button
          key={q}
          className={`quality-option ${q === currentQuality ? 'active' : ''}`}
          onClick={() => onQualityChange(q)}
        >
          {q}
        </button>
      ))}
    </div>
  )
}

export default QualitySwitcher
