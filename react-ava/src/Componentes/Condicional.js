function Condicional() {
    const DinheiroAtual = 100
    const Salario = 1000

    function SalarioAtual(A, B){
        var C = A + B
        return (
            C
        )
    }

    var Total = SalarioAtual(DinheiroAtual, Salario)


    const Mercado = [
        { id: 1, name: 'Arroz', price: 12.50 },
        { id: 2, name: 'Feijão', price: 17.50 },
        { id: 3, name: 'Açúcar', price: 2.50 },
        { id: 4, name: 'Café', price: 5.50 }
    ]

    const Dinhheiro = 100


    return (
        <div>
            {Total >= 80 ?
                (
                    <p>{Total}</p>
                ) : (
                    <p>Que pena, não será dessa vez...</p>
                )
            }

            {Mercado.length >= 1 ?
                (
                    <p>Deu certo, você possui itens na sua lista!</p>
                ) : (
                    <p>Poxa vida, você não possui itens na sua lista!</p>
                )

            }

            {Dinhheiro >= 80 &&
                (
                    <p>Show! Você pode comprar este item ....</p>
                )}
        </div>
    )
}

export default Condicional