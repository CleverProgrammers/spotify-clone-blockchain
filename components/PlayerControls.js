import Image from "next/image"
import next from "../public/assets/next.svg"
import previous from "../public/assets/previous.svg"
import speaker from "../public/assets/speaker.svg"
import repeat from "../public/assets/repeat.svg"
import shuffle from "../public/assets/shuffle.svg"
import playRounded from "../public/assets/playRounded.svg"
import pauseIcon from "../public/assets/pause.svg"

import { useContext } from "react"
import { SpotifyContext } from "../context/context"
import { songs } from "../data/songs"

const styles = {
    mainControl:` fixed bottom-0 left-0 py-3 p-5 pr-10 w-screen 
    bg-[#242424] z-40 flex item-center justify-between`,
    flexCenter:`flex items-center`,
    controlIcon:`mr-5 cursor-pointer hover:opacity-100 opacity-50`,
    controlIconsContainer:`flex items-center justify-center mb-2`,
    playIcon:`mr-5 w-10 cursor-pointer hover:opacity-50`,
    pauseIconStyle:`mt-3 w-10 h-10 cursor-pointer hover:opacity-50`,
    coverPhoto:`object-cover`,
}

const PlayerControls = ({songs}) => {
    console.log(songs)
    const { 
        currentSong,
        isPlaying,
        volume,
        onVolumeChange,
        timestamp,
        progress,
        playNext,
        playPrevious,
        isPaused,
        play,
        pause,
        onProgressChange,
        duration
     } = useContext(SpotifyContext)

    //  if(!isPlaying) return null

  return (
    <div className={styles.mainControl}>
           <div className="flex max-w-xs">
                <div className='mr-3' style={{minHeight:'80px',minWidth:'80px'}}>
                    <Image
                    src='/assets/yarim-kalan-ep.png'
                    height='80px'
                    width='80px'
                    alt="song-cover"
                    />
                </div>

                <div className="w-60">
                    <p>{currentSong.title}</p>
                    <p className="opacity-50 flex flex-wrap">{currentSong.artiste}</p>
                </div>
           </div>

            <div>
                <div className={styles.controlIconsContainer}>
                    <div className={styles.controlIcon}>
                        <Image src={shuffle}/>
                    </div>
                    <div onClick={e=>playPrevious(songs)} className={styles.controlIcon}>
                        <Image src={previous} alt="prev"/>
                    </div>
                    {isPaused ? 
                    <div className={styles.playIcon} onClick={play}>
                        <Image
                        src={playRounded}
                        alt="play"
                        />
                    </div>
                    :
                    <div className={styles.pauseIconStyle} onClick={pause}>
                        <Image
                        src={pauseIcon}
                        alt="pause"
                        />
                    </div>
                    }
                    <div onClick={e=>playNext(songs)} className={styles.controlIcon}>
                        <Image src={next} alt="next"/>
                    </div>
                    <div className={styles.controlIcon}>
                        <Image src={repeat} alt="repeat"/>
                    </div>
                    
                </div>
                <div className={styles.flexCenter}>
                        <small>{timestamp}</small>
                        <input 
                        value={progress}
                        type="range"
                        onChange={e=> onProgressChange(e)}
                        className={styles.range} 
                        />
                        <small>{duration!='NaN:0NaN' && duration}</small>
                </div>
            </div>

            <div className={styles.flexCenter}>
                    <Image src={speaker} alt="speaker"/>
                    <input 
                    value={volume}
                    onChange={e=> onVolumeChange(e) }
                    type="range"
                    id="volume-range"
                    />
            </div>

        
    </div>
  )
}

export default PlayerControls