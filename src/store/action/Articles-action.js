import articleApi from '../../api/articleApi'
import { articlesActions } from '../index'

export const getAllArticles = () => async (dispatch) => {
  const sendResponse = async () => {
    const {
      data: {
        data: { ArticlesAll },
      },
    } = await articleApi('/api/v1/articles')
    dispatch(articlesActions.storeAllArticles(ArticlesAll))
  }
  sendResponse()
}
