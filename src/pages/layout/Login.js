import useInput from '../../hook/use-input'
import api from '../../api/api'
import Cookies from 'js-cookie'
import Class from './Login.module.scss'
import Input from '../../components/form/input'

const Login = () => {
  const onSubmit = async (e) => {
    e.preventDefault()
    const {
      data: { token },
    } = await api.post('/api/v1/user/login', { email, password })
    if (token) {
      Cookies.set('token', token)
    }
    passwordRest()
    emailRest()
  }

  const {
    value: password,
    onBlur: onPasswordBlur,
    onChange: onPasswordChange,
    isValid: isPasswordValid,
    reset: passwordRest,
  } = useInput((v) => v.length > 7)

  const {
    value: email,
    onBlur: onEmailBlur,
    onChange: onEmailChange,
    isValid: isEmailValid,
    reset: emailRest,
  } = useInput((v) => v.trim() !== '')

  return (
    <section className={Class.login + ' w-full max-w-xs'}>
      <form
        onSubmit={onSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <Input
          label="Email"
          inputType="email"
          inputValue={email}
          onChange={onEmailChange}
          onBlur={onEmailBlur}
          isValid={isEmailValid}
        />
        {!isEmailValid && (
          <p className="text-red-500 text-xs italic w-full text-center my-2">
            信箱格式有誤
          </p>
        )}

        <Input
          label="Password"
          inputType="password"
          inputValue={password}
          onChange={onPasswordChange}
          onBlur={onPasswordBlur}
          isValid={isPasswordValid}
        />
        {!isPasswordValid && (
          <p className="text-red-500 text-xs italic w-full text-center my-2">
            密碼必須超過七位數
          </p>
        )}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#singup"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </section>
  )
}
export default Login