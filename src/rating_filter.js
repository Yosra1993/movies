import React from 'react'
import Rating from './rating'
const Rating_filter=(props)=>
{
    return (<div className='rating_filter'>
        <p>Minimum rating </p>
        <p style={{marginTop:'-7px',fontSize:'76%'}}><Rating rating={props.rating} onchangeRating={props.onchangeRating} /></p>
        
        </div>

    )
}
export default Rating_filter;