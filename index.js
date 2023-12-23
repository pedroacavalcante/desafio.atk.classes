class Heroi {
    constructor(nome, idade, tipo) {
       this.nome = nome;
       this.idade = idade;
       this.tipo = tipo;
     
       if (tipo === "guerreiro") {
          this.ataque = "espada";
       } else if (tipo === "mago") {
          this.ataque = "magia";
       } else if (tipo === "monge") {
          this.ataque = "soco";
       } else if (tipo === "ninja") {
          this.ataque = "shuriken";
       }
    }
 
    escrever() {
       console.log(`O ${this.tipo} ${this.nome} de idade ${this.idade}, atacou usando ${this.ataque}.`);
    }
 }
 
 const pedro = new Heroi("Pedro", 29, "guerreiro");
 pedro.escrever();
 
 const diego = new Heroi("Diego", 20, "mago");
 diego.escrever();
 
 const brinquinho = new Heroi("Brinquinho",93,"guerreiro");
 brinquinho.escrever();