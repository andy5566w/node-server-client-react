const inputClass =
  'bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
const Input = ({
  label,
  inputType = 'text',
  inputValue = '',
  onBlur,
  onChange,
  placeholder = '請輸入',
  isValid = true,
} = {}) => {
  return (
    <div className="md:flex md:items-center mb-3">
      <div className="md:w-1/3">
        <label
          className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          htmlFor={label}
        >
          {label}
        </label>
      </div>
      <div className="md:w-2/3">
        <input
          placeholder={placeholder}
          className={
            isValid ? inputClass : inputClass + ' border border-red-500'
          }
          id={label}
          type={inputType}
          value={inputValue}
          onBlur={onBlur}
          onChange={onChange}
        />
      </div>
    </div>
  )
}
export default Input
