import React from 'react'
import '../Home/index.css'
import Perfil from '../assets/Perfil01.jpg'

const Portifolio = () => {
  return (
    <>
            <div id="home-center">
                <div id="center">
                    <div id="photo">
                        <div id="photo-inside">
                            <div id="forma-roll"></div>
                            <img src={Perfil}/>        
                        </div>
                    </div>
                    <div id="name">
                        <div id="intro">
                            <h1>Marco Castellani</h1>
                            <p className='p-none'>I can be your next best Full Stack Developer!</p>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Portifolio
