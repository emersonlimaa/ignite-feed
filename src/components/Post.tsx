import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post(){
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar image='https://github.com/emersonlimaa.png'/>
          <div className={styles.authorInfo}>
            <strong>Emerson Lima</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title='15 de maio ás 22:00h' dateTime='2022-08-15 22:00:53'>Publicado há 1h</time>
      </header>
      <div className={styles.content}>
        <p>Fala Galeraaa!</p>

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, qui voluptatibus voluptatum doloribus aliquid unde, possimus molestias.</p>
        <p><a href="">emersonlimaa.vercel.app</a></p>
        <p>
        <a href="">#Emerson</a>{' '}
        <a href="">#portfolio</a>{' '}
        <a href="">#Rocketseat</a></p>
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