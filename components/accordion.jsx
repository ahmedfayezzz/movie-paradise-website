import styles from "../styles/accordion.module.css";
import { BsChevronDown } from "react-icons/bs";
import { useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import Link from "next/Link";

const Accordion = ({ Icon, title, options }) => {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState("0px");
  const optionsRef = useRef(null);
  // const optionLinksRef=useRef(null)
  const optionsLinks = options.map((option) => (
    <Link key={uuid()} href={`${title.toLowerCase()}/${option.toLowerCase()}`}>
      <span  className={styles.link}>
        {option}
      </span>
    </Link>
  ));
  const toggleAccordion = () => {
    setActive(!active);
    // optionsRef.current.innerHTML=optionsLinks
    setHeight(active ? "0px" : `${optionsRef.current.scrollHeight}px`);
  };

  return (
    // <div className={styles.bigContainer}>

    <div className={styles.accordionContainer}>
      <button
        onClick={toggleAccordion}
        className={
          active
            ? `${styles.toggleButton} ${styles.active}`
            : styles.toggleButton
        }
      >
        <Icon className={styles.icon} />
        <p className={styles.accordionTitle}>{title}</p>
        <BsChevronDown
          className={
            active ? `${styles.toggleIcon} ${styles.rotate}` : styles.toggleIcon
          }
        />
      </button>
      <div
        ref={optionsRef}
        style={{ maxHeight: `${height}` }}
        className={styles.accordionContent}
      >
        {optionsLinks}
      </div>
    </div>
    // </div>
  );
};

export default Accordion;
