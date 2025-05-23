"use client";
import React, { useState, useEffect } from "react";
import styles from "../wishlist-component/styles.module.scss";
import { listCard, Product } from "@/components/data";
import Listpage from "../list-items";

export default function WishlistComponent() {
  const [wishlistItems, setWishlistItems] = useState<string[]>([]);
  const [wishlistProducts, setWishlistProducts] = useState<Product[]>([]);

  // Load wishlist from localStorage on component mount
  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      setWishlistItems(JSON.parse(savedWishlist));
    }
  }, []);

  // Update wishlist products whenever wishlistItems changes
  useEffect(() => {
    const products = listCard.filter((product) =>
      wishlistItems.includes(product.id)
    );
    setWishlistProducts(products);
  }, [wishlistItems]);

  const removeFromWishlist = (id: string) => {
    const updatedWishlist = wishlistItems.filter((itemId) => itemId !== id);
    setWishlistItems(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className={styles.wrapper}>
    <div className={styles.container}>
      {wishlistProducts.length > 0 ? (
        <Listpage
          wishlistItems={wishlistProducts}
          removeFromWishlist={removeFromWishlist}
        />
      ) : (
        <div className={styles.empty}>
          <p>Your wishlist is empty</p>
          <button
            className={styles.continueShopping}
            onClick={() => (window.location.href = "/products")}
          >
            Continue Shopping
          </button>
        </div>
      )}
    </div>
    </div>
  );
}
