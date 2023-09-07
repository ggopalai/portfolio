import Header from "../components/header"
import styles from "../styles/404.module.css"

export default function Custom404() {
    return ( 
    <div>
      <Header />
      <div>
      <h2 className={styles.pageNotFound}>Oops! Looks like we don't have what you're looking for.</h2>
      </div>
    </div> )
  }