import Banner from '../../components/Banner'
import Articles from '../../components/article/Articles'
import classes from './Home.module.scss'
const Home = () => {
  return (
    <section className={classes.home}>
      <Banner />
      <Articles />
    </section>
  )
}

export default Home
