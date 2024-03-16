import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
//hooks
/* import { useProductDetails } from '../context/ProductsProvider' */
import { useDispatch, useSelector } from 'react-redux'
//components
import Loader from '../components/Loader'
//icons
import {FaArrowLeft} from 'react-icons/fa'
import {SiOpenproject} from 'react-icons/si'
import {IoMdPricetag} from 'react-icons/io'
//styles
import styles from './DetailsPage.module.css'
//fetch
import { fetchProducts } from '../features/Product/productSlice'

function DetailsPage() {
  const {id} = useParams()
  /* const product = useProductDetails(+id) */
  const product  = useSelector((store) => store.products.products.find(item => item.id === +id))
  const dispatch = useDispatch()

  if(!product) return <Loader/>
  useEffect(()=>{
    dispatch(fetchProducts())
},[])

  return (
    <div className={styles.container}>
        <img src={product.image} alt={product.title}/>
      <div className={styles.information}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.category}><SiOpenproject/>{product.category}</p>
        <div>
          <span><IoMdPricetag/>{product.price} $ </span>
          <Link to='/products'><FaArrowLeft/><span>Back to shop</span></Link>
        </div>
      </div>
    </div>
  )
}

export default DetailsPage