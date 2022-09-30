import classNames from 'classnames'
import Header from '../../components/Header/Header'
import MyPage from '../../components/MyPage/MyPage'
import styles from './Home.module.scss'

const Home = () => {
  const homeClassnames = classNames(styles.container, styles.home)
  return (
    <>
        <Header />
        <div className={homeClassnames}>
          <MyPage />
        </div>
    </>
  )
}

export default Home