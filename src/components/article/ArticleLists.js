import { useParams } from 'react-router-dom'
import classes from './ArticleLists.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { getAllArticles } from '../../store/action/Articles-action'

const ArticleLists = () => {
  const dispatch = useDispatch()
  const params = useParams()
  const articles = useSelector((state) => state.articles.articles)
  if (!articles.length) {
    dispatch(getAllArticles())
  }

  const article = articles.find(({ _id }) => _id === params.id)
  console.log(article)

  return (
    <div className={classes.article}>
      <div
        className={classes.article__header}
        style={{ backgroundColor: article.color, color: article.color }}
      >
        <div className={classes.article__headerLeft}>
          <h3>{article.title}</h3>
          <h4 className="my-2">{article.sub_title}</h4>
          <span>{article.tag}</span>
        </div>

        <div className={classes.article__headerRight}>
          <p>作者:{article.author}</p>
        </div>
      </div>
    </div>
  )
}

export default ArticleLists
