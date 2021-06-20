import classes from './Article.module.scss'
import author_img from '../../assets/images/test_author.jpg'
const Article = ({ title, sub_title, author, create_date, color, tag }) => {
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
          <i>發佈於{create_date}</i>
        </div>
        <button className="ml-auto focus:outline-none">詳細內容</button>
      </div>
    </div>
  )
}
export default Article
