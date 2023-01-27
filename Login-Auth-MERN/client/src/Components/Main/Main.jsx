
import styles from '../Main/styles.module.css';

const Main=()=>{

    const handleLogout=()=>{
        localStorage.removeItem("token");
        window.location.reload();
    }
    return <>
    <div className={styles.main_container}>
        <div className={styles.navbar}>
            <h1>fakebook</h1>
            <button className={styles.white_btn} onClick={handleLogout} ></button>
        </div>
    </div>
    </>
}

export default Main