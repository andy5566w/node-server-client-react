import classes from './MainHeader.module.scss'
import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

let links = []

const MainHeader = () => {
  const isAuth = useSelector(({ auth }) => auth.isAuth)
  const [isShowLink, setIsShowLink] = useState(false)
  const [isBurgerClicked, setIsBurgerClicked] = useState(false)
  if (isAuth) {
    links = [
      {
        text: 'Home',
        to: '/home',
      },
      {
        text: 'Editor',
        to: '/editor',
      },
      {
        text: 'Logout',
        to: '/Login',
      },
    ]
  } else {
    links = [
      {
        text: 'Home',
        to: '/home',
      },
      {
        text: 'Login',
        to: '/Login',
      },
    ]
  }
  const liDom = links.map(({ text, to }) => (
    <li key={text}>
      <NavLink activeClassName={classes.nav__links_active} to={to}>
        {text}
      </NavLink>
    </li>
  ))
  const handleBurgerClicked = () => {
    setIsShowLink((c) => !c)
    setIsBurgerClicked((c) => !c)
  }
  return (
    <header>
      <nav className={classes.nav}>
        <Link className={classes.logo} to="/home">
          <h4>The Nav</h4>
        </Link>
        <ul
          className={
            classes.nav__links + (isShowLink ? ' ' + classes.active : '')
          }
        >
          {liDom}
        </ul>
        <div
          className={
            isBurgerClicked
              ? classes.nav__burger + ' ' + classes.nav__burger_active
              : classes.nav__burger
          }
          onClick={handleBurgerClicked}
        >
          <div className="line1" />
          <div className="line2" />
          <div className="line3" />
        </div>
      </nav>
    </header>
  )
}
export default MainHeader
