class Currency {
    constructor(canadianDollar) {
        this.canadianDollar = canadianDollar;
    }

    roundTwoDecimals(amount) {
        return Math.round(amount * 100) / 100;
    }

    canadianToUs(canadian) {
        return this.roundTwoDecimals(canadian * this.canadianDollar);
    }

    UsToCanadian(us) {
        return this.roundTwoDecimals(us / this.canadianDollar);
    }



}

module.exports = exports = Currency;