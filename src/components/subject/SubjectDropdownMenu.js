import Select from 'react-select'
import { useSelector, useDispatch } from 'react-redux'
import { getAllSubjects } from '../../store/action/Subject-action'
import Input from '../form/input'
import useInput from '../../hook/use-input'
import { useEffect } from 'react'

let options = []

const SubjectDropdownMenu = ({ handleChangeValue }) => {
  const dispatch = useDispatch()
  const subject = useSelector((state) => state.subjects.subjects)
  const handleChange = ({ value }) => {
    handleChangeValue({ type: 'MUTATION_SUBJECT_ID', subject_id: value })
  }
  if (subject.length === 0) {
    dispatch(getAllSubjects())
  } else {
    options = subject.map(({ _id, title }) => ({ value: _id, label: title }))
  }

  const {
    value: title,
    onBlur: onPasswordBlur,
    onChange: onPasswordChange,
    isValid: isPasswordValid,
  } = useInput((v) => v.length > 0)
  useEffect(() => {
    handleChangeValue({ type: 'MUTATION_TITLE', title: title })
  }, [title, handleChangeValue])
  return (
    <div className="py-5">
      <label className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4">
        請選擇要加入的主題：
      </label>
      <Select options={options} onChange={handleChange} />
      <div className="py-5">
        <label
          className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
          htmlFor="title"
        >
          文章標題
        </label>
        <Input
          label="文章標題"
          inputType="email"
          inputValue={title}
          onChange={onPasswordChange}
          onBlur={onPasswordBlur}
          isValid={isPasswordValid}
        />
        {!isPasswordValid && (
          <p className="text-red-500 text-xs italic w-full text-center my-2">
            請輸入標題
          </p>
        )}
      </div>
    </div>
  )
}

export default SubjectDropdownMenu
