import { useState, useEffect } from 'react'

const useInput = (validationFn) => {
  const [value, setValue] = useState('')
  const [isValueTouched, setValueTouched] = useState(false)
  const [isValid, setIsValid] = useState(true)

  useEffect(() => {
    let timer = setTimeout(() => {
      setIsValid(validationFn(value) || !isValueTouched)
    }, 500)
    return () => clearTimeout(timer)
  })

  const onBlur = () => {
    if (!isValueTouched) setValueTouched(true)
  }

  const onChange = (e) => {
    if (!isValueTouched) setValueTouched(true)
    setValue(e.currentTarget.value)
  }

  const reset = () => {
    setValueTouched(false)
    setValue('')
  }

  return { value, isValid, onBlur, onChange, reset }
}

export default useInput
