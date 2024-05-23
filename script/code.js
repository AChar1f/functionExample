function greet(greeting) {
    console.log(`${greeting}`)  
}
greet('Hello')

function multiplication(numb1, numb2) {
    let ans = numb1 * numb2
    console.log(`${ans}`)
}
multiplication(3, 4)

function tableOfFive(numb1) {
    let ans = numb1 * 5
    console.log(`${ans}`)
    return ans
}
tableOfFive(4)