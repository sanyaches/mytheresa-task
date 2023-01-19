import Link from 'next/link'

export default function MovieList({ movies, genreName }) {
  return (
    <div className="movie-list">
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link className="movie-list__link" href={`/movies/${movie.id}?genre-name=${genreName}`}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
