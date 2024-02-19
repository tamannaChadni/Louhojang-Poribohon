function mainSection() {
  document
    .getElementById("main-section")
    .scrollIntoView({ behavior: "smooth" });
}

let totalPrice = 0;
let gradTotal = 0;

const seatNumber = document.getElementById("seat-number");

seatNumber.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    // console.log("button was clicked");
    const seatBtn = event.target;

    // showing booked seat details
    const addSeatEl = document.getElementById("add-seat");
    let totalBookedSeat = parseInt(addSeatEl.innerText);
    if (totalBookedSeat > 3) {
      alert("You can not book more than 4 seats");
      return;
    }
    totalBookedSeat++;
    addSeatEl.innerText = totalBookedSeat;

    // disable and change the button color
    seatBtn.classList.add("disabled:bg-lime-300");
    seatBtn.disabled = true;

    // Show remaiing seats
    const availableSeatEl = document.getElementById("seat-available");
    const remainingSeat = availableSeatEl.innerText - 1;
    availableSeatEl.innerText = remainingSeat;

    // const seatName = seatNumber.querySelector("button").innerText;
    // const seatName = document.getElementById("seat-number").innerText;
    // console.log(seatName);

    const classSeat = "Economic class";
    const price = parseInt(550);

    const seatDetails = document.getElementById("seat-details");
    const p = document.createElement("p");
    p.innerText = seatBtn.innerText + " " + classSeat + " " + price;
    seatDetails.appendChild(p);

    // calculate price
    totalPrice += price;
    gradTotal += price;

    document.getElementById("total-price").innerText = totalPrice;
    document.getElementById("grand-price").innerText = gradTotal;
  }
});

const applyBtn = document.getElementById("btn-apply");
applyBtn.addEventListener("click", function () {
  // console.log("clicked");
  const cuponElement = document.getElementById("cupon-field").value;
  // console.log(cuponElement);

  if (cuponElement === 'NEW15') {
    const discountAmount = totalPrice * 0.15;
    const grandPrice = document.getElementById("grand-price");
    const totalAmount = totalPrice - discountAmount;
    grandPrice.innerText = totalAmount;
    document.getElementById("cupon-field").value = "";

    const cuponSection = document.getElementById('cupon-section');
    cuponSection.classList.add('hidden');

  } 
  else if (cuponElement === 'Couple 20') {
    const discountAmount = totalPrice * 0.2;
    const grandPrice = document.getElementById("grand-price");
    const totalAmount = totalPrice - discountAmount;
    grandPrice.innerText = totalAmount;
    document.getElementById("cupon-field").value = "";
  } 
  else {
    alert("Invaild cupon");
    document.getElementById("cupon-field").value = "";
  }
});
