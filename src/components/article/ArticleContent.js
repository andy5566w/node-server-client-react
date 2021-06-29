import classes from './ArticleContent.module.scss'
import CodeEditor from '../code/CodeEditor'
import { useEffect, useState } from 'react'
import apiArticle from '../../api/articleApi'
import Loading from '../Loading'

export const types = {
  code: 'code',
  paragraph: 'paragraph',
  header2: 'header2',
  header3: 'header3',
  unorderedList: 'unorderedList',
  orderedList: 'orderedList',
  image: 'image',
}

const ArticleContent = ({ article_id, dispatch }) => {
  const [apiContent, setApiContent] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [header, setHeader] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const {
          data: {
            data: { article },
          },
        } = await apiArticle('/api/v1/articles/' + article_id)
        setApiContent(article.data)
        setHeader(article.title)
      } catch (e) {
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [article_id])
  const handleCloseContent = (e) => {
    if (
      e.target.classList.contains(classes.ArticleContent) ||
      e.target.classList.contains(classes.closeBtn)
    )
      dispatch({ type: 'CLOSE_ARTICLE_CONTENT' })
  }

  const content = apiContent.map(
    ({ type, value, id, codeLang = 'javascript' }) => {
      switch (type) {
        case types.code:
          return (
            <CodeEditor key={id} code={value} lang={codeLang} readOnly={true} />
          )
        case types.paragraph:
          return <p key={id}>{value}</p>
        case types.header3:
          return <h3 key={id}>{value}</h3>
        case types.header2:
          return <h2 key={id}>{value}</h2>
        case types.image:
          return <img className="w-full" src={value} alt={value} />
        case types.unorderedList:
          return (
            <ul key={id}>
              {value.map((text, index) => (
                <li key={index}>{text}</li>
              ))}
            </ul>
          )
        case types.orderedList:
          return (
            <ol key={id}>
              {value.map((text, index) => (
                <li key={index}>{text}</li>
              ))}
            </ol>
          )
        default:
          return ''
      }
    }
  )
  return (
    <div className={classes.ArticleContent} onClick={handleCloseContent}>
      <div className={classes.ArticleContent__content}>
        {isLoading && <Loading />}
        {!isLoading && (
          <>
            <span className={classes.closeBtn}>&#215;</span>
            <h1>{header}</h1>
            <div className="container mx-auto d-flex flex-col">{content}</div>
          </>
        )}
      </div>
    </div>
  )
}

export default ArticleContent
