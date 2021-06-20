import Article from './Article'
import classes from './Articles.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllArticles } from '../../store/action/Articles-action'

const Articles = () => {
  const dispatch = useDispatch()
  const articles = useSelector(({ articles }) => articles.articles)
  useEffect(() => {
    dispatch(getAllArticles())
  }, [dispatch])
  const art = articles.map(
    ({
      title,
      sub_title,
      tag,
      author,
      create_date,
      watch,
      love,
      article_total,
      _id: id,
      color,
    }) => (
      <Article
        key={id}
        sub_title={sub_title}
        title={title}
        tag={tag}
        author={author}
        create_date={create_date}
        watch={watch}
        love={love}
        article_total={article_total}
        color={color}
      />
    )
  )
  return <section className={classes.Articles}>{art}</section>
}

export default Articles
