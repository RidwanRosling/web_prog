import "./style.css";

document.querySelector("#app").innerHTML = `
  <nav class="navbar">
    <div class="navbar-brand">
      <a>Wild Voice</a>
    </div>
    <ul class="navbar-links">
      <li><a href="#">Support</a></li>
      <li><a href="#">Species</a></li>
      <li class="show-aboutUs"><a href="#">About us</a></li>
      <li><a id="login" href="http://localhost/web_prog/public/php-login/login.php">login</a></li>
    </ul>
  </nav>

  <div class="container">
    <div class="sideText">
      <h1>Forest Ranger:<br />Endangered Species of Indonesia</h1>
      <p>Suara alam liar: spesies darat yang terancam punah</p>
      <div class="button-explore">
        <div class="explore">More Info</div>
        <div class="arrow-right"></div>
      </div>
    </div>
  </div>

  <div id="pop-up" class="modal hidden">
    <button class="close-aboutUs">&times;</button>
    <h1 class="h1-aboutUs">About Us</h1>
    <p class="p-aboutUs">Disini adalah about us</p>
  </div>

  <div class="overlay hidden"></div>

  <div class="bacthed-container">
    <div class="container-flora-fauna">
      <h1>Endangered Species</h1>
      <div class="flora-fauna">
        <span data-region="Sumatra" class="btn-filter">Sumatra</span>
        <span data-region="Kalimantan" class="btn-filter">Kalimantan</span>
        <span data-region="Jawa" class="btn-filter">Jawa</span>
        <span data-region="Sulawesi" class="btn-filter">Sulawesi</span>
        <span data-region="Papua" class="btn-filter">Papua</span>
      </div>
    </div>

    <div class="card-container"></div>
  </div>
`;

let allData = {};

fetch("img.json")
  .then((response) => response.json())
  .then((data) => {
    allData = data;
    renderRegion("Sumatra");

    const spans = document.querySelectorAll(".btn-filter");
    spans.forEach((span) => {
      span.addEventListener("click", () => {
        console.log(span.dataset.region); // ➜ "Sumatra"
        const region = span.dataset.region;
        renderRegion(region);
      });
    });
  })
  .catch((error) => console.error("Gagal memuat JSON:", error));

function renderRegion(regionName) {
  const container = document.querySelector(".card-container");
  container.innerHTML = "";

  const region = allData[regionName];
  if (!region) return;

  region.fauna.forEach((fauna) => {
    container.innerHTML += `
      <img src="${fauna.image}" alt="${fauna.nama}" class="fauna-card-${fauna.id}">
    `;
  });

  region.flora.forEach((flora) => {
    container.innerHTML += `
      <img src="${flora.image}" alt="${flora.nama}" class="flora-card-${flora.id}">
    `;
  });
}

// Modal logic
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-aboutUs");
const btnOpenModal = document.querySelectorAll(".show-aboutUs");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnOpenModal.forEach((btn) => btn.addEventListener("click", openModal));
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
