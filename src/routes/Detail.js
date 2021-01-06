import React from 'react';
import './Detail.css';
class Detail extends React.Component{
    componentDidMount(){
        const{location, history} = this.props;
        if(location.state === undefined){
            history.push('/');
        }
    }

    render(){
        const{location} = this.props;
        if(location.state){
            return (
                <div className="detail_movie">
                    <img src={location.state.image} alt={location.state.title} title={location.state.title}></img>
                    <h3 className="movie__title">{location.state.title.replace(/<b>/gi,"").replace(/<\/b>/gi,"").replace(/&amp;/gi,"")}</h3>
                    <h5 className="movie__year">제작년도 : {location.state.year}</h5>
                    <h3>감독 : {location.state.director.slice(0, location.state.director.length-1)}</h3>
                    <p>배우 : {location.state.actor.slice(0, location.state.actor.length-1)}</p>
                    <a href= {location.state.link} target="_blank">더 자세히 보기</a>
                </div>
            )
        }else {
            return null;
        }
    }
}

export default Detail;