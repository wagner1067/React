import ButtonB from "../elements/ButtonB";
import styles from '../section/Projects.module.css';
import Card from "../elements/Card";
import lpdnc from '../../image/projects/lpdnc.svg';
import portfoliomeu from '../../image/projects/portfoliomeu.jpg';
import API from '../../image/projects/API.jpg';
import Prototipo from '../../image/projects/Prototipo.jpg';

function Projects() {
    return (
        <div className={styles.projects} id="Projects">
            <h1> Projetos </h1>
            <Card
            img={lpdnc} 
            title="LP - DNC" 
            tech="HTML, CSS e JS" 
            description= "Desenvolvimento de uma Landing Page para o lançamento de formação em tecnologia" 
            repo="https://github.com/wagner1067/LandingPage" 
            site="https://landing-page-escoladnc2023.netlify.app/"
            />
            <Card
            img={portfoliomeu} 
            title="PORTFÓLIO" 
            tech="React" 
            description= "Desenvolvimento de um Portfólio para o lançamento de formação em tecnologia" 
            repo="https://github.com/wagner1067/React/tree/main/portfolio" 
            site="https://portfolio-psi-kohl-51.vercel.app/"
            />
            <Card
            img={API} 
            title="API" 
            tech="API e Bootstrap" 
            description= "Desenvolvimento de uma API com Bootstrap para o lançamento de formação em tecnologia" 
            repo="https://github.com/wagner1067/Api-Bootstrap" 
            site="https://api-bootstrap.vercel.app/"
            />
             <Card
            img={Prototipo} 
            title="PROTÓTIPO" 
            tech="Figma" 
            description= "Desenvolvimento de um Protótipo mobile para o lançamento de formação em tecnologia" 
            repo="..." 
            site="https://www.figma.com/file/IPMW2B8yfOdA1t5Yb5f1nV/Projeto-DNC-Delivery-Ease?type=design&node-id=15%3A2&mode=design&t=svL8ONhDRsCVuq2P-1"
            />
            <ButtonB text='Acesse meu repositório' link='https://github.com/wagner1067?tab=repositories' />
        </div>
    )
}

export default Projects