import { useContext } from "react";
import { createContext, useState, useEffect } from "react";
import { songs } from "../data/songs";
// import {next} from "next/types";
export const SpotifyContext = createContext()

export const SpotifyProvider = ({ children })  => {
    const [currentSong, setCurrentSong] = useState({})
    const [isPlaying, setIsPlaying] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const [progress, setProgress] = useState(false)
    const [volume, setVolume] = useState(false)
    const [timestamp, setTimestamp] = useState(false)
    const [duration, setDuration] = useState(false)

    useEffect(() => {
        if (isPlaying) {
          let audio = document.querySelector('#audio-element')
          audio.addEventListener("timeupdate", function () {
            setTimestamp(secondsToMinSec(audio.currentTime))
            setDuration(secondsToMinSec(audio.duration))
          }, false)
        }
      }, [isPlaying])

    const pause = () =>{
        setIsPaused(true)
        document.querySelector('#audio-element').pause()
    }
    const play = () =>{
        document.querySelector('#audio-element').play()
        setIsPaused(false)
    }

    const playOnSelect = (song)  =>{
        try{
            document.querySelector('#audio-element').src = song.musicUrl
            document.querySelector('#audio-element').play()
            setCurrentSong(song)
            setIsPaused(false)
            setIsPlaying(true)
        }catch(e){
            console.log(e.message)
        }
    }

    const secondsToMinSec = (value) =>{
        const minute = Math.round(value/60)
        let second = Math.round(value%60)

        second = second >= 10 ? second : '0' + second;
        return minute + ':' + second
    }

    const updateProgress = e => {
        const _progress  = e.target.currentTime/ e.target.duration
        setProgress(_progress.toFixed(2)*100)
    }

    const updateVolume = e =>{
        try {
            setVolume(e.target.value)
            document.querySelector('#audio-element').volume = e.target.value
        } catch (e) {
            console.log(e)
        }
    }

    const onProgressChange = (e) =>{
        const _progress= e.target.value/100
        document.querySelector('#audio-element').currentTime = _progress* document.querySelector('#audio-element').duration
    }
    const onVolumeChange = (e) =>{
        const _volume = e.target.value/100
        document.querySelector('#audio-element').volume = _volume
    }

    const playNext = (songs) =>{
        const id = songs.findIndex(value => value === currentSong)
        console.log(id)
        if(songs.length === id +1){
            playOnSelect(songs[0])
            setCurrentSong(songs[0])
            return
        }
        else{
        const nextSong = songs[id+1]
        playOnSelect(nextSong)
        }
    }
    const playPrevious = (songs) =>{
        const id = songs.findIndex(value => value === currentSong)
        if(id === 0){
            playOnSelect(songs[songs.length-1])
            setCurrentSong(songs[songs.length-1])
            return
        }
        else{
        const prevSong = songs[id-1]
        playOnSelect(prevSong)
        }
    }

    return <SpotifyContext.Provider
    value={{
        isPlaying, setIsPlaying,
        isPaused, setIsPaused,
        currentSong, setCurrentSong,
        play, pause,
        updateProgress, progress,
        playOnSelect,
        onProgressChange,
        onVolumeChange,
        playNext,
        playPrevious,
        timestamp,
        updateVolume,
        volume,
        duration,

    }}
    >{children}</SpotifyContext.Provider>
}