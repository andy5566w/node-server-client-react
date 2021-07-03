import CodeEditor from '../code/CodeEditor'
import { types } from '../article/ArticleContent'
import Input from '../form/input'
import Textarea from './Textarea'
import classes from './Builder.module.scss'
import DraggableWrapper from './DraggableWrapper'

const builder = ({ apiContent, isEditor = false, handleChangeValue }) => {
  const onChange = (e, id) =>
    handleChangeValue({
      id,
      value: e.target.value,
      type: 'MUTATION_VALUE',
    })

  const onCodeChange = (value, id) =>
    handleChangeValue({
      id,
      value,
      type: 'MUTATION_VALUE',
    })

  let content = apiContent.map(
    ({ type, value, id, codeLang = 'javascript' }) => {
      switch (type) {
        case types.code:
          return (
            <CodeEditor
              key={id}
              code={value}
              lang={codeLang}
              readOnly={!isEditor}
              showButton={isEditor}
              handleChange={
                isEditor ? (value) => onCodeChange(value, id) : () => ''
              }
            />
          )
        case types.paragraph:
          if (isEditor)
            return (
              <Textarea
                key={id}
                label="文章內容"
                inputValue={value}
                onChange={(e) => onChange(e, id)}
              />
            )
          return <p key={id}>{value}</p>
        case types.header3:
          if (isEditor)
            return (
              <Input
                key={id}
                label="標題3"
                inputType="text"
                inputValue={value}
                onChange={(e) => onChange(e, id)}
              />
            )
          return <h3 key={id}>{value}</h3>
        case types.header2:
          if (isEditor)
            return (
              <Input
                key={id}
                label="文章內容"
                inputType="text"
                inputValue={value}
                onChange={(e) => onChange(e, id)}
              />
            )
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
  if (isEditor) {
    return (
      <div className={classes.box}>
        <div
          className={
            'container mx-auto d-flex flex-col builder ' +
            classes.builder__editor
          }
        >
          {content.map((data, index) => {
            const id = apiContent[index]['id']
            return (
              <DraggableWrapper key={id} {...{ handleChangeValue, id }}>
                {data}
              </DraggableWrapper>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto d-flex flex-col builder">{content}</div>
  )
}

export default builder
