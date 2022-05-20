import NavLink from './navLink'

const styles = {
  nav: `bg-black h-screen w-96 p-5 py-10 `,
  link: `hover:text-[#fff]`,
  playlistName: `text-[#b3b3b3] cursor-default text-sm hover:text-[#fff]`
}

const Nav = () => {
  return (
    <div className={styles.nav}>
      <div className='mb-10'>
        <NavLink icon='assets/home.svg' title='Home' className={styles.link} />
        <NavLink
          icon='assets/search.svg'
          title='Search'
          className={styles.link}
        />
        <NavLink
          icon='assets/playlist.svg'
          title='Your library'
          className={styles.link}
        />
      </div>

      <div className='mb-5 border-b border-gray-100/10'>
        <NavLink
          icon='assets/add.svg'
          title='Create Playlist'
          className={styles.link}
        />
        <NavLink
          icon='assets/heart.svg'
          title='Liked Songs'
          className={styles.link}
        />
      </div>

      <div className='mt-5 leading-8 flex flex-col gap-[10px]'>
        <p className='text-sm'>GHOST SONGS</p>
        <p className={styles.playlistName}>
          CarPlay Vol.2
        </p>
        <p className={styles.playlistName}>
          Country Dump
        </p>
        <p className={styles.playlistName}>
          Energy Booster: Country
        </p>
        <p className={styles.playlistName}>
          Funky
        </p>
        <p className={styles.playlistName}>
          Coaching 🔥
        </p>
        <p className={styles.playlistName}>
          Country
        </p>
        <p className={styles.playlistName}>
          Your Top Songs 2019
        </p>
      </div>
    </div>
  )
}

export default Nav
