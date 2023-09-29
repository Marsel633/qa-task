import React from 'react'
import styles from "./header.module.scss"
import { Link } from 'react-router-dom'
import logo from "../../assets/mainLogo.png"

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <div className={styles.mainLogo}>
          <img src={logo} alt="main logo" />
        </div>
      </Link>
        <nav className={styles.header__navbar}>
            <Link to="/about">About Us</Link>
            <Link to="/contacts">Contacts</Link>
            <Link to="/events">Events</Link>
            <Link to="/donate">Donate</Link>
        </nav>
    </header>
  )
}
