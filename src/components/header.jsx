import styles from '../styles/header.module.css'
const Header = () => {
    return ( 
        <div className={styles.header}>
            <div className={styles.logo}>
            <button>IMDb</button>
            </div>
        </div>
     );
}
 
export default Header;