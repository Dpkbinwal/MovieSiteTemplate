import React from 'react';
import MovieCard from './MovieCard';
import {useState , useEffect} from 'react';

import './App.css'
import SearchIcon from './search.svg';
//
const API_URL ='http://www.omdbapi.com?apikey=fe072c2f';

const App = () => {
    const [movies,setMovies]=useState([]);
    const [searchTerm,setSearchTerm]= useState('');
    
    useEffect(() => {
     searchMovies('spiderman');
    } , []);

    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data=await response.json();
    
        setMovies(data.Search);
    }

    return ( 
        <div className="app">
            <h1> Era Of Movies--</h1>

            <div className="search"> 
            <input type="text"
            placeholder='Search for Movie' 
            value={searchTerm}
            onChange={
                (e)=>setSearchTerm(e.target.value)
            }
            />
            <img src={SearchIcon}
            alt="search" 
            onClick= { () => searchMovies(searchTerm) }
            />
            </div>
  
            {movies?.length >0 ?(
                    <div className="container">
                    {
                        movies.map((movie)=>(
                            <MovieCard movie={movie} />       
                        ))
                    }
                    </div>         
                ):(
                    <div className="empty">
                    <h3>No Movie Found</h3>
                    </div>
                )}    

            
        </div>
    );
}

export default App;