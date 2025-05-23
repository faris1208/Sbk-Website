// app/cart/page.tsx
"use client";
import React from "react";
import styles from "../cart-component/styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/context";
import { DeleteIconBlack, LeftIcon } from "@/components/icon";
// import { useCart } from "@/contexts/CartContext";

const CartPageFlow = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.cartPage}>
          <Link href={"/product"}>
            <div className={styles.checkout_box}>
              <div className={styles.checkout_black}>
                <LeftIcon className={styles.checkout_icon} />
              </div>
              <h2>Check out</h2>
            </div>
          </Link>
          {cartItems.length === 0 ? (
            <div className={styles.emptyCart}>
              <p>Your cart is empty</p>
              <Link href="/products" className={styles.continueShopping}>
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className={styles.cartContainer}>
              <div className={styles.cartItems}>
                <div className={styles.headerRow}>
                  <span>Product</span>
                  <span>Quantity</span>
                  <span>Price</span>
                  <span>Remove</span>
                </div>

                {cartItems.map((item) => (
                  <div key={item.id} className={styles.cartItem}>
                    <div className={styles.productInfo}>
                      <Image
                        src={item.img}
                        alt={item.name}
                        width={80}
                        height={80}
                        className={styles.productImage}
                      />
                      <div>
                        <p>{item.name}</p>
                        {item.size && <p>Size: {item.size}</p>}
                      </div>
                    </div>
                    <div className={styles.quantityControl}>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                    <div className={styles.price}>
                      <p className={styles.amount}>
                        N{item.price.toLocaleString()}
                      </p>
                    </div>
                    <button
                      className={styles.removeButton}
                      onClick={() => removeFromCart(item.id)}
                    >
                      <DeleteIconBlack />
                    </button>
                  </div>
                ))}
              </div>
              <div className={styles.summary_box}>
                <div className={styles.summary}>
                  <div className={styles.summaryRow}>
                    <span>Subtotal</span>
                    <span className={styles.sub_amount}>
                      N{subtotal.toLocaleString()}
                    </span>
                  </div>
                  <div className={styles.summaryRow}>
                    <span>Shipping</span>
                    <span className={styles.sub_amount}>N2,000</span>
                  </div>
                  <div className={styles.summaryRow}>
                    <span>Total</span>
                    <span className={styles.sub_amount}>
                      N{(subtotal + 2000).toLocaleString()}
                    </span>
                  </div>
                  <Link href="/billing-details" className={styles.checkoutButton}>
                    Proceed to Checkout
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPageFlow;
