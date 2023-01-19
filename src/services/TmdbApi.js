import { TMDB_API_KEY, TMDB_API_URL } from '@/config/tmdb'

class TmdbApi {
  constructor() {
    this.apiUrl = TMDB_API_URL
    this.language = 'en-US'
  }

  async queryGenres() {
    const res = await fetch(`
      ${this.apiUrl}/genre/movie/list?api_key=${TMDB_API_KEY}&language=${this.language}
    `)
    const { genres } = await res.json()

    return genres
  }

  async queryMoviesByGenreId(genreId, sortBy = 'popularity.desc') {
    const res = await fetch(`
      ${this.apiUrl}/discover/movie?api_key=${TMDB_API_KEY}&with_genres=${genreId}&page=1&sort_by=${sortBy}
    `)
    const { results } = await res.json()

    return results
  }

  async queryMovieById(movieId) {
    const res = await fetch(`
      ${this.apiUrl}/movie/${movieId}?api_key=${TMDB_API_KEY}&language=${this.language}
    `)
    const movie = await res.json()

    return movie
  }
}

const tmdbApiInstance = new TmdbApi()
export default tmdbApiInstance
