import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'


const InfoLinks = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "Blog",
        url: "/",
    },
    {
        id: 3,
        title: "About Us",
        url: "/",
    },
    {
        id: 4,
        title: "Menu",
        url: "/",
    },
    {
        id: 5,
        title: "Contact Us",
        url: "/",
    },
]
const ItemsLinks = [
    {
        id: 1,
        title: "Pepperoni",
        url: "/",
    },
    {
        id: 2,
        title: "Swiss Mushroom",
        url: "/",
    },
    {
        id: 3,
        title: "Barbeque Chicken",
        url: "/",
    },
    {
        id: 4,
        title: "Vegetarian",
        url: "/",
    },
    {
        id: 5,
        title: "Ham and Cheese",
        url: "/",
    },
]
const OtherLinks = [
    {
        id: 1,
        title: "Checkout",
        url: "/",
    },
    {
        id: 2,
        title: "Cart",
        url: "/",
    },
    {
        id: 3,
        title: "Product",
        url: "/",
    },
    {
        id: 4,
        title: "Locations",
        url: "/",
    },
    {
        id: 5,
        title: "Legal",
        url: "/",
    },
]

const Footer = () => {
    return (
        <div className={styles.container}>
        <div className={styles.link}>
            <h6 className={styles.header}>INFORMATION</h6>
        {InfoLinks.map(link=>(
               <Link key={link.id} href={link.url}>{link.title}</Link> 
            ))}
        </div>

        <div className={styles.link}>
        <h6 className={styles.header}>TOP ITEMS</h6>
        {ItemsLinks.map(link=>(
               <Link key={link.id} href={link.url}>{link.title}</Link> 
            ))}
        </div>

        <div className={styles.link}>
        <h6 className={styles.header}>OTHERS</h6>
        {OtherLinks.map(link=>(
               <Link key={link.id} href={link.url}>{link.title}</Link> 
            ))}
        </div>
            
        <div className={styles.link}>
        <h6 className={styles.header}>SOCIAL MEDIA</h6>
        <div className={styles.socials}>  
            <Link href={"/"}>
            <Image src="/facebook_v9d6bz.png" width={48} height={48} alt="facebook"/> 
            </Link>
            <Link href={"/"}>
            <Image src="/p.png" width={35} height={35} alt="ping"/> 
            </Link>
            <Link href={"/"}>
            <Image src="/twitter_yitov1.png" width={55} height={55} alt="twitter"/>
            </Link>
            <Link href={"/"}>
            <Image src="/instagram.jpg" width={35} height={35} alt="instagram"/>
            </Link>   
        </div>
        <p>Signup and get exclusive offer and coupon codes</p>
        <button className={styles.button}>SIGN UP</button>
        </div>
        </div>
    )
}

export default Footer