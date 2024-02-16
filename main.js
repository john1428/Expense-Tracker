import "./style.css";

const root = document.querySelector("#app");

root.textContent = "EXPENSE TRACKER";

let textinput = document.querySelector(".input-text");
let amountinput = document.querySelector(".input-amount");
let form = document.querySelector(".add-form");
let income = document.querySelector(".positive-income");
let expense = document.querySelector(".negative-income");
let total_amount = document.querySelector(".total_amount");

let historyList = document.querySelector(".inside-history");

let incomeVal = 0;
let expenseVal = 0;
let totalamount = 0;

textinput.addEventListener("change", (e) => {
  textinput = e.target.value;
});

amountinput.addEventListener("change", (e) => {
  amountinput = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("form clicked");

  const output_amount = convertStringToNumber(amountinput);

  if (textinput.value == "" || amountinput == "") {
    alert("form empty");
    return;
  }
  console.log(typeof amountinput);
  if (output_amount == null) {
    console.log(amountinput.value);
    alert("form Invalid");
    return;
  }

  if (amountinput > 0) {
    incomeVal += output_amount;
    income.textContent = incomeVal;
  } else {
    expenseVal += output_amount;
    expense.textContent = expenseVal;
  }

  totalamount += output_amount;
  total_amount.textContent = totalamount;

  let historyText = document.createElement("p");
  historyText.textContent = textinput;
  let final_a = "";
  if (amountinput > 0) {
    final_a = "+" + amountinput.toString();
  } else {
    final_a = amountinput.toString();
  }

  let historyAmount = document.createElement("p");
  historyAmount.textContent = final_a;

  let historyDiv = document.createElement("div");
  historyDiv.classList.add("inside-history-div");
  historyDiv.appendChild(historyText);
  historyDiv.appendChild(historyAmount);
  historyList.appendChild(historyDiv);

  // income.textContent = "";
  textinput.value = "";
  amountinput.value = "";
  // expense.textContent = 0;
});

function convertStringToNumber(str) {
  // Use parseInt with radix 10 to convert to a decimal number
  const number = parseInt(str);

  // Check if the conversion was successful and is not NaN
  if (!isNaN(number)) {
    return number;
  } else {
    console.log(`Unable to convert '${str}' to a number.`);
    return null; // or any other fallback value
  }
}
