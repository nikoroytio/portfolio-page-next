// The hero component. Displays the main introduction and social links of the website.
import { FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BackgroundVideo from "../../components/BackgroundVideo/index";
import Image from 'next/image';
import styles from './Hero.module.css';


//declare props
type HeroProps = {
    onScrollDown: () => void;
};

// Handler to smoothly scroll down to the 'about me' section  
const Hero: FC<HeroProps> = ({ onScrollDown }) => {
    const handleScrollDown = () => {
        onScrollDown();
        setTimeout(() => {
            const aboutSection = document.getElementById('about-me');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 50); // A small delay to ensure the About section is rendere
    };

    return (
        <Container fluid className={styles.heroContainer} id="hero">
            <BackgroundVideo />
            <div className={styles.overlayContent}>
                <Row>
                    <Col md="auto">
                        <div className={styles.socialMediaIcons}>

                            <a href="https://github.com/nikoroytio" target="_blank" rel="noopener noreferrer">
                                <Image src="/assets/icons/github.svg" alt="GitHub" />
                            </a>
                            <a href="https://www.instagram.com/rodelanka" target="_blank" rel="noopener noreferrer">
                                <Image src="/assets/icons/instagram.svg" alt="Instagram" />
                            </a>
                            <a href="https://www.linkedin.com/in/nikoroytio/" target="_blank" rel="noopener noreferrer">
                                <Image src="/assets/icons/linkedin.svg" alt="LinkedIn" />
                            </a>
                        </div>
                        <h1 className={styles.typewriterH1}>HI! I'M NIKO RÖYTIÖ</h1>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md="auto">
                        <h2 className={styles.typewriterH2}>YOUR FUTURE DEVELOPER</h2>
                        <div className={styles.scrollDownButton} onClick={handleScrollDown}>
                            <Image src="/assets/icons/scrolldown.svg" alt="Scroll down" />
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default Hero;