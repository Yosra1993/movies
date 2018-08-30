import React from 'react';
import MovieCard from './movie_card';
import AddMovie from './addMovie'

const Movie_list=({movieslist,newmovie=()=>{}})=>
{     console.log(movieslist)
    return (
      <div className='Movie_list'>
      
    { 
          movieslist.map(elm=> <MovieCard key={elm.id} movie={elm} />)
          
    }
     <AddMovie newmovie={newmovie}  />
    </div>
    
    )
}
export default Movie_list;