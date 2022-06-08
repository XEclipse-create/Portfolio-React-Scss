import './index.scss'
import Loader from 'react-loaders'
import { useState, useEffect, useRef } from 'react';
import AnimatedLetters from '../AnimatedLetters/index';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import emailjs from '@emailjs/browser'
const Contact = () =>{
    const [letterClass, setletterClass] = useState('text-animate')
    const form = useRef()
    useEffect(() =>{
        setTimeout(()=>{
            setletterClass('text-animate-hover')
        },3000)
    },[])

    const sendEmail = (e) =>{
        e.preventDefault()

        emailjs
        .sendForm('service_qaaj8ic','template_w6iof4c',form.current,'1TDkKzGLSFo6RJrlf')

        .then(
            ()=>{
                alert('Message succesfully sent!')
                window.location.reload(false)
            },
            ()=>{
                alert('Failed to send the message, please try again')
            }
        )
    }


    return (
        <>
        <div className="container contact-page">
            <div className="text-zone">
            <h1>
                <AnimatedLetters
                letterClass={letterClass}
                strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                idx={15}
                />
            </h1>
            <p>
                I am interested in freelance oppurtunities and jobs/internships - in web development
                or machine learning. If you have any queries or for my resume do not hesitate to contact me 
                using the form below.
            </p>
            <div className='contact-form'>
                <form ref={form} onSubmit={sendEmail}>
                    <ul>
                    <li className='half'>
                        <input type='text' name='name' placeholder='Name' required/>

                    </li>
                    <li className='half'>
                        <input type='email' name='email' placeholder='Email' required/>

                    </li>
                    <li className='one'>
                        <input type='text' name='subject' placeholder='Subject'/>

                    </li>
                    <li>
                        <textarea placeholder='Message' name='message' required></textarea>

                    </li>
                    <li>
                        <input type='submit' className='flat-button' value="Send"/>
                    </li>
                    </ul>
                </form>
            </div>
        </div>
        <div className="info-map">
        Arinjoy Banerjee,
        <br />
        +91 8697517797
        <br />
        15 Sitala Matalane, 700900  <br />
        Kolkata, West Bengal, India<br />
        <br />
        <span>arinjoyemail@gmail.com</span>
        
        
        </div>
        <div className="map-wrap">
        <MapContainer center={[22.56263,88.36304]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[22.56263,88.36304]}>
            <Popup>Joy lives here, come over for some rasgullas :)</Popup>
            </Marker>
        </MapContainer>
        </div>
    </div>
    <Loader type='pacman'/>
    </>
    )
}

export default Contact