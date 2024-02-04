let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function sum(a,b){
    return a+ b
}

function fromDollarToYen(dollar){
    let oneDollarToEur = 1/oneEuroIs.USD
    let eur = dollar * oneDollarToEur
    return Number((eur * oneEuroIs.JPY).toFixed(2))
}

function fromEuroToDollar(euro){
    return Number((euro * oneEuroIs.USD).toFixed(2))
}

function fromYenToPound(yen){
    let oneYenToEuro = 1/oneEuroIs.JPY
    let eur = yen * oneYenToEuro
    return Number((eur * oneEuroIs.GBP).toFixed(2))
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }