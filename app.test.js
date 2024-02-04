const { fromDollarToYen } = require('./app.js')
const { fromEuroToDollar } = require('./app.js')
const { fromYenToPound } = require('./app.js')

test("5 dollar should be 731,30 yen" , () =>{
    expect(fromDollarToYen(5)).toBe(731.31)
})

test("3.5 euro should be 3.75 dollar", () =>{
    expect(fromEuroToDollar(3.5)).toBe(3.75)
})

test("5 yen shoul be 0,02 pounds", () =>{
    expect(fromYenToPound(5)).toBe(0.03)
})