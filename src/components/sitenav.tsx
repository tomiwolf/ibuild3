import { Link } from 'components/link'
import { useRouter } from 'next/router'
import { useNavigation } from 'hooks/useNavigation'
import styles from './sitenav.module.scss'

interface Props {
  className?: string
}

export function Sitenav(props: Props) {
  const router = useRouter()
  const categories = useNavigation()
  const currentPath = router.asPath
  let className = styles.container
  if (props.className) className += ` ${props.className}`

  return (
    <nav className={className}>
      <ul className={styles.sidenav}>
        <li className={currentPath === '/' ? styles.active : ''}>
          <Link href="/">
            <span role="img" aria-label="home">
              🏠
            </span>
            <span className={styles.text}>Home</span>
          </Link>
        </li>
        {categories.map((i) => {
          return (
            <li key={i.id} className={currentPath.includes(`/${i.id}`) ? styles.active : ''}>
              <Link href={`/${i.id}`}>
                <span role="img" aria-label={i.id}>
                  {i.emoji}
                </span>
                <span className={styles.text}>{i.title}</span>
              </Link>
            </li>
          )
        })}
        <li className={currentPath.includes('/jobs') ? styles.active : ''}>
          <Link href={'/jobs'}>
            <span role="img" aria-label="jobs">
              💼
            </span>
            <span className={styles.text}>Jobs</span>
          </Link>
        </li>
        <li className={currentPath.includes('/tags') ? styles.active : ''}>
          <Link href={'/tags'}>
            <span role="img" aria-label="tags">
              🏷️
            </span>
            <span className={styles.text}>Tags</span>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/wslyvh/useWeb3/tree/main/content">
            <span role="img" aria-label="submit">
              🔗
            </span>
            <span className={styles.text}>Submit</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
