import styles from './Avatar.module.css'

const user ={
  name: 'Emerson'
}

export function Avatar({image, hasBorder}) {
  return(
    <img 
      className={hasBorder ? styles.avatar : styles.avatarWithBorder} 
      src={image} alt="" />
  )
}