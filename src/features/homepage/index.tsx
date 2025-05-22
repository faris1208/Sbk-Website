import React from 'react'
import Hero from './components/hero'
import styles from "../homepage/styles.module.scss"
import ImageCarousel from './components/image-carousel'
import Midsection from './components/midsection'
import Slides from './components/slides'

export default function HomePage() {
  return (
    <div className={styles.wrapper}>
        <Hero />
        <ImageCarousel />
        <Midsection />
        <Slides />
    </div>
  )
}
