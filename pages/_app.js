import '../styles/globals.scss'
import { UserContextWrapper } from '../context/User'

function MyApp({ Component, pageProps }) {
  return (
    <UserContextWrapper>
      <Component {...pageProps} />
    </UserContextWrapper>
  )
}

export default MyApp
