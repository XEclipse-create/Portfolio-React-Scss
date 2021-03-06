import LogoTitle from '../../assets/images/logo-aa.png'
import {Link} from 'react-router-dom'
import React,{useEffect, useState} from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import Logo from './Logo'
const Home =() => {
    const [letterClass, setletterClass] = useState('text-animate')
    const nameArray =['r','i','n','j','o','y']
    const workArray =['w','e','b',' ', 'd','e','v','e','l','o','p','e','r', '.']

    useEffect(() =>{
        setTimeout(()=>{
            setletterClass('text-animate-hover')
        },4000)
    },[])
    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>   
                <br/> 
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span> 
                <img src={LogoTitle} alt="developer"/>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}
                />
                <br/>
                <AnimatedLetters letterClass={letterClass}
                strArray ={workArray}
                idx={21}/>
                </h1>
                <h2>Full Stack Developer / ML Engineer / Blogger</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo/>
        </div>
        <Loader type='pacman'/>
        </>
    )
}
export default Home