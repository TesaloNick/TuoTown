import React, { useContext, useEffect, useState } from 'react';
import styles from './Head.module.css'
import { NavLink } from 'react-router-dom'
import logoImg from './../../../assets/img/Header/Head/logo.png'

export default function Head() {

  return (
    <div className={styles.head}>
      <div className={styles.head__left}>
        <div className="icon-menu"></div>
        <div className="icon-location"></div>
        <a href='tel:89811201117' className={styles.head__phone}>8 981 120-11-17</a>
      </div>
      <NavLink to='/' className={styles.head__logo}>
        <img src={logoImg} alt="logoImg" />
      </NavLink>
      <div className={styles.head__right}>
        <div className="icon-shop"></div>
        <div className="icon-email"></div>
        <div className="icon-search"></div>
      </div>
    </div >
  );
}