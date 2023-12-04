import styles from './page.module.css'
import { FaShoppingCart } from "react-icons/fa"
const Button = ()=> {
    return(
        <button className={styles.button}> 
        < FaShoppingCart color='white' className={styles.cart}/>
        ORDER NOW</button>
    )
}

export default Button