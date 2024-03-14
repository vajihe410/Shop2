import React from 'react'
import { Link } from 'react-router-dom'
//icons
import {FaHeart} from 'react-icons/fa'
import {SlBasket} from 'react-icons/sl'
//context
import { useCart } from '../context/CartProvider'
//styles
import styles from './Layout.module.css'

function Layout({children}) {
    const [state] = useCart()
  return (
    <>
        <header className={styles.header}>
            <Link to='/products'>Shop</Link>
            <Link to='/checkout'>
                <div>
                    <SlBasket/>
                    {!!state.itemsCounter && <span>{state.itemsCounter}</span> }
                </div>
            </Link>
        </header>
        {children}
        <footer className={styles.footer}>
            <p>Made with love <FaHeart/></p>
        </footer>
    </>
  )
}

export default Layout