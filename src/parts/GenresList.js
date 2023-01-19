import Genre from './Genre'

export default function GenresList({ genres }) {
  return (
    <div className="genres-list">
      {genres.map((genre) => (
        <div className="genres-list__item" key={genre.id}>
          <Genre genre={genre} />
        </div>
      ))}
    </div>
  )
}
