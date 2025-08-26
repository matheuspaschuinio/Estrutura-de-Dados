class Carro {
    constructor(velocidade) {
        this.velocidade = velocidade;
    }

    acelerar(){
        this.velocidade += 10;
    }

    cantarPneu(){
        console.log("TURURURU");
    }
}

class Moto {
    empinar(){
        console.log("Empinou!");
    }
}

module.exports = { Carro, Moto};