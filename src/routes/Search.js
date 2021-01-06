import React from 'react';
import axios from 'axios'
import Movie from '../components/Movies';
import './Search.css';

class Search extends React.Component{
  state = {
    isLoding:true,
    movies:[],
    value: ""
  }
  handleChange = (e) => { this.setState({value: e.target.value}); };
  handleSubmit = (e) => { this.getMovies(); };

  getMovies= async()=>{
    const ID_KEY = '2po3_CybHPXjUePThzrv';
    const SECRET_KEY = 'KciI9Ai7h9';
    const search = this.state.value;
    if(this.state.value === ""){
      this.setState({movies: [], isLoding: false})
    }else{
    const {
      data:{
        items
      },
    } = await axios.get('http://localhost:3001/search/',{ 
      params:{ query: search},
       headers: { 'X-Naver-Client-Id': ID_KEY, 'X-Naver-Client-Secret': SECRET_KEY } });
   
    this.setState({movies:items,isLoding:false});
    console.log(this.state.movies);
    }
  }  
  componentDidMount(){
    this.getMovies();
  }
  render(){
    const {isLoding,movies} = this.state;
    return (
    <section className="container">
      {isLoding ? (
      <div className="loader">
        <span className="loader__text">Loading...</span>
        </div>
      ):(<form onSubmit={this.handleSubmit}>
        <div className="input_div"> 
          <h1>영화 검색</h1> 
          <input className="input_search" type="text" value={this.state.value} onChange={this.handleChange} placeholder="영화제목을 입력하세요."/> 
        </div>
        <div className="movies">
          {movies.map(movie=>(
            <Movie 
              key={movie.link}
              link={movie.link}
              year={movie.pubDate}
              title={movie.title}
              rating={movie.rating}
              image={movie.image}
              director={movie.director}
              actor={movie.actor}
            />
          ))}
      </div>
      </form>
      )}
    </section>
    );
  }
}

export default Search;
