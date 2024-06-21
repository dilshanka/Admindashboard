import Image from "next/image";
import styles from "./rightbar.module.css";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image className={styles.bg} src="/astronaut.png" alt="" fill />
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>🔥 Available Now</span>
          <h3 className={styles.title}></h3>
          <span className={styles.subtitle}></span>
          <p className={styles.desc}></p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.text}>
          <span className={styles.notification}>🚀 Coming Soon</span>
          <h3 className={styles.title}></h3>
          <span className={styles.subtitle}></span>
          <p className={styles.desc}></p>
          <button className={styles.button}>
            <MdReadMore />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
