function calculateSum(num1, num2) {
  return num1 + num2;
}
document
  .getElementById("calculateButton")
  .addEventListener("click", function () {
    const number1 = parseFloat(document.getElementById("number1").value);
    const number2 = parseFloat(document.getElementById("number2").value);

    if (isNaN(number1) || isNaN(number2)) {
      document.getElementById("result").textContent =
        "Please enter valid numbers!";
      document.getElementById("result").style.color = "red";
      return;
    }

    const sum = calculateSum(number1, number2);
    document.getElementById("result").textContent = `The sum is: ${sum}`;
    document.getElementById("result").style.color = "#007bff";
  });
