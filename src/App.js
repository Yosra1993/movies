import React, { Component } from 'react';
import Search from './search_section';
import Movie_list from './movie_list';
import Rating_filter from './rating_filter';
import './App.css';
const movie1={
  id:1,
  image:'https://resizing.flixster.com/yD_Pm2PpiS4OT5B5vAENS0Onr3c=/206x305/v1.bTsxMjMyMjQzNDtqOzE3ODI3OzEyMDA7NTk3Ozk0Ng',
  count:'5',
  title:'Get ou',
  year:'2017'
}
const movie2={
  id:2,
  image:'https://resizing.flixster.com/xe1uHCuHBk133E5i8S6y0V0RRa4=/206x305/v1.bTsxMjc5MjU1NztqOzE3ODMzOzEyMDA7MzYwMDs1NTUw',
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
  image:'https://m.media-amazon.com/images/M/MV5BMjE1OTU5MjU0N15BMl5BanBnXkFtZTcwMzI3OTU5Ng@@._V1_UX182_CR0,0,182,268_AL_.jpg',
  count:'4',
  title:'the Vow',
  year:'2012'
}
const movie5={
  id:5,
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
    this.filterRating = this.filterRating.bind(this);


  }

  serachTitre=(event)=>
  {
    this.setState(
       {serach:event.target.value})}
      
  filterRating()
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
      
      <Search  serach={this.state.serach} serchtitre={this.serachTitre}/>
      <Rating_filter rating={this.state.minFilterRating} onchangeRating={this.onchangeRating}/>
      <Movie_list movieslist={this.filterRating()} newmovie={this.newmovie} />
     
      
      </div>
    );
  }
}

export default App;
