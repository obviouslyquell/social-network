import classNames from 'classnames'
import Header from '../../components/Header/Header'
import Login from '../../components/Login/Login'
import Registration from '../../components/Registration/Registration'
import styles from './Home.module.scss'

const Home = () => {
  const homeClassnames = classNames(styles.container, styles.home)
  return (
    <>
        <Header />
        <div className={homeClassnames}>
          <Registration />
          <Login />
        </div>
    </>
  )
}

export default Home