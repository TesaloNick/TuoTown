import React, { useContext, useEffect, useState } from 'react';
import styles from './Head.module.css'
import { NavLink } from 'react-router-dom'
import logoImg from './../../../assets/img/Header/Head/logo.png'

export default function Head() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function openMenu() {
    setIsMenuOpen(true)
    document.querySelector('.head__left')
  }

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <div className={styles.head}>
      {isMenuOpen ?
        <div className={`${styles.active_menu} ${styles.head__menu}`}>
          <div className={`icon-arrow ${styles.icon_arrow}`} onClick={() => closeMenu()}></div>
          <ul className={`${styles.head__menu_list_main}`}>
            <NavLink to='/'>
              <li className={styles.head__menu_item}>Кухонные ножи TUOTOWN</li>
            </NavLink>
            <NavLink to='/'>
              <li className={styles.head__menu_item}>Складные ножи TUOTOWN</li>
            </NavLink>
            <NavLink to='/'>
              <li className={styles.head__menu_item}>Кухонные ножи QXF</li>
            </NavLink>
            <NavLink to='/'>
              <li className={styles.head__menu_item}>Точильные камни</li>
            </NavLink>
            <NavLink to='/'>
              <li className={styles.head__menu_item}>Наборы для BBQ</li>
            </NavLink>
            <NavLink to='/'>
              <li className={styles.head__menu_item}>Кухонные принадлежности</li>
            </NavLink>
            <NavLink to='/'>
              <li className={styles.head__menu_item}>Туристические товары</li>
            </NavLink>
          </ul>
          <ul className={`${styles.head__menu_list_rest}`}>
            <NavLink to='/'>
              <li className={styles.head__menu_item}>Новости</li>
            </NavLink>
            <NavLink to='/'>
              <li className={styles.head__menu_item}>О компании</li>
            </NavLink>
            <NavLink to='/'>
              <li className={styles.head__menu_item}>Контакты</li>
            </NavLink>
            <NavLink to='/'>
              <li className={styles.head__menu_item}>Как проехать</li>
            </NavLink>
          </ul>
        </div> :
        <div className={styles.head__menu}>
          <div className={`icon-arrow ${styles.icon_arrow}`} onClick={() => closeMenu()}></div>
          <ul className={`${styles.head__menu_list_main}`}>
            <NavLink to='/'>
              <li className={styles.head__menu_item}>Кухонные ножи TUOTOWN</li>
            </NavLink>
            <NavLink to='/'>
              <li className={styles.head__menu_item}>Складные ножи TUOTOWN</li>
            </NavLink>
            <NavLink to='/'>
              <li className={styles.head__menu_item}>Кухонные ножи QXF</li>
            </NavLink>
            <NavLink to='/'>
              <li className={styles.head__menu_item}>Точильные камни</li>
            </NavLink>
            <NavLink to='/'>
              <li className={styles.head__menu_item}>Наборы для BBQ</li>
            </NavLink>
            <NavLink to='/'>
              <li className={styles.head__menu_item}>Кухонные принадлежности</li>
            </NavLink>
            <NavLink to='/'>
              <li className={styles.head__menu_item}>Туристические товары</li>
            </NavLink>
          </ul>
          <ul className={`${styles.head__menu_list_rest}`}>
            <NavLink to='/'>
              <li className={styles.head__menu_item}>Новости</li>
            </NavLink>
            <NavLink to='/'>
              <li className={styles.head__menu_item}>О компании</li>
            </NavLink>
            <NavLink to='/'>
              <li className={styles.head__menu_item}>Контакты</li>
            </NavLink>
            <NavLink to='/'>
              <li className={styles.head__menu_item}>Как проехать</li>
            </NavLink>
          </ul>
        </div>
      }
      <div className={styles.head__left}>
        <div className={`icon-menu ${styles.icon_menu}`} onClick={() => openMenu()}></div>
        <div className={`icon-location ${styles.icon_location}`}></div>
        <a href='tel:89811201117' className={`icon-phone ${styles.icon_phone}`}></a>
        <a href='tel:89811201117' className={styles.head__phone}>8 981 120-11-17</a>
      </div>
      <NavLink to='/' className={styles.head__logo}>
        <img src={logoImg} alt="logoImg" />
      </NavLink>
      <div className={styles.head__right}>
        <div className={`icon-shop ${styles.icon_shop}`}></div>
        {isMenuOpen ?
          <div className={`icon-email ${styles.icon_email} ${styles.active_menu}`}></div> :
          <div className={`icon-email ${styles.icon_email}`}></div>
        }
        {isMenuOpen ?
          <div className={`icon-search ${styles.icon_search} ${styles.active_menu}`}></div> :
          <div className={`icon-search ${styles.icon_search}`}></div>
        }
      </div>
    </div >
  );
}