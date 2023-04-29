import { ImgHTMLAttributes } from 'react'
import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
  image: string,
  hasBorder?: boolean
}
export function Avatar({hasBorder =true, ...props}: AvatarProps) {
  return(
    <img  
      className={hasBorder ? styles.avatar : styles.avatarWithBorder} 
      {...props}
      />
  )
}