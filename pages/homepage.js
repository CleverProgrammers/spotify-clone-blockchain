import Header from '../components/header'
import Nav from '../components/nav'
import Playlist from '../components/playlist'
import PlayerControls from '../components/playerControls'
import Activity from '../components/activity'
import { useState, useEffect } from 'react'
import UploadModal from '../components/UploadModal'
import useSpotify from '../hooks/useSpotify'

const HomePage = () => {
  const [showUploadMusic, setShowUploadMusic] = useState(false)
  const [title, setTitle] = useState('')
  const [musicUrl, setMusicUrl] = useState('')

  const { newMusic, getSongs } = useSpotify(
    musicUrl,
    title,
    setTitle,
    setMusicUrl,
    setShowUploadMusic,
  )

  const [songs, setSongs] = useState([])

  useEffect(() => {
    getSongs().then(songs => {
      setSongs(songs)
    })
  }, [])

  return (
    <div className='flex'>
      <Nav />
      <div className='w-full'>
        <Header setShowUploadMusic={setShowUploadMusic} />
        <Playlist songs={songs} />
        <PlayerControls songs={songs} />
        {showUploadMusic && (
          <UploadModal
            title={title}
            setTitle={setTitle}
            setShowUploadMusic={setShowUploadMusic}
            musicUrl={musicUrl}
            setMusicUrl={setMusicUrl}
            newMusic={newMusic}
          />
        )}
      </div>
      <Activity />
    </div>
  )
}

export default HomePage
