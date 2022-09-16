import classNames from 'classnames'
import Link from 'next/link';
import styles from './Header.module.scss'

export default function Header() {
  let headerClassnames = classNames(styles.container, styles.header);
  return (
    <header className={headerClassnames}>
      <nav className={styles.nav}>
        <ul className={styles.nav_list}>
          <li className={styles.nav_item}><Link href='/home'>Home</Link></li>
          <li className={styles.nav_item}><Link href='/albums'>Albums</Link></li>
          <li className={styles.nav_item}><Link href='/news'>News</Link></li>
        </ul>
      </nav>
    </header>
  )
}
