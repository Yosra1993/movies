import React from 'react';
import Rating from './rating';
const MovieCard=({movie:{image='http://cdn.onlinewebfonts.com/svg/img_569292.png',
count='0',title='',year=''}}) =>
{
    return (
        <div className="movie">
        <div className="image" style={{backgroundImage :`url('${image}')`}}>
        <div className='rating'><Rating rating={count}   />
        </div>
        </div>
        <div className="title_year">
        {title}-{year}
        </div>
        </div>
    )
}
export default MovieCard;