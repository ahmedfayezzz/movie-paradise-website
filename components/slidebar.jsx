import { AiFillCloseCircle } from "react-icons/ai";
import { MdLocalMovies } from "react-icons/md";
import { CgScreen } from "react-icons/cg";
import { BsFillPeopleFill } from "react-icons/bs";
import { v4 as uuid } from "uuid";
import Image from "next/image";
import Link from "next/Link";

import styles from "../styles/slidebar.module.css";
import { links } from "../data/data";
import SlideSection from "./slideSection";

const icons = [MdLocalMovies, CgScreen, BsFillPeopleFill];

const SlideBar = ({ setShow }) => {
  const linkSections = links.map((section, i) => (
    <SlideSection
      key={uuid()}
      Icon={icons[i]}
      title={section.text}
      options={section.options}
      className={styles.slideSection}
    />
  ));
  return (
    <div className={styles.slideBarContainer}>
      <Link href="/">
        <div className={styles.logo}>
          <Image src="/../public/logo.svg" width={250} height={45} />
        </div>
      </Link>
      <button className={styles.closeButton} onClick={() => setShow(false)}>
        <AiFillCloseCircle />
      </button>
      <div className={styles.sectionsContainer}>{linkSections}</div>
    </div>
  );
};

export default SlideBar;
