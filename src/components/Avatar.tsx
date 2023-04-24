import styles from './Avatar.module.css'

interface AvatarProps{
  image: string
  hasBorder?: boolean
}

const user ={
  name: 'Emerson'
}

export function Avatar({image, hasBorder} : AvatarProps) {
  return(
    <img className={hasBorder ? styles.avatar : styles.avatarWithBorder} src={image} alt="" />
  )
}