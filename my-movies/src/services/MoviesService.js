import axios from 'axios'
import { Movie } from '../models/Movie'

const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY =  '1bb616d19a4627e0b4bfa351f609bd5c'
const urlBuilder = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`



export class MoviesService {

    static async getMovies() {
        const endpoint = '/movie/popular'

        const { data } = await axios.get(urlBuilder(endpoint))

        return data.results.map(element => new Movie({id: element.id, title: element.title, adult: element.adult}))
    }
}