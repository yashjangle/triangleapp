const sides = document.querySelectorAll(".side-input")
const checkBtn = document.querySelector(".check-btn")
const outputEl = document.querySelector(".output")

function calculateAreaOfTriangle(a,b) {
    const calcBaseHeight = a * b
    return calcBaseHeight

}

function areaOfTriangle() {
    const calcBaseHeight = calculateAreaOfTriangle(Number(sides[0].value),Number(sides[1].value))
    const Area = (1/2) * calcBaseHeight
    outputEl.innerText = "The area of triangle is"+ Area
}

checkBtn.addEventListener("click", areaOfTriangle)