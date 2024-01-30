

function Lista() {
    const Mercado = [
        { id: 1, name: 'Arroz', price: 12.50 },
        { id: 2, name: 'Feijão', price: 17.50 },
        { id: 3, name: 'Açúcar', price: 2.50 },
        { id: 4, name: 'Café', price: 5.50 }
    ]


    return (
        <>
            <h1>Renderização de Lista</h1>
            {Mercado.map((Mercado) => (
                <p key={Mercado.id}>{Mercado.name} possui o preço: R${Mercado.price}0</p>
            ))}
        </>
    )
}

export default Lista