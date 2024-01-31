import { useState } from "react";

function EstadoCond(){
    const [requisito, setRequisito] = useState(false)

    function Validacao(){
        setRequisito(true);
    }

    return (
        <div>
        <button onClick={Validacao}>Validar</button>
        {requisito === true && (
            <p>Você está validado!</p>
        )}
        </div>
    )
}

export default EstadoCond