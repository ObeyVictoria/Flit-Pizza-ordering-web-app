import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa"
import Image from 'next/image'
const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "Product",
        url: "/product",
    },
    {
        id: 3,
        title: "Pages",
        url: "/pages",
    },
    {
        id: 4,
        title: "Blog",
        url: "/blog",
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact",
    },
]

const Navbar = () => {
    return (
        <div className={styles.container}>
            <Link href="/"className={styles.logo}> 
            <Image src="/pizza-logo_afsvzn.png" width={90} height={90} alt="logo"/>
            </Link>
            <Image className={styles.header}src="/pizza-header-img_krzjsl.png" width={220} height={150} alt="red-stuff"/>
            <div className={styles.links}>
            {links.map(link=>(
               <Link key={link.id} href={link.url}>{link.title}</Link> 
            ))}
            <div className={styles.icon}>
            < CiSearch/>
            < FaShoppingCart color='blue'/>
            </div>
            </div>

        </div>
    )
}

export default Navbar