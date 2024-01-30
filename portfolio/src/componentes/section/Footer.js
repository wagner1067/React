import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from '../section/Footer.module.css';

function Footer() {
    return (
        <div className={styles.footer}>
            <ul>
                <li><a href='https://www.instagram.com/wagneroliveiraaa/' target='_blank'><FaInstagram size={30} /></a></li>
                <li><a href='https://github.com/wagner1067' target='_blank'><FaGithub size={30} /></a></li>
                <li><a href='https://www.linkedin.com/in/wagner-oliveira-14a8b4289/' target='_blank'><FaLinkedin size={30} /></a></li>
            </ul>
            <p>wagnerbejota@hotmail.com</p>
            <p>Wagner Oliveira © 2024</p>
        </div>
    )
}

export default Footer