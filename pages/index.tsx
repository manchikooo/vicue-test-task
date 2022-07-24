import styles from '../styles/Home.module.css'
import {Header} from "../components/header";
import {Footer} from "../components/footer";

const Home = () => {

    return (
        <div className={styles.container}>
            <Header/>
            <Footer/>
        </div>
    )
}

export default Home
