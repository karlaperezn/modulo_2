import mathExact from "exact-math"

const sum = mathExact.add(789, 34, 250443)
const rest = mathExact.sub(2059, 79)
const mult = mathExact.mul(3.24, 97.856)
const div = mathExact.div(1205, 12.002)

console.log(`
    ${sum}
    ${rest}
    ${mult}
    ${div}
    `)