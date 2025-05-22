import { slides } from '@/components/data'
import React from 'react'
import styles from "../slides/styles.module.scss"

export default function Slides() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.slideshow_container}>
        {slides.map((slide, index) => (
          <div key={index} className={styles.slide}>
            <div 
              className={styles.slide_bg} 
              style={{ backgroundImage: `url(${slide.bgimage.src})` }}
            >
              <div className={styles.overlay}></div>
              <h2 className={styles.slide_name}>{slide.name}</h2>
            </div>
            <div className={styles.slide_content}>
              <p className={styles.slide_message}>{slide.message}</p>
              <button className={styles.slide_btn}>{slide.btn}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}