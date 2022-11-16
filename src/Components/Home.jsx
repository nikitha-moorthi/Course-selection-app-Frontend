import React from 'react';
//import Logout from './Logout';
import Menu from './Menu';

class Home extends React.Component {

   // <div className='logout'><a className="link" href="/logout">Logout</a></div>
    render(){
        return  <div className='container'>
                    <div className='container'> 
                        <Menu />
                    </div>
                    <div className='container pt-5 justify-content'>
                        
                        <p><b>Course Selection Information</b></p>
                        <ul>
                            <li>For admissions, the applicants are provided with courses for the year 2023 – 2024.</li>

                            <li>The Applicant can search for the provided University Program and take admission. Applicant can apply online and fill up the form.</li>

                        </ul>
                    </div>
                </div>
                
    }


}

export default Home;
