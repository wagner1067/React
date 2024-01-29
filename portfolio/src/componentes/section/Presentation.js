import styles from './Presentation.module.css';
import ButtonA from '../elements/ButtonA';

function Presentation() {
    return (
        <div className={styles.presentation} id="Presentation">
            <h4><strong> Bem-vindo ao meu Portfólio</strong></h4>
            <h1>Olá, eu sou Wagner Oliveira</h1>
            <p>
                Sou apaixonado por tecnologia e soluções inovadoras.<br />
                Estou cursando tecnologia na Escola DNC, esse portfólio <br />
                será para mostrar minha evolução, aprendizado e projetos<br />
                particulares e do curso. Atualmente trabalho num provedor <br />
                de internet.
            </p>
            <ButtonA link= 'https://github.com/wagner1067'  text='Conecte-se comigo!'/>
            
        </div>
    )
}

export default Presentation