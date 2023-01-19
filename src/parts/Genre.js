import Accordion from '@/components/Accordion'
import tmdbApiInstance from '@/services/TmdbApi'

export default function Genre({ genre }) {
  return (
    <div className="genre">
      <Accordion header={<h3>{genre.name}</h3>} content={<div>Accordion content</div>} />
    </div>
  )
}

export async function getStaticProps(props) {
  const movies = await tmdbApiInstance.queryMoviesByGenreId(props.genre.id)

  return {
    props: {
      movies,
    },
  }
}
