import Head from 'next/head'
import GenresList from '@/parts/GenresList'
import tmdbApiInstance from '@/services/TmdbApi'

export default function IndexPage({ genres }) {
  return (
    <>
      <Head>
        <title>Movies database application</title>
        <meta name="description" content="Movies database, watch online movies catalog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="index-page">
        <div className="container">
          <h1 className="index-page__header">Movie database app</h1>
          <GenresList genres={genres} />
        </div>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const genres = (await tmdbApiInstance.queryGenres()).slice(0, 3)

  return {
    props: {
      genres,
    },
  }
}
