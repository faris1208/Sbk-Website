"use client";
import React, { useEffect, useState } from "react";
import styles from "../list-products/styles.module.scss";
import { listCard } from "@/components/data";
import Card from "@/components/card";

export default function ListProducts() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [displayCount, setDisplayCount] = useState<number>(20);
  const [wishlist, setWishlist] = useState<string[]>([]);

  const filteredProducts =
    activeCategory === "all"
      ? listCard
      : listCard.filter((product) => product.category === activeCategory);

  const displayedProducts = filteredProducts.slice(0, displayCount);

  useEffect(() => {
    const saved = localStorage.getItem("wishlist");
    if (saved) setWishlist(JSON.parse(saved));
  }, []);

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      const newWishlist = prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId];
      localStorage.setItem("wishlist", JSON.stringify(newWishlist));
      return newWishlist;
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.container_filter}>
          <div className={styles.btns}>
            <button
              className={`${styles.btnOne} ${
                activeCategory === "all" ? styles.active : ""
              }`}
              onClick={() => {
                setActiveCategory("all");
                setDisplayCount(20);
              }}
            >
              All
            </button>
            <button
              className={`${styles.btnOne} ${
                activeCategory === "new arrivals" ? styles.active : ""
              }`}
              onClick={() => {
                setActiveCategory("new arrivals");
                setDisplayCount(20);
              }}
            >
              New Arrivals
            </button>
            <button
              className={`${styles.btnTwo} ${
                activeCategory === "best selling" ? styles.active : ""
              }`}
              onClick={() => {
                setActiveCategory("best selling");
                setDisplayCount(20);
              }}
            >
              Best Selling
            </button>
            <button
              className={`${styles.btnThree} ${
                activeCategory === "top selling" ? styles.active : ""
              }`}
              onClick={() => {
                setActiveCategory("top selling");
                setDisplayCount(20);
              }}
            >
              Top Rating
            </button>
          </div>
        </div>
        <div className={styles.card_wrapper}>
          {displayedProducts.map((product) => (
            <Card
              id={product.id}
              key={product.id}
              img={product.img}
              name={product.name}
              oldPrice={product.old}
              newPrice={product.new}
              isInWishlist={wishlist.includes(product.id)}
              onToggleWishlist={() => toggleWishlist(product.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
