import React from 'react';

const serach=(props)=>
{ 
    return (
        <div className='search' >
        <input className='text' type='text' onChange={props.serchtitre}/>
        <input className='btn' type='button' value='Search'/>
        </div>    
    
    
    )
}
export default serach;