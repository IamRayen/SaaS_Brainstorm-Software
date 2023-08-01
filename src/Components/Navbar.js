import styles from "./Navbar.module.css";
import bars from "../assets/menu_bars.svg";
import { useState } from "react";
import CTAButton from "./UI/CTAButton";

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className={styles.navbar}>
            <div className={styles.logoAndLinks}>
            <a href="/" className={styles.logo}>
                Brainstorm
            </a>
            <ul className={styles.links}>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">List item</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
            </ul>
            </div>
            <div className={styles.inup}>
                <CTAButton text={"Signup"} size={"small"} />
                <a href="/login" className={styles.login}>
                    Login
                </a>
            </div>
            <div className={styles.dropdown}>
                <img
                    onClick={handleDropdownToggle}
                    className={styles.menu_bars}
                    src={bars}
                    alt="menu"
                />
            </div>
        </div>
    );
};

export default Navbar;
