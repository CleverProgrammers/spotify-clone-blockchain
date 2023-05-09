import { useContext } from "react"
import { SpotifyContext } from "../context/context"

const styles= {
    th:`pb-5 hover:opacity-50 cursor-pointer`,

}

const TableRow = ({song}) => {
    console.log(song)
    const { playOnSelect, duration } = useContext(SpotifyContext)
    return (
    <tbody>
        <tr onClick={()=>playOnSelect(song)}>
            <th className={styles.th}>{song.index}</th>
            <th className={styles.th}>
                <div>
                    <p className="font bold">{song.title}</p>
                    <p className="opacity-50">{song.artiste}</p>
                </div>
            </th>
            <th className={styles.th}>{song.plays}</th>
            <th className={styles.th}>{song.songLength}</th>
        </tr>
    </tbody>
  )
}

export default TableRow
