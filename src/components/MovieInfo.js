export default function MovieInfo({ movie }) {
  return (
    <div className="movie-info">
      <div className="movie-info__paragraph">
        <b>Main movie info:</b>
      </div>
      <div className="movie-info__paragraph">{movie.overview}</div>
      <div className="movie-info__paragraph">
        <b>Genres: </b>
        <br />
        <div className="movie-info__genres">
          {movie.genres.map((item) => {
            return <span key={item.id}>{item.name}</span>
          })}
        </div>
      </div>
      {movie.year && <div className="movie-info__paragraph">Year: {movie.year}</div>}
      {movie.vote_average && (
        <div className="movie-info__paragraph">
          <b>Rating: </b>
          {movie.vote_average}
        </div>
      )}
      {movie.runtime && (
        <div className="movie-info__paragraph">
          <b>Duration: </b>
          {movie.runtime} min
        </div>
      )}
    </div>
  )
}
