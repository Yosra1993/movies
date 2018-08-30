import React from 'react';
import Rating from './rating';
const MovieCard=({movie:{image='http://www.carbuchi.com/_shop/gdView.php?path=/home/carbuchi.com/_userfile/goods_image/136223512135439300/143265647470648700/&imgFile=143265647489238900_L&fileExt=jpg&maxWidth=264&maxHeight=264',
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