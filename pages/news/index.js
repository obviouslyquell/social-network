import styles from './News.module.scss'
import Header from '../../components/Header/Header'
import { useEffect, useState } from 'react'
import NewsCard from '../../components/NewsCard/NewsCard'
import axios from 'axios'

const News = () => {
  const [news, setNews] = useState([])
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>setNews(res.data))
  }, [])
  return (
    <>
        <Header />
        <div className={styles.container}>
          <div className={styles.news}>
            {news.map((e)=><NewsCard key={e.id} data={e}/>)}
          </div>
        </div>
    </>
  )
}

export default News