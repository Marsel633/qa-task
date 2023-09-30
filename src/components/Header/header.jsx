import React, { useState } from 'react'
import styles from "./header.module.scss"
import { Link } from 'react-router-dom'
import logo from "../../assets/mainLogo.png"
import burgerLogo from "../../assets/burgerLogo.png"
import closeBtn from "../../assets/close.png"
export const Header = () => {
  const [isActive, setIsActive] = useState(true);

  const handleClick = event => {
    setIsActive(current => !current);
  }

  return (
    <header className={styles.header}>
      <Link to="/">
        <div className={styles.mainLogo}>
          <img src={logo} alt="main logo" />
        </div>
      </Link>
        <nav className={isActive ? styles.header__navbar + ' ' + styles.showMenu : styles.header__navbar}>
            <Link to="/about">About Us</Link>
            <Link to="/contacts">Contacts</Link>
            <Link to="/events">Events</Link>
            <Link to="/donate">Donate</Link>
            <div className={styles.closeBtn} onClick={handleClick}>
              <img src={closeBtn} alt="" />
            </div>
        </nav>
        <div className={styles.burgerLogo} onClick={handleClick}>
          <img src={burgerLogo} alt="burger logo" />
        </div>
    </header>
  )
}
