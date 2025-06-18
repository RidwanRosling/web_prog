import "./style.css";
// import {closeModal, openModal} from "./app.js";

document.querySelector("#app").innerHTML = `
   <nav class="navbar">
      <div class="navbar-brand">
        <a>Wild Voice</a>
      </div>
      <ul class="navbar-links">
        <li><a href="#">Support</a></li>
        <li><a href="#">Species</a></li>
        <li class="show-aboutUs"><a href="#">About us</a></li>
        <li><a id="login" href="#">Login</a></li>
      </ul>
    </nav>

    <!-- Landing Section -->
    <div class="container">
      <div class="sideText">
        <h1>
          Forest Ranger: <br />
          Endangered Species of Indonesia
        </h1>
        <p>Suara alam liar: spesies darat yang terancam punah</p>

        <div class="button-explore">
          <div class="explore">Explore</div>
          <div class="arrow-right"></div>
        </div>
      </div>
    </div>

    <div class="modal hidden">
      <button class="close-aboutUs">&times;</button>
      <h1 class="h1-aboutUs">About Us</h1>
      <p class="p-aboutUs">
        Disini adalah about us
      </p>
    </div>

    <div class="overlay hidden"></div>
`;

// setupCounter(document.querySelector("#counter"));

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModel = document.querySelector(".close-aboutUs");
const btnOpenModal = document.querySelectorAll(".show-aboutUs");

const closeModal = function() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

const openModal = function() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

for(let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener("click", openModal);

btnCloseModel.addEventListener("click", closeModal)

overlay.addEventListener("click", closeModal)

document.querySelector("keydown", function(e) {
  if(e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
})