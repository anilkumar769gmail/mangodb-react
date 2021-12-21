
import React from 'react';

const date= new Date();
 const currentDate = date.getMonth() +"/"+ date.getDate()+"/" + date.getFullYear();

const Footer = () => {
    return (
      <div className="footer">  
       
            <div>&copy;{currentDate} Anil Kumar</div>
       
      </div>
    )
  }
  export default Footer