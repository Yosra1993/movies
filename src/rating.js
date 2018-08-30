import React from 'react';

const Rating=({rating,onchangeRating=()=>{}} )=>
{let arr=[];
for (let i=0; i<5; i++)
{
    if (i<rating)
    arr.push(<span key={i} onClick={() =>onchangeRating(i+1) } >⭐</span>)
    else 
    arr.push(<span key ={i} onClick={() =>onchangeRating(i+1) } style={{fontSize:'145%'}}>☆</span>)
}
return (<div>{arr}</div>)
}
export default Rating;