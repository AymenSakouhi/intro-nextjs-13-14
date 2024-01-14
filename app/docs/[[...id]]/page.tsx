import styles from './style.module.css'

const IDPage: React.FC<{
  params: {
    id: string
  }
}> = ({ params }) => {
  console.log(params)
  return <div className={styles.title}>Hello there from docs</div>
}

export default IDPage
