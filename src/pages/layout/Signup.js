import Classes from './Signup.module.scss'
import Input from '../../components/form/input'
import useInput from '../../hook/use-input'
import authApi from '../../api/authApi'
import { useState } from 'react'
import signup_icon from '../../assets/images/signup.svg'
import { useHistory } from 'react-router-dom'
import Cookies from 'js-cookie'
import { authenticateState } from '../../store/action/Auth-action'
import { useDispatch } from 'react-redux'

const Signup = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [err, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const {
    value: password,
    onBlur: onPasswordBlur,
    onChange: onPasswordChange,
    isValid: isPasswordValid,
    reset: passwordRest,
  } = useInput((v) => v.length > 7)

  const {
    value: confirmPW,
    onBlur: onConfirmPWBlur,
    onChange: onConfirmPWChange,
    isValid: isConfirmPWValid,
    reset: confirmPWRest,
  } = useInput(() => password === confirmPW)

  const {
    value: email,
    onBlur: onEmailBlur,
    onChange: onEmailChange,
    isValid: isEmailValid,
    reset: emailRest,
  } = useInput((v) => v.trim() !== '' && v.trim().includes('@'))

  const {
    value: userName,
    onBlur: onUserNameBlur,
    onChange: onUserNameChange,
    isValid: isUserNameValid,
    reset: userNameRest,
  } = useInput((v) => v.trim() !== '')

  const onSubmit = async (event) => {
    try {
      setIsLoading(true)
      event.preventDefault()
      const {
        data,
        data: { status, token },
      } = await authApi.post('/api/v1/user', {
        name: userName,
        email,
        password,
      })
      console.log(data)
      if (status === 'success') {
        setError(null)
        passwordRest()
        confirmPWRest()
        emailRest()
        userNameRest()
        if (token) {
          Cookies.set('token', token)
        }
        dispatch(authenticateState(data))
        history.push('/home')
      }
    } catch (err) {
      setError(err.response.data.message)
    }
    setIsLoading(false)
  }
  return (
    <section className={Classes.Signup}>
      <div className={Classes.icon}>
        <img className="h-full" src={signup_icon} alt={signup_icon} />
      </div>
      <h1 className="block text-gray-500 font-bold text-center mb-5 text-2xl">
        註冊表單
      </h1>
      <form onSubmit={onSubmit} className="w-full max-w-xl">
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
          label="User"
          inputType="text"
          inputValue={userName}
          onChange={onUserNameChange}
          onBlur={onUserNameBlur}
          isValid={isUserNameValid}
        />
        {!isUserNameValid && (
          <p className="text-red-500 text-xs italic w-full text-center my-2">
            使用者名稱不可空白
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
        <Input
          label="ConfirmPW"
          inputValue={confirmPW}
          isValid={isConfirmPWValid}
          onBlur={onConfirmPWBlur}
          onChange={onConfirmPWChange}
          inputType="password"
        />{' '}
        {!isConfirmPWValid && (
          <p className="text-red-500 text-xs italic w-full text-center my-2">
            密碼不一致
          </p>
        )}
        <div className="md:flex md:items-center">
          <div className="md:w-1/3" />
          <div className="md:w-2/3">
            <button className="btn-main" type="submit">
              Sign Up
            </button>
          </div>
        </div>
      </form>
      {isLoading && <p>Loading...</p>}
      {err && (
        <p className="text-red-500 text-xs italic w-full text-center my-2">
          {err}
        </p>
      )}
    </section>
  )
}
export default Signup
