import React from 'react';
import Menu from './Menu';
import photo from '../Pictures/home.jpg';

class Home extends React.Component {
    
    render(){
        return ( <div>
                    <div className='container'> 
                        <Menu />
                    </div>
                    <div class="mx-auto d-block"><img src={photo}  width={1365} height={510}/></div>
                 </div>  
                
   ) }


}

export default Home;
