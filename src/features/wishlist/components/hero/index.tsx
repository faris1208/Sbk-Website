import React from 'react'
import styles from "../hero/styles.module.scss"

export default function WishlistHero() {
  return (
    <div className={styles.wrapper}>
        <div className={styles.overlay}>
        <div className={styles.container}>
            <div className={styles.container_text}>
                <h2>Wishlists</h2>
                <p>Explore your handpicked wishlists, saved just for you.</p>
            </div>
        </div>
        </div>
    </div>
  )
}
