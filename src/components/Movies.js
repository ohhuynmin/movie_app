import React from 'react'
import PropTypes from 'prop-types'
import './Movies.css';
import {Link} from 'react-router-dom';
// function Movie({ title,year,summary,image,genres}){
function Movie({ key,year,title,image,director,actor,link}){    
    return (
        <div className="movie">
            <Link
            to={{pathname:"/movie-detail",state:{key,year,title,image,actor,director,link},}}>
                <img src={image} alt={title} title={title}></img>
                <div className="movie__data">
                    <h3 className="movie__title">{title.replace(/<b>/gi,"").replace(/<\/b>/gi,"").replace(/&amp;/gi,"")}</h3>
                    <h5 className="movie__year">제작년도 : {year}</h5>
                    <p className="movie__summary">{key}</p>
                    <p>감독 : {director.slice(0,director.length-1)}</p>
                </div>
            </Link>
        </div>
    );
}

Movie.prototype={
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    // genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;