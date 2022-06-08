import './index.scss'
import LogoS from '../../../assets/images/logo-aa.png'

    const Logo = () => {

    return(
        <div className='logo-container'>
    <img
        className="solid-logo"
        src={LogoS}
        alt="JavaScript,  Developer"
    />
        </div>
    )
}

export default Logo