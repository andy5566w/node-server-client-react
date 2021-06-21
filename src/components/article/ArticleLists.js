import { useParams } from 'react-router-dom'
import classes from './ArticleLists.module.scss'
const ArticleLists = () => {
  const params = useParams()
  return <div className={classes.article}>{params.id} ArticleListsItem</div>
}

export default ArticleLists
