import classes from './MainHeader.module.scss'
import { useState } from 'react'

const links = [
  {
    text: 'Home',
    to: '/home',
  },
  {
    text: 'About',
    to: '/about',
  },
  {
    text: 'Work',
    to: '/work',
  },
  {
    text: 'Project',
    to: '/project',
  },
]

const MainHeader = () => {
  const [isShowLink, setIsShowLink] = useState(false)
  const [isBurgerClicked, setIsBurgerClicked] = useState(false)
  const liDom = links.map(({ text, to }) => (
    <li key={text}>
      <a href={to}>{text}</a>
    </li>
  ))
  const handleBurgerClicked = () => {
    setIsShowLink((c) => !c)
    setIsBurgerClicked((c) => !c)
  }
  return (
    <header>
      <nav className={classes.nav}>
        <div className={classes.logo}>
          <h4>The Nav</h4>
        </div>
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
