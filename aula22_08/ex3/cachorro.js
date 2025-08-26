const Animal = require("./animal");

class Cachorro extends Animal {
    falar() {
        console.log("O cachorro faz au au!");
    }
}

module.exports = Cachorro;