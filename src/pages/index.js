import Head from 'next/head'

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Movies database application</title>
        <meta name="description" content="Movies database, watch online movies catalog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="index-page">
        <h1>Movie database app</h1>
      </main>
    </>
  )
}
