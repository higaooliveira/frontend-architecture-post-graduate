import { useEffect, useState } from 'react';

import { Header } from './components/Header';
import { MoviesList } from './components/MoviesList';
import { MoviesContainer } from './styles/MoviesContainer';
import './App.css';
import { MoviesService } from './services/MoviesService';


function App() {
  const [movies, setMovies] = useState([])

  const fetchMovies =  async () => {
    const response = await MoviesService.getMovies()
    setMovies(response)
    
  }
  useEffect(() => {
    fetchMovies()
    
  })
  
  return (
    <div className="App">
      <Header />

      <MoviesContainer>
        <MoviesList movies={movies} />
      </MoviesContainer>
    </div>
  );
}

export default App;
