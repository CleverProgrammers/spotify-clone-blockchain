import { useContext } from 'react'
import { SpotifyContext } from '../context/context'
import Login from '../components/login'

export default function Home() {
  const { updateProgress, updateVolume } = useContext(SpotifyContext)
  return (
    <div>
      <audio
        id='audio-element'
        hidden
        playsInline
        onVolumeChange={e => updateVolume(e)}
        onTimeUpdate={e => updateProgress(e)}
      />
      <Login />
    </div>
  )
}
