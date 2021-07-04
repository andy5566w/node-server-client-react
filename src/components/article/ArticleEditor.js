import editor_icon from '../../assets/images/editor.svg'
import classes from './ArticleEditor.module.scss'
import Select from 'react-select'
import { types } from './ArticleContent'
import { useReducer } from 'react'
import Builder from '../form/Builder'
import SubjectDropdownMenu from '../subject/SubjectDropdownMenu'
import apiArticle from '../../api/articleApi'
import { useHistory } from 'react-router-dom'

const options = [
  { value: types.header2, label: '標題2' },
  { value: types.header3, label: '標題3' },
  { value: types.code, label: '程式碼' },
  { value: types.paragraph, label: '文章段落' },
  // { value: types.orderedList, label: '有序' },
  // { value: types.unorderedList, label: '無序' },
]

const init = () => {
  return {
    data: [],
    subject_id: -1,
    status: 'empty',
    title: '',
  }
}

const dataReducer = (state, action) => {
  const _data = [...state.data]
  switch (action.type) {
    case 'ADD':
      _data.push(action.payload)
      return { ...state, status: 'includes', data: _data }
    case 'REMOVE':
      const filtered_data = _data.filter(({ id }) => id !== action.id)
      return {
        ...state,
        status: filtered_data.length ? 'includes' : 'empty',
        data: filtered_data,
      }
    case 'MUTATION_VALUE':
      const index = _data.findIndex(({ id }) => action.id === id)
      if (index !== -1) {
        if (action.value) _data[index].value = action.value
        if (action.transform)
          _data[index].transform = {
            y: action.transform.y,
          }
        return { ...state, data: _data }
      } else return { ...state }
    case 'MUTATION_SUBJECT_ID':
      return { ...state, subject_id: action.subject_id }
    case 'MUTATION_TITLE':
      return { ...state, title: action.title }
    default:
      return { ...state }
  }
}

const ArticleEditor = (props) => {
  const history = useHistory()
  const [editorData, dispatch] = useReducer(dataReducer, props, init)
  const handleChange = ({ value }) => {
    dispatch({
      type: 'ADD',
      payload: {
        type: value,
        id: Math.random().toString(16).slice(2),
        value: '',
      },
    })
  }

  const handleSubmit = async () => {
    const {
      data: { status },
    } = await apiArticle.post('/api/v1/articles', {
      ...editorData,
    })
    if (status === 'success') history.push('/home')
  }

  return (
    <div className="container">
      <img className={classes.img} src={editor_icon} alt={editor_icon} />

      <form className="w-full px-20 py-5">
        <div className="py-4">
          <Select options={options} onChange={handleChange} />
        </div>
        <div className="px-5 ">
          {editorData.status === 'empty' ? (
            <p className="py-5 text-2xl">請新增內容</p>
          ) : (
            <Builder
              apiContent={editorData.data}
              handleChangeValue={dispatch}
              isEditor={true}
            />
          )}
        </div>
        <SubjectDropdownMenu handleChangeValue={dispatch} />
        <button
          disabled={editorData.subject_id === -1}
          type="button"
          onClick={handleSubmit}
          className={
            'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ' +
            (editorData.subject_id === -1
              ? 'opacity-50 cursor-not-allowed'
              : '')
          }
        >
          送出
        </button>
      </form>
    </div>
  )
}
export default ArticleEditor
