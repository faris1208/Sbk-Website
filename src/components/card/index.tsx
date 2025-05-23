import React from "react";
import styles from "./styles.module.scss";
import Image, { StaticImageData } from "next/image";
import { HeartIcon, MobileRatingIcon, DeleteIcon } from "../icon";
import { useCart } from "../context";

interface Props {
  id: string;
  img: StaticImageData | string;
  name: string;
  oldPrice: number;
  newPrice: number;
  isInWishlist?: boolean;
  onToggleWishlist?: () => void;
  isWishlistPage?: boolean; 
}

const Card: React.FC<Props> = ({
  id,
  img,
  name,
  newPrice,
  oldPrice,
  isInWishlist = false,
  onToggleWishlist,
  isWishlistPage = false,
}) => {
  const { addToCart} = useCart();

  const handleHeartClick = () => {
    if (onToggleWishlist) {
      onToggleWishlist();
    }
  };

  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      price: newPrice,
      img,
    });
  };

  return (
    <div className={styles.wrapper}>
      <Image src={img} alt="mobile-Images" className={styles.image} />
      <div className={styles.heart_box} onClick={handleHeartClick}>
        {isWishlistPage ? (
          <DeleteIcon className={styles.delete_icon} />
        ) : (
          <HeartIcon className={`${styles.heart_icon} ${isInWishlist ? styles.liked : ''}`} />
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.newAmount}>
          <div className={styles.flxTxt}>
            <p>{name}</p>
            <div className={styles.Price}>
              <p className={styles.newPrice}>N{oldPrice.toLocaleString()}</p>
              <p className={styles.oldPrice}>N{newPrice.toLocaleString()}</p>
            </div>
            <div className={styles.btn_row}>
              <MobileRatingIcon className={styles.icon} />
              <button  onClick={handleAddToCart} className={styles.btn}>
                Add Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;