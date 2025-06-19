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
          <div class="explore">More Info</div>
          <div class="arrow-right"></div>
        </div>
      </div>
    </div>

    <div id="pop-up" class="modal hidden" >
      <button class="close-aboutUs">&times;</button>
      <h1 class="h1-aboutUs">About Us</h1>
      <p class="p-aboutUs">
        Disini adalah about us
      </p>
    </div>

    <div class="overlay hidden"></div>
`;

// 2. Ambil elemen yang kita butuhkan
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-aboutUs");
const btnOpenModal = document.querySelectorAll(".show-aboutUs");

// 3. Definisi fungsi
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// 4. Event binding
// 4a. Tombol “About us”
btnOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

// 4b. Tombol ✕ dan overlay background
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// 4c. Tutup dengan Escape
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// 5. Jika ingin modalnya langsung tersembunyi di awal,
//    pastikan class="hidden" sudah ada di HTML (sudah kita pakai).
//    Jadi **tidak perlu** memanggil closeModal() lagi di sini.
