import Nav from '../components/nav'
import Activity from '../components/activity'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import useProgram from '../hooks/useProgram'
import UploadModal from '../components/UploadModal'
import Playlist from '../components/Playlist'
import {songs} from '../data/songs'
import PlayerControls from '../components/PlayerControls'
import { IoRefreshCircleOutline } from 'react-icons/io5'


const HomePage = () => {
  const [showUploadMusic, setShowUploadMusic] = useState(false)
  const [title, setTitle] = useState(' ')
  const [musicURL, setMusicURL] = useState(' ')
  // const [songs, setSongs] = useState([])
  
  const { newMusic, getSongs} = useProgram(
    musicURL,
    title,
    setTitle,
    setMusicURL,
    setShowUploadMusic,
  )
  const [songs, setSongs] = useState([])

  useEffect(() => {
    getSongs().then(songs => {
      setSongs(songs)
    })
  }, [])
  const handleRefresh = () => {
      getSongs().then(songs => {
        setSongs(songs)
      })
  }

  return (
    <div className='flex'>

      <Nav />
      
      <div className='w-full'>
        <Header setShowUploadMusic={setShowUploadMusic}
        />
        <div>
        <button 
        className='pl-10' 
        onClick={handleRefresh}>
          <IoRefreshCircleOutline style={{height:'30px',width:'30px'}}/>
        </button>
        </div>
        <Playlist songs={songs}/>
        <PlayerControls songs={songs}/>
        {showUploadMusic && <UploadModal
        title={title}
        setTitle={setTitle}
        setShowUploadMusic={setShowUploadMusic}
        musicURL={musicURL}
        setMusicURL={setMusicURL}
        newMusic={newMusic}
        />}      
      </div>
      
      <Activity />
   
    </div>
  )
}

export default HomePage
