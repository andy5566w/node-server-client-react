import editor_icon from '../../assets/images/editor.svg'
import classes from './ArticleEditor.module.scss'
import Select from 'react-select'
import { types } from './ArticleContent'
import { useReducer } from 'react'
import Builder from '../form/Builder'

const options = [
  { value: types.header2, label: '標題2' },
  { value: types.header3, label: '標題3' },
  { value: types.code, label: '程式碼' },
  { value: types.paragraph, label: '文章段落' },
  { value: types.orderedList, label: '有序' },
  { value: types.unorderedList, label: '無序' },
]

const init = () => {
  return {
    data: [],
    status: 'empty',
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
        _data[index].value = action.value
        return { ...state, data: _data }
      } else return { ...state }
    default:
      return { ...state }
  }
}

const ArticleEditor = (props) => {
  const [editorData, dispatch] = useReducer(dataReducer, props, init)
  console.log(editorData)
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

  return (
    <div className="container">
      <img className={classes.img} src={editor_icon} alt={editor_icon} />

      <form className="w-full px-20 py-5">
        <div className="py-4">
          <Select options={options} onChange={handleChange} />
        </div>
        <div className="px-5">
          <Builder
            apiContent={editorData.data}
            handleChangeValue={dispatch}
            isEditor={true}
          />
        </div>
      </form>
    </div>
  )
}
export default ArticleEditor
