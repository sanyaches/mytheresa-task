import Genre from './Genre'

export default function GenresList({genres}) {
  return (
    <div className="genres-list">
      {genres.map(genre => (
        <Genre genre={genre} />
      ))}
    </div>
  )
}