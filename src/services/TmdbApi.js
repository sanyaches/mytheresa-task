class TmdbApi {
  #apiKey = '9063ae2a574c85c70476669d90a3a4a9'
  
  constructor() {
    this.endpoint = 'https://api.themoviedb.org/3'
    this.language = 'en-US'
  }

  async queryGenres() {
    const res = await fetch(`
      ${this.endpoint}/genre/movie/list?api_key=${this.#apiKey}&language=${this.language}
    `)
    const { genres } = await res.json()

    return genres
  }

  async queryMoviesByGenreId(genreId, sortBy='popularity.desc') {
    const res = await fetch(`
      ${this.endpoint}/discover/movie?api_key=${this.#apiKey}&with_genres=${genreId}&page=1&sort_by=${sortBy}
    `)
    const { genres } = await res.json()

    return genres
  }

  async queryMovieById(movieId) {
    const res = await fetch(`
      ${this.endpoint}/discover/movie?api_key=${this.#apiKey}&with_genres=${genreId}&page=1&sort_by=${sortBy}
    `)
    const { genres } = await res.json()

    return genres
  }
}

const tmdbApiInstance = new TmdbApi()
export default tmdbApiInstance
