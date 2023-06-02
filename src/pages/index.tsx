import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Cursor from '@/components/Cursor'
import Footer from '@/components/Footer'

// STYLES
import styles from '../styles/Home.module.css';
import Link from 'next/link'

// IMAGES
import bmhCover from '../images/amesky_bmh_cover_3000x3000.webp'
import bmhTracklist from '../images/amesky_bmh_tracklist_3000x3000.webp'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [showMusicLink, setShowMusicLink] = useState(false);
  // DATE
  const currentDate = new Date();
  // RELEASE DATE
  const releaseDate= new Date('2023-06-02T00:00:00')

  useEffect(() => {
    if (currentDate >= releaseDate) {
      setShowMusicLink(true);
    }
  })

  console.log(currentDate, "yoooooooo")
  
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: 
        `<!-- 
        XWNXKOl::cdkOOOkkxxdddoooooooodddddlclllcoOK0xl;,,
        ldk00dlllccloddxxdddddooooooooooooolllc;;ldo:'',,;
        ''';loooc;,,;:cllooooooolllllllllcc:;,'';llc:,;cox
        l:,';lool:;',,;;;;:::::::::::::;;;,,,'';clodooxkOO
        kxocloodolc:;;;;;;;;;;;;;;;;;:::::::;,;lodxkkOOO00
        kkxxxxxxdool:;::::cc:::::::::cccccc::;cdxxkkOO0000
        OOOkkkkxdddol::ccccc:;,'''',;:clllcc:coxxkkkOOO000
        OOOOOkkxxxxddlccccc:,.. ....';cllllccldxkkkOOO0000
        OOOOOOkkkkkxxdlcccc'.    .....;llllcloxkkkOOOO0000
        0OOOOOkkkkkkxxdlcc,. .........'cllclldkkkOOOOOOO00
        0OOOOOkkkkkkkkxolc. ...........;lllloxkkkkkkkkOO00
        0OOOOkkkkkkkkkkxoc.. ........ .,lllodkkkkkxxkkO000
        00OOOkkxxdddxxkkxo;............:llldxxxxxddxkkO000
        0000OOkkxddooodxxdl;'.......';cllloxxxxdddxkOO000O
        00000OOOkkxdollodxdoool:::cdkkdolldxxxdddxkOO000OO
        000000OOOOkkdollodxddxkkxxxOOkdlodxxddddkOO000OOOO
        000000000OOOkdollodxkkkkxdxkOkddxxxddddkOO00OOOOOO
        000000000000OkxoolodxkxxdddxkkkxxxxddxkO000OOOOOkk
        O000000000000OOkdooodxxxxkkxxkkkxxddxOO00OOOOOOkkk
        OOO000000000000OkxooodddddxxxkkxxxxkOOOOOOOOOkkkkk
        OOOO0000000000000OkxdolccccloxxxxkOOOOOOOOOOkkkkkx
        kkkOOOO000000000000OkkxxddxxkOOOOO000OOOOOkkkkkkxx
        kkkkkOOOO000000000000000000000000000OOOOOkkkkkkxxo
        kkkkkkOOOOOO0000000000000000000000OOOOOkkkkkkkxdl:
        kkkkkkOOOOOOOO0000000000000000000OOOOOkkkkkkxxdc::
        -->`
      }} />
      {/* SALUT */}
      <Head>
        <title>amesky</title>        
        <meta name="description" content="BEAT MAKES HEART - 02/06 🏃" />
        <meta name="keywords" content="amesky, rap, album" />
        <meta name="author" content="amesky" />
        <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />
        <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Cursor/> */}

      <main className={styles.container}>
        <div className={styles.listenButtonContainer}>
          {showMusicLink ? (
            // <Link href='https://open.spotify.com/artist/4MbXz8Kvr9wizslkKT4wvJ' target='_blank' className={styles.listenButton}>
            //   ÉCOUTER
            // </Link>
            <Link href='https://amesky.streamlink.to/beat-makes-heart' target='_blank' className={styles.listenButton}>
              ÉCOUTER
            </Link>
          ) : (
            <Link href='https://distrokid.com/hyperfollow/amesky/beat-makes-heart' target='_blank' className={styles.listenButton}>
              PRESAVE
            </Link>
          )}
        </div>
        <Image src={bmhCover} alt='Cover Beat Makes Heart' width={10000} height={10000}/>
        <Image src={bmhTracklist} alt='Cover Beat Makes Heart' width={10000} height={10000}/>
      </main>

      <Footer/>
    </>
  )
}
