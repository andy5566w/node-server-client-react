import { Fragment } from 'react'
import MainHeader from './MainHeader'
import { BrowserRouter } from 'react-router-dom'

const Layout = (props) => {
  return (
    <Fragment>
      <MainHeader />
      <BrowserRouter>
        <main className="container mx-auto">{props.children}</main>
      </BrowserRouter>
    </Fragment>
  )
}
export default Layout
