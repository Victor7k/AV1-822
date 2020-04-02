const crypto = require('crypto');

module.exports = function generateUniqueId() {
    return crypto.randomBytes(4).toString('HEX');
}

// O Teste Unitario testa uma função que executa uma coisa muito especifica, algo bem isolado.