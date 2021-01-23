import styles from "../styles/backdrop.module.css";

const Backdrop = ({ setShow }) => {
  return (
    <div
      onClick={()=>setShow(false)}
      className={styles.backdropContainer}
    ></div>
  );
};

export default Backdrop;
