import { useParams } from 'react-router-dom'
import classes from './SubjectLists.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { getAllSubjects } from '../../store/action/Subject-action'
import ArticleContent from './ArticleContent'
import { useReducer } from 'react'
import ReactDOM from 'react-dom'
import apiArticle from '../../api/articleApi'

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

const SubjectLists = () => {
  const dispatch = useDispatch()
  const params = useParams()
  const subjects = useSelector((state) => state.subjects.subjects)
  const isAuth = useSelector(({ auth }) => auth.isAuth)
  const [articleContent, dispatchArticle] = useReducer(articleReducer, {
    id: -1,
    status: 'close',
  })
  if (!subjects.length) {
    dispatch(getAllSubjects())
  }

  const subject = subjects.find(({ _id }) => _id === params.id)
  if (!subject) return <p>未知主題</p>

  const onOpenContent = (e, id) => {
    if (e.target.tagName === 'I') return
    dispatchArticle({ id, type: 'OPEN_ARTICLE_CONTENT' })
  }

  const deleteArticle = async (id) => {
    const {
      data: { status },
    } = await apiArticle.delete('/api/v1/articles/' + id)
    if (status === 'success') {
      dispatch(getAllSubjects())
    }
  }
  const article_cards = subject.articles
    .filter(({ isDelete }) => !isDelete)
    .map(({ id, title }) => (
      <button
        key={id}
        className="focus:outline-none"
        onClick={(e) => onOpenContent(e, id)}
      >
        <div
          className={classes.dot}
          style={{ backgroundColor: subject.color }}
        />
        <h4>{title}</h4>
        <i className={classes.comment + ' las la-comment-dots'} />
        <i className={classes.heart + ' las la-heart'} />
        {isAuth && (
          <i
            onClick={() => deleteArticle(id)}
            className={classes.trashcan + ' las la-trash'}
          />
        )}
      </button>
    ))

  return (
    <div className={classes.article}>
      <div
        className={classes.article__header}
        style={{ backgroundColor: subject.color, color: subject.color }}
      >
        <div className={classes.article__headerLeft}>
          <h3>{subject.title}</h3>
          <h4 className="my-2">{subject.sub_title}</h4>
          <span>{subject.tag}</span>
        </div>

        <div className={classes.article__headerRight}>
          <p>作者:{subject.author}</p>
        </div>
      </div>

      {(subject.articles.length === 0 || article_cards.length === 0) && (
        <p className={classes.noArticles} style={{ color: subject.color }}>
          此主題正在醞釀新的文章
        </p>
      )}
      {subject && <div className={classes.article__lists}>{article_cards}</div>}

      {articleContent.status === 'open' &&
        ReactDOM.createPortal(
          <ArticleContent
            article_id={articleContent.id}
            dispatch={dispatchArticle}
          />,
          document.getElementById('article-content')
        )}
    </div>
  )
}

export default SubjectLists
