import React, { useContext, useEffect, useState } from 'react';
// import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom'
import styles from './Header.module.css'
import Nav from './Nav/Nav'
import Head from './Head/Head'
import { NavLink } from 'react-router-dom'
import CartData from './../../context';

export default function Header() {

  return (
    <header className={styles.header}>
      <div className={styles.container}>

        <Head />
      </div >
    </header >
  );
}