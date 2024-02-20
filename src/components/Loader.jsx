import React from 'react'
import { RotatingLines } from 'react-loader-spinner'
//styles
import styles from './Loader.module.css'

function Loader() {
  return (
    <div className={styles.loader}><RotatingLines
    height="100px"
    width="100px"
    strokeColor="#fe5d42"
    strokeWidth="3"
    /></div>
  )
}

export default Loader