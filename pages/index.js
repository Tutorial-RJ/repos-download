import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="What is a downloader site?!" />
        <p className="A downloader site is a website that allows users to download files from the internet, such as music, movies, software, and more. The site typically provides a search function to help users find the specific file they are looking for, as well as a range of different download options, such as direct download, torrent download, or streaming.">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
