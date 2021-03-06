import useInput from '../../hook/use-input'
import authApi from '../../api/authApi'
import Cookies from 'js-cookie'
import Class from './Login.module.scss'
import Input from '../../components/form/input'
import { useHistory, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import login_icon from '../../assets/images/login.svg'
import { authenticateState } from '../../store/action/Auth-action'
import { authActions } from '../../store'
import { useEffect } from 'react'

const Login = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const {
        data,
        data: { token, status },
      } = await authApi.post('/api/v1/user/login', { email, password })
      if (token) {
        Cookies.set('token', token)
      }
      if (status) {
        dispatch(authenticateState(data))
        history.push('/home')
      }
      passwordRest()
      emailRest()
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    dispatch(authActions.logout())
  }, [])

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
      <div className={Class.icon}>
        <img className="h-full" src={login_icon} alt={login_icon} />
      </div>
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
            ??????????????????
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
            ???????????????????????????
          </p>
        )}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          <Link
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            to="/get-password-back"
          >
            Forgot Password?
          </Link>
        </div>
      </form>
    </section>
  )
}
export default Login
