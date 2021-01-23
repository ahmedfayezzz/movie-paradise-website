import Image from "next/image";
import Link from "next/Link";
import { useEffect, useRef, useState } from "react";

import { FaBars, FaSearch } from "react-icons/fa";
import {BiBookmarkPlus } from "react-icons/bi";
import {RiBookmark3Fill } from "react-icons/ri";

import styles from "../styles/navbar.module.css";
import SearchBar from "./searchBar";
import Sidebar from "./sidebar";
import Backdrop from "./backdrop";
import useWindowDimensions from "../hooks/useWindowDimensions";
import useMediaQuery from "../hooks/useMediaQuery";

import SlideBar from "./slidebar";
import { v4 as uuid } from "uuid";

const Navbar = () => {
  const isSmall=useMediaQuery(800)
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  return (
    <nav className={styles.navContainer}>
      {isSmall ? (
        <>
          <div className={styles.navHeader}>
            <button
              className={styles.toggle}
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <FaBars
                style={{
                  cursor: "pointer",
                  fontSize: "inherit",
                  display: "block",
                }}
              />
            </button>
            <Link href="/">
              <div className={styles.logo}>
                <Image src="/../public/logo.svg" width={250} height={45} />
              </div>
            </Link>
            <button
              className={styles.searchBarButton}
              onClick={() => setShowSearchBar(!showSearchBar)}
            >
              <FaSearch
              style={{
                cursor: "pointer",
                fontSize: "inherit",
                display: "block",
              }}
            />
            </button>
            <SearchBar show={showSearchBar} setShow={setShowSearchBar} />
            <Link href="/signin">
              <span className={styles.link}>Sign In</span>
            </Link>
          </div>
          {showSidebar && (
            <>
              <Sidebar setShow={setShowSidebar} />
              <Backdrop setShow={setShowSidebar} />
            </>
          )}
        </>
      ) : (
        <>
          <div className={styles.navHeader}>
            <Link href="/">
              <div className={styles.logo}>
                <Image src="/../public/logo.svg" width={200} height={45} />
              </div>
            </Link>
            <button
              className={styles.toggle}
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <FaBars
                className={styles.icon}
              />
              <p>Menu</p>
            </button>
            <SearchBar show={showSearchBar} setShow={setShowSearchBar} />
            <Link href="/signin">
              <div className={styles.link}>
                <RiBookmark3Fill className={styles.icon}/>
                <span>Watchlist</span>
              </div>
            </Link>
            <Link href="/signin">
              <span className={styles.link}>Sign In</span>
            </Link>
            
          </div>
          {showSidebar && <SlideBar setShow={setShowSidebar} />}
        </>
      )}
    </nav>
  );
};

export default Navbar;
