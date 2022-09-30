import '../styles/globals.scss'
import { UsersContextWrapper } from '../context/Users'
import { CurrentUserContextWrapper } from '../context/CurrentUser'
import AuthController from '../components/AuthController/AuthController'
function MyApp({ Component, pageProps }) {
  return (
    <CurrentUserContextWrapper>
      <UsersContextWrapper>
        <AuthController>
          <Component {...pageProps} />
        </AuthController>
      </UsersContextWrapper>
    </CurrentUserContextWrapper>
  )
}

export default MyApp
