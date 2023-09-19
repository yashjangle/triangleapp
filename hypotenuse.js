const sides = document.querySelectorAll(".side-input")
const checkBtn = document.querySelector(".check-btn")
const outputEl = document.querySelector(".check-btn")

function calculateSumOfSquares(a,b) {
    const sumOfSquares = a*a + b*b
    return sumOfSquares

}

function calculateHypotenuse() {
    const sumOfSquares = calculateSumOfSquares(Number(sides[0].value),Number(sides[1].value))
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares)
    outputEl.innerText = "The length of Hypotenuse is" + lengthOfHypotenuse

}

checkBtn.addEventListener("click", calculateHypotenuse)