// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import '../sass/navbar.scss'

export default function  Navbar  () {
    return(
        <div className="navbar">
            <div className="left-content">
                <div className='logo'>
                    <img className="github" src="github.png" alt="github-logo"/>
                </div>
                <div className='search'>
                    <input type="text"  placeholder="Search or jump to..."/>
                </div>
                <div className='links'>
                    <ul>
                        <li>Pull Request</li>
                        <li>Issues</li>
                        <li>Marketplace</li>
                        <li>Explore</li>
                    </ul>
                </div>
            </div>
            <div className="right-content">
            <div className='links'>
                <ul>
                    <li><img src='code-girl.jpg' alt='code-girl' className='navbar-icon'/></li>
                    {/* <li><FontAwesomeIcon icon={faCoffee} /></li> */}
                </ul>
            </div>
            </div>
        </div>
     );
}
