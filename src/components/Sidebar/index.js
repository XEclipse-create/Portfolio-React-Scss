import './index.scss'
import LogoS from '../../assets/images/logo-a.png'
import {Link,NavLink} from 'react-router-dom'
import LogoSub from '../../assets/images/logo-sub.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome ,faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin,faGithub,faMedium,} from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => (
        <div className='nav-bar'>
            <Link className='logo' to="/">
                <img src={LogoS} alt="logo" />
                <img className="sub-logo" src={LogoSub} alt="arinjoy" />
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to='/'>
                    <FontAwesomeIcon icon ={faHome} color = "#1a1a1d" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to='/about'>
                    <FontAwesomeIcon icon ={faUser} color = "#1a1a1d" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className = "contact-link" to='/contact'>
                    <FontAwesomeIcon icon ={faEnvelope} color = "#1a1a1d" />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/arinjoy-banerjee-8942871b2/">
                        <FontAwesomeIcon icon={faLinkedin} color='#1a1a1d'/>                    
                    </a>
                </li>
                <li>
                    <a
                    target="_blank"
                    rel="noreferrer"
                    href="hhttps://github.com/XEclipse-create/">
                        <FontAwesomeIcon icon={faGithub} color='#1a1a1d'/>                    
                    </a>
                </li>
                <li>
                    <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://medium.com/@arinjoyemail/">
                        <FontAwesomeIcon icon={faMedium} color='#1a1a1d'/>                    
                    </a>
                </li>
            </ul>
        </div>
)
export default Sidebar