import './index.scss'
import AnimatedLetters from '../AnimatedLetters/index';
import { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from 'react-loaders';


import{
    faReact,
    faCss3,
    faPython,
    faGitAlt,
    faJsSquare,
    faHtml5,

} from '@fortawesome/free-brands-svg-icons';
const About = () =>{
    const [letterClass, setletterClass] = useState('text-animate')

    useEffect(() =>{
        setTimeout(()=>{
            setletterClass('text-animate-hover')
        },3000)
    },[])
    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','m','e']}
                        idx={15}
                    />
                </h1>
                <p>I'm a full-stack developer and ML Engineer 
                    looking for a role in an established IT company, to work 
                    on challenging projects and develop my personal and proffessional experience.
                </p>
                <p>
                    I'm confident and ambitious and aperson
                    who is naturally curious about 
                    discovering solutions to problems.
                </p>
                <p>
                    In addition to that I define myself as a family person,
                    sports enthusiast, debater , music lover and tech-fanatic!!! 
                </p>
                <a class='button' href='https://github.com/XEclipse-create?tab=repositories'>PROJECTS</a>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'><FontAwesomeIcon icon={faReact} color='#5ED4F4'/></div>
                    <div className='face2'><FontAwesomeIcon icon={faHtml5} color='#F06529'/></div>
                    <div className='face3'><FontAwesomeIcon icon={faCss3} color='#28A4D9'/></div>
                    <div className='face4'><FontAwesomeIcon icon={faPython} color='#FECF40'/></div>
                    <div className='face5'><FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/></div>
                    <div className='face6'><FontAwesomeIcon icon={faGitAlt} color='#F15137'/></div>
                </div>
            </div>
            
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default About
