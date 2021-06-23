import { useParams } from 'react-router-dom'
import classes from './ArticleLists.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { getAllArticles } from '../../store/action/Articles-action'
import ArticleContent from './ArticleContent'
import { useReducer } from 'react'
import ReactDOM from 'react-dom'

const cards = [
  {
    id: 1,
    title: 'JavaScript 訂閱模式',
  },
  {
    id: 2,
    title: 'Java 執行續介紹',
  },
  {
    id: 3,
    title: '如何打包一個程式',
  },
  {
    id: 4,
    title: '面試人生的心得',
  },
  {
    id: 5,
    title: '如何找到一個好的工作',
  },
  {
    id: 6,
    title: '幾招教你部署你理想的城市，幾招教你部署你理想的城市',
  },
  {
    id: 7,
    title: '我就只是一個測試',
  },
  {
    id: 8,
    title: '我就只是一個測試',
  },
]

const articleReducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_ARTICLE_CONTENT':
      document.body.classList.add('disable')
      return { id: action.id, status: 'open' }
    case 'CLOSE_ARTICLE_CONTENT':
      document.body.classList.remove('disable')
      return { id: -1, status: 'close' }
    case 'LOADING':
      return { ...state, status: 'LOADING' }
    default:
      return { ...state }
  }
}

const ArticleLists = () => {
  const dispatch = useDispatch()
  const params = useParams()
  const articles = useSelector((state) => state.articles.articles)
  const [articleContent, dispatchArticle] = useReducer(articleReducer, {
    id: -1,
    status: 'close',
  })
  if (!articles.length) {
    dispatch(getAllArticles())
  }

  const article = articles.find(({ _id }) => _id === params.id)
  if (!article) return <p>Loading</p>

  const onOpenContent = (id) => {
    dispatchArticle({ id, type: 'OPEN_ARTICLE_CONTENT' })
  }

  const article_cards = cards.map(({ id, title }) => (
    <button
      key={id}
      className="focus:outline-none"
      onClick={() => onOpenContent(id)}
    >
      <div className={classes.dot} style={{ backgroundColor: article.color }} />
      <h4>{title}</h4>
      <i className={classes.comment + ' las la-comment-dots'} />
      <i className={classes.heart + ' las la-heart'} />
    </button>
  ))

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

      <div className={classes.article__lists}>{article_cards}</div>
      {articleContent.status === 'open' &&
        ReactDOM.createPortal(
          <ArticleContent data={articleContent} dispatch={dispatchArticle} />,
          document.getElementById('article-content')
        )}
    </div>
  )
}

export default ArticleLists
