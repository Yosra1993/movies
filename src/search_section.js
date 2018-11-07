import React from 'react';
import {FormInline, Fa  } from 'mdbreact';

const serach=(props)=>
{ 
    return (
        
        <FormInline className="md-form active-cyan active-cyan-2 search">
  <Fa icon="search" />
  <input style={{ width:"90%"}} className="form-control form-control-sm ml-3 w-75" type="text" placeholder="  
  Search" aria-label="Search"onChange={props.serchtitre}/>

</FormInline> 
    
    
    )
}
export default serach;