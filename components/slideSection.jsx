import { v4 as uuid } from "uuid";
import Link from "next/Link";
import styles from "../styles/slideSection.module.css";

const SlideSection = ({Icon, title, options }) => {
  const optionsLinks = options.map((option) => (
    <Link key={uuid()} href={`${title.toLowerCase()}/${option.toLowerCase()}`}>
      <span  className={styles.link}>
        {option}
      </span>
    </Link>
  ));
  return ( 
    <div>
      <div className={styles.titleContainer}>
        <Icon className={styles.icon} />
        <p className={styles.title}>{title}</p>
      </div>
      <div className={styles.linkContainer}>
        {optionsLinks}
      </div>
    </div>
   );
}
 
export default SlideSection;