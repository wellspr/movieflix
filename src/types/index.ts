export type Movie = {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

export type MovieDetails = {
    adult: boolean
    backdrop_path: string
    belongs_to_collection: string
    budget: number,
    genres: {
        id: number,
        name: string
    }[]
    homepage: string
    id: number
    imdb_id: string
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    production_companies: {
        id: number
        logo_path: string
        name: string
        origin_country: string
    }[]
    production_countries: {
        iso_3166_1: string
        name: string
    }[]
    release_date: string
    revenue: number
    runtime: number
    spoken_languages: {
        english_name: string
        iso_639_1: string
        name: string
    }[]
    status: string
    tagline: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
    images?: Images
    videos?: Videos
}

export type Images = {
    backdrops: {
        aspect_ratio: number
        height: number
        iso_639_1: string
        file_path: string
        vote_average: number
        vote_count: number
        width: number
    }[]
    id: number
    logos: {
        aspect_ratio: number
        height: number
        iso_639_1: string
        file_path: string
        vote_average: number
        vote_count: number
        width: number
    }[]
    posters: {
        aspect_ratio: number
        height: number
        iso_639_1: string
        file_path: string
        vote_average: number
        vote_count: number
        width: number
    }[]
}

export type Videos = {
    results: {
        iso_639_1: string
        iso_3166_1: string
        name: string
        key: string
        site: string
        size: number
        type: string
        official: boolean
        published_at: string
        id: string
    }[]
}

export type Category = "popular" | "top_rated" | "upcoming" | "now_playing";