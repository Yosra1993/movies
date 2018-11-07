import React, { Component } from 'react';
import Search from './search_section';
import Movie_list from './movie_list';
import Rating_filter from './rating_filter';
import './App.css';
const movie1={
  id:1,
  image:'https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_.jpg',
  count:'5',
  title:'Get ou',
  year:'2017'
}
const movie2={
  id:2,
  image:'https://upload.wikimedia.org/wikipedia/en/2/25/The_Spy_Who_Dumped_Me.png',
  title:'the spy who dumped me',
  count:'3',
  year:'2018'
}
const movie3={
  id:3,
  count:'1',
  image:'https://m.media-amazon.com/images/M/MV5BMTQ2NjE4NDE2NV5BMl5BanBnXkFtZTgwOTcwNDE5NzE@._V1_UX182_CR0,0,182,268_AL_.jpg',
  title:'me before you',
  year:'2016'
}
const movie4={
  id:4,
  image:'https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Theringpostere.jpg/220px-Theringpostere.jpg',
  count:'4',
  title:'the Ring',
  year:'2002'
}
const movie5={
  id:5,
  image:'https://cinemadefreddy.files.wordpress.com/2013/08/the-conjuring-new-poster.jpg',
  count:'3',
  title:'The conjuring',
  year:'2013'
}
const movie6={
  id:6,
  image:'https://m.media-amazon.com/images/M/MV5BMjE1OTU5MjU0N15BMl5BanBnXkFtZTcwMzI3OTU5Ng@@._V1_UX182_CR0,0,182,268_AL_.jpg',
  count:'4',
  title:'the Vow',
  year:'2012'
}
const movie7={
  id:7,
  count:'2',
  title:'Spy',
  year:'2015'
}

const movieslist=[movie1,movie2,movie3,movie4,movie5]



class App extends Component {

  constructor(props)
  {
    super(props)
    this.state={
      minFilterRating:1,
      movies:movieslist,
      
      serach:''
    }
   // this.filterRating = this.filterRating.bind(this);


  }
// arrow function
  serachTitre=(event)=>
  {
    this.setState(
       {serach:event.target.value})}
      
  filterRating=()=>
  {
    return(
    this.state.movies.filter(el=>
      el.count >= this.state.minFilterRating && el.title.toLowerCase().includes(this.state.serach.toLowerCase().trim()))
    )
    
   
  }

  onchangeRating=(newRating)=>
    {  this.setState({ minFilterRating : newRating})}
    
  newmovie=(newmovie)=>
  { 
    
    this.setState({ movies : this.state.movies.concat(newmovie) }, () => {console.log(this.state.movies)}) 
    
  }

  
  render() {
    return (
      <div className="App">
      <div className='section-1'>
      <Search serach={this.state.serach} serchtitre={this.serachTitre}/>
      <Rating_filter rating={this.state.minFilterRating} onchangeRating={this.onchangeRating}/>
      </div>
      <Movie_list movieslist={this.filterRating()} newmovie={this.newmovie} />
     
      
      </div>
    );
  }
}

export default App;
