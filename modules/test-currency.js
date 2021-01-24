const Curency = require('./currency');
const canadianDollar = 0.91;

const currency = new Curency(canadianDollar);

console.log(currency.canadianToUs(50));