import React from 'react'
import './header.css'
import '../../index.css'
import { FaTruck,FaUserCircle,FaHouseUser } from "react-icons/fa";
import { FaUsersGear,FaGear } from "react-icons/fa6";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { useState } from 'react';
import BodyHome from '../Body/body-home'
import BodyEng from '../Body/body-eng'
import BodySales from '../Body/body-sales';
import BodyControler from '../Body/body-controller';
import BodyDelivery from '../Body/body-delivery';
import BodyUser from '../Body/body-user';

const Header = () => {
    const [bodyType, setBodyType] = useState('home')

  return (
    <>
        <div className="container-principal">   
            <div className="cont-esq">
                <h1>MyLogo</h1>
            </div>
            <div>
                <h1>Client Logo</h1>
            </div>
            <div className="cont-dir">
                <ul>
                    <li alt="Home" className='li-col' onClick={() => setBodyType('home')}><FaHouseUser /></li>
                    <li className='li-col' onClick={() => setBodyType('sales')}><RiMoneyDollarCircleFill /></li>
                    <li className='li-col' onClick={() => setBodyType('eng')}><FaUsersGear /></li>
                    <li className='li-col' onClick={() => setBodyType('delivery')}><FaTruck /></li>
                    <li className='li-col' onClick={() => setBodyType('controller')}><FaGear /></li>
                    <li className='li-col' onClick={() => setBodyType('user')}><img src=""></img><FaUserCircle /></li>
                </ul>
            </div>
        </div>
        {bodyType === 'home' && <BodyHome/>}
        {bodyType === 'eng' && <BodyEng/>}
        {bodyType === 'sales' && <BodySales/>}
        {bodyType === 'delivery' && <BodyDelivery/>}
        {bodyType === 'controller' && <BodyControler/>}
        {bodyType === 'user' && <BodyUser/>}
    </>
  )
}

export default Header
