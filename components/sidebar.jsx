import { MdClose } from "react-icons/md";
import { MdLocalMovies } from "react-icons/md";
import { CgScreen } from "react-icons/cg";
import { BsFillPeopleFill } from "react-icons/bs";

import { v4 as uuid } from "uuid";

import Accordion from "./accordion";
import useWindowDimensions from "../hooks/useWindowDimensions";
import styles from "../styles/Sidebar.module.css";
import { links } from "../data/data";

const icons = [MdLocalMovies, CgScreen, BsFillPeopleFill];

const Sidebar = ({ setShow }) => {
  // const { width } = useWindowDimensions();
  return (
    <nav className={styles.sidebarContainer}>
      <div className={styles.patternBar} />

      <button className={styles.closeButton} onClick={() => setShow(false)}>
        <MdClose style={{ fontSize: "inherit", display: "block" }} />
      </button>
      <hr />
      <div className={styles.linksContainer}>
        {links.map((section, i) => (
          
          <Accordion
            key={uuid()}
            Icon={icons[i]}
            title={section.text}
            options={section.options}
          />
        ))}
      </div>
    </nav>
  );
};

export default Sidebar;
