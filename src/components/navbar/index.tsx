"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/images/sbk_logo.svg";
import styles from "./styles.module.scss";
import { CartIcon, HamburgerIcon, LoveIcon, SearchIcon } from "../icon";

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <div className={styles.content}>
      <div className={styles.Navbar}>
        <div className={styles.hamburg} onClick={() => setShowMenu(true)}>
          <HamburgerIcon />
        </div>
        <div className={styles.link}>
          <Link href={"/"}>
            <Image src={logo} alt="frame" width={200} height={200} className={styles.headerImg} />
          </Link>
        </div>
        <div className={styles.list}>
          <ul>
            <li>
              <Link href={"/home"}>
              Home
              </Link>
            </li>
            <li>
              <Link href={"/categories"}>
                Categories
              </Link>
            </li>
            <li>
              <Link href={"/featured Products"}>
                Featured Products
              </Link>
            </li>
            <li>
              <Link href={"/billing"}>
                Contact us
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.input}>
          <div className={styles.inputField}>
            <input
              type="text"
              placeholder="What are you looking for ? "
              className={styles.field}
            />
            <div className={styles.searchIcon}>
              <SearchIcon />
            </div>
          </div>
          <div className={styles.icon}>
            <Link href="./shopping">
              <LoveIcon />
            </Link>
            <Link href="./billing">
              <CartIcon />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {showMenu && (
        <div className={styles.mobileMenu}>
          <div className={styles.closeIcon} onClick={() => setShowMenu(false)}>
            <HamburgerIcon />
          </div>

          <ul className={styles.mobileList}>
            <li>
              <Link href={"/home"}>Home</Link>
            </li>
            <li>
              <Link href={"/categories"}>Categories</Link>
            </li>
            <li>
              <Link href={"/featured Products"}>Featured Products</Link>
            </li>
            <li>
              <Link href={"/billing"}>Contact Us</Link>
            </li>
          </ul>

          <div className={styles.mobileInputField}>
            <input
              type="text"
              placeholder="What are you looking for ?"
              className={styles.field}
            />
            <div className={styles.searchIcon}>
              <SearchIcon />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
