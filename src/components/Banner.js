import classes from './Banner.module.scss'
import Banner_icon from '../assets/images/banner.svg'
import { useHistory } from 'react-router-dom'
const Banner = () => {
  const history = useHistory()
  return (
    <section className={classes.banner}>
      <div className={classes.banner__left}>
        <h1 className="text-3xl md:text-4xl font-medium mb-5">
          銖積寸累，積水成淵
        </h1>
        <h4 className="text-xl md:text-2xl font-medium mb-5">
          這裡不只是記錄，更是回憶
        </h4>
        <button
          className="btn-main text-2xl"
          onClick={() => history.push('/signup')}
        >
          立刻加入
        </button>
      </div>
      <div className={classes.banner__right}>
        <img className="w-full" src={Banner_icon} alt={Banner_icon} />
      </div>
    </section>
  )
}
export default Banner
