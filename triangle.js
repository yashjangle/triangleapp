const anglesInput = document.querySelectorAll(".angle-input");
const checkButton = document.querySelector(".check-btn");
const output = document.querySelector(".output");

function calcSumOfAngles(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;
}
function isTriangle() {
  const angleOneInput = Number(anglesInput[0].value);
  const angleTwoInput = Number(anglesInput[1].value);
  const angleThreeInput = Number(anglesInput[2].value);

  if (
    angleOneInput < 0 ||
    angleOneInput === 0 ||
    angleTwoInput < 0 ||
    angleTwoInput === 0 ||
    angleThreeInput < 0 ||
    angleThreeInput === 0
  ) {
    output.innerText = `Please enter valid positive angle.`;
  } else {
    const sumOfAngles = calcSumOfAngles(
      angleOneInput,
      angleTwoInput,
      angleThreeInput
    );
    if (sumOfAngles === 180) {
      output.innerText = `Yay! It is a traingle!`;
    } else {
      output.innerText = "It is not a triangle.";
    }
  }
}

checkButton.addEventListener("click", isTriangle);