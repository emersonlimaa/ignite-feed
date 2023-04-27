import Logo from '../assets/ignite-logo.svg'
import styles from './Header.module.css'

export function Header(){
  return(
    <header className={styles.header}>
      <img src={Logo} alt="Logotipo Ignite" />
    </header>
  )
}