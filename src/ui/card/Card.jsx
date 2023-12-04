import styles from './page.module.css'
import Button from '../button/Button'
import Image from 'next/image'
import { FaShoppingCart } from "react-icons/fa"
const Card = () =>{
  return(
<div className={styles.cardsContainer}>
      <div className={styles.cardContainer}>
      <Image src='/gw3ra8v8qbposrjwsncl.jpg' width={330} height={330} className={styles.productImg}/>
        <div className={styles.cardText}>
        <div className={styles.cardTop}>
          <h5 className={styles.productName}>Burga pizza</h5>
          <h5 className={styles.price}>$20</h5>
        </div>
        < FaShoppingCart className={styles.star}/>
        <p className={styles.pSection3}>This is burga pizza</p>
        <Button/> 
      </div>
      </div>

      <div className={styles.cardContainer}>
      <Image src='/gw3ra8v8qbposrjwsncl.jpg' width={330} height={330} className={styles.productImg}/>
        <div className={styles.cardText}>
        <div className={styles.cardTop}>
          <h5 className={styles.productName}>Burga pizza</h5>
          <h5 className={styles.price}>$20</h5>
        </div>
        < FaShoppingCart className={styles.star}/>
        <p className={styles.pSection3}>This is burga pizza</p>
       <Button/>
      </div>
      </div>

      <div className={styles.cardContainer}>
      <Image src='/bxoopgh1ixlhpdwfkz7m.png' width={330} height={330} className={styles.productImg}/>
        <div className={styles.cardText}>
        <div className={styles.cardTop}>
          <h5 className={styles.productName}>Burga pizza</h5>
          <h5 className={styles.price}>$20</h5>
        </div>
        < FaShoppingCart className={styles.star}/>
        <p className={styles.pSection3}>This is burga pizza</p>
        <Button/>
      </div>
      </div>

      <div className={styles.cardContainer}>
      <Image src='/whkayb8vpzhlsczydg3j.png' width={330} height={330} className={styles.productImg}/>
        <div className={styles.cardText}>
        <div className={styles.cardTop}>
          <h5 className={styles.productName}>Burga pizza</h5>
          <h5 className={styles.price}>$20</h5>
        </div>
        < FaShoppingCart className={styles.star}/>
        <p className={styles.pSection3}>This is burga pizza</p>
        <Button/>
      </div>
      </div>
      </div>
  )
}
export default Card