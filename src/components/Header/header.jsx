import React from 'react'
import styles from "./header.module.scss"
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className={styles.header}>
        <nav className={styles.header__navbar}>
            <Link to="">About Us</Link>
            <Link to="">Contacts</Link>
            <Link to="">Events</Link>
            <Link to="">Donate</Link>
        </nav>
    </header>
  )
}
