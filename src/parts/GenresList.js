import Genre from './Genre'

export default function GenresList({ genres }) {
  return (
    <div className="genres-list">
      {genres.map((genre) => (
        <Genre key={genre.id} genre={genre} />
      ))}
    </div>
  )
}
