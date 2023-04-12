import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Cursor from '@/components/Cursor'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
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
        <meta name="description" content="artiste indé" />
        <meta name="keywords" content="amesky, rap, album" />
        <meta name="author" content="amesky" />
        <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />
        <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Cursor/>

      <main className="flex min-h-screen flex-col items-center justify-center p-24 overflow-hidden">
        <div className='text-xl'>
          amesky - beat makes heart
        </div>
        <div className='text-xl'>
          05/05
        </div>
        <Footer/>
      </main>
    </>
  )
}
