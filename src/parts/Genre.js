import { useEffect, useState } from 'react'
import tmdbApiInstance from '@/services/TmdbApi'
import Accordion from '@/components/Accordion'
import MovieList from './MovieList'

const localCache = {}

export default function Genre({ genre }) {
  const [movieList, setMovieList] = useState([])
  const [status, setStatus] = useState('unloaded')

  useEffect(() => {
    if (!genre.id) {
      setMovieList([])
    } else if (localCache[genre.id]) {
      setMovieList(localCache[genre.id])
    } else {
      requestMovieList()
    }

    async function requestMovieList() {
      setMovieList([])
      setStatus('loading')

      const movies = await tmdbApiInstance.queryMoviesByGenreId(genre.id)

      localCache[genre.id] = movies || []
      setMovieList(localCache[genre.id])
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
