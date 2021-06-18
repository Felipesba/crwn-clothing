import React from 'react';
import './homepage.style.scss';
import Directory from '../Component/directory/directory.component';


const Homepage = () => 
(
    <div className='homepage'>
        <div className = 'directory-menu'>
            <Directory/>
        </div>
    </div>    
  );


export default Homepage;