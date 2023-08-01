import React from "react";
import styles from "./CTAButton.module.css";

const CTAButton = ({ text, onClick,size}) => {
    return (
        <p className={`${styles.ctaButton} ${styles[size]}`} onClick={onClick}>
            {text}
        </p>
    );
};

export default CTAButton;
