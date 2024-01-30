function Lista2() {
    const nomes = ['WAGNER', 'GABRIELE', 'LUZIA','VAVÁ']
    return (
        <>
        <h1>Lista de nomes legais:</h1>
        {nomes.map((nomes) => (<p key={nomes.indexOf}> {nomes}</p>))}
        </>
    )
}

export default Lista2;