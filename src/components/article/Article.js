import classes from './Article.module.scss'
import author_img from '../../assets/images/test_author.jpg'
import { Link } from 'react-router-dom'
const Article = ({
  title,
  sub_title,
  author,
  create_date,
  color,
  tag,
  watch,
  id,
}) => {
  return (
    <div className={classes.Article} style={{ color, backgroundColor: color }}>
      <div data-color={color}>
        <h1>{title}</h1>
        <p>{sub_title}</p>
        <span>{tag}</span>
      </div>

      <div>
        <img className="mr-2" src={author_img} alt={author_img} />
        <div className="flex flex-col">
          <b>{author}</b>
          <i>發佈於{new Date(create_date).toISOString().slice(0, 10)}</i>
        </div>
        <Link to={'/article/' + id} className="ml-auto focus:outline-none">
          詳細內容
        </Link>
      </div>
      <div className={classes.Article__bottom}>
        <p>觀看數：{watch}</p>
      </div>
    </div>
  )
}
export default Article
