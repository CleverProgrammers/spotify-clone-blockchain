import HomePage from './homepage'

export default function Home() {
  return (
    <div>
      <audio
        id='audio-element'
        hidden
        playsInline
        onVolumeChange={e => updateVolume(e)}
        onTimeUpdate={e => updateProgress(e)}
      />
      <HomePage />
      {/* temporarily render homepage before you build Login */}
    </div>
  )
}
