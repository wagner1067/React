import ButtonB from "../elements/ButtonB";
import styles from '../section/Projects.module.css';
import Card from "../elements/Card";
import lpdnc from '../../image/projects/lpdnc.svg';
import portfoliomeu from '../../image/projects/portfoliomeu.jpg';
import API from '../../image/projects/API.jpg';
import Prototipo from '../../image/projects/Prototipo.jpg';
import Tarefas from '../../image/projects/Tarefas.jpg';
import thelibrary from '../../image/projects/desafio 5.png';
import Eco from '../../image/projects/ecotraining.png';

function Projects() {
    return (
        <div className={styles.projects} id="Projects">
            <h1> Projetos </h1>
            <Card
                img={lpdnc}
                title="LP - DNC"
                tech="HTML, CSS e JS"
                description="Desenvolvimento de uma Landing Page para o lançamento de formação em tecnologia"
                repo="https://github.com/wagner1067/LandingPage"
                site="https://landing-page-escoladnc2023.netlify.app/"
            />
            <Card
                img={portfoliomeu}
                title="PORTFÓLIO"
                tech="React"
                description="Desenvolvimento de um Portfólio para o lançamento de formação em tecnologia"
                repo="https://github.com/wagner1067/React/tree/main/portfolio"
                site="https://portfolio-psi-kohl-51.vercel.app/"
            />
            <Card
                img={API}
                title="API"
                tech="API e Bootstrap"
                description="Desenvolvimento de uma API com Bootstrap para o lançamento de formação em tecnologia"
                repo="https://github.com/wagner1067/Api-Bootstrap"
                site="https://api-bootstrap.vercel.app/"
            />
            <Card
                img={Prototipo}
                title="PROTÓTIPO"
                tech="Figma"
                description="Desenvolvimento de um Protótipo mobile para o lançamento de formação em tecnologia"
                repo="..."
                site="https://www.figma.com/file/IPMW2B8yfOdA1t5Yb5f1nV/Projeto-DNC-Delivery-Ease?type=design&node-id=15%3A2&mode=design&t=svL8ONhDRsCVuq2P-1"
            />
            <Card
                img={Tarefas}
                title="Organizador de Tarefas"
                tech="React Vite, React Icons,SASS e React Router"
                description="Desenvolvimento de um Organizador de tarefas"
                repo="https://github.com/wagner1067/Projeto3DNC"
                site="https://projeto3-dnc.vercel.app/"
            />
            <Card
                img={thelibrary}
                title="Biblioteca"
                tech="React Vite, React Icons, Express.js, API REST, MongoDB e Mongoose"
                description="Desenvolvimento de uma Biblioteca de livros usando API REST local"
                repo="https://github.com/wagner1067/the-library-back"
                site="https://the-library-indol.vercel.app/"
            />
            <Card
                img={Eco}
                title="Landing Page- Freelance"
                tech="React JS, React Icons, EmailJS. "
                description="Desenvolvimento um landing page para cliente ele veio com ideia e feito no figma e desenvolvido e hospedado."
                repo="https://github.com/wagner1067/eco_training"
                site="https://ecotraining.com.br/"
            />
            <ButtonB text='Acesse meu repositório' link='https://github.com/wagner1067?tab=repositories' />
        </div>
    )
}

export default Projects