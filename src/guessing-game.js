class GuessingGame {
    constructor() {
        this.minValue = 0;
        this.maxValue = 0;
    }

    setRange(min, max) {
        this.minValue = min;
        this.maxValue = max;
    }

    guess() {
        this.result = Math.round((this.minValue + this.maxValue) / 2, -1)
        return this.result;
    }

    lower() {
        this.maxValue = this.result;
    }

    greater() {
        this.minValue = this.result;
    }
}

module.exports = GuessingGame;
