const moviesList = [
  { movieName: "Flash", price: 7 },
  { movieName: "Spiderman", price: 5 },
  { movieName: "Batman", price: 4 },
];

const selectMovieEl = document.getElementById("selectMovie");
const allSeatCont = document.querySelectorAll("#seatCont .seat");
const selectedSeatsHolderEl = document.getElementById("selectedSeatsHolder");
const moviePriceEl = document.getElementById("moviePrice");
const cancelBtnEl = document.getElementById("cancelBtn");
const proceedBtnEl = document.getElementById("proceedBtn");

let moviePrice = 7;
let currentMovieName = "Flash";
let takenSeats = [];

// Populate movie dropdown
moviesList.forEach((movie) => {
  const optionEl = document.createElement("option");

  optionEl.value = `${movie.movieName} $${movie.price}`;
  optionEl.textContent = `${movie.movieName} $${movie.price}`;

  selectMovieEl.appendChild(optionEl);
});

// Default movie
document.getElementById("movieName").textContent = "Flash";
moviePriceEl.textContent = "$ 7";
document.getElementById("totalPrice").textContent = "$ 0";

// Add seat IDs
let initialSeatValue = 0;

allSeatCont.forEach((seat) => {
  seat.setAttribute("data-seatid", ++initialSeatValue);
});

// Get only available seats
const seatContEl = document.querySelectorAll(
  "#seatCont .seat:not(.occupied)"
);

// Movie selection
selectMovieEl.addEventListener("change", (e) => {
  const movieData = e.target.value.split("$");

  const movieName = movieData[0].trim();
  const price = Number(movieData[1].trim());

  currentMovieName = movieName;
  moviePrice = price;

  updateMovieName(movieName, price);
  updatePrice(moviePrice, takenSeats.length);
});

// Seat selection
seatContEl.forEach((seat) => {
  seat.addEventListener("click", () => {
    const isSelected = seat.classList.contains("selected");
    const seatId = Number(seat.dataset.seatid);

    if (!isSelected) {
      seat.classList.add("selected");
      takenSeats.push(seatId);
    } else {
      seat.classList.remove("selected");

      takenSeats = takenSeats.filter((id) => id !== seatId);
    }

    updateSeats();
    updatePrice(moviePrice, takenSeats.length);
  });
});

// Update selected seats section
function updateSeats() {
  selectedSeatsHolderEl.innerHTML = "";

  takenSeats.forEach((seat) => {
    const seatHolder = document.createElement("div");

    seatHolder.classList.add("selectedSeat");
    seatHolder.textContent = seat;

    selectedSeatsHolderEl.appendChild(seatHolder);
  });

  if (takenSeats.length === 0) {
    const spanEl = document.createElement("span");

    spanEl.classList.add("noSelected");
    spanEl.textContent = "NO SEAT SELECTED";

    selectedSeatsHolderEl.appendChild(spanEl);
  }

  seatCount();
}

// Update seat count
function seatCount() {
  const numberOfSeatEl = document.getElementById("numberOfSeat");

  numberOfSeatEl.textContent = takenSeats.length;
}

// Update movie name and price
function updateMovieName(movieName, price) {
  const movieNameEl = document.getElementById("movieName");

  movieNameEl.textContent = movieName;
  moviePriceEl.textContent = `$ ${price}`;
}

// Update total price
function updatePrice(price, seats) {
  const totalPriceEl = document.getElementById("totalPrice");

  const total = price * seats;

  totalPriceEl.textContent = `$ ${total}`;
}

// Cancel button
cancelBtnEl.addEventListener("click", () => {
  cancelSeats();
});

function cancelSeats() {
  seatContEl.forEach((seat) => {
    seat.classList.remove("selected");
  });

  takenSeats = [];

  updatePrice(moviePrice, 0);
  updateSeats();
}

// Proceed / Book button
proceedBtnEl.addEventListener("click", () => {
  if (takenSeats.length === 0) {
    alert("Oops no seat Selected");
    return;
  }

  alert("Yayy! Your Seats have been booked");

  bookSeats();
});

// Book selected seats
function bookSeats() {
  seatContEl.forEach((seat) => {
    if (seat.classList.contains("selected")) {
      seat.classList.remove("selected");
      seat.classList.add("occupied");
    }
  });

  takenSeats = [];

  updatePrice(moviePrice, 0);
  updateSeats();
}