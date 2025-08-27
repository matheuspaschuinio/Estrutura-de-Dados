class Matematica {
    static somar(a, b)  {
        return a + b;
    }

    static subtrair(a, b) {
        return a - b;
    }

    static  fatorial(n) {
        let resultado = 1;
        for (let i = 2; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    }
}

module.exports = Matematica;