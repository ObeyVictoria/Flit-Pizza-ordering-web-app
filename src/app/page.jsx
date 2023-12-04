import Image from 'next/image'
import styles from './page.module.css'
import Button from '@/ui/button/Button'
import Card from '@/ui/card/Card'
import { FaShoppingCart } from "react-icons/fa" 

export default function Home() {
  return (
    <div className={styles.container}>
      
    <div className={styles.section1}>
     <div className={styles.item1}>
      <h1 className={styles.title}>Handmade, 
        <br/>With an Extra 
        <br/>Pinch of <span className={styles.red}>Love</span></h1>
        <p className={styles.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <Button/>
      </div>
      <div className={styles.item2}>
      <div className={styles.circle}></div>
        <div>
        <Image src="/ymghhuxwryclpez3l5uf.png" width={400} height={400} className={styles.pizza}/>
        <Image src="/pizza-onion_bvpupn.png" width={100} height={90} className={styles.onion}/>
        <Image src="/whkayb8vpzhlsczydg3j.png" width={190} height={190} className={styles.sPizza}/>
        </div>
        </div> 
    </div>

    <div className={styles.section2}>
      <div className={styles.image}>
        <Image src='/lvnhk6nzhdv711o3ixnp.png' width={400} height={400} className={styles.sec2Img}/>
      </div>
      <div className={styles.text2}>
        <h2 className={styles.h3Text2}>Daily Fresh and always tasty</h2>
        <p className={styles.pText2}>There are many variations of Lorem Ipsum available, but the majority haved</p>
      </div>
      <div className={styles.garlicDiv}>
      <Image src='/pizza-daily-fresh-vacter_x6mcof.png' width={90} height={90} className={styles.garlic}/>
      </div>
    </div>

    <div className={styles.section3}>
      <h5 className={styles.h6Section3}>Popular Dishes</h5>
      <h1 className={styles.h1Section3}>Browse our Menu</h1>
      <Card/>
      </div>

      
      <div className={styles.section4}>
      <h5 className={styles.h6Section3}>Our Strength</h5>
      <h1 className={styles.h1Section3}>Why We Are The Best?</h1>
      <Image src='/pizza-strength-vacter_oeljrn.png' width={250} height={210} className={styles.sec4Img}/>
        <div className={styles.items}>
          <div className={styles.item}>
            <Image src='/all-kinds-of-foods_vwpaqa.png' width={35} height={40} className={styles.itemImg}/>
            <h6 className={styles.bold}>All Kinds of Foods</h6>
            <p>Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
          </div>
          <div className={styles.item}>
            <Image src='/fresh-foods_hsxvmj.png' width={35} height={40} className={styles.itemImg}/>
            <h6 className={styles.bold}>All Kinds of Foods</h6>
            <p>Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
          </div>
          <div className={styles.item}>
            <Image src='/best-taste_f5hidn.png' width={35} height={40} className={styles.itemImg}/>
            <h6 className={styles.bold}>All Kinds of Foods</h6>
            <p>Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
          </div>
          <div className={styles.item}>
            <Image src='/on-time-delivery_a0hhtw.png' width={35} height={40} className={styles.itemImg}/>
            <h6 className={styles.bold}>All Kinds of Foods</h6>
            <p>Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
          </div>
        </div>
      </div>


      <div className={styles.section5}>
        <Image src='/leaf_aylae4.png' width={120} height={104} className={styles.sec5Img}/>
      <h5 className={styles.h6Section3}>Customer Feedback</h5>
      <h1 className={styles.h1Section3}>Client Testimonials</h1>
      <div className={styles.cardsContainer}>
      <div className={styles.cardContainer}>
        <div className={styles.customerImgDiv}>
        <Image src='/client-3_utvld0.jpg' width={100} height={100} className={styles.customerImg}/>
        </div>
        <h5 className={styles.bold}>Takar Bowa</h5>
        <p>Lorem Ipsum is simply dummy text of the print book. 
          It has survived not only five centuries, but also the leap</p>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.customerImgDiv}>
        <Image src='/client-3_utvld0.jpg' width={100} height={100} className={styles.customerImg}/>
        </div>
        <h5 className={styles.bold}>Takar Bowa</h5>
        <p>Lorem Ipsum is simply dummy text of the print book. 
          It has survived not only five centuries, but also the leap</p>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.customerImgDiv}>
        <Image src='/client-3_utvld0.jpg' width={100} height={100} className={styles.customerImg}/>
        </div>
        <h5 className={styles.bold}>Takar Bowa</h5>
        <p>Lorem Ipsum is simply dummy text of the print book. 
          It has survived not only five centuries, but also the leap</p>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.customerImgDiv}>
        <Image src='/client-3_utvld0.jpg' width={100} height={100} className={styles.customerImg}/>
        </div>
        <h5 className={styles.bold}>Takar Bowa</h5>
        <p>Lorem Ipsum is simply dummy text of the print book. 
          It has survived not only five centuries, but also the leap</p>
      </div>
      </div>
      </div>
      

    </div>
  )
}
