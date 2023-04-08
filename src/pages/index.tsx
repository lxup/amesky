import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Amesky</title>        
        <meta name="description" content="artiste indé" />
        <meta name="keywords" content="amesky, rap, album" />
        <meta name="author" content="amesky" />
        <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />
        <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center p-24 overflow-hidden">
        <div className='text-xl'>
          amesky
        </div>
      </main>
    </>
  )
}
