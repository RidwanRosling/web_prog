import "./style.css";

// Inject HTML awal
document.querySelector("#app").innerHTML = `
  <nav class="navbar">
    <div class="navbar-brand">
      <a>Wild Voice</a>
    </div>
    <ul class="navbar-links">
      <li><a href="#">Support</a></li>
      <li><a href="#flora-fauna">Species</a></li>
      <li class="show-aboutUs"><a href="#">About us</a></li>
      <li><a id="login" href="http://localhost/web_prog/public/php-login/donate.php">login</a></li>
    </ul>
  </nav>

  <div class="container">
    <div class="sideText">
      <h1>Forest Ranger:<br />Endangered Species of Indonesia</h1>
      <p>Suara alam liar: spesies darat yang terancam punah</p>
      <div class="button-explore">
        <div class="explore">Species</div>
        <div class="arrow-right"></div>
      </div>
    </div>
  </div>

  <div id="pop-up" class="modal hidden"></div>
  <div class="overlay hidden"></div>

  <div class="bacthed-container">
    <div class="container-flora-fauna">
      <h1>Endangered Species</h1>
      <div class="flora-fauna" id="flora-fauna">
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

// Variabel global
let imgData = {};
let ffData = {};

// Ambil data FF.json
fetch("FF.json")
  .then((res) => res.json())
  .then((data) => {
    ffData = data;
  });

// Ambil data img.json & render awal
fetch("img.json")
  .then((res) => res.json())
  .then((data) => {
    imgData = data;
    renderRegion("Sumatra");

    // Region filter listener
    document.querySelectorAll(".btn-filter").forEach((span) => {
      span.addEventListener("click", () => {
        renderRegion(span.dataset.region);
      });
    });
  });

// Render fauna & flora + tombol detail
function renderRegion(regionName) {
  const container = document.querySelector(".card-container");
  container.innerHTML = "";

  const region = imgData[regionName];
  if (!region) return;

  // Fauna
  region.fauna.forEach((fauna) => {
    container.innerHTML += `
      <div class="fauna-card-container-${fauna.id}">
        <img src="${fauna.image}" alt="${fauna.nama}">
        <button 
          class="fauna-btn-detail-${fauna.id}" 
          data-nama="${fauna.nama}" 
          data-region="${regionName}" 
          data-type="fauna"
        >Detail</button>
      </div>
    `;
  });

  // Flora
  region.flora.forEach((flora) => {
    container.innerHTML += `
      <div class="flora-card-container-${flora.id}">
        <img src="${flora.image}" alt="${flora.nama}">
        <button 
          class="flora-btn-detail-${flora.id}" 
          data-nama="${flora.nama}" 
          data-region="${regionName}" 
          data-type="flora"
        >Detail</button>
      </div>
    `;
  });

  // Tambahkan event listener ke semua tombol detail yang punya data-type
  document.querySelectorAll("button[data-type]").forEach((button) => {
    button.addEventListener("click", () => {
      const nama = button.dataset.nama;
      const region = button.dataset.region;
      const type = button.dataset.type;

      console.log("Klik tombol Detail:", { nama, region, type });

      const item = ffData[region]?.[type]?.find((el) => el.nama === nama);
      if (item) {
        console.log("Data ditemukan:", item);
        showDetailPopup(item);
      } else {
        console.warn(
          "Data tidak ditemukan di FF.json untuk:",
          nama,
          region,
          type
        );
        alert("Data tidak ditemukan.");
      }
    });
  });

  // Tampilkan modal popup
  function showDetailPopup(data) {
    const modal = document.querySelector(".modal");
    const overlay = document.querySelector(".overlay");

    modal.innerHTML = `
    <button class="close-aboutUs">&times;</button>
    <h1>${data.nama}</h1>
    <p><strong>Spesies:</strong> ${data.spesies}</p>
    <p><strong>Asal:</strong> ${data.asal}</p>
    <p><strong>Keterangan:</strong> ${data.keterangan}</p>
  `;

    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");

    document
      .querySelector(".close-aboutUs")
      .addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);
  }

  // Tutup modal
  function closeModal() {
    document.querySelector(".modal").classList.add("hidden");
    document.querySelector(".overlay").classList.add("hidden");
  }

  // Scroll navbar style
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    const navbarLinks = document.querySelector(".navbar-links");

    if (window.scrollY > 0) {
      navbar.classList.add("scrolled");
      navbarLinks.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
      navbarLinks.classList.remove("scrolled");
    }
  });
}
