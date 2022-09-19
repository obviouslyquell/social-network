import '../styles/globals.scss'
import { UsersContextWrapper } from '../context/Users'
import { CurrentUserContextWrapper } from '../context/CurrentUser'
function MyApp({ Component, pageProps }) {
  return (
    <CurrentUserContextWrapper>
      <UsersContextWrapper>
        <Component {...pageProps} />
      </UsersContextWrapper>
    </CurrentUserContextWrapper>
  )
}

export default MyApp
