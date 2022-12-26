import React from 'react'
import './Introduction.css'

import myCV from "../assets/myCV.pdf"

// paketlerin konfiqurasiyasi
import Typed from 'react-typed';


// shekil
import profilPic from "../assets/images/introduction/profil.svg"

const Introduction = () => {
  return (
    <div className='introduction'>
        <div className="row">
            <div className="col-12 col-md-7  left-side pe-md-5">

            <Typed
                className='yazieffekti'
                strings={[
                    'Hi',
                    'I am John',
                    'Creative Technologist']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                 
                </Typed>
                    
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <a  href={myCV} target="_blank" className='menimbutonum'>Download Resume</a>
            </div>

            <div className="col-12 col-md-5 right-side d-flex justify-content-center" data-aos="fade-left">
                    <img src={profilPic} alt="SEO cehetden onemlidir" />
            </div>
            
        </div>
    </div>
  )
}

export default Introduction