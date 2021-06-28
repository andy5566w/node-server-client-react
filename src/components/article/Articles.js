import Article from './Article'
import classes from './Articles.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllSubjects } from '../../store/action/Subject-action'

const Articles = () => {
  const dispatch = useDispatch()
  const subjects = useSelector(({ subjects }) => subjects.subjects)
  useEffect(() => {
    dispatch(getAllSubjects())
  }, [dispatch])
  const art = subjects.map(
    ({
      title,
      sub_title,
      tag,
      author,
      create_date,
      watch,
      _id: id,
      color,
      articles,
    }) => (
      <Article
        key={id}
        id={id}
        sub_title={sub_title}
        title={title}
        tag={tag}
        author={author}
        create_date={create_date}
        watch={watch}
        color={color}
        articles={articles}
      />
    )
  )
  return <section className={classes.Articles}>{art}</section>
}

export default Articles
