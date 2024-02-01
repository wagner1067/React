import styles from './Presentation.module.css';
import ButtonA from '../elements/ButtonA';
import { useEffect, useState } from 'react';

function Presentation() {

    const [text, setText] = useState('');
    const toRotate = ['Wagner Oliveira', 'Desenvolvedor Front End', 'Desenvolvedor Back End', 'Full Stack'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 100;
    const [delta, setDelta] = useState(100)


    useEffect(() => {
        let ticker = setInterval(() => {
            toType()
        }, delta)
        return () => { clearInterval(ticker) }

    }, [text])

    const toType = () => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop + 1);
        }
    }

    return (
        <div className={styles.presentation} id="Presentation">
            <h4><strong> Bem-vindo ao meu Portfólio</strong></h4>
            <h1>Olá, eu sou {text}</h1>
            <p>
                Sou apaixonado por tecnologia e soluções inovadoras.<br />
                Estou cursando tecnologia na Escola DNC, esse portfólio <br />
                será para mostrar minha evolução, aprendizado e projetos<br />
                particulares e do curso. Atualmente trabalho num provedor <br />
                de internet.
            </p>
            <ButtonA link='https://github.com/wagner1067' text='Conecte-se comigo!' />

        </div>
    )
}

export default Presentation