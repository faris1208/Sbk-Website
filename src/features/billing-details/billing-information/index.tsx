"use client";
import React, { useState } from "react";
import styles from "../billing-information/styles.module.scss";
import Image from "next/image";
import { CheckBackIcon, DeliveryIcon, LayerIcon } from "@/components/icon";
import { useCart } from "@/components/context";
import { useRouter } from "next/navigation";

const BillingInformation = () => {
  const router = useRouter();
  const { cartItems } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<"bank" | "cash">("bank");

  const [contactInfo, setContactInfo] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const [addressInfo, setAddressInfo] = useState({
    country: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    postalCode: "",
  });

  const [saveInfo, setSaveInfo] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState<"ship" | "pickup">("ship");

  // Calculate order totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingFee = deliveryMethod === "ship" ? 2000 : 0;
  const total = subtotal + shippingFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Process payment and submit order
    console.log({
      contactInfo,
      addressInfo,
      paymentMethod,
      deliveryMethod,
      cartItems,
      total
    });
    // Redirect to confirmation page
  };

  const handleClick = () => {
    router.push("/cart")
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div onClick={handleClick} className={styles.header}>
            <CheckBackIcon className={styles.backIcon} />
          <h1>Billing Details</h1>
        </div>

        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <div className={styles.columns}>
            {/* Left Column - Contact and Delivery Info */}
            <div className={styles.leftColumn}>
              <section className={styles.section}>
                <h2>Contact Information</h2>
                <div className={styles.formGroup}>
                  <div className={styles.nameFields}>
                    <div className={styles.inputGroup}>
                      <label htmlFor="firstName">First Name <span>*</span></label>
                      <input
                        type="text"
                        id="firstName"
                        value={contactInfo.firstName}
                        onChange={(e) => setContactInfo({...contactInfo, firstName: e.target.value})}
                        required
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <label htmlFor="lastName">Last Name <span>*</span></label>
                      <input
                        type="text"
                        id="lastName"
                        value={contactInfo.lastName}
                        onChange={(e) => setContactInfo({...contactInfo, lastName: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.contactFields}>
                    <div className={styles.inputGroup}>
                      <label htmlFor="phone">Phone Number <span>*</span></label>
                      <input
                        type="tel"
                        id="phone"
                        value={contactInfo.phone}
                        onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})}
                        required
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <label htmlFor="email">Email Address <span>*</span></label>
                      <input
                        type="email"
                        id="email"
                        value={contactInfo.email}
                        onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                </div>
              </section>

              <section className={styles.section}>
                <h2>Delivery Details</h2>
                <div className={styles.deliveryMethods}>
                  <button
                    type="button"
                    className={`${styles.deliveryButton} ${deliveryMethod === "ship" ? styles.active : ""}`}
                    onClick={() => setDeliveryMethod("ship")}
                  >
                    <span>Ship</span>
                    <DeliveryIcon />
                  </button>
                  <button
                    type="button"
                    className={`${styles.deliveryButton} ${deliveryMethod === "pickup" ? styles.active : ""}`}
                    onClick={() => setDeliveryMethod("pickup")}
                  >
                    <span>Pick up</span>
                    <LayerIcon />
                  </button>
                </div>

                <div className={styles.formGroup}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="country">Country/Region <span>*</span></label>
                    <select
                      id="country"
                      value={addressInfo.country}
                      onChange={(e) => setAddressInfo({...addressInfo, country: e.target.value})}
                      required
                    >
                      <option value="">Select Country</option>
                      <option value="NG">Nigeria</option>
                      <option value="Gn">Ghana</option>
                      {/* Add more countries as needed */}
                    </select>
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="address">Address <span>*</span></label>
                    <input
                      type="text"
                      id="address"
                      value={addressInfo.address}
                      onChange={(e) => setAddressInfo({...addressInfo, address: e.target.value})}
                      required
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="apartment">Apartment/Suite</label>
                    <input
                      type="text"
                      id="apartment"
                      value={addressInfo.apartment}
                      onChange={(e) => setAddressInfo({...addressInfo, apartment: e.target.value})}
                    />
                  </div>

                  <div className={styles.locationFields}>
                    <div className={styles.inputGroup}>
                      <label htmlFor="city">City <span>*</span></label>
                      <input
                        type="text"
                        id="city"
                        value={addressInfo.city}
                        onChange={(e) => setAddressInfo({...addressInfo, city: e.target.value})}
                        required
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <label htmlFor="state">State <span>*</span></label>
                      <input
                        type="text"
                        id="state"
                        value={addressInfo.state}
                        onChange={(e) => setAddressInfo({...addressInfo, state: e.target.value})}
                        required
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <label htmlFor="postalCode">Postal code (Optional)</label>
                      <input
                        type="text"
                        id="postalCode"
                        value={addressInfo.postalCode}
                        onChange={(e) => setAddressInfo({...addressInfo, postalCode: e.target.value})}
                      />
                    </div>
                  </div>
                </div>

                <div className={styles.saveInfo}>
                  <input
                    type="checkbox"
                    id="saveInfo"
                    checked={saveInfo}
                    onChange={(e) => setSaveInfo(e.target.checked)}
                  />
                  <label htmlFor="saveInfo">Save this information for next time</label>
                </div>
              </section>
            </div>

            {/* Right Column - Order Summary */}
            <div className={styles.rightColumn}>
              <div className={styles.orderSummary}>
                <h2>Your Order</h2>
                
                <div className={styles.orderItems}>
                  {cartItems.map((item) => (
                    <div key={item.id} className={styles.orderItem}>
                      <div className={styles.itemImage}>
                        <Image
                          src={item.img}
                          alt={item.name}
                          width={60}
                          height={60}
                        />
                      </div>
                      <div className={styles.itemDetails}>
                        <h3>{item.name}</h3>
                        {item.size && <p>Size: {item.size}</p>}
                        <p>Qty: {item.quantity}</p>
                      </div>
                      <div className={styles.itemPrice}>
                        N{(item.price * item.quantity).toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>

                <div className={styles.orderTotals}>
                  <div className={styles.totalRow}>
                    <span>Subtotal:</span>
                    <span className={styles.total_amount}>N{subtotal.toLocaleString()}</span>
                  </div>
                  <div className={styles.totalRow}>
                    <span>Shipping fee</span>
                    <span className={styles.total_amount}>N{shippingFee.toLocaleString()}</span>
                  </div>
                  <div className={styles.totalRow}>
                    <span>Total</span>
                    <span className={styles.total_amount}>N{total.toLocaleString()}</span>
                  </div>
                </div>

                <div className={styles.paymentMethods}>
                  <h3>Payment Method</h3>
                  <div className={styles.paymentOption}>
                    <input
                      type="radio"
                      id="bankTransfer"
                      name="paymentMethod"
                      checked={paymentMethod === "bank"}
                      onChange={() => setPaymentMethod("bank")}
                    />
                    <label htmlFor="bankTransfer">Bank Transfer</label>
                  </div>
                  <div className={styles.paymentOption}>
                    <input
                      type="radio"
                      id="cashOnDelivery"
                      name="paymentMethod"
                      checked={paymentMethod === "cash"}
                      onChange={() => setPaymentMethod("cash")}
                    />
                    <label htmlFor="cashOnDelivery">Cash On Delivery</label>
                  </div>
                </div>

                <div className={styles.couponSection}>
                  <input
                    type="text"
                    placeholder="Coupon Code"
                    className={styles.couponInput}
                  />
                  <button type="button" className={styles.couponButton}>
                    Apply
                  </button>
                </div>

                <button type="submit" className={styles.placeOrderButton}>
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BillingInformation;