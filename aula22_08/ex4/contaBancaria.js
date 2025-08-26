class ContaBancaria {
    #_saldo = 0;

    depositar(valor) {
        this.#_saldo += valor;
    }

    sacar(valor) {
        this.#_saldo -= valor;
    }

    verSaldo() {
        return this.#_saldo;
    }
}

module.exports = ContaBancaria;