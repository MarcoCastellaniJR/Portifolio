import React, { useState } from 'react'
import './header.css'
import { FaHome } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoCodeWorking } from "react-icons/io5";
import { RiPresentationFill } from "react-icons/ri";
import { FaFolder } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import Portifolio from '../Home';
import ProfessionalLetter from '../Letter/profissional-letter';
import PersonalLetter from '../Letter/personal-letter';
import HobbiesLetter from '../Letter/hobbies';
import { CgProfile } from "react-icons/cg";
import { SlEnvolopeLetter } from "react-icons/sl";
import { PiPersonSimpleBikeFill } from "react-icons/pi";
import { IoHomeOutline } from "react-icons/io5";
import CharTabChoice from '../code-charts/charts-about/charts-tab/charts-tab';


const HeaderGeral = () => {
    const[body,setBody] = useState('home')
    const[bodyLetter,setBodyLetter] = useState('home')

  return (
    <>
        <div className='cont-cen'>
            <div className='header-div'>
                <ul>
                    <li><div className="header-names">
                        <a onClick={() => {setBody('home')}}><FaHome /></a>
                        <p className='p-head'>Home</p>
                    </div></li>

                    <li><div className="header-names">
                        <a target="_blank" href="https://www.linkedin.com/in/marco-castellani/"><FaLinkedin /></a>
                        <p className='p-head'>Linkedin</p>
                    </div></li>

                    <li><div className="header-names">
                        <a className='disable' onClick={() => {setBody('char')}}><IoCodeWorking /></a>
                        <p className='p-head'>About</p>
                    </div></li>

                    <li><div className="header-names">
                        <a onClick={() => {setBody('pre')}}><RiPresentationFill /></a>
                        <p className='p-head'>Presentation Letter</p>
                    </div></li>

                    <li><div className="header-names">
                        <a href="/prod"><FaFolder /></a>
                        <p className='p-head'>MyProjects</p>
                    </div></li>

                    <li><div className="header-names">
                        <a target="_blank" href="https://github.com/MarcoCastellaniJR?tab=repositories"><FaGithubSquare /></a>
                        <p className='p-head'>GitHub</p>
                    </div></li>

                </ul>
            </div>
            
            <div className='body-header-div'>
                    <div className='footer-porti'>
                        {body === 'home' && <Portifolio/>}
                        {body === 'char' && <CharTabChoice/>}
                        {body === 'pre' && (
                                <>
                                <div className='footer-port'>
                                    <div className='center-center'>
                                        {bodyLetter === 'home' && <Portifolio/>}
                                        {bodyLetter === 'prof' && <ProfessionalLetter/>}
                                        {bodyLetter === 'pers' && <PersonalLetter/>}
                                        {bodyLetter === 'hobi' && <HobbiesLetter/>}
                                    </div>
                                    <div className='footer-fixed'>
                                        <ul>
                                            <li className='footer-div'>
                                                <a className='a-sub' onClick={() => setBodyLetter('home')}><IoHomeOutline /></a>
                                                
                                            </li>
                                            <li className='footer-div'>
                                                <a className='a-sub' onClick={() => setBodyLetter('pers')}><SlEnvolopeLetter /></a>
                                                
                                            </li>
                                            <li className='footer-div'>
                                                <a className='a-sub disable' onClick={() => setBodyLetter('home')}><CgProfile /></a>
                                                
                                            </li>
                                            <li className='footer-div'>
                                                <a className='a-sub' onClick={() => setBodyLetter('hobi')}><PiPersonSimpleBikeFill /></a>
                                                
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                </>
                                
                            )}
                </div>
            </div>
        </div>
    </>
  )
}

export default HeaderGeral
