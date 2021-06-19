import { Fragment } from 'react'
import MainHeader from './MainHeader'
import { BrowserRouter } from 'react-router-dom'

const Layout = (props) => {
  return (
    <Fragment>
      <BrowserRouter>
        <MainHeader />
        <main className="container mx-auto">{props.children}</main>
      </BrowserRouter>
    </Fragment>
  )
}
export default Layout
