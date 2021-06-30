import classes from './ArticleContent.module.scss'
import { useEffect, useState } from 'react'
import apiArticle from '../../api/articleApi'
import Loading from '../Loading'
import Builder from '../form/Builder'

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

  return (
    <div className={classes.ArticleContent} onClick={handleCloseContent}>
      <div className={classes.ArticleContent__content}>
        {isLoading && <Loading />}
        {!isLoading && (
          <>
            <span className={classes.closeBtn}>&#215;</span>
            <h1>{header}</h1>
            <Builder apiContent={apiContent} />
          </>
        )}
      </div>
    </div>
  )
}

export default ArticleContent
