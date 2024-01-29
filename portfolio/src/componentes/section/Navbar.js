import styles from './Navbar.module.css';
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/esm/NavLink';

function Navbar() {
    return (
        <div className={styles.navbar} >
            <ul>
                <li><Nav.Link href='#Presentation'>Apresentação</Nav.Link></li>
                <li><Nav.Link href='#Skills'>Habilidades</Nav.Link></li>
                <li><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
            </ul>
            <ul>
                <li><a href='https://www.instagram.com/wagneroliveiraaa/' target='_blank'><FaInstagram size={30} /></a></li>
                <li><a href='https://github.com/wagner1067' target='_blank'><FaGithub size={30} /></a></li>
                <li><a href='https://www.linkedin.com/in/wagner-oliveira-14a8b4289/' target='_blank'><FaLinkedin size={30} /></a></li>
            </ul>
        </div>
    )
}

export default Navbar