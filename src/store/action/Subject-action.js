import articleApi from '../../api/articleApi'
import { articlesActions } from '../index'

export const getAllSubjects = () => async (dispatch) => {
  try {
    const {
      data: {
        data: { SubjectAll },
      },
    } = await articleApi('/api/v1/subjects')
    dispatch(
      articlesActions.storeAllSubjects(
        SubjectAll.filter(({ isDelete }) => !isDelete)
      )
    )
  } catch (e) {
    console.log(e)
  }
}
