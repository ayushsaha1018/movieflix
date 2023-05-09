import styles from "@/app/styles/navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/app/components/Nav";
import { FaPlayCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className={styles.main_header}>
      <div className={styles.navbar_brand}>
        <Link href="/" className={styles.navbar_container}>
          <FaPlayCircle className={styles.navbar_logo}/>
          <p className={styles.navbar_logo_text}>MovieFlix</p>
        </Link>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
