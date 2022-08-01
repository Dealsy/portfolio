import type { NextPage } from 'next'
import Head from 'next/head'
import Dashboard from '../components/Dashboard/Dashboard'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-200 h-screen">
        <Dashboard />
      </main>
    </div>
  )
}

export default Home
