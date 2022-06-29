import React, { useContext, useEffect, useState } from 'react';
import styles from './Head.module.css'
import { NavLink } from 'react-router-dom'
import logoImg from './../../../assets/img/Header/Head/logo.png'

export default function Head() {

  return (
    <div className='head'>
      <div className="head__left">
        <div className="icon-menu"></div>
        <div className="icon-location"></div>
        <a href='tel:89811201117' className="head__phone">8 981 120-11-17</a>
      </div>
      <NavLink to='/'>
        <img src={logoImg} alt="" />
      </NavLink>
      <div className="head__right"></div>
    </div >
  );
}