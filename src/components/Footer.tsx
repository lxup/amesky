import Link from "next/link"

// REACT ICONS
import { FaSpotify, FaApple, FaDeezer } from 'react-icons/fa'
import { SiTidal } from 'react-icons/si'

export default function Footer() {
    return (
        <footer className='fixed flex w-full justify-center bottom-0 py-5'>
          <Link href={'https://open.spotify.com/artist/4MbXz8Kvr9wizslkKT4wvJ?si=PaQ-SLn9RRmJDsbVsCouoQ'} className='mx-2' target="_blank">
            <FaSpotify size={25} />
          </Link>
          <Link href={'https://music.apple.com/fr/artist/amesky/1437051354'} className='mx-2' target="_blank">
            <FaApple size={25} />
          </Link>
          <Link href={'https://deezer.page.link/p8EHLmWp8hJmiG9A7'} className='mx-2' target="_blank">
            <FaDeezer size={25} />
          </Link>
          <Link href={'https://tidal.com/browse/artist/10379694'} className='mx-2' target="_blank">
            <SiTidal size={25} />
          </Link>
        </footer>
    )
}