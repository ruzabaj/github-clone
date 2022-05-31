import {  BrowserRouter as Router , Link, Routes, Route} from 'react-router-dom'
import Overview from './overview';
import Repository from './repository';
import Project from './project';
import '../style.css'


export default function functionalities() {
    return( 
        <div>
            <div id="profile-navbar">
            <Router>
                {/* <div> */}
                    <ul>
                        <li><Link to="./overview">Overview </Link></li>
                        <li><Link to="./repository">Repositories </Link></li>
                        <li><Link to="./project">Project </Link></li>
                        <li><Link to="./packages">Packages </Link></li>
                        <li><Link to="./stars">Stars </Link></li>
                    </ul>
                    <Routes>
                        <Route exact path="/" component={Overview} />  
                        <Route path="/repository" component={Repository} />  
                        <Route path="/project" component={Project} /> 
                    </Routes>
                    
                {/* </div>      */}
            </Router>
        </div>   
            <Overview/>
        </div>
    );
}
