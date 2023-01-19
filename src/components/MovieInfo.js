export default function MovieInfo({ movie }) {
  return (
    <div className="movie-info">
      <p>
        <b>Main movie info:</b>
      </p>
      <p>{movie.overview}</p>
      <p>
        <b>Genres: </b>
        <br />
        <div className="movie-info__genres">
          {movie.genres.map((item) => {
            return <span key={item.id}>{item.name}</span>
          })}
        </div>
      </p>
      {movie.year && <p>Year: {movie.year}</p>}
      {movie.vote_average && (
        <p>
          <b>Rating: </b>
          {movie.vote_average}
        </p>
      )}
      {movie.runtime && (
        <p>
          <b>Duration: </b>
          {movie.runtime} min
        </p>
      )}
    </div>
  )
}
