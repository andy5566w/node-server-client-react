import Articles from '../../components/article/Articles'
import classes from './Home.module.scss'
const Home = () => {
  return (
    <section className={classes.home}>
      <Articles />
    </section>
  )
}

export default Home
