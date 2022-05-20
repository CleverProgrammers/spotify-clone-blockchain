import { useContext } from 'react'
import { SpotifyContext } from '../../context/context'

const TableRow = ({ props }) => {
  const { playOnSelect } = useContext(SpotifyContext)

  return (
    <tbody>
      <tr onClick={() => playOnSelect(props)}>
        <th className={styles.th}>{props.index}</th>
        <th className={styles.th}>
          <div>
            <p className="font-bold">{props.title}</p>
            <p className="opacity-50">{'artist'}</p>
            {/* <p className="opacity-50">{props.artiste}</p> */}
          </div>
        </th>
        <th className={styles.th}>{'10,000'}</th>
        {/* <th className={styles.th}>{props.plays}</th> */}
        <th className={styles.th}>{'2:43'}</th>
        {/*<th className={styles.th}>{props.songLength}</th> */}
      </tr>
    </tbody>
  )
}

export default TableRow

const styles = {
  th: `pb-5 hover:opacity-50 cursor-pointer`,
}
