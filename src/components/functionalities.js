// import { Link} from 'react-router-dom'
export default function functionalities() {
    return(
       
          
        <div>
            {/* <li><Link to="./overview">Overview </Link></li>
            <li><Link to="./overview">Repositories </Link></li>
            <li><Link to="./overview">Project </Link></li>
            <li><Link to="./overview">Packages </Link></li>
            <li><Link to="./overview">Stars </Link></li> */}
        <div className="overview-titles">
                <p>Popular repositories</p>
                <p>Customise your pins</p>
            </div>
            <div class="row">
                <div class="col" id="overview-box">
                    <div id="overview-heading">
                        <a href="project-name">Project Name</a>
                        <p>Project Status</p>
                    </div>
                        <p>Project Description</p>
                        <p>Languages Used</p>
                </div>
                <div class="col"  id="overview-box">
                <div id="overview-heading">
                        <a href="project-name">Project Name</a>
                        <p>Project Status</p>
                    </div>
                        <p>Project Description</p>
                        <p>Languages Used</p>
                </div>
            </div>
        </div>
     
        
   
    );
}
// <li><Link to="./overview">Overview </Link></li>
{/* <li><Link to="./overview">Repositories </Link></li>
<li><Link to="./overview">Project </Link></li>
<li><Link to="./overview">Packages </Link></li>
<li><Link to="./overview">Stars </Link></li>
<Router>
   <Route>

   </Route>
</Router>  */}