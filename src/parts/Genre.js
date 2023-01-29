import { useEffect, useState } from 'react'
import tmdbApiInstance from '@/services/TmdbApi'
import Accordion from '@/components/Accordion'
import MovieList from './MovieList'

export default function Genre({ genre }) {
  const [movieList, setMovieList] = useState([])
  const [status, setStatus] = useState('unloaded')

  useEffect(() => {
    if (!genre.id) {
      setMovieList([])
    } else {
      requestMovieList()
    }

    async function requestMovieList() {
      setMovieList([])
      setStatus('loading')

      const movies = await tmdbApiInstance.queryMoviesByGenreId(genre.id)

      setMovieList(movies)
      setStatus('loaded')
    }
  }, [genre.id])

  let content = <p>Unloaded</p>
  if (status === 'loaded') {
    content = <MovieList movies={movieList} genreName={genre.name} />
  } else if (status === 'loading') {
    content = <p>Loading...</p>
  }

  return (
    <div className="genre">
      <Accordion header={<h3>{genre.name}</h3>} content={content} />
    </div>
  )
}
