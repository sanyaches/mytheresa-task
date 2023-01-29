import Head from 'next/head'
import Image from 'next/image'
import tmdbApiInstance from '@/services/TmdbApi'
import { lora, josefin_sans, inter } from '@/app/fonts'
import MovieInfo from '@/components/MovieInfo'
import AddMovieToWishListButton from '@/components/AddMovieToWishListButton'
import Link from 'next/link'
import WishList from '@/parts/WishList'

const myLoader = ({ src, width, quality }) => {
  return `https://image.tmdb.org/t/p/w400${src}?w=${width}&q=${quality || 75}`
}

export async function getServerSideProps({ query }) {
  const { id: movieId, 'genre-name': genreName } = query
  const movie = await tmdbApiInstance.queryMovieById(movieId)

  return {
    props: { movie, genreName },
  }
}

export default function MoviePage({ movie, genreName }) {
  return (
    <>
      <Head>
        <title>{`Movie | ${movie.title}`}</title>
        <meta name="description" content={movie.overview} />
      </Head>
      <main
        className={`movie-page ${genreName?.toLowerCase()} ${lora.variable} ${josefin_sans.variable} ${inter.variable}`}
      >
        <div className="container">
          <Link href={'/'} className="movie-page__link-back">
            Back to main page
          </Link>
          <h1 className="movie-page__header">Movie single page - {movie.title}</h1>

          <div className="movie-page__main">
            <div className="movie-page__img">
              <Image loader={myLoader} src={movie.poster_path} width={400} height={500} alt={movie.title} />
            </div>
            <div>
              <MovieInfo movie={movie} />
              <AddMovieToWishListButton movie={movie} />
            </div>
          </div>

          <div className="movie-page__info">
            My wishlist info:
            <WishList />
          </div>
        </div>
      </main>
    </>
  )
}
