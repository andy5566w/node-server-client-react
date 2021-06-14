import useInput from '../../hook/use-input'
import api from '../../api/api'
import Cookies from 'js-cookie'

const inputClass =
  'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'

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
    <section className="login w-full max-w-xs">
      <form
        onSubmit={onSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            E-Mail Address
          </label>
          <input
            className={
              isEmailValid ? inputClass : inputClass + 'border border-red-500'
            }
            id="email"
            type="text"
            placeholder="Email"
            value={email}
            onBlur={onEmailBlur}
            onChange={onEmailChange}
          />
          {!isEmailValid && (
            <p className="text-red-500 text-xs italic">信箱格式有誤</p>
          )}
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className={
              isPasswordValid
                ? inputClass
                : inputClass + ' border border-red-500'
            }
            id="password"
            type="password"
            placeholder="******************"
            value={password}
            onBlur={onPasswordBlur}
            onChange={onPasswordChange}
          />
          {!isPasswordValid && (
            <p className="text-red-500 text-xs italic">密碼必須大於八個</p>
          )}
        </div>
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
