import { MovieItem } from "./MovieItem";

export const MoviesList = ({ movies }) => (
    <section>
        <ul>
            {movies.map((movie, index) => <MovieItem title={movie.title} key={index}/>)}
            
        </ul>
    </section>
)