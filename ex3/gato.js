const Animal = require("./animal");

class Gato extends Animal {
    falar() {
        console.log("O gato faz miau!");
    }
}

module.exports = Gato;