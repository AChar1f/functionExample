//Q1
function greet(greeting) {
    console.log(`${greeting}`)  
}
greet('Hello')

//Q2
function multiplication(numb1, numb2) {
    let ans = numb1 * numb2
    console.log(`${ans}`)
}
multiplication(3, 4)

//Q3
function tableOfFive(numb1) {
    let ans = numb1 * 5
    console.log(`${ans}`)
    return ans
}
tableOfFive(4)

// Return ends the function execution while console.log logs the arguement onto the console.