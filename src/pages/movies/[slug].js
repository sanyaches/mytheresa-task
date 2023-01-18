import Head from 'next/head'

export default function MoviePage() {
  return (
    <>
      <Head>
        <title>Movie single page</title>
        <meta name="description" content="Movies database, watch online movies catalog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="index-page">
        <h1>Movie single page</h1>
      </main>
    </>
  )
}
