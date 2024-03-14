import React from 'react'
import { Link, useParams } from 'react-router-dom'
//hooks
import { useProductDetails } from '../context/ProductsProvider'
//components
import Loader from '../components/Loader'
//icons
import {FaArrowLeft} from 'react-icons/fa'
import {SiOpenproject} from 'react-icons/si'
import {IoMdPricetag} from 'react-icons/io'
//styles
import styles from './DetailsPage.module.css'

function DetailsPage() {
  const {id} = useParams()
  const product = useProductDetails(+id)

  if(!product) return <Loader/>

  return (
    <div className={styles.container}>
        <img src={product.image} alt={product.title}/>
      <div className={styles.information}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.price}><SiOpenproject/>{product.category}</p>
        <div>
          <span><IoMdPricetag/>{product.price} $ </span>
          <Link to='/products'><FaArrowLeft/><span>Back to shop</span></Link>
        </div>
      </div>
    </div>
  )
}

export default DetailsPage