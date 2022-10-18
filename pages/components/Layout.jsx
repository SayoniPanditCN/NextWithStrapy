import styles from  "../../styles/Home.module.css"
import Navbar from "./Navbar"

const Layout = ({children}) => {
  return (
    <div className={styles.container}>
        <div className={styles.main}>
            <Navbar/>
            {children}
        </div>
    </div>
  )
}

export default Layout