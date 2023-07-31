class Usuario {
    constructor(nome, idade, credenciado){
        this.nome = nome;
        this.idade = idade;
        this.credenciado = credenciado
    }

    exibeInfo() {
        console.log(`O nome do usuário é ${this.nome}`)
        console.log(`A idade dele é ${this.idade}`)
        console.log(`Ele é credenciado: ${this.credenciado}`)
    }
}

const pessoa1 = new Usuario("João do Brás", 27, true);
pessoa1.telefone = 13996020483;
console.log(pessoa1);

const pessoa2 = new Usuario("José da Silva", 40, true);
pessoa2.exibeInfo();

pessoa2.credenciado === true ? console.log("credenciado") : console.log("Não credenciado");
