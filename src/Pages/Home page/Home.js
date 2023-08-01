import illustration from "../../assets/undraw_lightbulb_moment_re_ulyo.svg";
import styles from "./Home.module.css";
import CTAButton from '../../Components/UI/CTAButton';
import MenuOverlay from "../../Components/UI/MenuOverlay";
import About from "./Sections/About";

const Home = () => {
    const handleCLick = () => {
        console.log("Hello");
    };
    return (
        <div className={styles.homePage}>
        <div className={styles.home}>
            <div className={styles.homeText}>
                <div className={styles.homeHeading}>
                    <div>
                        <h1>Unlock the Power of Your</h1>
                        <h1 className={styles.specialWord}>Creativity!</h1>
                    </div>
                    <div>
                        <p>
                            Welcome to{" "}
                            <span style={{ fontWeight: "bold" }}>
                                Brainstorm
                            </span>
                            , your personal haven for innovation and
                            inspiration.
                        </p>
                        <br />
                        <p>
                            Whether you're an entrepreneur, a creative thinker,
                            or simply someone with a passion for great ideas,
                            our powerful platform is designed to help you
                            capture, organize, and nurture your brightest
                            thoughts.
                        </p>
                    </div>
                </div>
                <div className={styles.CTA}>
                    <CTAButton
                        text="Get Started"
                        onClick={handleCLick}
                    ></CTAButton>
                    <p>Sign up and start your Ideas</p>
                </div>
                <MenuOverlay/>
            </div>
            <img src={illustration} alt="ill" className={styles.ill} />
        </div>
        <About/>
        </div>
    );
};

export default Home;
