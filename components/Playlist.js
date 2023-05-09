import { useEffect, useState } from "react"
import TableRow from "./TableRow"

const styles = {
    tableWrapper: `max-w-7xl m-auto p-3 mt-5 mb-40`,
    table: `w-full text-left`,
    tableHeader: `border-b border-gray-100/20 pb-5 opacity-50`
}
const Playlist = ({songs}) => {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <tbody className={styles.tableHeader}>
            <tr>
                <th className="pb-3">#</th>
                <th className="pb-3">Başlık</th>
                <th className="pb-3">Oynatılan</th>
                <th className="pb-3">
                    <img src="assets/time.svg" alt="time" />
                </th>
            </tr>
        </tbody>
        <tbody className="mb-6 block"></tbody>

        {songs.map((song)=>{  
          return <TableRow key={song.id} song={song.account}/>         
        })}
      </table>
    </div>
  )
}

export default Playlist
