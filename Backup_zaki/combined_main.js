// Import merged styles
import "./combined_style.css";

// Inject main HTML structure (with separate modals)
document.querySelector("#app").innerHTML = `
   <nav class="navbar">
      <div class="navbar-brand">
        <img src="./Backup_zaki/images/Forest_Ranger.PNG" id="logo">
      </div>
      <ul class="navbar-links">
        <li><a href="#">Support</a></li>
        <li class="show-aboutUs"><a href="#">About us</a></li>
        <li><a id="login" href="http://localhost/web_prog/public/php-login/login.php">login</a></li>
      </ul>
    </nav>

    <div class="container">
      <div class="sideText">
        <h1>Forest Ranger:<br />Endangered Species of Indonesia</h1>
        <p>Suara alam liar: spesies darat yang terancam punah</p>
        <div class="button-explore">
          <div class="explore"><a href="#next" id="info-txt">Explore</a></div>
          <div class="arrow-right"></div>
        </div>
      </div>
    </div>

    <div id="about-modal" class="modal hidden"></div>
    <div id="detail-modal" class="modal-detail hidden"></div>
    <div class="overlay hidden"></div>

    <div class="bacthed-container" id="next">
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

let imgData = {};
let ffData = {};

// Load FF.json
fetch("FF.json")
  .then((res) => res.json())
  .then((data) => {
    ffData = data;
  });

// Load img.json
fetch("img.json")
  .then((res) => res.json())
  .then((data) => {
    imgData = data;
    renderRegion("Sumatra");

    document.querySelectorAll(".btn-filter").forEach((span) => {
      span.addEventListener("click", () => {
        renderRegion(span.dataset.region);
      });
    });
  });

function renderRegion(regionName) {
  const container = document.querySelector(".card-container");
  container.innerHTML = "";
  const region = imgData[regionName];
  if (!region) return;

  region.fauna.forEach((fauna) => {
    container.innerHTML += `
      <img src="${fauna.image}" alt="${fauna.nama}" class="fauna-card-${fauna.id}" data-nama="${fauna.nama}" data-region="${regionName}" data-type="fauna">
    `;
  });
  region.flora.forEach((flora) => {
    container.innerHTML += `
      <img src="${flora.image}" alt="${flora.nama}" class="flora-card-${flora.id}" data-nama="${flora.nama}" data-region="${regionName}" data-type="flora">
    `;
  });

  document.querySelectorAll("img[data-type]").forEach((img) => {
    img.addEventListener("click", () => {
      const { nama, region, type } = img.dataset;
      const item = ffData[region]?.[type]?.find((el) => el.nama === nama);
      if (item) showDetailPopup(item);
      else alert("Data tidak ditemukan.");
    });
  });
}

function showDetailPopup(data) {
  const modal = document.querySelector("#detail-modal");
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

  modal.querySelector(".close-aboutUs").addEventListener("click", closeDetailModal);
  overlay.addEventListener("click", closeAllModals);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAllModals();
  });
}

function closeDetailModal() {
  document.querySelector("#detail-modal").classList.add("hidden");
  document.querySelector(".overlay").classList.add("hidden");
}

function closeAllModals() {
  document.querySelectorAll(".modal, .modal-detail").forEach(m => m.classList.add("hidden"));
  document.querySelector(".overlay").classList.add("hidden");
}

// About Us Modal
const aboutModal = document.querySelector("#about-modal");
const overlay = document.querySelector(".overlay");

aboutModal.innerHTML = `
  <button class="close-aboutUs">&times;</button>
  <h1 class="aboutUs-txt" id="aboutUs">About Us</h1>
  <p class="aboutUs-txt" id="p1">Forest Ranger adalah platform digital yang bertujuan meningkatkan kesadaran tentang spesies langka di Indonesia.</p>
  <p class="aboutUs-txt">Kami percaya setiap makhluk memiliki cerita yang layak untuk dibagikan melalui gambar. Misi kami adalah menyuarakan alam, mendukung pelestarian, dan menginspirasi masyarakat untuk melindungi keanekaragaman hayati demi masa depan</p>
  <p class="aboutUs-txt">Melalui pendekatan visual dan edukatif, kami menghubungkan masyarakat dengan alam liar Indonesia dari hutan tropis hingga pegunungan yang menjadi rumah bagi satwa terancam punah. Kami berkomitmen menjadi jembatan antara manusia dan alam, serta mengajak semua orang untuk menjadi bagian dari perubahan positif dalam menjaga kehidupan liar.</p>
  <div class="slider">
    <div class="slide-track">
      <div class="slide"><img src="./Backup_zaki/images/badak sumatera.JPEG" class="slide-img"></div>
      <div class="slide"><img src="./Backup_zaki/images/burung cenderawasih.jpg" class="slide-img"></div>
      <div class="slide"><img src="./Backup_zaki/images/harimau.jpg" class="slide-img"></div>
      <div class="slide"><img src="./Backup_zaki/images/komodo.jpg" class="slide-img"></div>
      <div class="slide"><img src="./Backup_zaki/images/orang utan.JPG" class="slide-img"></div>
      <div class="slide"><img src="./Backup_zaki/images/badak sumatera.JPEG" class="slide-img"></div>
      <div class="slide"><img src="./Backup_zaki/images/burung cenderawasih.jpg" class="slide-img"></div>
      <div class="slide"><img src="./Backup_zaki/images/harimau.jpg" class="slide-img"></div>
      <div class="slide"><img src="./Backup_zaki/images/komodo.jpg" class="slide-img"></div>
      <div class="slide"><img src="./Backup_zaki/images/orang utan.JPG" class="slide-img"></div>
    </div>
  </div>
`;

const btnOpenModal = document.querySelectorAll(".show-aboutUs");
btnOpenModal.forEach((btn) => btn.addEventListener("click", () => {
  aboutModal.classList.remove("hidden");
  overlay.classList.remove("hidden");

  aboutModal.querySelector(".close-aboutUs").addEventListener("click", closeAllModals);
}));
