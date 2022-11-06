function calculateBMI(height, weight) {
  height = height / 100;
  let result = weight / (height * height);
  return result.toFixed(2);
}
function clearResult() {
  document.querySelector("#result").innerHTML = "";
}

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  clearResult();

  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;

  if (height.trim() === "" || weight.trim() === "") {
    alert("همه ورودی ها رو پرکنید ");
    return false;
  }
  height = parseInt(height);
  weight = parseInt(weight);
  if (isNaN(height) || isNaN(weight)) {
    alert("قد و وزن باید عدد باشد");
    return false;
  }
  if (height < 0 || weight < 0) {
    alert("قد و وزن باید بزرگتر از صفر باشد");
    return false;
  }
  document.querySelector("#result").innerHTML = calculateBMI(height, weight);
});
document.querySelector("input#height").addEventListener("keydown", clearResult);

document.querySelector("input#weight").addEventListener("keydown", clearResult);
