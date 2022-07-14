function mensagemCastro(mensagemAurelio) {
    setTimeout(() => {
        console.log('faça o seu melhor')
        mensagemAurelio()
    }, 0);
}
function mensagemAurelio() {
    console.log("Mais dedicaçao")
}

mensagemCastro(mensagemAurelio)
// mensagemAurelio()