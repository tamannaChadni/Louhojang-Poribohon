function mainSection() {
  document
    .getElementById("main-section")
    .scrollIntoView({ behavior: "smooth" });
}

// function modal() {
//   const modalBox = document.getElementById("next");
//   modalBox.showModal();

// }
 let serial = 0; 
 let totalPrice = 0;

const seatNumber = document.getElementById("seat-number");

seatNumber.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    console.log("button was clicked");
    // disable and change the button color
    event.target.classList.add("disabled:bg-lime-300");
    event.target.disabled = true;

    const availableSeatEl = document.getElementById("seat-available");
    const remainingSeat = availableSeatEl.innerText - 1;
    availableSeatEl.innerText = remainingSeat;

    const addSeat = document.getElementById("add-seat");
    const bookedSeat = addSeat.innerText;
    const currentSeat = parseInt(bookedSeat);
    const fixSeat = currentSeat + 1;
    addSeat.innerText = fixSeat;


    const table = document.getElementById("table");

    for (let index = 0; index < seatNumber.length; index++) {
        const number = seatNumber[index];

    const row = number.createElement("tr");

    const title = seatNumber.innerText;
    const staticTh = number.createElement('th');
    staticTh.innerText = serial++;
    const dynamicTd = number.createElement("td");
        dynamicTd.textContent = title;

        const staticTd1 = number.createElement("td");
        staticTd1.innerText = "Economic class";

        const staticTd2 = number.createElement("td");
        parseInt(staticTd2.innerText)  = 500;

        row.appendChild(staticTh);
        row.appendChild(dynamicTd);
        row.appendChild(staticTd1);
        row.appendChild(staticTd2);
        table.appendChild(row);
        // console.log(row);
    }

    // console.log(availableSeat);

    // decrease seat count
  }
});
