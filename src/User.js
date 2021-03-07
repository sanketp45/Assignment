import React from 'react';

const User =(props) =>
{  
    console.log(props)
  return(
  <div>
      {  props.data && props.data.map(user =>(                 <div>
                       
                       <li>{user.title} </li>
                  </div>

             ))}            
            
 

  </div>


  )

}

export default User