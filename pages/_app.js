import '../styles/globals.scss'
import { UserContextWrapper } from '../context/Users'

function MyApp({ Component, pageProps }) {
  return (
    <UserContextWrapper>
      <Component {...pageProps} />
    </UserContextWrapper>
  )
}

export default MyApp
