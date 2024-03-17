const allBtn = document.getElementsByClassName("add-btn");
for (const btn of allBtn) {
  btn.addEventListener("click", function (event) {
    const price = document.getElementById('price').innerText;
    const element = document.getElementsByClassName("add-new");
    const div = document.createElement("div");
    div.classList.add("seat-select");
    const seatCount = convertedId('seat')
    if(seatCount >= 4){
      alert("Limit Over")
      return seatCount;
    }
    const seatLeft = convertedId('total-seat');
    document.getElementById('total-seat').innerText = seatLeft - 1;
    const seat = convertedId("seat");
    document.getElementById("seat").innerText = seat + 1;
    event.target.setAttribute("disabled", false);
    event.target.style.background = "green";
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    p1.innerText = btn.innerText;
    p2.innerText = "economy";
    p3.innerText = price;
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    element[0].appendChild(div);
    updateTotalCost(price);
    updateGrandTotal();
    controlButton()
  
  });
}
const passengerName = document.getElementById('name');
const number = document.getElementById('number');
const email = document.getElementById('email');
const nextButton = document.getElementById('next');
passengerName.addEventListener('input', toggleButton);
number.addEventListener('input', toggleButton);
email.addEventListener('input', toggleButton);
function toggleButton(){
  if(passengerName.value === '' && number.value === '' && email.value === ''){
    nextButton.disabled = true;
  }else{
    nextButton.disabled = false;
  }
}
function updateGrandTotal(status) {
  const totalCost = convertedId("bdt");
  if (status === undefined) {
    document.getElementById("bdt2").innerText = totalCost;
  } else {
    const couponCode = document.getElementById("coupon-code").value;
    const seatCount = convertedId("seat");
    if (couponCode === "NEW15" && seatCount === 4) {
      const discount = totalCost * 0.15;
      document.getElementById("bdt2").innerText = totalCost - discount;
      return;
    
    } else if (couponCode === "Couple 20" && seatCount === 4) {
      const discount = totalCost * 0.2;
      document.getElementById("bdt2").innerText = totalCost - discount;
      return;
    }else if(couponCode === "NEW15" || couponCode === "Couple 20" || seatCount < 4){
      hideElementById("coupon-code-base");
      alert("You have no Discount Buy 4 ticket to get Discount")
      return;
    } 
    else if (couponCode !== "Couple 20" || couponCode !== "NEW15") {
      hideElementById("coupon-code-base");
      alert("Enter a Valid coupon code");
      return;
    }
  }
}

function nextPage() {
  hideElementById("main-page");
  showElementById("last-page");
}
function firstPage() {
  hideElementById("last-page");
  showElementById("main-page");
}
function convertedId(id) {
  {
    const idText = document.getElementById(id).innerText;
    const convertedText = parseInt(idText);
    return convertedText;
  }
}
function updateTotalCost(value) {
  const totalCost = convertedId("bdt");
  const sum = totalCost + parseInt(value);
  document.getElementById("bdt").innerText = sum;
}
function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}
function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

