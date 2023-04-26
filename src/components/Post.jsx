import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'


export function Post({author}) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar image={author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        
        <time title='15 de maio ás 22:00h' dateTime="2022-05-15 ">{}</time>
      </header>
      <div className={styles.content}>

      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder='deixe um comentário'
        />

        <footer>

        <button type='submit'>
          Comentar
        </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment/>
        <Comment/>
        <Comment/>
      </div>
    </article>
  )
}